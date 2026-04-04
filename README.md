# 🧠 Fitbud AI — Solving the Last Mile Problem in AI Fitness

Most AI fitness tools generate correct plans.

But users don’t follow them.

Fitbud is an experiment in solving this gap—focusing on **trust, tone, and usability**, not just model accuracy.



## 🚀 Features
- Personalized fitness plans
- Safe AI responses with guardrails
- Friendly conversational experience
- Adaptive recommendations

---

## 🧠 AI Design
- Built using LLMs (Gemini/OpenAI)
- Prompt-based guardrails for safety
- Context-aware responses

## 🏗️ Architecture

Fitbud AI is currently implemented as a lightweight, prompt-based system leveraging modern LLM capabilities.

- 🧠 **LLM Layer**  
  Built using **Google AI Studio** powered by the **Gemini 1.5 Pro (or latest available) model**, enabling natural language understanding and structured response generation.

- ⚙️ **Backend Logic (Prompt-Based)**  
  The system operates without a traditional backend. Core behavior is defined through carefully designed prompts that enforce:
  - Safety guardrails  
  - Structured outputs  
  - Context-aware follow-ups  

- 🛡️ **Governance Layer**  
  A prompt-engineered control layer ensures:
  - Safe and non-extreme fitness advice  
  - Transparency in AI interaction  
  - Inclusion of disclaimers for medical guidance  

- 🖥️ **User Interface**  
  Currently operates within **Google AI Studio (prototype environment)**  
  Future scope includes a **Streamlit-based interactive UI**

---

### 🔄 System Flow (Simplified)

User Input → Prompt Engineering Layer → Gemini LLM → Guardrail Filtering → Structured Response → User

---

## 🛠 Tech Stack
- Frontend: Vite + TypeScript
- AI: LLM API
- Environment: Node.js

---

## ⚙️ Setup

```bash
git clone https://github.com/your-username/fitbud-ai.git
cd fitbud-ai
npm install
npm run dev

## ⚙️** System Flow**

User Input → Prompt Engineering → LLM (Gemini API) → Guardrails → Structured Output → User

### **Design Principles:**
- Keep responses actionable, not verbose
- Maintain supportive tone
- Ensure safety via guardrails

## 🧠 **Key Product Decision**

### **Constraint:**
- Limited time (rapid prototyping)
- No custom dataset
- Need high-quality output

###** Options:**
- Fine-tuned model (too slow)
- Rule-based system (too rigid)
- API-based LLM (fast, flexible)

### **Decision:**
Chose Gemini API to prioritize speed and iteration.

### **Tradeoff:**
- Faster build vs higher cost
- Flexibility vs control

### **Future Direction**:
Move toward hybrid architecture (classifier + smaller models) to optimize cost and scale.

## 💬 Example Interaction

**Input:**
"Create a 5-day muscle gain plan"

**Output:**
[Paste real output]

### Why this works:
- Structured
- Easy to follow
- Supportive tone

## 📌 Key Learnings

- Model accuracy ≠ user satisfaction
- Tone significantly impacts engagement
- Fast iteration with APIs is critical early-stage

## 🛡️ AI Governance & Risk

- [Governance & Risk Log](docs/ai-governance-risk-log.md)


