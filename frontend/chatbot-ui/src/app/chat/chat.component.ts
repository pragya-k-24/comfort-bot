import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: { text: string, sender: 'user' | 'bot' }[] = [];
  userInput = '';
  showPrompts = false;
  fallbackPrompts: string[] = [
    "i feel anxious",
    "i think i am depressed",
    "i feel worthless",
    "tell me something positive",
    "i need help",
    "comfort me"
  ];

  constructor(private chatService: ChatService) {}

  sendMessage() {
    const input = this.userInput.trim();
    if (!input) return;

    this.messages.push({ text: input, sender: 'user' });

    this.chatService.sendMessage(input).subscribe({
      next: (response) => {
        this.messages.push({ text: response.reply, sender: 'bot' });
        this.showPrompts = response.reply.includes("didn’t understand") || response.reply.includes("didn't understand");
      },
      error: (err) => {
        this.messages.push({ text: '⚠️ Server error. Try again later.', sender: 'bot' });
        this.showPrompts = true;
        console.error('Chat API error:', err);
      }
    });

    this.userInput = '';
  }

  usePrompt(prompt: string) {
    this.userInput = prompt;
    this.sendMessage();
  }
}
