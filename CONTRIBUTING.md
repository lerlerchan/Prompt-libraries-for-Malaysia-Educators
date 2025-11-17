# Contributing to Malaysian Teachers AI Prompt Library

First off, thank you for considering contributing to this project! 🎉

Malaysian teachers like you make this resource valuable. Your classroom experience and insights help fellow educators across the nation.

## 🌟 Ways to Contribute

### 1. Add New Prompts
Share prompts that have worked well in your teaching practice.

### 2. Improve Existing Prompts
Enhance clarity, add examples, or adapt for different contexts.

### 3. Translations
Help translate prompts to Bahasa Melayu or Chinese.

### 4. Fix Bugs
Report or fix issues you encounter.

### 5. Improve Documentation
Help us make instructions clearer.

### 6. Share Feedback
Tell us what's working and what's not.

## 📝 How to Add a New Prompt

### Method 1: Simple (GitHub Interface)

1. **Fork the Repository**
   - Click the "Fork" button at the top of this page

2. **Edit the Prompts File**
   - Navigate to `prompts-data.js`
   - Click the pencil icon (Edit this file)

3. **Add Your Prompt**
   - Find the appropriate category
   - Add your prompt following this format:

```javascript
{
    title: "Your Prompt Title",
    description: "Brief description of what this prompt does (1-2 sentences)",
    tags: ["Tag1", "Tag2", "Tag3"],
    prompt: `Your full prompt text here.
    
Use clear instructions.
Include [Bracketed Fields] for customization.
Multiple lines are fine.
Make it detailed and specific.`
}
```

4. **Submit Pull Request**
   - Write a clear commit message: "Add: [Your Prompt Title]"
   - Click "Propose changes"
   - Click "Create pull request"
   - Add description of your prompt and why it's useful

### Method 2: Advanced (Local Development)

1. **Fork and Clone**
```bash
git clone https://github.com/YOUR-USERNAME/malaysia-teacher-prompts.git
cd malaysia-teacher-prompts
```

2. **Create a Branch**
```bash
git checkout -b add-new-prompt-name
```

3. **Edit `prompts-data.js`**
   - Add your prompt in the appropriate category
   - Test locally by opening `index.html` in browser

4. **Commit and Push**
```bash
git add prompts-data.js
git commit -m "Add: [Prompt Name] for [Subject/Category]"
git push origin add-new-prompt-name
```

5. **Create Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Fill in the description

## ✅ Prompt Quality Guidelines

### Good Prompts Should:

✅ **Be Specific to Malaysian Context**
- Reference KSSR/KSSM curriculum
- Use Malaysian examples (RM, local locations, cultural references)
- Consider typical Malaysian classroom scenarios

✅ **Be Well-Structured**
- Include clear sections/steps
- Use numbered lists or bullet points
- Provide examples where helpful

✅ **Include Customizable Fields**
- Use square brackets: [Grade Level], [Topic], [Subject]
- Make it easy for teachers to adapt

✅ **Provide Clear Instructions**
- Specify what the AI should include
- Define the format or structure expected
- Include success criteria

✅ **Be Tested**
- Have you used this prompt yourself?
- Did it produce useful results?
- Does it work with different AI tools?

✅ **Include Context**
- Who is this for? (Primary/Secondary)
- What subject or situation?
- What problem does it solve?

### Example of a Good Prompt:

```javascript
{
    title: "KSSR Science Experiment Plan",
    description: "Design hands-on science experiments using locally available materials suitable for Malaysian primary schools",
    tags: ["Science", "KSSR", "Experiment", "Hands-on"],
    prompt: `Create a hands-on science experiment for Year [Grade] on [Science Concept].

Requirements:
1. Learning objectives aligned with KSSR standards
2. Materials: Use affordable, locally available items in Malaysia
3. Step-by-step procedure (include safety precautions)
4. Observation worksheet for students
5. KBAT questions for discussion
6. Real-world applications relevant to Malaysian context

Format:
- Duration: 40-60 minutes
- Group size: 4-5 students
- Include differentiation for mixed abilities
- Provide teacher notes and expected outcomes`
}
```

## 🏷️ Tagging Guidelines

Use relevant tags to help teachers find prompts:

**Subject Tags:**
- Mathematics, Science, English, Bahasa Melayu, Sejarah, etc.

**Level Tags:**
- KSSR, KSSM, Primary, Secondary, Preschool
- Year 1-6, Form 1-5

**Skill Tags:**
- HOTS, KBAT, Assessment, Planning, Differentiation

**Type Tags:**
- Lesson Plan, Worksheet, Activity, Rubric, Communication

**Special Tags:**
- Special Needs, ESL, Gifted, Technology, Project-Based

## 📂 Adding a New Category

Want to add an entirely new category? Great!

1. **Propose the Category**
   - Open an issue first to discuss
   - Explain why it's needed
   - Suggest at least 3-5 prompts for it

2. **Format for New Category**
```javascript
{
    id: "your-category-id",
    name: "Category Name",
    icon: "fa-icon-name", // Font Awesome icon
    description: "Brief description of this category",
    prompts: [
        // Your prompts here
    ]
}
```

## 🌐 Translation Guidelines

### Translating to Bahasa Melayu:

- Translate naturally, not word-for-word
- Keep educational terminology accurate
- Maintain the prompt structure
- Use formal language appropriate for teachers

### Translating to Chinese:

- Use Simplified Chinese (简体中文)
- Keep Malaysian context
- Maintain clarity and formality

### Where to Add Translations:

Create separate files:
- `index-bm.html` for Bahasa Melayu
- `index-zh.html` for Chinese
- `prompts-data-bm.js` and `prompts-data-zh.js`

## 🐛 Reporting Bugs

Found a bug? Please open an issue with:

1. **Title**: Brief description of the bug
2. **Description**:
   - What happened?
   - What did you expect?
   - Steps to reproduce
3. **Environment**:
   - Browser and version
   - Device (desktop/mobile)
   - Screenshots if relevant

## 💡 Suggesting Enhancements

Have ideas? Open an issue with:

1. **Title**: Feature request: [Your idea]
2. **Description**:
   - What problem does it solve?
   - How would it work?
   - Why is it valuable for teachers?

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Expected Behavior

- Be respectful and considerate
- Welcome newcomers warmly
- Accept constructive criticism gracefully
- Focus on what's best for the community

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Publishing others' private information
- Unprofessional conduct

## ⚖️ Legal

### Content License

By contributing, you agree that your contributions will be licensed under the MIT License.

### Content Ownership

- You retain ownership of your contributions
- You grant us permission to use and distribute them
- Don't submit copyrighted material you don't own

### AI-Generated Content

- If you used AI to create/improve your prompt, that's fine!
- Ensure the prompt is tested and works well
- You're responsible for the quality

## ❓ Questions?

Not sure about something? 

- 💬 [Open a discussion](https://github.com/yourusername/malaysia-teacher-prompts/discussions)
- 📧 Email: your-email@example.com
- 🐛 [Open an issue](https://github.com/yourusername/malaysia-teacher-prompts/issues)

## 🎯 First Time Contributing?

Welcome! Here's a simple first contribution:

1. Find a typo or unclear instruction
2. Fix it
3. Submit a pull request
4. Celebrate your open-source contribution! 🎉

Don't be intimidated - we're all learning together!

## 🙏 Thank You!

Every contribution, no matter how small, makes a difference to Malaysian teachers and students.

**Happy Contributing!** 💙

---

*Last updated: November 2024*