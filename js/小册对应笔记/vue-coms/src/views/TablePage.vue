<!-- src/views/table-render.vue -->
<template>
  <div>
    <table-render :columns="columns" :data="data"></table-render>
  </div>
</template>
<script>
import TableRender from '../components/table-render/table.vue'

export default {
  components: { TableRender },
  data() {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '出生日期',
          key: 'birthday',
          renderRow: (h, { row, column, index }) => {
            const date = new Date(parseInt(row.birthday))
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()

            const birthday = `${year}-${month}-${day}`

            return h('span', birthday)
          }
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '操作'
        }
      ],
      data: [
        {
          name: '王小明',
          age: 18,
          birthday: '919526400000',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          birthday: '696096000000',
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          birthday: '563472000000',
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          birthday: '687024000000',
          address: '深圳市南山区深南大道'
        }
      ]
    }
  }
}
</script>
