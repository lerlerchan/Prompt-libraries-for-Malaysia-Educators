// Main JavaScript for Malaysian Teachers Prompt Library

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    initializeFilters();
    renderAllPrompts();
    setupSearch();
    setupSmoothScroll();
});

// Initialize filter buttons
function initializeFilters() {
    const filterContainer = document.getElementById('filterButtons');
    
    // Add category filter buttons
    promptsData.categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-category', category.id);
        button.innerHTML = `<i class="${category.icon} fas"></i> ${category.name}`;
        button.addEventListener('click', () => filterByCategory(category.id));
        filterContainer.appendChild(button);
    });
}

// Render all prompts
function renderAllPrompts() {
    const container = document.getElementById('promptsContainer');
    container.innerHTML = '';
    
    promptsData.categories.forEach(category => {
        const categorySection = createCategorySection(category);
        container.appendChild(categorySection);
    });
}

// Create category section
function createCategorySection(category) {
    const section = document.createElement('div');
    section.className = 'category-section';
    section.setAttribute('data-category-id', category.id);
    
    section.innerHTML = `
        <div class="category-header">
            <i class="${category.icon} fas"></i>
            <h2>${category.name}</h2>
        </div>
        <p class="category-description">${category.description}</p>
        <div class="prompts-grid" id="grid-${category.id}"></div>
    `;
    
    const grid = section.querySelector(`#grid-${category.id}`);
    category.prompts.forEach(prompt => {
        const card = createPromptCard(prompt, category.id);
        grid.appendChild(card);
    });
    
    return section;
}

// Create prompt card
function createPromptCard(prompt, categoryId) {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.setAttribute('data-prompt-title', prompt.title.toLowerCase());
    card.setAttribute('data-prompt-tags', prompt.tags.join(' ').toLowerCase());
    card.setAttribute('data-category', categoryId);

    const tags = prompt.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Build image section if image exists
    const imageSection = prompt.image ? `
        <div class="prompt-image">
            <img src="${prompt.image}" alt="${prompt.title}" onerror="this.style.display='none'">
            ${prompt.imageCredit ? `<p class="image-credit">${prompt.imageCredit}</p>` : ''}
        </div>
    ` : '';

    card.innerHTML = `
        ${imageSection}
        <div class="prompt-header">
            <h3 class="prompt-title">${prompt.title}</h3>
        </div>
        <div class="prompt-tags">${tags}</div>
        <p class="prompt-description">${prompt.description}</p>
        <div class="prompt-content">${escapeHtml(prompt.prompt.substring(0, 200))}...</div>
        <div class="prompt-actions">
            <button class="copy-btn" onclick="copyPrompt(this)">
                <i class="fas fa-copy"></i> Copy Prompt
            </button>
            <button class="view-btn" onclick="viewFullPrompt(this)">
                <i class="fas fa-eye"></i> View Full
            </button>
        </div>
    `;

    // Store full prompt in data attribute
    card.setAttribute('data-full-prompt', prompt.prompt);

    return card;
}

// Copy prompt to clipboard
function copyPrompt(button) {
    const card = button.closest('.prompt-card');
    const fullPrompt = card.getAttribute('data-full-prompt');
    
    navigator.clipboard.writeText(fullPrompt).then(() => {
        showNotification('Prompt copied to clipboard!');
        
        // Change button text temporarily
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        showNotification('Failed to copy. Please try again.', 'error');
    });
}

// View full prompt in modal
function viewFullPrompt(button) {
    const card = button.closest('.prompt-card');
    const fullPrompt = card.getAttribute('data-full-prompt');
    const title = card.querySelector('.prompt-title').textContent;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="modal-close" onclick="closeModal(this)">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <pre class="modal-prompt">${escapeHtml(fullPrompt)}</pre>
            </div>
            <div class="modal-footer">
                <button class="copy-btn" onclick="copyFromModal(this)">
                    <i class="fas fa-copy"></i> Copy Prompt
                </button>
                <button class="view-btn" onclick="closeModal(this)">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.querySelector('.modal-close'));
        }
    });
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal(button) {
    const modal = button.closest('.modal');
    modal.remove();
    document.body.style.overflow = '';
}

// Copy from modal
function copyFromModal(button) {
    const modal = button.closest('.modal');
    const promptText = modal.querySelector('.modal-prompt').textContent;
    
    navigator.clipboard.writeText(promptText).then(() => {
        showNotification('Prompt copied to clipboard!');
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-copy"></i> Copy Prompt';
            button.style.background = '';
        }, 2000);
    });
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const icon = notification.querySelector('i');
    const span = notification.querySelector('span');
    
    span.textContent = message;
    
    if (type === 'error') {
        notification.style.background = '#ef4444';
        icon.className = 'fas fa-exclamation-circle';
    } else {
        notification.style.background = '#10b981';
        icon.className = 'fas fa-check-circle';
    }
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Filter by category
function filterByCategory(categoryId) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categorySections = document.querySelectorAll('.category-section');
    
    // Update active button
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-category') === categoryId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Show/hide categories
    if (categoryId === 'all') {
        categorySections.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        categorySections.forEach(section => {
            if (section.getAttribute('data-category-id') === categoryId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
    
    // Clear search
    document.getElementById('searchInput').value = '';
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', debounce(function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Show all prompts
            document.querySelectorAll('.prompt-card').forEach(card => {
                card.style.display = 'block';
            });
            
            // Show all category sections
            document.querySelectorAll('.category-section').forEach(section => {
                section.style.display = 'block';
            });
            
            return;
        }
        
        // Reset filter to "All"
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.getAttribute('data-category') === 'all') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Search through prompts
        let foundCount = 0;
        document.querySelectorAll('.category-section').forEach(section => {
            let categoryHasResults = false;
            
            section.querySelectorAll('.prompt-card').forEach(card => {
                const title = card.getAttribute('data-prompt-title');
                const tags = card.getAttribute('data-prompt-tags');
                const description = card.querySelector('.prompt-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || 
                    tags.includes(searchTerm) || 
                    description.includes(searchTerm)) {
                    card.style.display = 'block';
                    categoryHasResults = true;
                    foundCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show/hide category section based on results
            section.style.display = categoryHasResults ? 'block' : 'none';
        });
        
        if (foundCount === 0) {
            showNotification(`No results found for "${searchTerm}"`, 'error');
        }
    }, 300));
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Setup smooth scrolling
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add modal styles dynamically
const modalStyles = `
<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
}

.modal-content {
    background: white;
    border-radius: 0.75rem;
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
}

.modal-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #1e293b;
}

.modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #64748b;
    cursor: pointer;
    padding: 0.5rem;
    transition: color 0.3s;
}

.modal-close:hover {
    color: #1e293b;
}

.modal-body {
    padding: 1.5rem;
    overflow-y: auto;
    flex: 1;
}

.modal-prompt {
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border-left: 4px solid #2563eb;
    font-family: 'Courier New', monospace;
    font-size: 0.95rem;
    line-height: 1.8;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: #1e293b;
    margin: 0;
}

.modal-footer {
    padding: 1.5rem;
    border-top: 1px solid #e2e8f0;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

@media (max-width: 768px) {
    .modal {
        padding: 10px;
    }
    
    .modal-content {
        max-height: 95vh;
    }
    
    .modal-header h2 {
        font-size: 1.125rem;
    }
    
    .modal-footer {
        flex-direction: column;
    }
    
    .modal-footer button {
        width: 100%;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles);