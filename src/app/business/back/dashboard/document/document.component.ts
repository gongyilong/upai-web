import { Component } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  tabs = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }
}
