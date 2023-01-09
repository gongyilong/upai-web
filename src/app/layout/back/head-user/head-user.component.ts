import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-user',
  templateUrl: './head-user.component.html',
  styleUrls: ['./head-user.component.css']
})
export class HeadUserComponent {
  avatar = '龚祎垄'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginOut(): void{
    this.router.navigate(['login']);
  }
}
