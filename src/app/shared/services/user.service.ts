import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: "Emma",
      lastname: "Johnson",
      email: "emma.johnson@example.com",
      phone: "+1 234 567 8901",
      calification: 8.5,
      state: "active"
    },
    {
      id: 2,
      name: "Noah",
      lastname: "Smith",
      email: "noah.smith@example.com",
      phone: "+1 234 567 8902",
      calification: 7.2,
      state: "inactive"
    },
    {
      id: 3,
      name: "Olivia",
      lastname: "Brown",
      email: "olivia.brown@example.com",
      phone: "+1 234 567 8903",
      calification: 9.1,
      state: "active"
    },
    {
      id: 4,
      name: "William",
      lastname: "Davis",
      email: "william.davis@example.com",
      phone: "+1 234 567 8904",
      calification: 6.4,
      state: "active"
    },
    {
      id: 5,
      name: "Ava",
      lastname: "Garcia",
      email: "ava.garcia@example.com",
      phone: "+1 234 567 8905",
      calification: 8.8,
      state: "inactive"
    }
  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(id: number): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
