import { Component, OnInit } from '@angular/core';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Services';
  public usersToken: string | undefined;
  public checkRef = doc(db, 'checkField', 'check');
  public check: boolean = true;

  ngOnInit() {
    this.getToken();
  }

  private getToken() {
    this.usersToken = localStorage.getItem('userToken') as string;
  }

  public toggleCheck = async () => {
    await updateDoc(this.checkRef, {
      checked: true,
    });
  };
}
