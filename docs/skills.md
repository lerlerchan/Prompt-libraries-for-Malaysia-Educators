# Educational Skills Reference for AI CLI Tools
> Use this file with Ollama, Claude Code CLI, or any AI assistant.
> Malaysian educators — especially in rural areas — can use these skills offline with Ollama.

---

## How to Use

### With Ollama (Fully Offline)
```bash
# Run a skill prompt with Ollama
ollama run llama3.2 "$(cat docs/skills.md) — generate a lesson plan for Year 4 Science"

# Or with multilingual support (Malay/Chinese)
ollama run qwen2.5:3b "$(cat docs/skills.md) — 为小学四年级设计一份数学课教案"
```

### With Claude Code CLI
```bash
# Reference a skill by name
/skill teaching-design-lesson-plan-generator
```

### With Any AI Assistant
Paste the relevant skill section below into your AI chat, then describe your task.

---

## Skills by Category

### 1. Teaching & Curriculum Design (5 skills)

**teaching-design-lesson-plan-generator** | AI 教案產生工具
- Description: AI-assisted lesson plan generation aligned with KSSR/KSSM curriculum
- Example prompt: "Generate a 60-minute Year 5 Science lesson plan on ecosystems using inquiry-based learning, aligned with KSSM standards."

**teaching-design-adaptive-learning-design** | 自適應教學設計
- Description: Design adaptive learning pathways tailored to individual student needs
- Example prompt: "Design an adaptive learning sequence for Form 2 Mathematics on linear equations, with 3 difficulty levels."

**teaching-design-differentiated-instruction** | 差異化教學
- Description: Create differentiated instructional materials for mixed-ability classrooms
- Example prompt: "Create differentiated reading activities for a mixed-ability Year 3 English class on animals."

**teaching-design-project-based-learning** | 專題式學習
- Description: Design project-based learning units with real-world connections
- Example prompt: "Design a 2-week project-based learning unit for Form 1 Geography on local river ecosystems."

**teaching-design-competency-based-learning** | 核心素養教學
- Description: Develop competency-based learning activities aligned with 21st-century skills
- Example prompt: "Create a competency-based learning activity for Year 6 that develops critical thinking and communication skills."

---

### 2. Learning Analytics (4 skills)

**learning-analytics-learning-analytics** | 學習分析
- Description: Analyze student learning data to identify patterns and improve outcomes
- Example prompt: "Analyze this class quiz data and identify which students need additional support: [paste data]"

**learning-analytics-competency-based-assessment** | 素養導向評量
- Description: Design competency-based assessments aligned with learning outcomes
- Example prompt: "Create a competency-based assessment rubric for a Year 5 Science project on the water cycle."

**learning-analytics-peer-assessment** | 同儕評量
- Description: Design structured peer assessment activities and rubrics
- Example prompt: "Design a peer assessment form for a Form 3 Bahasa Malaysia essay writing task."

**learning-analytics-student-profiling** | 學生畫像分析
- Description: Create comprehensive student learning profiles based on assessment data
- Example prompt: "Create a student learning profile template for tracking progress in English across a semester."

---

### 3. Research Methods (4 skills)

**research-methods-education-research-design** | 教育研究設計
- Description: Design educational research studies with appropriate methodology
- Example prompt: "Help me design a research study to investigate the effectiveness of gamification in Form 1 Mathematics."

**research-methods-empirical-research-automation** | 實證研究自動化
- Description: Automate and streamline empirical research data collection and analysis
- Example prompt: "Create a data collection framework for measuring student engagement in a rural school setting."

**research-methods-mixed-methods** | 混合方法
- Description: Design mixed-methods research combining quantitative and qualitative approaches
- Example prompt: "Design a mixed-methods study to evaluate the impact of AI tools on teacher workload in Malaysian schools."

**research-methods-quasi-experimental-design** | 準實驗設計
- Description: Design quasi-experimental studies for educational interventions
- Example prompt: "Design a quasi-experimental study comparing two teaching methods for Year 4 Bahasa Malaysia."

---

### 4. Rural & Inclusive Education (2 skills)

**rural-education-localized-content-design** | 在地化內容設計
- Description: Design locally relevant educational content for rural Malaysian contexts (Sabah, Sarawak, Orang Asli communities)
- Example prompt: "Create a culturally relevant Science lesson on local plants for a rural Sabah primary school."

**rural-education-rural-education-integration** | 偏遠教育整合
- Description: Integrate technology and community resources for rural school education
- Example prompt: "Develop a strategy for integrating offline AI tools in a school with unreliable internet in rural Sarawak."

---

### 5. AI & Educational Technology (2 skills)

**ai-tools-teaching-tools** | AI 教學工具
- Description: Evaluate and implement AI teaching tools appropriate for Malaysian classrooms
- Example prompt: "Recommend 5 AI tools suitable for a Malaysian primary school with limited internet access."

**ai-tools-generative-ai-education** | 生成式 AI 教育
- Description: Design curricula and activities that teach students about generative AI responsibly
- Example prompt: "Create a lesson plan teaching Form 4 students about responsible use of generative AI."

---

### 6. ICT Integration (1 skill)

**ict-ict-integration** | ICT 整合融入
- Description: Integrate ICT tools across subject areas following MOE Malaysia guidelines
- Example prompt: "Suggest how to integrate ICT tools into a KSSM Year 3 Mathematics lesson on fractions."

---

### 7. Educational Technology (1 skill)

**math-tech-math-technology** | 數學科技教育
- Description: Use technology tools (GeoGebra, Desmos, etc.) to enhance Mathematics teaching
- Example prompt: "Design a GeoGebra activity for Form 2 students to explore the properties of quadrilaterals."

---

## Quick Reference — Chinese-English Mapping

| Skill (English) | 中文名稱 |
|---|---|
| Lesson Plan Generator | 教案產生工具 |
| Adaptive Learning Design | 自適應教學設計 |
| Differentiated Instruction | 差異化教學 |
| Project-Based Learning | 專題式學習 |
| Competency-Based Learning | 核心素養教學 |
| Learning Analytics | 學習分析 |
| Competency-Based Assessment | 素養導向評量 |
| Peer Assessment | 同儕評量 |
| Student Profiling | 學生畫像分析 |
| Educational Research Design | 教育研究設計 |
| Empirical Research Automation | 實證研究自動化 |
| Mixed Methods Research | 混合方法 |
| Quasi-Experimental Design | 準實驗設計 |
| Localized Content Design | 在地化內容設計 |
| Rural Education Integration | 偏遠教育整合 |
| AI Teaching Tools | AI 教學工具 |
| Generative AI Education | 生成式 AI 教育 |
| ICT Integration | ICT 整合融入 |
| Math-Technology Education | 數學科技教育 |

---

*Source: Malaysian Teachers Prompt Library — https://github.com/lerlerchan/Prompt-libraries-for-Malaysia-Educators*
