<template>
  <div>
    <h3>子组件</h3>
    <slot :data="data1"></slot>
    <slot :newData="data2"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data2: ['空空如也', '悟空', '成都', '七月上', '病变', '走马'],
      data1: {
        a: 1,
        b: 2
      }
    }
  }
}
</script>
