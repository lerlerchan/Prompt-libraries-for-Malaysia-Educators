// Prompts data for Malaysian Teachers
const promptsData = {
    categories: [
        {
            id: "lesson-planning",
            name: "Lesson Planning",
            icon: "fa-chalkboard-teacher",
            description: "Create comprehensive lesson plans aligned with Malaysian curriculum standards (KSSR/KSSM)",
            prompts: [
                {
                    title: "KSSR Lesson Plan Generator",
                    description: "Generate a complete lesson plan following KSSR format with learning objectives, activities, and assessments",
                    tags: ["KSSR", "Primary", "Planning"],
                    prompt: `Create a detailed KSSR lesson plan for [Subject] on the topic of [Topic] for Year [Grade Level].

Include:
1. Learning Standards (Content and Learning Standards)
2. Learning Objectives (by end of lesson, students will be able to...)
3. Cross-curricular elements (CCE) and 21st century learning
4. Teaching aids and materials
5. Set Induction (10 minutes)
6. Step-by-step activities (30 minutes)
7. Closure (10 minutes)
8. Assessment methods
9. Follow-up activities/homework

Make it engaging and interactive for primary school students. Include differentiation strategies for mixed-ability classrooms.`
                },
                {
                    title: "KSSM Lesson Plan (Secondary)",
                    description: "Create a KSSM-aligned lesson plan with HOTS questions and 21st century skills",
                    tags: ["KSSM", "Secondary", "HOTS"],
                    prompt: `Design a comprehensive KSSM lesson plan for Form [1-5] [Subject] on [Topic].

Components:
1. Content Standards and Learning Standards
2. Learning Outcomes with Bloom's Taxonomy levels
3. 21st Century Skills integration (Communication, Collaboration, Creativity, Critical Thinking)
4. Teaching approach: [Student-centered/Project-based/etc.]
5. Set Induction with real-world connection (5 min)
6. Development activities with HOTS questions (35 min)
7. Consolidation and assessment (10 min)
8. Reflection questions for students
9. Enrichment activities for advanced learners
10. Differentiation strategies

Include formative assessment strategies and technology integration where appropriate.`
                },
                {
                    title: "Bahasa Melayu Lesson Plan",
                    description: "Specialized lesson plan for Bahasa Melayu with language skills focus",
                    tags: ["Bahasa Melayu", "Language", "KSSR/KSSM"],
                    prompt: `Buat rancangan pengajaran Bahasa Melayu untuk Tahun/Tingkatan [Level] bertajuk [Tajuk].

Sertakan:
1. Standard Kandungan dan Standard Pembelajaran
2. Objektif Pembelajaran (Kemahiran Mendengar, Bertutur, Membaca, Menulis)
3. Nilai Murni dan Kemahiran Berfikir
4. Bahasa Sasaran (kosa kata dan tatabahasa)
5. Set Induksi berbentuk menarik (10 minit)
6. Aktiviti Pembangunan dengan pelbagai kemahiran bahasa (30 minit)
7. Penutup dengan penguatan (10 minit)
8. Pentaksiran formatif dan sumatif
9. Tugasan susulan
10. Bahan Bantu Belajar yang sesuai

Pastikan aktiviti sesuai dengan tahap perkembangan murid dan menyeronokkan.`
                }
            ]
        },
        {
            id: "assessment",
            name: "Assessment & Grading",
            icon: "fa-clipboard-check",
            description: "Create assessments, rubrics, and grading tools for effective evaluation",
            prompts: [
                {
                    title: "HOTS Questions Generator",
                    description: "Generate Higher Order Thinking Skills questions for Malaysian curriculum",
                    tags: ["HOTS", "Assessment", "Critical Thinking"],
                    prompt: `Generate 10 HOTS (Higher Order Thinking Skills) questions for [Subject] topic: [Topic] for [Year/Form Level].

Requirements:
- Follow Bloom's Taxonomy: Analyzing, Evaluating, Creating levels
- Mix of question types: Multiple choice, Structured, Essay
- Include model answers with marking scheme
- Align with Malaysian exam format (PT3/SPM style if secondary)
- Questions should test application and critical thinking, not just recall
- Include real-world scenarios relevant to Malaysian context

Format each question clearly with:
- Question number and type
- Marks allocation
- Expected answer/solution
- Skills being tested`
                },
                {
                    title: "Rubric Creator",
                    description: "Design comprehensive assessment rubrics with clear criteria",
                    tags: ["Rubric", "Assessment", "Criteria"],
                    prompt: `Create a detailed assessment rubric for [Assignment/Project Type] in [Subject] for [Grade Level].

Assessment Task: [Describe the task]

Create a rubric with:
1. 4-5 assessment criteria relevant to the task
2. 4 performance levels: Excellent (4), Good (3), Satisfactory (2), Needs Improvement (1)
3. Clear descriptors for each level
4. Weightage percentage for each criterion
5. Total marks calculation
6. Space for teacher comments and feedback

Make criteria specific, measurable, and age-appropriate. Include both content knowledge and skills (21st century skills where relevant).`
                },
                {
                    title: "Differentiated Assessment",
                    description: "Create varied assessment methods for diverse learners",
                    tags: ["Differentiation", "Inclusive", "Assessment"],
                    prompt: `Design differentiated assessment options for [Topic] in [Subject] for [Grade Level] that cater to different learning abilities and styles.

Create 3 levels:
1. **Support Level** (For students who need more scaffolding)
   - Simplified format
   - Visual aids and prompts
   - Reduced complexity

2. **Core Level** (For students working at grade level)
   - Standard curriculum expectations
   - Balanced challenge

3. **Extension Level** (For advanced learners)
   - Higher complexity
   - Open-ended questions
   - Real-world applications

For each level, provide:
- Clear instructions
- Assessment format (written, oral, project, etc.)
- Marking criteria
- Success criteria
- Estimated time

Ensure all assessments measure the same learning objectives but with appropriate modifications.`
                }
            ]
        },
        {
            id: "special-education",
            name: "Special Education (PdPc)",
            icon: "fa-universal-access",
            description: "Resources for special needs students and inclusive education",
            prompts: [
                {
                    title: "IEP Learning Goals",
                    description: "Create Individualized Education Plan goals for special needs students",
                    tags: ["IEP", "Special Needs", "Goals"],
                    prompt: `Create Individualized Education Plan (IEP) learning goals for a student with [Specific Learning Need/Disability] in [Subject/Skill Area].

Student Profile:
- Age/Grade: [Level]
- Current abilities: [Describe]
- Challenges: [List challenges]
- Strengths: [List strengths]

Develop:
1. **Long-term Goals** (for the academic year)
   - 3-5 measurable goals
   
2. **Short-term Objectives** (quarterly)
   - Break down each long-term goal into achievable steps
   - Include success criteria
   
3. **Accommodations and Modifications**
   - Teaching strategies
   - Assessment modifications
   - Environmental adjustments
   
4. **Progress Monitoring**
   - How to measure progress
   - Frequency of assessment
   - Documentation methods

5. **Support Services Needed**
   - Resource teacher support
   - Assistive technology
   - Parent involvement strategies

Make goals SMART (Specific, Measurable, Achievable, Relevant, Time-bound) and aligned with mainstream curriculum where possible.`
                },
                {
                    title: "Sensory Break Activities",
                    description: "Design sensory activities for students with special needs",
                    tags: ["Sensory", "Autism", "ADHD"],
                    prompt: `Design a sensory break activity schedule for a [Primary/Secondary] classroom that includes students with [Autism/ADHD/Sensory Processing Challenges].

Create:
1. **5 Quick Sensory Break Activities** (3-5 minutes each)
   - Calming activities (for overstimulated students)
   - Alerting activities (for understimulated students)
   - Clear instructions
   - Required materials (use locally available items)

2. **Visual Schedule**
   - When to use each activity
   - Visual cues/pictures
   - Social stories format

3. **Implementation Guide**
   - How to introduce activities
   - Classroom management tips
   - How to know when a student needs a break

4. **Sensory Corner Setup**
   - Budget-friendly materials available in Malaysia
   - Organization tips
   - Safety considerations

Activities should be discreet, quick to implement, and suitable for Malaysian classroom context.`
                },
                {
                    title: "Modified Worksheet Creator",
                    description: "Adapt mainstream worksheets for special needs learners",
                    tags: ["Modification", "Worksheet", "Differentiation"],
                    prompt: `I have a worksheet on [Topic] for [Grade Level]. Help me create a modified version suitable for a student with [Learning Challenge: e.g., Dyslexia/Slow learner/Autism].

Original worksheet content:
[Paste or describe the worksheet]

Create modifications with:
1. **Visual Modifications**
   - Larger fonts and spacing
   - Visual supports (pictures, symbols)
   - Color coding for organization
   - Reduced visual clutter

2. **Content Modifications**
   - Simplified language
   - Reduced number of questions
   - Breaking complex tasks into steps
   - Providing examples

3. **Format Modifications**
   - Clear section divisions
   - Checkboxes for completion
   - Word banks if needed
   - Visual prompts

4. **Support Strategies**
   - Pre-teaching vocabulary
   - Peer buddy suggestions
   - Teacher support points
   - Extension activities if completed early

The modified worksheet should still address the same learning objectives but be accessible for the student.`
                }
            ]
        },
        {
            id: "communication",
            name: "Parent Communication",
            icon: "fa-comments",
            description: "Templates for effective parent-teacher communication",
            prompts: [
                {
                    title: "Parent Meeting Email (English)",
                    description: "Professional email to request parent meeting",
                    tags: ["Email", "Meeting", "Professional"],
                    prompt: `Write a professional email to parents requesting a meeting about their child [Student Name]'s [academic performance/behavior/progress].

Context: [Briefly describe the situation]

The email should:
1. Warm, respectful opening
2. Clear purpose statement (without alarming language)
3. Specific concerns or topics to discuss
4. Positive points about the student
5. 2-3 available meeting time slots
6. Option for phone/online meeting if needed
7. Assurance of partnership in supporting the child
8. Professional closing

Tone: Professional, caring, solution-focused
Length: Keep it concise (under 200 words)`
                },
                {
                    title: "Student Progress Report Comment",
                    description: "Constructive and encouraging report card comments",
                    tags: ["Report Card", "Comments", "Feedback"],
                    prompt: `Write a thoughtful report card comment for [Student Name] in [Subject] for [Term/Semester].

Student's performance:
- Strengths: [List strengths]
- Areas for improvement: [List areas]
- Effort level: [Excellent/Good/Needs improvement]
- Behavior in class: [Describe]
- Recent improvement or concerns: [Any changes]

Create a balanced comment (80-120 words) that:
1. Starts with specific strengths and achievements
2. Mentions effort and attitude
3. Addresses areas for growth diplomatically
4. Provides 1-2 specific, actionable recommendations
5. Ends encouragingly with confidence in student's potential
6. Uses professional, parent-friendly language
7. Suitable for official school reports

Make it personal, specific, and constructive - avoid generic phrases.`
                },
                {
                    title: "Trilingual Parent Notice",
                    description: "Important notices in English, BM, and Chinese",
                    tags: ["Multilingual", "Notice", "Announcement"],
                    prompt: `Create a parent notice about [Event/Issue/Announcement] in three languages: English, Bahasa Melayu, and Chinese.

Details:
- What: [Describe the event/issue]
- When: [Date and time]
- Where: [Location if applicable]
- Why: [Purpose/importance]
- What parents need to do: [Action required]
- Deadline: [If applicable]
- Contact: [Teacher name and contact]

Format:
- Clear heading for each language section
- Bullet points for easy reading
- Important information highlighted
- Reply slip at bottom (if needed)
- Professional but friendly tone

Keep each language version concise and ensure all three versions convey the same information accurately.`
                }
            ]
        },
        {
            id: "stem",
            name: "STEM Education",
            icon: "fa-flask",
            description: "Science, Technology, Engineering, and Mathematics activities",
            prompts: [
                {
                    title: "Science Experiment Lesson",
                    description: "Design a hands-on science experiment with local materials",
                    tags: ["Science", "Experiment", "Hands-on"],
                    prompt: `Design a hands-on science experiment for [Grade Level] on the topic of [Science Concept].

Requirements:
1. **Learning Objectives**
   - What students will learn
   - Science process skills practiced

2. **Materials Needed**
   - Use locally available, affordable materials in Malaysia
   - List quantities needed for groups of 4-5 students
   - Safety equipment

3. **Experiment Procedure**
   - Clear step-by-step instructions
   - Estimated time for each step
   - Safety precautions
   - What to observe

4. **Questions for Investigation**
   - Prediction questions (before experiment)
   - Observation questions (during)
   - Analysis questions (after) - include HOTS

5. **Scientific Explanation**
   - Simple explanation of what happens and why
   - Real-world applications relevant to Malaysia

6. **Differentiation**
   - Modifications for struggling learners
   - Extension for advanced learners

7. **Assessment**
   - How to evaluate student understanding
   - Lab report template

Make it engaging, safe, and aligned with Malaysian science curriculum.`
                },
                {
                    title: "Coding Activity (Unplugged)",
                    description: "Teach coding concepts without computers",
                    tags: ["Coding", "Computational Thinking", "Unplugged"],
                    prompt: `Create an unplugged coding activity (no computers needed) for [Grade Level] that teaches [Coding Concept: e.g., sequences, loops, algorithms, debugging].

Design:
1. **Learning Objectives**
   - Computational thinking skills
   - Coding concepts introduced

2. **Materials**
   - Simple, low-cost materials
   - Printable resources if needed

3. **Activity Overview**
   - Engaging storyline or theme (make it relevant to Malaysian students)
   - How it connects to real coding

4. **Step-by-Step Instructions**
   - Warm-up activity
   - Main activity (20-30 minutes)
   - Group work suggestions

5. **Challenges/Problems to Solve**
   - Progressive difficulty levels
   - Encourage problem-solving and debugging

6. **Discussion Questions**
   - Help students reflect on their learning
   - Connect to real-world programming

7. **Extension Activities**
   - How students can create their own challenges
   - Connection to actual coding platforms (Scratch, etc.)

Make it fun, interactive, and suitable for classrooms without extensive tech infrastructure.`
                },
                {
                    title: "Math Problem-Solving (Real-World)",
                    description: "Create contextual math problems based on Malaysian scenarios",
                    tags: ["Mathematics", "Problem-Solving", "Contextual"],
                    prompt: `Create 5 real-world math problems for [Grade Level] on [Math Topic] set in Malaysian contexts.

For each problem:
1. **Realistic Scenario**
   - Use Malaysian context (Malaysian Ringgit, local locations, cultural references)
   - Relatable to students' lives

2. **Problem Statement**
   - Clear, engaging question
   - Include necessary information
   - Appropriate complexity for grade level

3. **Skills Required**
   - Math concepts being applied
   - Problem-solving strategies needed

4. **Step-by-Step Solution**
   - Model solution with clear working
   - Multiple solution methods where possible
   - Common mistakes to address

5. **HOTS Question**
   - Extension question that requires deeper thinking
   - Open-ended exploration

Examples of contexts to consider:
- School canteen/bookshop
- Ramadan bazaar/pasar malam
- Public transport (LRT, bus)
- Malaysian festivals and celebrations
- Local sports and hobbies
- Family budgeting with Malaysian prices

Include visual aids or diagrams where helpful.`
                }
            ]
        },
        {
            id: "english-language",
            name: "English Language Teaching",
            icon: "fa-book-open",
            description: "ESL/EFL activities and resources for Malaysian classrooms",
            prompts: [
                {
                    title: "ESL Reading Comprehension",
                    description: "Create age-appropriate reading passages with questions",
                    tags: ["Reading", "Comprehension", "ESL"],
                    prompt: `Create a reading comprehension exercise for [CEFR Level: A1/A2/B1/B2] English learners in [Year/Form level].

Requirements:
1. **Reading Passage** (150-300 words)
   - Topic: [Choose or suggest: Malaysian culture, daily life, science, etc.]
   - Age-appropriate and culturally relevant
   - Clear, engaging narrative or informational text
   - Include 5-8 vocabulary words to pre-teach

2. **Vocabulary Section**
   - List and define key words
   - Use context clues
   - Match meanings exercise

3. **Comprehension Questions** (8-10 questions)
   - 3-4 literal questions (recall)
   - 2-3 inferential questions (reading between lines)
   - 2-3 critical thinking questions (opinions, predictions)
   - Mix of formats: Multiple choice, True/False, Short answer

4. **Language Focus**
   - Grammar point present in the text: [Specify]
   - Exercise on this grammar point

5. **Discussion Questions**
   - 2-3 questions for speaking practice
   - Connect to students' experiences

6. **Answer Key**
   - All answers provided
   - Possible variations for open-ended questions

Suitable for Malaysian English proficiency levels, considering mixed-ability classrooms.`
                },
                {
                    title: "Grammar Games & Activities",
                    description: "Fun, interactive grammar practice activities",
                    tags: ["Grammar", "Games", "Interactive"],
                    prompt: `Design 3 engaging grammar games/activities for teaching [Grammar Point] to [Grade Level] ESL students.

For each activity:
1. **Activity Name & Type**
   - Game, competition, group work, etc.

2. **Learning Objective**
   - Specific grammar point practiced
   - Language skills involved

3. **Materials Needed**
   - Keep it simple and accessible
   - Printables, flashcards, etc.

4. **Preparation**
   - What teacher needs to prepare
   - How to set up

5. **How to Play/Do the Activity**
   - Clear step-by-step instructions
   - Timing (how long)
   - Classroom management tips

6. **Example Sentences/Cards**
   - Provide 8-10 examples to use
   - Mix of correct and incorrect for error correction games

7. **Variations**
   - How to make it easier/harder
   - Different group sizes

8. **Assessment**
   - How to check student understanding
   - Observation points

Activities should be:
- Student-centered and communicative
- Suitable for large Malaysian classes (30-40 students)
- Minimal technology required
- Fun and memorable!`
                },
                {
                    title: "Writing Skills Worksheet",
                    description: "Structured writing practice with scaffolding",
                    tags: ["Writing", "Composition", "Skills"],
                    prompt: `Create a writing skills worksheet for [Grade Level] focusing on [Writing Type: narrative/descriptive/persuasive/report].

Components:
1. **Learning Objectives**
   - Writing skills to be developed
   - Text features to include

2. **Model Text**
   - Example of the writing type (100-150 words)
   - Annotated with features highlighted

3. **Planning Section**
   - Graphic organizer appropriate for the text type
   - Brainstorming prompts
   - Vocabulary bank related to topic

4. **Writing Prompt**
   - Clear, interesting prompt relevant to Malaysian students
   - Context and audience specified
   - Word count guidance

5. **Writing Frame/Scaffold**
   - Sentence starters for different parts
   - Useful phrases and connectors
   - Transition words list

6. **Self-Check Checklist**
   - Students can use to review their work
   - Include content, language, and mechanics
   - Based on specific success criteria

7. **Peer Review Guide**
   - 2-3 questions for peer feedback
   - Positive feedback prompts

8. **Teacher Assessment Rubric**
   - 4-5 criteria
   - Clear descriptors

Provide scaffolding for weaker students while allowing strong writers to excel.`
                }
            ]
        },
        {
            id: "classroom-management",
            name: "Classroom Management",
            icon: "fa-users",
            description: "Strategies for effective classroom management and behavior",
            prompts: [
                {
                    title: "Positive Behavior System",
                    description: "Design a rewards system for encouraging good behavior",
                    tags: ["Behavior", "Rewards", "Positive"],
                    prompt: `Design a positive behavior management system for a [Grade Level] classroom with [Number] students.

Create:
1. **System Name & Theme**
   - Fun, age-appropriate theme
   - Visual design idea

2. **Target Behaviors**
   - 5-7 specific positive behaviors to encourage
   - Examples: respect, responsibility, effort, cooperation, etc.
   - Clear, observable descriptions

3. **How Students Earn Points/Rewards**
   - Point system or token economy
   - Individual and group rewards
   - Frequency of distribution

4. **Rewards Menu**
   - Tangible rewards (budget-friendly)
   - Privilege rewards (free, but valuable to students)
   - Individual and class rewards
   - Short-term and long-term goals

5. **Tracking System**
   - How to record and display progress
   - Individual charts, class chart, etc.
   - Keep it simple and manageable

6. **Celebration Rituals**
   - How to celebrate achievements
   - Weekly/monthly recognition ideas

7. **Implementation Guide**
   - How to introduce to students
   - How to maintain consistency
   - How to involve parents

8. **Troubleshooting**
   - What if students lose motivation?
   - Dealing with students who struggle
   - Keeping it fresh

Make it culturally appropriate for Malaysian classrooms and sustainable long-term.`
                },
                {
                    title: "Classroom Rules & Expectations",
                    description: "Develop clear classroom rules with student input",
                    tags: ["Rules", "Expectations", "Community"],
                    prompt: `Help me develop classroom rules and expectations for [Grade Level] at the start of the school year.

Create:
1. **4-6 Core Classroom Rules**
   - Positive language (what TO do, not what NOT to do)
   - Simple, memorable phrasing
   - Applicable to all situations
   - Age-appropriate

2. **Visual Representation**
   - Ideas for displaying rules
   - Icons or images for each rule
   - Student-friendly design

3. **Specific Expectations** for common situations:
   - Entering classroom
   - During lessons
   - Group work
   - Transitions
   - Pack up time
   - When teacher is speaking
   - Using materials and equipment

4. **Teaching Activities**
   - How to introduce rules (first week of school)
   - Role-play scenarios
   - Practice activities
   - Games to reinforce rules

5. **Student Ownership**
   - How to involve students in creating rules
   - Class contract or agreement
   - Student examples and non-examples

6. **Consistent Consequences**
   - Progressive response to rule-breaking
   - Logical consequences
   - Restorative practices
   - When to involve parents/admin

7. **Posters or Handouts**
   - Printable rule posters
   - Parent information letter about classroom expectations

Keep it positive, clear, and consistent with school-wide policies.`
                },
                {
                    title: "Attention-Getting Strategies",
                    description: "Creative ways to get students' attention quickly",
                    tags: ["Attention", "Transitions", "Management"],
                    prompt: `Provide 10 creative attention-getting strategies for [Grade Level] that can be used in Malaysian classrooms.

For each strategy:
1. **Name of Strategy**
   - Catchy, memorable name

2. **How It Works**
   - What teacher says/does
   - What students respond with
   - Any actions or movements

3. **When to Use**
   - Best situations for this strategy
   - Transition times, noisy activities, etc.

4. **Variations**
   - How to adapt for different situations
   - Theme variations (can change throughout year)

5. **Teaching It**
   - How to introduce and practice with class
   - Games to make it fun

Include:
- Mix of verbal and non-verbal strategies
- Call-and-response patterns
- Rhythms or claps
- Silent signals
- Countdown methods
- Music/sound cues
- Visual signals

Consider:
- Appropriate for Malaysian cultural context
- Suitable for large classes (30-40 students)
- Respectful and fun
- Can work even when it's noisy

Some strategies should be calm/quiet and others energizing, for different needs throughout the day.`
                }
            ]
        },
        {
            id: "digital-tools",
            name: "Digital Learning Tools",
            icon: "fa-laptop",
            description: "Integrate technology and digital tools into teaching",
            prompts: [
                {
                    title: "Google Classroom Activity",
                    description: "Design an interactive activity using Google Classroom",
                    tags: ["Google Classroom", "Digital", "Interactive"],
                    prompt: `Design a complete Google Classroom activity for [Subject] on [Topic] for [Grade Level].

Components:
1. **Activity Overview**
   - Learning objectives
   - Duration and format
   - How it fits in your unit

2. **Pre-Activity Setup**
   - Materials to post in Google Classroom
   - Resources needed (docs, slides, forms, etc.)
   - How to organize in Classroom (topic/module)

3. **Instructions for Students**
   - Clear step-by-step directions
   - What they need to submit
   - Deadline and time estimates
   - Rubric or success criteria

4. **Interactive Elements**
   - Discussion questions (use Comments or Stream)
   - Peer collaboration opportunities
   - Multimedia integration (videos, links, etc.)

5. **Differentiation**
   - How to provide different versions or supports
   - Choice in format or content
   - Extension opportunities

6. **Assessment Method**
   - How you'll grade the submissions
   - Using Google Forms for quizzes
   - Rubric in Google Classroom

7. **Engagement Strategies**
   - How to monitor participation
   - How to encourage quality responses
   - Dealing with students who don't participate

8. **Technical Considerations**
   - Internet connectivity issues (provide offline alternatives)
   - Device limitations
   - Time in computer lab vs. homework

Practical for Malaysian schools with varying levels of tech infrastructure.`
                },
                {
                    title: "Virtual Field Trip Plan",
                    description: "Plan an educational virtual field trip",
                    tags: ["Virtual", "Field Trip", "Exploration"],
                    prompt: `Plan a virtual field trip for [Subject/Topic] for [Grade Level].

Design:
1. **Destination & Purpose**
   - What place/site/location (can be anywhere in the world!)
   - Why this destination for this topic
   - Learning objectives

2. **Virtual Resources to Use**
   - Virtual tour websites or videos
   - Google Earth locations
   - Museum virtual tours
   - 360° videos
   - Live webcams
   - Online exhibits

3. **Pre-Trip Activities**
   - Building background knowledge
   - What to look for during the trip
   - Questions to investigate
   - Vocabulary introduction

4. **During the Virtual Trip**
   - Guided exploration with stopping points
   - Observation worksheet or digital form
   - Think-pair-share questions
   - Note-taking guide

5. **Interactive Components**
   - Discussion prompts
   - Small group explorations
   - Student-led discoveries
   - Collaborative tasks

6. **Post-Trip Activities**
   - Reflection questions
   - Creative project options (presentation, poster, report, video)
   - Connections to local context (Malaysia)
   - Real-world applications

7. **Assessment**
   - How to evaluate student learning
   - Products or presentations
   - Participation observation

8. **Parent Communication**
   - How to share the experience
   - Extension activities for home

Include specific links and resources. Consider bandwidth limitations in some Malaysian schools.`
                }
            ]
        },
        {
            id: "infographic-generation",
            name: "Infographic Generation",
            icon: "fa-image",
            description: "Create visual infographics using NanoBanana Pro to explain concepts and generate educational diagrams",
            prompts: [
                {
                    title: "Solar Energy System Infographic",
                    description: "Create a flat lay style infographic explaining how solar energy works with visual flow (by DeepMind)",
                    tags: ["Science", "Visual", "Infographic", "Energy"],
                    prompt: `High-quality flat lay photography creating a DIY infographic that simply explains how solar energy works, arranged on a clean, light gray textured background. The visual story flows from left to right in clear steps: Content is based on this: https://en.wikipedia.org/wiki/Solar_power. Simple, clean black arrows are hand-drawn onto the background to guide the viewer's eye from the sun to the house, clearly marking the flow of energy. The overall mood is educational, modern, and easy to understand. The image is shot from a top-down, bird's-eye view with soft, even lighting that minimizes shadows and keeps the focus on the process. Format 16:9`,
                    image: "https://lh3.googleusercontent.com/wHCjEvzZkoWi07X6J9pvb2ucwiQjRAuDJdOAqNuYsY0J5Lu9HlEvamioKb8Vksn6vrBicxnofmJmSZe_a18afnrzQ-2TLgd2RSh7OSGLifgq3n9Kng=w1440-h810-n-nu-rw-lo",
                    imageCredit: "Image by DeepMind"
                },
                {
                    title: "Flowchart Generation Template",
                    description: "Create a clear flowchart infographic for any process or concept",
                    tags: ["Process", "Flowchart", "Visual"],
                    prompt: `Create a clear and visually appealing flowchart infographic for [Process/Concept] suitable for [Grade Level] students.

Requirements:
1. Title: [Process name]
2. Clear flow from left to right or top to bottom
3. [X] main steps clearly labeled and numbered
4. Decision points (if/then) clearly marked with diamond shapes
5. Start and end points clearly identified
6. Use different colors to differentiate step types
7. Simple icons or visual elements for each step
8. Clean, modern design suitable for educational use
9. Format: 16:9 widescreen

Make it visually engaging and easy to follow, suitable for classroom display or digital learning.`
                },
                {
                    title: "Mind Map Generation",
                    description: "Create a mind map infographic with central concept and branching ideas",
                    tags: ["Mind Map", "Brainstorming", "Concept"],
                    prompt: `Create a beautiful mind map infographic for [Central Topic] suitable for [Grade Level] students.

Requirements:
1. Central concept clearly displayed in the center
2. [X] main branches radiating from the center
3. 2-3 sub-branches under each main branch
4. Hierarchical organization from general to specific
5. Use different colors for each main branch
6. Include small icons or visual elements
7. Clean, organized layout
8. Clear, readable typography
9. Format: 16:9 or square

The mind map should help visualize how different ideas connect to the main concept, perfect for studying or class presentation.`
                },
                {
                    title: "Comparison Chart Infographic",
                    description: "Create a visual comparison between two or more concepts",
                    tags: ["Comparison", "Chart", "Analysis"],
                    prompt: `Create a clear and visually engaging comparison infographic for [Concept A] vs [Concept B] suitable for [Grade Level] students.

Content to compare:
- Concept A: [Description]
- Concept B: [Description]
- Comparison factors: [List 4-6 aspects like characteristics, pros/cons, applications, etc.]

Requirements:
1. Side-by-side layout for easy comparison
2. Use contrasting colors for each concept
3. Clear labels and icons for each factor
4. Highlight similarities in middle or with connecting elements
5. Differences clearly marked
6. Include 1-2 relevant examples for each concept
7. Professional, modern design
8. Clean typography and spacing
9. Format: 16:9 widescreen

The comparison should make it easy for students to understand the key differences and similarities at a glance.`
                }
            ]
        },
        {
            id: "mpt4",
            name: "MPT4: Year 4 Learning Assessment",
            icon: "fa-clipboard-check",
            description: "Support understanding, pupil readiness and early intervention for the national standardised Year 4 assessment. Covers Bahasa Melayu, Bahasa Inggeris, Mathematics and Science, plus Bahasa Cina in SJKC or Bahasa Tamil in SJKT.",
            prompts: [
                {
                    title: "Understanding MPT4 and Its Instruments",
                    description: "Turn public guidance into a practical staff briefing with an evidence trail.",
                    tags: ["MPT4", "Guidance", "Year 4", "Assessment"],
                    prompt: `Support a Year 4 teacher in Malaysia with MPT4 (Matriks Pembelajaran Tahun 4). Use [Verified Public Guidance] and [School Context]. Treat activities as classroom support, not official instruments or predicted tests. Never request or upload TERHAD materials.

Prepare a briefing for [Subject] using [Public Instrument Guidance]. Explain the national standardised assessment, literacy, numeracy and learning competence, and Pentaksiran untuk Pembelajaran. Clarify that it does not replace UPSR/PT3. Output a table of purpose, supported instrument features, classroom implications and source sections, followed by five staff questions. Separate documented requirements from teaching suggestions; leave unsupported item counts or specifications unresolved.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.

Reference: Matriks Pembelajaran FAQ (Lembaga Peperiksaan), Q1–5, Q8, Q10; Panduan Pengurusan Matriks Pembelajaran (Management Guide), sections 4, 6.`
                },
                {
                    title: "Reading the MPT4 Management Guide",
                    description: "Extract role-specific duties and unresolved questions from public management guidance.",
                    tags: ["MPT4", "Management", "Roles", "Year 4"],
                    prompt: `Support a Year 4 teacher in Malaysia with MPT4 (Matriks Pembelajaran Tahun 4). Use [Verified Public Guidance] and [School Context]. Treat activities as classroom support, not official instruments or predicted tests. Never request or upload TERHAD materials.

For [Staff Role], summarise [Public Management Sections] as a before/during/after checklist. Include registration checks, administration, scoring coordination, recording, reporting and confidentiality only where supported. Give each row a responsible role, required evidence and source section. Distinguish school actions from LP responsibilities. Finish with an escalation question list for [School Coordinator Role], especially where instructions conflict; do not invent deadlines or replace the official guide.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.

Reference: Panduan Pengurusan Matriks Pembelajaran (Management Guide), sections 5, 7–12.`
                },
                {
                    title: "Calm and Meaningful Pupil Preparation",
                    description: "Build confidence through broad learning routines without predicted-test drilling.",
                    tags: ["MPT4", "Readiness", "Wellbeing", "Literacy"],
                    prompt: `Support a Year 4 teacher in Malaysia with MPT4 (Matriks Pembelajaran Tahun 4). Use [Verified Public Guidance] and [School Context]. Treat activities as classroom support, not official instruments or predicted tests. Never request or upload TERHAD materials.

Design [Number of Sessions] sessions for [Subject and Skills], using [Available Minutes and Materials] and [Aggregate Language Support Needs]. Include reading instructions, explaining reasoning, checking work and asking for help. Output a session table with objective, low-pressure activity, teacher observation and adaptation. Add a reassuring pupil briefing and a home routine. Use varied Malaysian everyday contexts; avoid ranking, predicted questions or narrowing the curriculum to a test.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.

Reference: Matriks Pembelajaran FAQ (Lembaga Peperiksaan), Q1–3; Penataran Matriks Pembelajaran (briefing slides), slide 5.`
                },
                {
                    title: "Original Literacy Diagnostic Activities",
                    description: "Create short reading and writing tasks that reveal support needs.",
                    tags: ["MPT4", "Literacy", "Diagnostic", "Original Items"],
                    prompt: `Support a Year 4 teacher in Malaysia with MPT4 (Matriks Pembelajaran Tahun 4). Use [Verified Public Guidance] and [School Context]. Treat activities as classroom support, not official instruments or predicted tests. Never request or upload TERHAD materials.

Create [Number of Items] literacy tasks in [Teaching Language] for [Verified Learning Skills]. Write a new short passage set in [Malaysian Context]. Include retrieving information, explaining meaning and a brief written response, where suitable for those skills. Output passage, numbered tasks, suggested answers and a skill/evidence/misconception table. Add oral scaffolds and a fresh follow-up task. Label these classroom diagnostics, not LP items; do not infer official grades from the results.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.

Reference: Matriks Pembelajaran FAQ (Lembaga Peperiksaan), Q3, Q10.`
                },
                {
                    title: "Original Numeracy Diagnostic Activities",
                    description: "Use original problems to uncover reasoning and common numeracy misconceptions.",
                    tags: ["MPT4", "Numeracy", "Reasoning", "Diagnostic"],
                    prompt: `Support a Year 4 teacher in Malaysia with MPT4 (Matriks Pembelajaran Tahun 4). Use [Verified Public Guidance] and [School Context]. Treat activities as classroom support, not official instruments or predicted tests. Never request or upload TERHAD materials.

For [Verified Numeracy Skills], create [Number of Problems] problems using [Local Context] and [Teaching Language]. Use RM, quantities or measurements only where relevant. Include a concrete representation, a calculation and an explanation task across the set. Output problems, worked answers, alternative valid methods and likely error interpretations. Suggest one short reteaching activity per misconception and a new check question. Keep diagnostic difficulty separate from any claim about official MPT4 structure or grade boundaries.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.

Reference: Matriks Pembelajaran FAQ (Lembaga Peperiksaan), Q3, Q10.`
                },
                {
                    title: "From Results to Early Intervention",
                    description: "Turn safe summary evidence into a monitored remedial and enrichment plan.",
                    tags: ["MPT4", "Intervention", "Remediation", "Enrichment"],
                    prompt: `Support a Year 4 teacher in Malaysia with MPT4 (Matriks Pembelajaran Tahun 4). Use [Verified Public Guidance] and [School Context]. Treat activities as classroom support, not official instruments or predicted tests. Never request or upload TERHAD materials.

Analyse [Synthetic or Safely Aggregated Skill Summary] for [Subject] alongside [Aggregate Classroom Observations]. Never upload restricted score documents. Separate observed patterns from tentative explanations; acknowledge missing evidence. Produce a [Number of Weeks]-week table of skill priority, flexible group, remedial or enrichment activity, success evidence and review point. Include an original entry and exit check and rules for changing support after review. Do not rank pupils or diagnose ability from a single score.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.

Reference: Matriks Pembelajaran FAQ (Lembaga Peperiksaan), Q3, Q14; Panduan Pengurusan Matriks Pembelajaran (Management Guide), sections 9.2, 11.6.`
                },
                {
                    title: "Explaining MPT4 to Parents",
                    description: "Draft a reassuring family briefing with practical home support.",
                    tags: ["MPT4", "Parents", "Communication", "Home Support"],
                    prompt: `Support a Year 4 teacher in Malaysia with MPT4 (Matriks Pembelajaran Tahun 4). Use [Verified Public Guidance] and [School Context]. Treat activities as classroom support, not official instruments or predicted tests. Never request or upload TERHAD materials.

Write a parent note in [Preferred Language] for [School Type], using [Synthetic Learning Example] and [School Contact Role]. Explain the learning-support purpose and that MPT4 does not replace UPSR/PT3. State that pupils are exempt from UASA for subjects assessed through Matriks Pembelajaran; do not extend this to all year groups. Output a short letter, three home activities and four FAQs, including how to seek clarification through school. Avoid comparisons, labels and promises of grades.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.

Reference: Matriks Pembelajaran FAQ (Lembaga Peperiksaan), Q3–4, Q9, Q17.`
                },
                {
                    title: "School MPT4 Operations Planner",
                    description: "Prepare a source-linked operational schedule for school review.",
                    tags: ["MPT4", "School Planning", "Schedule", "Quality Assurance"],
                    prompt: `Support a Year 4 teacher in Malaysia with MPT4 (Matriks Pembelajaran Tahun 4). Use [Verified Public Guidance] and [School Context]. Treat activities as classroom support, not official instruments or predicted tests. Never request or upload TERHAD materials.

Build an operations plan from [Verified Timetable and Work Schedule], [Staff Roles] and [Aggregate Access Needs]. The 2026 timetable specifies 6–8 October; distinguish it from the FAQ’s August–October window and check the year. Output phase, task, responsible role, dependency, deadline source and completion evidence. Cover readiness, secure handling, administration, scoring coordination, reporting and follow-up. Add a contingency referral list, not invented emergency procedures. Keep names, credentials and restricted materials out of the plan.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.

Reference: Jadual Matriks Pembelajaran Tahun 4 2026 (timetable); Matriks Pembelajaran FAQ (Lembaga Peperiksaan), Q5, Q18; Panduan Pengurusan Matriks Pembelajaran (Management Guide), sections 8–12, 14; Penataran Matriks Pembelajaran (briefing slides), slide 23.`
                }
            ]
        },
        {
            id: "igcse",
            name: "Cambridge IGCSE Teaching and Assessment",
            icon: "fa-book-open",
            description: "Reusable support for Mathematics, English as a Second Language, Biology, Chemistry and Physics. Teachers supply verified syllabus details for every task.",
            prompts: [
                {
                    title: "Verified Syllabus to Teaching Sequence",
                    description: "Map verified requirements to a manageable teaching sequence.",
                    tags: ["IGCSE", "Syllabus", "Planning", "Secondary"],
                    prompt: `Support a Cambridge IGCSE teacher in a Malaysian secondary classroom. Subject: [Subject]. Use [Verified Syllabus Details] supplied by the teacher, including the applicable examination year. Do not invent syllabus codes, assessment objectives, weightings or paper formats.

Plan [Number of Lessons] lessons on [Topic] using [Available Minutes and Resources]. Output a table linking each supplied syllabus statement to prerequisites, learning goal, activity and evidence of learning. Identify gaps and duplicated coverage, then propose a short review lesson. Use familiar Malaysian examples where appropriate. Keep optional enrichment clearly separate from required content, and quote only the minimum syllabus wording needed for traceability.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Concept and Language Scaffolds",
                    description: "Build access to subject concepts and vocabulary without reducing the learning goal.",
                    tags: ["IGCSE", "Vocabulary", "Scaffolding", "Differentiation"],
                    prompt: `Support a Cambridge IGCSE teacher in a Malaysian secondary classroom. Subject: [Subject]. Use [Verified Syllabus Details] supplied by the teacher, including the applicable examination year. Do not invent syllabus codes, assessment objectives, weightings or paper formats.

For [Topic], use [Aggregate Language Needs] and [Preferred Support Language] to create a scaffolded explanation. Output key terms with plain meanings, one original worked example, sentence starters and three increasingly independent tasks with answers. Distinguish everyday meanings from subject meanings. For English as a Second Language, focus on the supplied communicative skill; for other subjects, preserve conceptual demand. Include a quick check that separates language difficulty from conceptual misunderstanding.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Misconception Diagnostic Questions",
                    description: "Probe reasoning with original questions and useful follow-up prompts.",
                    tags: ["IGCSE", "Diagnostic", "Misconceptions", "Reasoning"],
                    prompt: `Support a Cambridge IGCSE teacher in a Malaysian secondary classroom. Subject: [Subject]. Use [Verified Syllabus Details] supplied by the teacher, including the applicable examination year. Do not invent syllabus codes, assessment objectives, weightings or paper formats.

Create [Number of Questions] diagnostic questions for [Topic and Prerequisites]. Include plausible distractors or contrasting responses, an invitation to explain reasoning, and answers. Output a table of question, targeted idea, likely response pattern, tentative interpretation and next teaching move. Make wrong options diagnostically meaningful rather than tricky. Include a fresh check after reteaching. Do not treat one wrong answer as proof of a misconception or assign official grades to this classroom diagnostic.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Original Assessment Task Builder",
                    description: "Draft practice tasks linked to teacher-verified assessment requirements.",
                    tags: ["IGCSE", "Assessment", "Original Tasks", "Alignment"],
                    prompt: `Support a Cambridge IGCSE teacher in a Malaysian secondary classroom. Subject: [Subject]. Use [Verified Syllabus Details] supplied by the teacher, including the applicable examination year. Do not invent syllabus codes, assessment objectives, weightings or paper formats.

Draft [Number of Tasks] tasks on [Topic] for [Intended Classroom Use]. Map each task to a supplied syllabus statement and, only if provided, a verified assessment objective. Output student instructions, original stimulus, task, suggested answer and alignment rationale. Apply marks or timing only when supplied. Check ambiguity, accessibility and unintended clues. Label the result teacher practice material, not an official Cambridge paper or prediction; list unresolved specification questions separately.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Investigation and Evidence Tasks",
                    description: "Adapt an evidence-based inquiry to the selected subject and available resources.",
                    tags: ["IGCSE", "Inquiry", "Evidence", "Classroom Tasks"],
                    prompt: `Support a Cambridge IGCSE teacher in a Malaysian secondary classroom. Subject: [Subject]. Use [Verified Syllabus Details] supplied by the teacher, including the applicable examination year. Do not invent syllabus codes, assessment objectives, weightings or paper formats.

Design an inquiry on [Topic] using [Available Resources] and [Teacher-Approved Safety Constraints]. Use pattern investigation for Mathematics, communication or text inquiry for English as a Second Language, or a safe evidence task for science. Output question, procedure, synthetic dataset or original text, analysis prompts, expected reasoning and limitations. For practical science, require teacher risk review and offer a non-practical alternative. Do not imply this task matches an examination component unless verified details support that claim.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Draft Marking and Moderation Pack",
                    description: "Compare synthetic responses against supplied criteria to improve marking consistency.",
                    tags: ["IGCSE", "Marking", "Moderation", "Synthetic Responses"],
                    prompt: `Support a Cambridge IGCSE teacher in a Malaysian secondary classroom. Subject: [Subject]. Use [Verified Syllabus Details] supplied by the teacher, including the applicable examination year. Do not invent syllabus codes, assessment objectives, weightings or paper formats.

Use [Teacher-Written Original Task] and [Verified Criteria or Teacher Draft] to prepare a moderation pack. Clearly distinguish official criteria from proposed classroom criteria. Produce a marking table with acceptable alternatives, three synthetic responses, tentative judgements and criterion-based explanations. Add borderline discussion questions and a disagreement log template. Do not invent official bands or thresholds. Finish with decisions that the teacher team must settle before the draft can be used for marking.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Feedback and Improvement Cycle",
                    description: "Turn response patterns into specific feedback and a second attempt.",
                    tags: ["IGCSE", "Feedback", "Revision", "Learner Reflection"],
                    prompt: `Support a Cambridge IGCSE teacher in a Malaysian secondary classroom. Subject: [Subject]. Use [Verified Syllabus Details] supplied by the teacher, including the applicable examination year. Do not invent syllabus codes, assessment objectives, weightings or paper formats.

Use [Synthetic Response or Aggregate Error Patterns], [Original Task] and [Verified Success Criteria]. Output a feedback table with strength, evidence, one priority improvement and a question that prompts revision. Then provide a short reteaching explanation, a new parallel task with answer guidance and a learner reflection checklist. Keep feedback encouraging and actionable for multilingual Malaysian learners. Separate content accuracy from expression where the supplied criteria permit; do not promise examination grades.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Coverage Audit and Targeted Revision",
                    description: "Check curriculum coverage and prioritise revision from aggregate evidence.",
                    tags: ["IGCSE", "Coverage", "Revision", "Analysis"],
                    prompt: `Support a Cambridge IGCSE teacher in a Malaysian secondary classroom. Subject: [Subject]. Use [Verified Syllabus Details] supplied by the teacher, including the applicable examination year. Do not invent syllabus codes, assessment objectives, weightings or paper formats.

Audit [Teaching Coverage Summary] against supplied requirements and [Aggregate Skill Results]. Output a coverage table: requirement, taught evidence, practice evidence, confidence and gap. Build a [Number of Weeks]-week revision plan balancing weak areas with previously learned content. Include original retrieval questions, mixed practice and a review checkpoint with suggested answers. Flag missing denominators or uncertain mappings, and explain limitations. Prioritise learning needs rather than predicting likely examination questions or inventing grade conversions.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                }
            ]
        },
        {
            id: "uasa",
            name: "UASA: Year 5",
            icon: "fa-chalkboard-teacher",
            description: "Year 5 planning, original items and follow-up for Bahasa Melayu, Bahasa Inggeris, Bahasa Cina, Mathematics and Science, using teacher-verified requirements.",
            prompts: [
                {
                    title: "Year 5 Item Specification Table",
                    description: "Build a JSI draft with traceable coverage and totals.",
                    tags: ["UASA", "JSI", "Coverage", "Year 5"],
                    prompt: `Support Year 5 UASA teaching in Malaysia for [Subject]. Use [Format dan Keperluan Disahkan] supplied by the teacher and [Verified DSKP Details]. Do not invent formats, marks, cognitive distributions or timing.

Build a Jadual Spesifikasi Item (JSI) for [Topics Taught] using [Teacher-Verified Cognitive Levels]. Output columns for learning standard, skill, cognitive demand, item identifier, item type and supplied marks. Show totals and compare them with verified requirements. Highlight omitted content, excessive repetition and unresolved allocations. Explain each proposed mapping briefly. Keep unprovided marks, distribution and duration as UNVERIFIED rather than filling them with customary values; label the table a teacher-review draft.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Questions by Cognitive Demand",
                    description: "Write original questions with a reasoned cognitive-level mapping.",
                    tags: ["UASA", "Question Writing", "Cognitive Levels", "Original Items"],
                    prompt: `Support Year 5 UASA teaching in Malaysia for [Subject]. Use [Format dan Keperluan Disahkan] supplied by the teacher and [Verified DSKP Details]. Do not invent formats, marks, cognitive distributions or timing.

Use [Approved JSI Draft] and [Topic] to write [Number of Questions] original items. Output item identifier, stimulus, question, intended skill, cognitive level, justification and answer. Make cognitive demand depend on reasoning required, not merely the command verb. Use suitable Malaysian contexts and age-appropriate language. Check ambiguity, distractor quality and solvability. Respect only the supplied item types and allocations; separate optional alternative questions from the draft so totals remain auditable.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Paper Review and Coverage Audit",
                    description: "Review a teacher-written draft for coverage, clarity and consistency.",
                    tags: ["UASA", "Paper Review", "Coverage", "Quality"],
                    prompt: `Support Year 5 UASA teaching in Malaysia for [Subject]. Use [Format dan Keperluan Disahkan] supplied by the teacher and [Verified DSKP Details]. Do not invent formats, marks, cognitive distributions or timing.

Review [Teacher-Written Original Paper] against [Approved JSI] and [Topics Taught]. Output an audit table with item, requirement, evidence, issue, severity and proposed revision. Check coverage, language load, unintended clues, duplicate skills, answerability and consistency with supplied marks and timing. Recalculate totals only from provided values. Include a concise readiness summary and unresolved questions for the subject panel. Do not certify official compliance or silently rewrite questions; show proposed changes separately.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Targeted Year 5 Practice",
                    description: "Provide focused practice with scaffolds and a fresh progress check.",
                    tags: ["UASA", "Practice", "Differentiation", "Skills"],
                    prompt: `Support Year 5 UASA teaching in Malaysia for [Subject]. Use [Format dan Keperluan Disahkan] supplied by the teacher and [Verified DSKP Details]. Do not invent formats, marks, cognitive distributions or timing.

Using [Aggregate Skill Gaps], prepare [Number of Tasks] tasks on [Topic] for [Available Learning Time]. Organise them into guided, independent and extension practice without labelling pupils. Include original questions, optional hints, worked answers and a fresh exit check. Output a task/skill/support/success-evidence table followed by the printable activities. Explain how the teacher can adjust support from observed responses. Do not present this focused practice as a complete UASA paper or a prediction of tested topics.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Draft Year 5 Marking Scheme",
                    description: "Prepare transparent answer guidance for teacher-written questions.",
                    tags: ["UASA", "Marking Scheme", "Answers", "Consistency"],
                    prompt: `Support Year 5 UASA teaching in Malaysia for [Subject]. Use [Format dan Keperluan Disahkan] supplied by the teacher and [Verified DSKP Details]. Do not invent formats, marks, cognitive distributions or timing.

For [Teacher-Written Original Questions], use [Verified Mark Allocations and Criteria] to draft answer guidance. Output item identifier, expected answer, acceptable alternatives, evidence required and permitted credit. Explain common errors without inventing penalties. Where allocations or partial-credit rules are absent, flag the issue for the teacher rather than creating official rules. Check mathematical working and language alternatives as relevant. End with a checklist for subject-panel approval and identify any ambiguous question needing revision.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Rubric Moderation with Synthetic Responses",
                    description: "Test a draft rubric through contrasting synthetic responses and discussion.",
                    tags: ["UASA", "Rubric", "Moderation", "Synthetic Data"],
                    prompt: `Support Year 5 UASA teaching in Malaysia for [Subject]. Use [Format dan Keperluan Disahkan] supplied by the teacher and [Verified DSKP Details]. Do not invent formats, marks, cognitive distributions or timing.

Use [Teacher-Written Original Task] and [Verified Rubric or Teacher Draft]. Create three contrasting synthetic responses, including one borderline case. Output each response, criterion evidence, provisional judgement and an alternative interpretation a second marker might offer. Identify ambiguous descriptors and propose clarifications labelled for panel approval. Add a moderation discussion agenda and decision log. Apply only supplied score rules; do not claim this exercise replaces official moderation procedures or authorises final marks.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Post-Test Analysis and Follow-Up",
                    description: "Translate aggregate item results into a balanced follow-up plan.",
                    tags: ["UASA", "Analysis", "Remediation", "Enrichment"],
                    prompt: `Support Year 5 UASA teaching in Malaysia for [Subject]. Use [Format dan Keperluan Disahkan] supplied by the teacher and [Verified DSKP Details]. Do not invent formats, marks, cognitive distributions or timing.

Analyse [Synthetic or Aggregate Item Results with Denominators] using [Item-to-Skill Mapping] and [Aggregate Teaching Observations]. Show calculations, missing data and limits; do not infer causes from percentages alone. Output a skill/evidence/tentative-explanation/action table and a [Number of Weeks]-week remedial and enrichment plan. Include flexible grouping, original follow-up tasks, answers and review criteria. Distinguish absent responses from incorrect ones where data allow, and avoid pupil rankings or unsupported official grade conversions.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.`
                },
                {
                    title: "Feedback and Parent Letter",
                    description: "Draft constructive feedback and a family letter from safe learning summaries.",
                    tags: ["UASA", "Feedback", "Parents", "Home Learning"],
                    prompt: `Support Year 5 UASA teaching in Malaysia for [Subject]. Use [Format dan Keperluan Disahkan] supplied by the teacher and [Verified DSKP Details]. Do not invent formats, marks, cognitive distributions or timing.

Using [Synthetic Learning Profile], [Preferred Language] and [School Contact Role], draft a feedback table and a short parent letter. Give two strengths, one priority skill, a practical school action and two low-cost home activities with an original example. Set a review point using [Review Period]. Keep the tone supportive and avoid comparisons or guaranteed outcomes. This task concerns Year 5; do not generalise the MPT4 FAQ exemption to all UASA pupils or invent school policy.

Use synthetic or aggregate data only; never include student names, IC numbers or personal records. Create original questions only; do not copy past papers or textbook text. If official details are missing, say UNVERIFIED and ask the teacher before proceeding with dependent work. End with a reminder that the teacher must review accuracy, suitability and alignment before use.

Reference: Matriks Pembelajaran FAQ (Lembaga Peperiksaan), Q9 (Matriks Pembelajaran exemption scope).`
                }
            ]
        }
    ]
};

// Add all categories as filter buttons
const allCategories = promptsData.categories.map(cat => ({
    id: cat.id,
    name: cat.name
}));