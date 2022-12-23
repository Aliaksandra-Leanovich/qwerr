import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Services';
  usersToken: any;

  getToken() {
    this.usersToken = localStorage.getItem('userToken');
  }
}
