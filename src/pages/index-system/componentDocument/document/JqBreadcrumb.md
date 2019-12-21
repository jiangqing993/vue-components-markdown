# jq-breadcrumb 面包屑

## 功能 面包屑组件

## 代码示例

:::demo

```html
<template>
  <div>
    <jq-breadcrumb
      :breadList="breadList"
      :subMenuList="subMenuList"
    ></jq-breadcrumb>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        breadList: [
          {
            name: '组件',
            path: ''
          }
        ],
        subMenuList: [
          {
            name: '面包屑',
            path: '/component/jqbreadcrumb'
          },
          {
            name: '搜索框组件',
            path: '/component/jqsearchbar'
          }
        ]
      }
    },
    methods: {}
  }
</script>
```

:::

## API

### props

| 属性        | 说明             | 类型  | 默认值 |
| ----------- | ---------------- | ----- | ------ |
| breadList   | 父级的面包屑数组 | Array | []     |
| subMenuList | 当前页面同级数组 | Array | []     |

参数

### breadList

### subMenuList

| 属性 | 说明      | 返回值 |
| ---- | --------- | ------ |
| name | 显示 name | ''     |
| path | 路由地址  | ''     |
