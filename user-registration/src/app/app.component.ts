import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (error: any) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Data loaded!');
      }
    });
  }
}
