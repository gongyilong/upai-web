import { Component, ViewChild, OnInit } from '@angular/core';
import { NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';
import { TransferChange } from 'ng-zorro-antd/transfer';
import { NzTreeComponent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-user-permission',
  templateUrl: './user-permission.component.html',
  styleUrls: ['./user-permission.component.css']
})
export class UserPermissionComponent {
  @ViewChild('tree', { static: true }) tree!: NzTreeComponent;
  list: NzTreeNodeOptions[] = [
    { key: '1', id: 1, parentid: 0, title: '模块1' },
    { key: '2', id: 2, parentid: 1, title: '功能 1-1', isLeaf: true },
    { key: '3', id: 3, parentid: 1, title: '功能 1-2', isLeaf: true },
    { key: '4', id: 4, parentid: 1, title: '功能 1-3', isLeaf: true },
    { key: '5', id: 5, parentid: 1, title: '功能 1-4', isLeaf: true },
    { key: '6', id: 6, parentid: 0, title: '模块2' },
    { key: '7', id: 7, parentid: 6, title: '功能 2-1', isLeaf: true },
    { key: '8', id: 8, parentid: 6, title: '功能 2-2', isLeaf: true },
    { key: '9', id: 9, parentid: 6, title: '功能 2-3', isLeaf: true },
    { key: '10', id: 10, parentid: 6, title: '功能 2-4', isLeaf: true }
  ];
  treeData = this.generateTree(this.list);
  checkedNodeList: NzTreeNode[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  private generateTree(arr: NzTreeNodeOptions[]): NzTreeNodeOptions[] {
    const tree: NzTreeNodeOptions[] = [];
    // tslint:disable-next-line:no-any
    const mappedArr: any = {};
    let arrElem: NzTreeNodeOptions;
    let mappedElem: NzTreeNodeOptions;

    for (let i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem['id']] = { ...arrElem };
      mappedArr[arrElem['id']].children = [];
    }

    for (const id in mappedArr) {
      if (mappedArr.hasOwnProperty(id)) {
        mappedElem = mappedArr[id];
        if (mappedElem['parentid']) {
          mappedArr[mappedElem['parentid']].children.push(mappedElem);
        } else {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  }

  checkBoxChange(node: NzTreeNode, onItemSelect: (item: NzTreeNodeOptions) => void): void {
    if (node.isDisabled) {
      return;
    }
    node.isChecked = !node.isChecked;
    if (node.isChecked) {
      this.checkedNodeList.push(node);
    } else {
      const idx = this.checkedNodeList.indexOf(node);
      if (idx !== -1) {
        this.checkedNodeList.splice(idx, 1);
      }
    }
    const item = this.list.find(w => w['id'] === node.origin['id']);
    onItemSelect(item!);
  }

  change(ret: TransferChange): void {
    const isDisabled = ret.to === 'right';
    this.checkedNodeList.forEach(node => {
      node.isDisabled = isDisabled;
      node.isChecked = isDisabled;
    });
  }
}
