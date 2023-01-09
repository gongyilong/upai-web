import { Component, OnInit } from '@angular/core';
import { APIS } from '../../../../mock/mock-application';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent {
  data: any = [];

  ngOnInit(): void {
    this.getTools();
  }

  getTools(): void {
    this.data = APIS['/api/v1/get_tool'];
  }
}
