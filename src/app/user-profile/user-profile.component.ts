import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    hidden: false
  };

  displayAge() {
    if (this.User["hidden"] === false) {
      document.getElementById("age").hidden = true;
      this.User.hidden = true;
    } else {
      document.getElementById("age").hidden = false;
      this.User.hidden = false;
    }
  };

}
