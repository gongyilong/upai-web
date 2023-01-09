import { Component } from '@angular/core';
import { APIS } from '../../../../mock/mock-application';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent {

  listOfData: any = [];
  listOfColumn = [
    {
      title: '数据集id',
      // compare: (a: DataItem, b: DataItem) => a.dataset_id - b.dataset_id,
      priority: 1
    },
    {
      title: '数据集名称',
    },
    {
      title: '类型',
    },
    {
      title: '应用领域',
    },
    {
      title: '所有者'
    },
    {
      title: '简介'
    },
    {
      title: '下载链接'
    },
    {
      title: '大小'
    },
    {
      title: '操作'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.getDataset();
  }

  getDataset(): void {
    this.listOfData = APIS['/api/v1/get_dataset'];
  }
}
