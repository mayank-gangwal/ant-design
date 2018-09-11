export const getNotices = (req, res) => {
  res.json([
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'You received 14 new weekly newspapers',
      datetime: '2017-08-09',
      type: 'Notice',
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: 'Your recommended Quinnie has passed the third round of interviews.',
      datetime: '2017-08-08',
      type: 'Notice',
    },
    {
      id: '000000003',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      title:
        'This template can distinguish between multiple notification types. Here read: true is set',
      datetime: '2017-08-07',
      read: true,
      type: 'Notice',
    },
    {
      id: '000000004',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
      title: 'The left icon is used to distinguish between different types',
      datetime: '2017-08-07',
      type: 'Notice',
    },
    {
      id: '000000005',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'Do not exceed two lines of content, automatically cut off when exceeded',
      datetime: '2017-08-07',
      type: 'Notice',
    },
    {
      id: '000000006',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'Qu Lili commented on your post',
      description: 'Description information from the title',
      datetime: '2017-08-07',
      type: 'News',
    },
    {
      id: '000000007',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'Zhu is right, I replied to you.',
      description: 'This template is used to remind people who have interacted with you.',
      datetime: '2017-08-07',
      type: 'News',
    },
    {
      id: '000000008',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: 'Title',
      description: 'This template is used to remind people who have interacted with you.',
      datetime: '2017-08-07',
      type: 'News',
    },
    {
      id: '000000009',
      title: 'Missing Name',
      description: 'This needs to be started before midnight today',
      extra: 'Status: To Do',
      status: 'todo',
      type: 'Upcoming',
    },
    {
      id: '000000010',
      title: 'Third-party emergency code change',
      description:
        'Guan Lin submitted on 2017-01-06, need to complete the code change task before 2017-01-07',
      extra: 'Status: Urgent',
      status: 'urgent',
      type: 'Upcoming',
    },
    {
      id: '000000011',
      title: 'Information security exam',
      description: 'Appointed Zhuer to complete the update and release before 2017-01-09',
      extra: 'Status: Doing',
      status: 'doing',
      type: 'Upcoming',
    },
    {
      id: '000000012',
      title: 'Version Release',
      description:
        'Guan Lin submitted on 2017-01-06, need to complete the code change task before 2017-01-07',
      extra: 'Status: Processing',
      status: 'processing',
      type: 'Upcoming',
    },
  ]);
};
export default {
  getNotices,
};
