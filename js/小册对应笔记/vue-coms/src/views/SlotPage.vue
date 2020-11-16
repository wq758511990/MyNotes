<template>
  <div>
    <SlotCom>
      <template slot-scope="user">
        <!-- <li v-for="(item, index) in user.data" :key="index">{{ item }}</li> -->
        {{ user }}
      </template>
    </SlotCom>
  </div>
</template>

<script>
import SlotCom from '../components/slot/slot.vue'
export default {
  components: {
    SlotCom
  }
}
</script>
