import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users: { name: string; email: string }[] = [];

  constructor() {}

  addUser(user: { name: string; email: string }) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
