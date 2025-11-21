# 🚀 Setup & Deployment Guide

This guide will help you set up and deploy the Malaysian Teachers Prompt Library on GitHub Pages.

## 📋 Prerequisites

- A GitHub account
- Basic understanding of Git (optional but helpful)
- Text editor (VS Code, Sublime Text, or even GitHub's web editor)

## 🎯 Quick Setup (5 Minutes)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Repository settings:
   - **Name**: `malaysia-teacher-prompts` (or your choice)
   - **Description**: "AI Prompt Library for Malaysian Teachers"
   - **Public** (required for free GitHub Pages)
   - ✅ Add a README file
   - **License**: MIT License
4. Click "Create repository"

### Step 2: Upload Files

**Method A: GitHub Web Interface (Easiest)**

1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `prompts-data.js`
   - `README.md`
   - `CONTRIBUTING.md`
   - `LICENSE`
3. Write commit message: "Initial commit: Add prompt library files"
4. Click "Commit changes"

**Method B: Git Command Line**

```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/malaysia-teacher-prompts.git
cd malaysia-teacher-prompts

# Copy all the files to this directory

# Add and commit
git add .
git commit -m "Initial commit: Add prompt library files"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top right)
3. Click "Pages" (left sidebar)
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://YOUR-USERNAME.github.io/malaysia-teacher-prompts/`

🎉 **Done!** Your prompt library is now live!

## ⚙️ Customization

### Update GitHub Repository Link

In all files, replace:
```
https://github.com/yourusername/malaysia-teacher-prompts
```

With your actual GitHub URL:
```
https://github.com/YOUR-USERNAME/YOUR-REPO-NAME
```

**Files to update:**
- `index.html` (footer section, contribute section)
- `README.md` (all links)
- `CONTRIBUTING.md` (all links)

### Update Contact Information

In `index.html`, update:
```html
<a href="mailto:contact@example.com">Contact</a>
```

With your email:
```html
<a href="mailto:your-email@gmail.com">Contact</a>
```

### Add Your Name/Organization

In `index.html` footer:
```html
<p>&copy; 2024 Malaysian Teachers Prompt Library</p>
```

You can change to:
```html
<p>&copy; 2024 [Your Name/Organization]</p>
```

## 🎨 Customizing the Design

### Change Colors

Edit `styles.css` at the top:

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --secondary-color: #10b981;    /* Green color */
    --accent-color: #f59e0b;       /* Orange accent */
    /* Change these to your preferred colors */
}
```

### Change Fonts

In `styles.css`, update the font-family:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Modify Hero Section

Edit the gradient in `styles.css`:

```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Change these color codes */
}
```

## 📝 Adding More Prompts

### Edit prompts-data.js

1. Open `prompts-data.js`
2. Find the category where you want to add a prompt
3. Add your prompt following this structure:

```javascript
{
    title: "Your Prompt Title",
    description: "Brief description",
    tags: ["Tag1", "Tag2", "Tag3"],
    prompt: `Your full prompt text here.

Include instructions.
Use [Brackets] for custom fields.`
}
```

4. Save the file
5. Commit and push to GitHub
6. Site updates automatically in 1-2 minutes!

### Adding a New Category

In `prompts-data.js`, add a new category object:

```javascript
{
    id: "new-category-id",
    name: "New Category Name",
    icon: "fa-icon-name",  // Find icons at fontawesome.com
    description: "Description of this category",
    prompts: [
        // Add prompts here
    ]
}
```

## 🌐 Adding Multiple Languages

### Create Language Versions

1. **Duplicate files:**
   - Copy `index.html` → `index-bm.html` (Bahasa Melayu)
   - Copy `index.html` → `index-zh.html` (Chinese)
   - Copy `prompts-data.js` → `prompts-data-bm.js`
   - Copy `prompts-data.js` → `prompts-data-zh.js`

2. **Translate content in new files**

3. **Add language switcher in header:**

```html
<div class="language-switcher">
    <a href="index.html">English</a>
    <a href="index-bm.html">Bahasa Melayu</a>
    <a href="index-zh.html">中文</a>
</div>
```

4. **Add CSS for language switcher:**

```css
.language-switcher {
    display: flex;
    gap: 1rem;
}

.language-switcher a {
    padding: 0.5rem 1rem;
    background: var(--bg-color);
    border-radius: 0.5rem;
    text-decoration: none;
}
```

## 🔧 Troubleshooting

### Site Not Loading?

1. Check GitHub Pages is enabled in Settings → Pages
2. Ensure branch is set to `main` and folder is `/ (root)`
3. Wait 2-3 minutes for deployment
4. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Prompts Not Showing?

1. Check `prompts-data.js` for syntax errors
2. Open browser console (F12) to see JavaScript errors
3. Ensure all curly braces `{}` and square brackets `[]` are properly closed
4. Check commas between prompts

### Copy Button Not Working?

1. HTTPS is required for clipboard API
2. GitHub Pages automatically uses HTTPS
3. Test on the live site, not local file://
4. Try a different browser

### Styling Issues?

1. Check `styles.css` is properly linked in `index.html`
2. Verify no CSS syntax errors
3. Clear browser cache
4. Inspect element (F12) to debug

## 📊 Adding Analytics (Optional)

### Google Analytics

1. Create Google Analytics account
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔐 Custom Domain (Optional)

Want to use your own domain instead of github.io?

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In your repository, create a file named `CNAME`
3. Add your domain name (one line): `www.yoursite.com`
4. In your domain registrar, add these DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```
5. Wait 24-48 hours for DNS propagation

## 🔄 Keeping Your Site Updated

### Regular Updates

1. Add new prompts to `prompts-data.js`
2. Commit and push changes
3. GitHub automatically rebuilds your site

### Accepting Contributions

1. Review pull requests from contributors
2. Merge good submissions
3. Site updates automatically

## 💾 Backup Your Data

Regularly backup your repository:

```bash
git clone https://github.com/YOUR-USERNAME/malaysia-teacher-prompts.git backup-folder
```

Or download as ZIP from GitHub:
- Click "Code" button → "Download ZIP"

## 📱 Testing on Mobile

1. Use Chrome DevTools (F12 → Toggle device toolbar)
2. Test on actual mobile devices
3. Check responsive breakpoints
4. Ensure copy button works on mobile

## 🎓 Learning Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML/CSS Tutorial](https://www.w3schools.com)
- [JavaScript Basics](https://javascript.info)
- [Git Tutorial](https://git-scm.com/book/en/v2)

## ❓ Need Help?

- 📖 Check [README.md](README.md)
- 🤝 See [CONTRIBUTING.md](CONTRIBUTING.md)
- 💬 Open a [GitHub Discussion](https://github.com/YOUR-USERNAME/malaysia-teacher-prompts/discussions)
- 🐛 Report [Issues](https://github.com/YOUR-USERNAME/malaysia-teacher-prompts/issues)

---

**Happy Building!** 🎉

*Created with ❤️ for Malaysian teachers*