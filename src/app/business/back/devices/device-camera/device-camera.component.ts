import { Component } from '@angular/core';
import { APIS } from 'src/app/mock/mock-application';

@Component({
  selector: 'app-device-camera',
  templateUrl: './device-camera.component.html',
  styleUrls: ['./device-camera.component.css']
})
export class DeviceCameraComponent {

  constructor() { }

  ngOnInit(): void {
    this.getDeviceCamera();
  }

  listOfColumn = [
    {
      title: '设备id',
      priority: 1
    },
    {
      title: '设备名称',
    },
    {
      title: '算法id',
      priority: 2
    },
    {
      title: '算法名称',
    },
    {
      title: 'IP地址'
    },
    {
      title: '端口号'
    },
    {
      title: '设备状态'
    },
    {
      title: '授权到期时间'
    },
    {
      title: '操作'
    },
  ];

  listOfData:any[] = [];

  getDeviceCamera(): void {
    this.listOfData = APIS['/api/v1/get_device_camera'];
  }

}
