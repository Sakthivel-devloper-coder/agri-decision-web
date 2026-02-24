import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(ApiService);
  currentUser = signal<User | null>(null);

  login(email: string, password: string) {
    // Mocked login for scaffold
    this.currentUser.set({ id: 'u1', name: 'Demo User', email });
    return Promise.resolve(this.currentUser());
  }

  logout() {
    this.currentUser.set(null);
  }
}
