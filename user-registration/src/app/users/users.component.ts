import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : any[] = [];
   editingUser: any = null;

  constructor(private userService : UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error(err)
    });
  }

  
  onEditUser(user: any) {
    this.editingUser = { ...user }; 
  }

  saveEdit() {
    const index = this.users.findIndex(u => u.id === this.editingUser.id);
    if (index !== -1) {
      this.users[index] = this.editingUser;
    }
    this.editingUser = null;
  }

  
  cancelEdit() {
    this.editingUser = null;
  }

  onDeleteUser(user: any) {
    this.users = this.users.filter(u => u.id !== user.id);
  }


}
