import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { APIS } from '../../../../mock/mock-application'
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent {
  /********** 全局变量 **********/
  fileList: NzUploadFile[] = [];
  applications:any[] = [];
  application:any = '';
  tags:any;
  previewImage: any;
  previewVisible = false;
  id:any;
  id_typ = {
    0:['water','semantic_seg'],
    1:['river','object_detection'],
    5:['helmet','object_detection'],
  };
  /********** 构造函数 **********/
  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  /********** 生命周期 **********/
  ngOnInit(): void {
    this.getApps();
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.application = this.applications[+ this.id ];
      this.tags = this.application.tags;
      this.previewImage = this.application.image_url;
    });
  }

  /********** 函数方法 **********/
  //返回上一视图
  goBack(): void {
    this.location.back();
  }

  getApps(): void {
    this.applications = APIS['/api/v1/activities'];
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    console.log(file)
    this.handlePreview(file);
    return false;
  };

  getBase64(file:any): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  //图片上传接口
  // handleUpload(): void {
  //   const formData = new FormData();
  //   this.fileList.forEach((file: any) => {
  //     formData.append('file', file);
  //   });
  //   let p = this.id_typ[this.id]
  //   formData.append('type', p[0]);
  //   this.http.post('http://localhost:5000/api/v1/upload', formData).subscribe((res: any) => {
  //     this.fileList = [];
  //     console.log(res);
  //     this.detect(res);
  //     this.msg.success('upload successfully.');
  //   });
  // }

  //图片检测
  // detect(img_info:any): void {
  //   let p = this.id_typ[this.id]
  //   let params = { id: "1", path: img_info.path, d_class: p[0], d_type: p[1] }
  //   this.http.post('http://localhost:5000/api/v1/detection', params).subscribe((res: any) => {
  //     console.log(res)
  //     this.msg.success(res.message);
  //     this.previewImage = "http://localhost:5000/" + res.result.path
  //   });
  // }

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file['preview']) {
      file['preview'] = await this.getBase64(file);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };
}
