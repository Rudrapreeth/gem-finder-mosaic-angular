import { Component, ElementRef, HostListener } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface Prompt {
  display: string;
  command: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ChatbotComponent {
  isOpen = false;
  messages: Message[] = [];
  userInput = '';
  showPrompts = false;
  prompts: Prompt[] = [
    { display: 'Show Dashboard', command: 'show dashboard' },
    { display: 'Show Org Chart', command: 'show org chart' },
    { display: 'List All Employees', command: 'show all employees' },
    { display: 'Need Help?', command: 'help' }
  ];

  constructor(private chatbotService: ChatbotService, private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.messages.length === 0) {
      this.messages.push({ sender: 'bot', text: 'Hello! How can I help you? Select a prompt or type a message.' });
      this.showPrompts = true;
    }
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.showPrompts = false;
      this.messages.push({ sender: 'user', text: this.userInput });
      const botResponse = this.chatbotService.getResponse(this.userInput);
      this.messages.push({ sender: 'bot', text: botResponse.message });
      this.userInput = '';
      this.showPrompts = true;
    }
  }

  selectPrompt(prompt: Prompt) {
    this.showPrompts = false;
    this.messages.push({ sender: 'user', text: prompt.display });
    const botResponse = this.chatbotService.getResponse(prompt.command);
    this.messages.push({ sender: 'bot', text: botResponse.message });
    this.showPrompts = true;
  }
} 