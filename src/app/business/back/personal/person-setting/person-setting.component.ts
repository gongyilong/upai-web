import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-person-setting',
  templateUrl: './person-setting.component.html',
  styleUrls: ['./person-setting.component.css']
})
export class PersonSettingComponent {
  constructor() { }

  ngOnInit(): void {

  }

  selectedProvince = 'Zhejiang';
  selectedCity = 'Hangzhou';
  provinceData = ['Zhejiang', 'Jiangsu'];
  cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };

  provinceChange(value: string): void {
    this.selectedCity = this.cityData[value][0];
  }

  loading = false;
  data = [
    {
      title: '账户密码',
      description: '当前密码强度：：强',
      action: '修改'
    },
    {
      title: '密保手机',
      description: '已绑定手机：：138****8293',
      action: '修改'
    },
    {
      title: '密保问题',
      description: '未设置密保问题，密保问题可有效保护账户安全',
      action: '设置'
    },
    {
      title: '备用邮箱',
      description: '已绑定邮箱：：ant***sign.com',
      action: '修改'
    },
    {
      title: 'MFA 设备',
      description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
      action: '绑定'
    }
  ];

  data1 = [
    {
      title: '绑定淘宝',
      description: '当前未绑定淘宝账号',
      action: '绑定'
    },
    {
      title: '绑定支付宝',
      description: '当前未绑定支付宝账号',
      action: '绑定'
    },
    {
      title: '绑定钉钉',
      description: '当前未绑定钉钉账号',
      action: '绑定'
    }
  ];

  data2 = [
    {
      title: '账户密码',
      description: '其他用户的消息将以站内信的形式通知',
      action: 'true'
    },
    {
      title: '系统消息',
      description: '系统消息将以站内信的形式通知',
      action: 'true'
    },
    {
      title: '待办任务',
      description: '待办任务将以站内信的形式通知',
      action: 'false'
    }
  ];
}
