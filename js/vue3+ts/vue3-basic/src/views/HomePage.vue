<template>
  <div id="Home" class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'
import GlobalHeader, { UserProps } from '../components/GlobalHeader.vue'
const currentUser: UserProps = {
  isLogin: true,
  nickName: 'wzx'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1专栏',
    description: '拉萨看得见返回拉萨酒店客房好啦数据库的是大家看法哈',
    avatar:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605865472280&di=cd4f1ef40a96f90ab6e1e5dcb9d969fc&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg'
  },
  {
    id: 2,
    title: 'test2专栏',
    description: '拉萨看得见返回拉萨酒店客房好啦数据库的是大家看法哈',
    avatar:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605865472280&di=cd4f1ef40a96f90ab6e1e5dcb9d969fc&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg'
  },
  {
    id: 3,
    title: 'test3专栏',
    description: '拉萨看得见返回拉萨酒店客房好啦数据库的是大家看法哈',
    avatar:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605865472280&di=cd4f1ef40a96f90ab6e1e5dcb9d969fc&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg'
  },
  {
    id: 4,
    title: 'test4专栏',
    description: '拉萨看得见返回拉萨酒店客房好啦数据库的是大家看法哈',
    avatar:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605865472280&di=cd4f1ef40a96f90ab6e1e5dcb9d969fc&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg'
  }
]
export default defineComponent({
  name: 'Home',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>

<style></style>
