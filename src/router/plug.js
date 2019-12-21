// 供应
const supply = [
  {
    path: '/plug/mavonEditor',
    name: 'plug',
    title: '插件',
    component: () => {
      return import('@/pages/index-system/plug/mavonEditor/MavonEditor')
    },
    children: [
      {
        path: '/plug/mavonEditor/list',
        name: 'mavonEditor-list',
        title: 'mavonEditor',
        component: () => {
          return import('@/pages/index-system/plug/mavonEditor/MavonEditorList')
        }
      },
      {
        path: '/plug/mavonEditor/add',
        name: 'mavonEditor-add',
        title: 'mavonEditor-add',
        component: () => {
          return import('@/pages/index-system/plug/mavonEditor/MavonEditorAdd')
        }
      }
    ]
  },
  {
    path: '/plug/markdownIt',
    name: 'plug/markdownIt',
    title: '插件-markdown文档',
    component: () => {
      return import('@/pages/index-system/plug/markdownIt/MarkdownIt')
    },
    children: [
      {
        path: '/plug/markdownIt/list',
        name: 'markdownIt-list',
        title: 'markdown文档',
        component: () => {
          return import('@/pages/index-system/plug/markdownIt/MarkdownText.md')
        }
      }
    ]
  },
  {
    path: '/plug/date',
    name: 'plug/date',
    title: '日历',
    component: () => {
      return import('@/pages/index-system/plug/date/Date')
    },
    children: [
      {
        path: '/plug/date/dateCalendar',
        name: 'dateCalendar',
        title: '日历',
        component: () => {
          return import('@/pages/index-system/plug/date/DateCalendar')
        }
      }
    ]
  }
]

export default supply
