import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: { name: string; email: string }[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }
}
