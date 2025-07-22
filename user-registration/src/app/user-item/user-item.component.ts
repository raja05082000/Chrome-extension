import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent {
  @Input() user!: { name: string; email: string };
  @Output() deleteUser = new EventEmitter<any>();
  @Output() editUser = new EventEmitter<any>();

   openEditPopup() {
    this.editUser.emit(this.user); 
  }

  onDelete() {
    this.deleteUser.emit(this.user); 
  }



}
