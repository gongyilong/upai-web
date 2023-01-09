import { Component } from '@angular/core';
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class WorkplaceComponent {
  loading = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit():void{
    this.createChart1();
    this.createChart2();
    this.createChart3();
    this.createChart4();
  }


  createChart1(){
    const data = [
      { year: '1', value: 100 },
      { year: '2', value: 102 },
      { year: '3', value: 103 },
      { year: '4', value: 200 },
      { year: '5', value: 400 },
      { year: '6', value: 100 },
      { year: '7', value: 99 },
      { year: '8', value: 20 },
      { year: '9', value: 87 },
    ];
    const chart = new Chart({
      container: 'container1',
      autoFit: true,
      height: 100,
    });

    chart.data(data);
    chart.scale({
      value: {
        min: 0,
        nice: true,
      },
      year: {
        range: [0, 1],
      },
    });
    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('value', {
      label: {
        formatter: (val) => {
          return (+val / 10000).toFixed(1) + 'k';
        },
      },
    });

    chart.area().position('year*value');
    chart.line().position('year*value');

    chart.render();

  }

  createChart2(){
    const data = [
      { type: '一月', value: 654, percent: 0.02 },
      { type: '二月', value: 654, percent: 0.02 },
      { type: '三月', value: 4400, percent: 0.2 },
      { type: '四月', value: 5300, percent: 0.24 },
      { type: '五月', value: 6200, percent: 0.28 },
      { type: '六月', value: 3300, percent: 0.14 },
    ];

    const chart = new Chart({
      container: 'container2',
      autoFit: true,
      height: 100,
    });
    chart.data(data);
    chart.scale('value', {
      alias: '销售额(万)',
    });

    chart.axis('type', {
      tickLine: {
        alignTick: false,
      },
    });
    chart.axis('value', false);

    chart.tooltip({
      showMarkers: false,
    });
    chart.interval().position('type*value');
    chart.interaction('element-active');
    chart.render();
  }

  createChart3(){
    const data = [
      { country: '道路积水识别', year: '一月', value: 502 },
      { country: '道路积水识别', year: '二月', value: 635 },
      { country: '道路积水识别', year: '三月', value: 809 },
      { country: '道路积水识别', year: '四月', value: 5268 },
      { country: '道路积水识别', year: '五月', value: 4400 },
      { country: '道路积水识别', year: '六月', value: 3634 },
      { country: '河道漂浮物检测', year: '一月', value: 106 },
      { country: '河道漂浮物检测', year: '二月', value: 107 },
      { country: '河道漂浮物检测', year: '三月', value: 111 },
      { country: '河道漂浮物检测', year: '四月', value: 1766 },
      { country: '河道漂浮物检测', year: '五月', value: 221 },
      { country: '河道漂浮物检测', year: '六月', value: 767 },
      { country: 'ocr数字识别', year: '一月', value: 163 },
      { country: 'ocr数字识别', year: '二月', value: 203 },
      { country: 'ocr数字识别', year: '三月', value: 276 },
      { country: 'ocr数字识别', year: '四月', value: 628 },
      { country: 'ocr数字识别', year: '五月', value: 547 },
      { country: 'ocr数字识别', year: '六月', value: 729 },
      { country: '遥感影像分类', year: '一月', value: 200 },
      { country: '遥感影像分类', year: '二月', value: 200 },
      { country: '遥感影像分类', year: '三月', value: 200 },
      { country: '遥感影像分类', year: '四月', value: 460 },
      { country: '遥感影像分类', year: '五月', value: 230 },
      { country: '遥感影像分类', year: '六月', value: 300 },
    ];
    const chart = new Chart({
      container: 'container3',
      autoFit: true,
      height: 115,
    });

    chart.data(data);
    chart.scale('value', {
      nice: true,
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart
      .area()
      .adjust('stack')
      .position('year*value')
      .color('country');
    chart
      .line()
      .adjust('stack')
      .position('year*value')
      .color('country');

    chart.interaction('element-highlight');

    chart.render();
  }

  createChart4(){
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json')
  .then(res => res.json())
  .then(data => {
    const chart = new Chart({
      container: 'c4',
      autoFit: true,
      height: 315,
    });

    chart.data(data);
    chart.scale({
      nlp: {
        min: 0,
        max: 100
      },
      blockchain: {
        min: 0,
        max: 100
      }
    });

    chart.axis('nlp', false);

    chart.legend({
      custom: true,
      items: [
        { name: 'blockchain', value: 'blockchain', marker: { symbol: 'line', style: { stroke: '#1890ff', lineWidth: 2 } } },
        { name: 'nlp', value: 'nlp', marker: { symbol: 'line', style: { stroke: '#2fc25b', lineWidth: 2 } } },
      ],
    });

    chart.line().position('date*blockchain').color('#1890ff');
    chart.line().position('date*nlp').color('#2fc25b');

    chart.annotation().dataMarker({
      top: true,
      position: ['2016-02-28', 9],
      text: {
        content: 'Blockchain 首超 NLP',
        style: {
          textAlign: 'left',
        },
      },
      line: {
        length: 30,
      },
    });
    chart.annotation().dataMarker({
      top: true,
      position: ['2017-12-17', 100],
      line: {
        length: 30,
      },
      text: {
        content: '2017-12-17, 受比特币影响，\n blockchain搜索热度达到顶峰\n峰值：100',
        style: {
          textAlign: 'right',
        }
      },
    });
    chart.removeInteraction('legend-filter'); // 自定义图例，移除默认的分类图例筛选交互
    chart.render();
  });
  }
}
