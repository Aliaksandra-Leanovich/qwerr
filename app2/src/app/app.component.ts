import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Services';
  public usersToken: string | undefined;

  ngOnInit() {
    this.getToken()
  }

  private getToken() {
   this.usersToken = localStorage.getItem('userToken') as string;
  }


}
