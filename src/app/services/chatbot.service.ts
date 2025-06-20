import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface ChatResponse {
  message: string;
  route?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  constructor(private router: Router) { }

  getResponse(message: string): ChatResponse {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return { message: 'Hello! How can I help you today?' };
    }

    if (lowerCaseMessage.includes('help')) {
        return { message: "I can help you navigate the app. Try 'show org chart', 'show dashboard', or 'search for [employee name]'." };
    }

    if (lowerCaseMessage.includes('org chart')) {
      this.router.navigate(['/org-chart']);
      return { message: 'Navigating to the organization chart.'};
    }

    if (lowerCaseMessage.includes('dashboard')) {
        this.router.navigate(['/dashboard']);
        return { message: 'Navigating to the dashboard.' };
    }

    if (lowerCaseMessage.includes('all employees') || lowerCaseMessage.includes('employee list')) {
      this.router.navigate(['/employees']);
      return { message: 'Navigating to the employee list.' };
    }

    const searchMatch = lowerCaseMessage.match(/search for (.+)/);
    if (searchMatch && searchMatch[1]) {
        const query = searchMatch[1];
        this.router.navigate(['/search', query]);
        return { message: `Searching for "${query}".` };
    }

    const employeeMatch = lowerCaseMessage.match(/show me employee (\d+)/);
    if (employeeMatch && employeeMatch[1]) {
      const id = employeeMatch[1];
      this.router.navigate(['/employees', id]);
      return { message: `Showing details for employee ${id}.` };
    }

    return { message: "I'm sorry, I didn't understand that. Please try again." };
  }
} 