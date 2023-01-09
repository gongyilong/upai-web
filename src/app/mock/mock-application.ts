const cover = [
  '../../../../../assets/layout/back/application/jishui.jpg',
  '../../../../../assets/layout/back/application/hedao.jpg',
  '../../../../../assets/layout/back/application/ocr.jpg',
  '../../../../../assets/layout/back/application/stree.jpg',
  '../../../../../assets/layout/back/application/biaochi.jpg',
  '../../../../../assets/layout/back/application/anquanmao.jpg',
  '../../../../../assets/layout/back/application/garbage.jpg',
  '../../../../../assets/layout/back/application/satellite.jpg',
  '../../../../../assets/layout/back/application/people.jpg',
  '../../../../../assets/layout/back/application/fire.jpg',
  '../../../../../assets/layout/back/application/face.jpg',
  '../../../../../assets/layout/back/application/traffic-sign.jpg'
];

const introduction = [
  '基于人工智能视觉分析技术，实时识别雨天或洪水路面积水情况，对于严重积水时立即报警，提醒管理人员排水疏通，设立警告标志，避免人车安全事故。',
  '基于人工智能视觉分析技术，自动识别江面河道是否存在化工排污，白色垃圾、人员、救生圈、船只等漂浮物，及时进行河道污染治理，或人员船只救援。',
  '基于人工智能视觉分析技术，对图片中的数字进行提取和识别，自动过滤非数字内容，仅返回数字内容及其位置信息。',
  '基于人工智能视觉分析技术，自动分割街景图像，计算视廊通视率、绿化率、舒适度评价。',
  '基于人工智能视觉分析技术，通过现场摄像头拍摄水文标尺图像,实时处理图像信息以识别、输出水位信息。减少人力测量、记录的时间、人力、物力成本。',
  '基于大规模安全帽数据识别训练，配合现场摄像头，实现自动识别现场作业人员的安全帽佩戴情况，准确率高于90%，达到高效率监督监管。',
  '基于人工智能分析技术，自动识别垃圾桶是否装满或者垃圾桶垃圾是否溢出，同时检测垃圾桶周围区域是否有垃圾堆放，如检测到垃圾桶仓满溢出或者垃圾桶周围有垃圾堆放等情况，立即通知管理人员及时清理。',
  '基于深度学习的遥感影像自动分类，更加快速、便捷、高效。',
  '基于LSTM神经网络预测人流量，应用于热点区域、客运站、机场等。',
  '基于大规模火焰数据识别训练，配合摄像头，实时识别监控区内明火情况，立刻发出警报，提醒监控室查看，及时止损。适用于室内外多种复杂环境。',
  '人脸识别可应用于智慧楼宇。',
  '基于深度学习的交通标志检测，应用于无人车自动检测交通标志',
]

function getApplications(): any[] {
  return [
    {
      id: '0',
      name: "道路积水检测",
      watch: 100,
      type: "stree-water",
      image_url: cover[0],
      tags: ["智慧交通", "智慧城管", "语义分割"],
      difficulty: "4",
      description: introduction[0],
      enable: 1
    },
    {
      id: '1',
      name: "河道漂浮物检测",
      watch: 101,
      type: "river-rubbish",
      image_url: cover[1],
      tags: ["智慧水务", "生态", "目标检测"],
      difficulty: "4",
      description: introduction[1],
      enable: 1
    },
    {
      id: '2',
      name: "OCR数字识别",
      watch: 105,
      type: "ocr-num",
      image_url: cover[2],
      tags: ["智慧城市", "字符分割", "图像识别"],
      difficulty: "3",
      description: introduction[2],
      enable: 1
    },
    {
      id: '3',
      name: "街景分割",
      watch: 185,
      type: "stree-seg",
      image_url: cover[3],
      tags: ["智慧园林", "城乡规划", "语义分割"],
      difficulty: "3",
      description: introduction[3],
      enable: 0
    },
    {
      id: '4',
      name: "水尺读数",
      watch: 109,
      type: "rule-num",
      image_url: cover[4],
      tags: ["智慧水务", "图像分割", "目标检测"],
      difficulty: "4",
      description: introduction[4],
      enable: 0
    },
    {
      id: '5',
      name: "安全帽佩戴检测",
      watch: 197,
      type: "safety-helmet",
      image_url: cover[5],
      tags: ["智慧工地", "建筑", "目标检测"],
      difficulty: "3",
      description: introduction[5],
      enable: 0
    },
    {
      id: '6',
      name: "河道垃圾检测",
      watch: 159,
      type: "rubbish-cla",
      image_url: cover[6],
      tags: ["智慧城管", "生态环保", "目标检测"],
      difficulty: "4",
      description: introduction[6],
      enable: 0
    },
    {
      id: '7',
      name: "遥感影像分类",
      watch: 127,
      type: "image-cla",
      image_url: cover[7],
      tags: ["智慧城市", "遥感", "语义分割"],
      difficulty: "4",
      description: introduction[7],
      enable: 0
    },
    {
      id: '8',
      name: "人流量预测",
      watch: 159,
      type: "people-flow",
      image_url: cover[8],
      tags: ["智慧城市", "应急", "LSTM"],
      difficulty: "4",
      description: introduction[8],
      enable: 0
    },
    {
      id: '9',
      name: "火焰监测",
      watch: 127,
      type: "fire-detection",
      image_url: cover[9],
      tags: ["智慧林业", "森林火灾", "目标检测"],
      difficulty: "4",
      description: introduction[9],
      enable: 0
    },
    {
      id: '10',
      name: "人脸识别",
      watch: 159,
      type: "face-recognition",
      image_url: cover[10],
      tags: ["智慧楼宇", "安防", "目标检测"],
      difficulty: "4",
      description: introduction[10],
      enable: 0
    },
    {
      id: '11',
      name: "交通标志识别",
      watch: 127,
      type: "traffic-detection",
      image_url: cover[11],
      tags: ["智慧交通", "无人车", "目标检测"],
      difficulty: "4",
      description: introduction[11],
      enable: 0
    },
  ];
}

function getTools(): any[] {
  return [
    {
      href: 'http://ant.design',
      title: `LabelMe`,
      avatar: 'https://img-blog.csdn.net/20180111163955390?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2hhaXBwMDYwNw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast',
      description: 'Labelme适用于图像分割任务的数据集制作。',
      github_link: 'https://github.com/wkentaro/labelme',
      download_link: 'https://github.com/wkentaro/labelme',
      csdn_link: 'https://blog.csdn.net/chaipp0607/article/details/79036312',
      content:
        'github： ' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    }, {
      href: 'http://ant.design',
      title: `LabelImg`,
      avatar: 'https://img-blog.csdn.net/20180111164153400?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2hhaXBwMDYwNw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast',
      description: 'Labelme适用于图像检测任务的数据集制作。',
      github_link: 'https://github.com/tzutalin/labelImg',
      download_link: 'https://github.com/tzutalin/labelImg',
      csdn_link: 'https://blog.csdn.net/chaipp0607/article/details/79036312',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources ' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    }, {
      href: 'http://ant.design',
      title: `Yolo_mark`,
      avatar: 'https://img-blog.csdn.net/20180111164708929?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2hhaXBwMDYwNw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast',
      description: 'yolo_mark适用于图像检测任务的数据集制作。',
      github_link: 'https://github.com/AlexeyAB/Yolo_mark',
      download_link: 'https://github.com/AlexeyAB/Yolo_mark',
      csdn_link: 'https://blog.csdn.net/chaipp0607/article/details/79036312',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources ' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    }
  ]
}

function getDataset(): any[] {
  return [
    {
      dataset_id: 1,
      dataset_name: "TT100K",
      type: "目标检测",
      field: "交通",
      owner: "Tsinghua-Tencent",
      desp: "TT100K是清华-腾讯实验室发布的交通标志数据集，用于交通标志检测~",
      download_link: "https://cg.cs.tsinghua.edu.cn/traffic-sign/",
      size: "50G"
    },
    {
      dataset_id: 2,
      dataset_name: "TT100K",
      type: "目标检测",
      field: "交通",
      owner: "Tsinghua-Tencent",
      desp: "TT100K是清华-腾讯实验室发布的交通标志数据集，用于交通标志检测~",
      download_link: "https://cg.cs.tsinghua.edu.cn/traffic-sign/",
      size: "50G"
    },
    {
      dataset_id: 3,
      dataset_name: "TT100K",
      type: "目标检测",
      field: "交通",
      owner: "Tsinghua-Tencent",
      desp: "TT100K是清华-腾讯实验室发布的交通标志数据集，用于交通标志检测~",
      download_link: "https://cg.cs.tsinghua.edu.cn/traffic-sign/",
      size: "50G"
    },
    {
      dataset_id: 4,
      dataset_name: "TT100K",
      type: "目标检测",
      field: "交通",
      owner: "Tsinghua-Tencent",
      desp: "TT100K是清华-腾讯实验室发布的交通标志数据集，用于交通标志检测~",
      download_link: "https://cg.cs.tsinghua.edu.cn/traffic-sign/",
      size: "50G"
    }
  ]
}

function getUserInfo(): any[] {
  return [
    {
      user_id: 1,
      user_name: "admin",
      user_role: "管理员",
      user_owner: "珠海市规划设计研究院",
      start_time: "2021-02-15",
      end_time: "2021-06-15"
    },
    {
      user_id: 2,
      user_name: "Dlog",
      user_role: "超级管理员",
      user_owner: "大龙网络科技有限公司",
      start_time: "2021-02-15",
      end_time: "2028-06-15"
    },
    {
      user_id: 3,
      user_name: "袁党党",
      user_role: "普通用户",
      user_owner: "xxx公司",
      start_time: "2021-02-15",
      end_time: "2021-06-15"
    },
    {
      user_id: 4,
      user_name: "陈晓山",
      user_role: "普通用户",
      user_owner: "xx市规划设计研究院",
      start_time: "2021-02-15",
      end_time: "2021-06-15"
    },
    {
      user_id: 5,
      user_name: "gongyl",
      user_role: "普通用户",
      user_owner: "珠海市规划设计研究院",
      start_time: "2021-02-15",
      end_time: "2021-06-15"
    },
    {
      user_id: 6,
      user_name: "xxzx",
      user_role: "普通用户",
      user_owner: "信息中心",
      start_time: "2021-02-15",
      end_time: "2021-06-15"
    }
  ]
}

function getDeviceCamera(): any[] {
  return [
    {
      device_id: 1,
      device_name: "#001",
      algorithm_id: 0,
      algorithm_name: "绿道垃圾检测",
      ip_address: "192.168.99.25",
      port:"8800",
      device_statu: "离线",
      end_time:"2021-06-15"
    },
    {
      device_id: 2,
      device_name: "#002",
      algorithm_id: 1,
      algorithm_name: "道路塌方检测",
      ip_address: "192.168.99.25",
      port:"8800",
      device_statu: "离线",
      end_time:"2021-06-15"
    },
    {
      device_id: 3,
      device_name: "#003",
      algorithm_id: 1,
      algorithm_name: "道路塌方检测",
      ip_address: "192.168.99.25",
      port:"8800",
      device_statu: "离线",
      end_time:"2021-06-15"
    },
    {
      device_id: 4,
      device_name: "#004",
      algorithm_id: 0,
      algorithm_name: "绿道垃圾检测",
      ip_address: "192.168.99.25",
      port:"8800",
      device_statu: "离线",
      end_time:"2021-06-15"
    },
    {
      device_id: 5,
      device_name: "#005",
      algorithm_id: 1,
      algorithm_name: "道路塌方检测",
      ip_address: "192.168.99.25",
      port:"8800",
      device_statu: "离线",
      end_time:"2021-06-15"
    },
    {
      device_id: 6,
      device_name: "#006",
      algorithm_id: 0,
      algorithm_name: "山体滑坡检测",
      ip_address: "192.168.99.25",
      port:"8800",
      device_statu: "离线",
      end_time:"2021-06-15"
    }
  ]
}

export const APIS = {
  '/api/v1/activities': getApplications(),
  '/api/v1/get_tool': getTools(),
  '/api/v1/get_dataset': getDataset(),
  '/api/v1/get_userinfo': getUserInfo(),
  '/api/v1/get_device_camera': getDeviceCamera(),
};
