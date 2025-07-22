import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newName = '';
  newEmail = '';
  submitted = false;

  constructor(private dataService: DataService) {}

  addUser() {
    this.submitted = true;

    if (this.newName.trim() && this.newEmail.trim()) {
      const newUser = {
        name: this.newName,
        email: this.newEmail
      };

      this.dataService.addUser(newUser);
      this.newName = '';
      this.newEmail = '';
      this.submitted = false;
    }
  }
}
