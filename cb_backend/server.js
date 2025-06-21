const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message?.toLowerCase();
  console.log("🔹 Received from user:", userMessage);

  if (!userMessage) {
    console.log("❌ Empty message received");
    return res.status(400).json({ reply: 'Invalid message input.' });
  }

  try {
    const { data: patterns, error } = await supabase.from('intents').select('*');
    
    if (error) {
      console.error("❌ Supabase fetch error:", error);
      return res.status(500).json({ reply: 'Server error while fetching intents.' });
    }

    console.log("✅ Supabase data:", patterns);

    const match = patterns.find(row => userMessage.includes(row.pattern.toLowerCase()));
    
    if (match) {
      console.log("✅ Match found:", match.pattern);
      return res.json({ reply: match.response });
    } else {
      console.log("⚠️ No match found.");
      return res.json({ reply: "Sorry, I didn’t understand that." });
    }
  } catch (err) {
    console.error("❌ Unexpected server error:", err);
    return res.status(500).json({ reply: 'Unexpected server error.' });
  }
});

app.listen(port, () => {
  console.log(`✅ Chatbot server running at http://localhost:${port}`);
});
