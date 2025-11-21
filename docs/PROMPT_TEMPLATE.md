# Prompt Template

Use this template when contributing a new prompt to the library.

## Basic Information

**Prompt Title:** [Give your prompt a clear, descriptive title]

**Category:** [Choose: lesson-planning, assessment, special-education, communication, stem, english-language, classroom-management, digital-tools]

**Description:** [Brief 1-2 sentence description of what this prompt does]

**Tags:** [List 3-5 relevant tags separated by commas]

**Grade Level:** [Primary/Secondary/Both, Year/Form levels]

**Subject:** [Subject area if applicable]

## Prompt Text

```
[Paste your complete prompt here]

Guidelines for writing:
- Use clear, structured formatting
- Include numbered steps or bullet points
- Use [Bracketed Fields] for customization
- Be specific about expected output
- Include examples where helpful
- Reference Malaysian context (KSSR/KSSM, RM, local examples)
- Specify format (table, list, paragraph, etc.)
- Include success criteria
```

## Testing

**Have you tested this prompt?** [Yes/No]

**Which AI tools did you test it with?** [ChatGPT, Claude, Gemini, etc.]

**Did it produce useful results?** [Yes/No - describe briefly]

## Example Usage

**Example Input:**
```
[Show an example of how you filled in the bracketed fields]
```

**Example Output:**
```
[Paste a sample output or describe what you got]
```

## Additional Notes

[Any other information that would help users:]
- Tips for best results
- Common modifications
- When to use this prompt
- What makes it effective
- Related prompts

---

## Code Format for prompts-data.js

Once approved, your prompt will be added in this format:

```javascript
{
    title: "Your Prompt Title Here",
    description: "Brief description of what this prompt does (1-2 sentences)",
    tags: ["Tag1", "Tag2", "Tag3"],
    prompt: `Your full prompt text here.

Can span multiple lines.
Use clear formatting.
Include [Bracketed] customization fields.`
}
```

---

## Submission Checklist

Before submitting your prompt, make sure:

- [ ] Title is clear and descriptive
- [ ] Description explains the purpose
- [ ] Tags are relevant and accurate
- [ ] Prompt uses [Brackets] for customization
- [ ] Prompt is specific to Malaysian education context
- [ ] You've tested it with at least one AI tool
- [ ] It produces useful, practical results
- [ ] Language is professional and clear
- [ ] No spelling or grammar errors
- [ ] References KSSR/KSSM if applicable
- [ ] Considers typical Malaysian classroom realities

## Example: Completed Prompt Submission

**Prompt Title:** Year 4 Science Vocabulary Builder

**Category:** stem

**Description:** Create engaging vocabulary activities for science topics with visual aids and interactive games suitable for Year 4 students

**Tags:** Science, KSSR, Vocabulary, Year 4, Interactive

**Grade Level:** Primary, Year 4

**Subject:** Science

**Prompt Text:**

```
Create a comprehensive vocabulary-building activity for Year 4 Science on the topic of [Science Topic].

Include:
1. **Vocabulary List** (8-10 words)
   - List key terms from [Topic]
   - Provide simple definitions in English
   - Include Bahasa Melayu translations

2. **Visual Vocabulary Cards**
   - Describe images or diagrams for each word
   - How to represent each concept visually
   - Suitable for printing on A4 paper

3. **Interactive Activities** (3 activities)
   - Word matching game
   - Fill-in-the-blank sentences (use real-world examples)
   - Draw and label activity

4. **Assessment Questions**
   - 5 KBAT questions using the vocabulary
   - Mix of question types
   - Include answer key

5. **Extension Activity**
   - Creative project using the vocabulary
   - Suitable for early finishers

Format: Ready to print as worksheet
Style: Colorful, engaging, age-appropriate
Alignment: KSSR Year 4 Science standards
```

**Testing:**
- ✅ Tested with ChatGPT and Claude
- ✅ Produced complete, practical activities
- ✅ Easy to customize for different science topics
- ✅ Output was print-ready

**Example Input:**
```
Topic: States of Matter
```

**Example Output:**
Generated comprehensive activities including:
- 10 vocabulary words (solid, liquid, gas, melting, freezing, evaporation, condensation, particle, temperature, matter)
- Detailed card descriptions with visual ideas
- 3 interactive games
- 5 KBAT questions with answers
- Creative extension project (Create a comic strip about water's journey)

**Additional Notes:**
- Works best when you specify the specific KSSR content standard
- Can adapt for other grade levels by changing complexity
- Useful for bilingual teaching
- Activities can be used across multiple lessons

---

## Ready to Submit?

1. Fill out this template completely
2. Save as `prompt-submission-[your-name].md`
3. Submit via:
   - **GitHub**: Create a Pull Request
   - **Email**: Send to [maintainer email]
   - **Issue**: Open a new issue with the "Prompt Submission" label

Thank you for contributing to Malaysian Teachers Prompt Library! 🎉