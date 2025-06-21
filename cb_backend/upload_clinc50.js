const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const intents = [
  // ✅ Greetings & Conversation
  { tag: 'greeting', pattern: 'hello', response: 'Hi there! How can I assist you today?' },
  { tag: 'greeting', pattern: 'hi', response: 'Hello! What’s on your mind?' },
  { tag: 'greeting', pattern: 'hey', response: 'Hey there, how are you feeling today?' },
  { tag: 'greeting', pattern: 'good morning', response: 'Good morning! Hope today treats you well.' },
  { tag: 'greeting', pattern: 'good evening', response: 'Evening! What would you like to talk about?' },
  { tag: 'goodbye', pattern: 'bye', response: 'Take care. I’m here if you need me again.' },
  { tag: 'goodbye', pattern: 'see you', response: 'See you soon. Stay safe.' },
  { tag: 'smalltalk', pattern: 'how are you', response: 'I’m here for you. How are *you* doing?' },
  { tag: 'smalltalk', pattern: 'what can you do', response: 'I can talk with you, suggest ideas, and listen when you need me.' },
  { tag: 'smalltalk', pattern: 'are you a bot', response: 'I am, but I try to be a kind one.' },

  // ✅ Mental Health Intents
  { tag: 'anxiety', pattern: 'i feel anxious', response: 'I’m here with you. Breathing slowly can help. Want a grounding exercise?' },
  { tag: 'anxiety', pattern: 'i have anxiety', response: 'That’s okay. You’re not alone. Want to talk about what’s causing it?' },
  { tag: 'depression', pattern: 'i feel sad', response: 'I’m listening. Do you want to talk about what’s making you feel that way?' },
  { tag: 'depression', pattern: 'i think i am depressed', response: 'You matter. If you’re comfortable, I can suggest ways to cope or talk it through.' },
  { tag: 'loneliness', pattern: 'i feel lonely', response: 'I’m here. Would you like to talk or hear something comforting?' },
  { tag: 'overwhelmed', pattern: 'i feel overwhelmed', response: 'That’s a lot to carry. Want to take a deep breath together?' },
  { tag: 'panic_attack', pattern: "i think i'm having a panic attack", response: 'Let’s pause and breathe. In through your nose, hold, out slowly. I’m here.' },
  { tag: 'stress', pattern: "i'm really stressed", response: 'Totally valid. Want a simple self-care suggestion or something relaxing?' },
  { tag: 'motivation', pattern: 'i have no motivation', response: 'Sometimes rest is productive too. Want a gentle nudge or a quote?' },
  { tag: 'hopelessness', pattern: 'i feel hopeless', response: 'I’m so sorry you’re feeling this. Want to hear some words that helped others?' },
  { tag: 'support_request', pattern: 'i need help', response: 'I’m here for you. Want emotional support, motivation, or distraction?' },
  { tag: 'suicidal_thoughts', pattern: 'i want to die', response: 'You’re not alone. Please talk to someone you trust. Would you like a helpline number?' },
  { tag: 'sleep_trouble', pattern: 'i can’t sleep', response: 'Would a relaxing audio or a breathing exercise help?' },
  { tag: 'self_hate', pattern: 'i hate myself', response: 'That hurts to hear. But I’m here. You are worth more than these thoughts.' },
  { tag: 'worthless', pattern: 'i feel worthless', response: 'You are not. Feelings can lie to us. I’ll remind you you matter.' },
  { tag: 'anger', pattern: 'i am angry', response: 'Anger is valid. Want to talk it out or do something that helps vent?' },
  { tag: 'grief', pattern: 'i lost someone', response: 'That’s heartbreaking. I’m here if you want to talk about them.' },
  { tag: 'coping_tips', pattern: 'how do i cope', response: 'Different things help different people. Want suggestions?' },
  { tag: 'safe_space', pattern: 'i want to feel safe', response: 'This space is for you. I’ll be gentle and present.' },
  { tag: 'affirmations', pattern: 'tell me something positive', response: 'You’ve survived 100% of your hardest days. That’s strength.' },
  { tag: 'breathe', pattern: 'help me breathe', response: 'Okay. Inhale...2...3... Hold...2...3... Exhale...2...3. Again?' },
  { tag: 'comfort', pattern: 'comfort me', response: 'You’re not broken. You’re healing. And I’m proud of you for reaching out.' },
  { tag: 'thank_you', pattern: 'thank you', response: 'Always here for you. You’re doing better than you think.' },
  { tag: 'check_in', pattern: 'can you check on me', response: 'Of course. How’s your mind feeling right now?' },
  { tag: 'help_friend', pattern: 'my friend is struggling', response: 'You’re a good friend. Listening and being there helps. Want ideas?' },
  { tag: 'is_this_normal', pattern: 'is it normal to feel this way', response: 'You’re not alone. So many people feel this. It’s okay.' },

];

async function uploadIntents() {
  for (const intent of intents) {
    const { error } = await supabase.from('intents').insert([intent]);
    if (error) {
      console.error('❌ Failed to insert:', intent, error);
    } else {
      console.log('✅ Inserted:', intent.pattern);
    }
  }
  console.log('🏁 Upload complete');
}

uploadIntents();
