# Comfy Chatbot – Your Favourite Safe Place

A full-stack conversational chatbot built using Angular + Node.js + Supabase.  
Focused on mental health, emotional well-being, and creating a safe, soothing user experience.

---

## 🌿 Features

- 200+ categorized mental health intent-response pairs
- CLINC50-inspired structure, but fully customized
- Supabase-powered backend – live API-connected, no local storage
- Dark mode & soft therapeutic UI
- Prompt suggestions when input is unclear
- Explainable, safe, and scalable for AI/ML research

---

## 🛠 Tech Stack

- **Frontend:** Angular 17 (standalone components, dark UI)
- **Backend:** Node.js + Express
- **Database:** Supabase (used as intent-response store)
- **Design:** Ubuntu / Roboto fonts, warm colors, clean spacing

---

## 🚀 How to Run

### Backend
```bash
cd cb_backend
npm install
cp .env.example .env   # Add your Supabase URL and anon key
node upload_clinc50.js # Populate mental health intents
node server.js
