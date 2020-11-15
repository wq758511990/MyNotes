<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    handleShow() {
      this.$Alert.info({
        content: '这是一条提示信息',
        duration: 3
      })
    }
  },
  mounted() {
    this.handleShow()
  }
}
</script>
