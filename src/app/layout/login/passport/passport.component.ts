import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.css']
})

export class PassportComponent {
  passwordVisible = false;
  password?: string;
  username?: string;

  constructor(private router: Router) { }

  /********** 方法 **********/
  login():void {
    this.router.navigate(['/back'])
  }
}
