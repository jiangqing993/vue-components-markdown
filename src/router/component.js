// 组件
const component = [
  {
    path: '/component',
    name: 'component',
    title: '组件',
    component: () => {
      return import('@/pages/index-system/componentDocument/document/Document')
    },
    children: [
      {
        path: '/component/jqbreadcrumb',
        name: 'jqbreadcrumb',
        title: '面包屑',
        component: () => {
          return import(
            '@/pages/index-system/componentDocument/document/JqBreadcrumb.md'
          )
        }
      },
      {
        path: '/component/jqsearchbar',
        name: 'jqsearchbar',
        title: '搜索框',
        component: () => {
          return import(
            '@/pages/index-system/componentDocument/document/JqSearchBar.md'
          )
        }
      }
    ]
  }
]

export default component
