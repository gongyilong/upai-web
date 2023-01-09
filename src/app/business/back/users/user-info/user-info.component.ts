import { Component } from '@angular/core';
import { APIS } from 'src/app/mock/mock-application';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  listOfColumn = [
    {
      title: '用户id',
      priority: 1
    },
    {
      title: '用户名称',
    },
    {
      title: '用户角色',
    },
    {
      title: '权属机构',
    },
    {
      title: '注册时间'
    },
    {
      title: '许可过期时间'
    },
    {
      title: '操作'
    },
  ];

  listOfData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getApps();
  }

  getApps(): void {
    this.listOfData = APIS['/api/v1/get_userinfo'];
  }
}
