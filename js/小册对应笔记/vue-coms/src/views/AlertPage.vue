<template>
  <div>
    <div class="triangle"></div>
    <div class="outer">
      <div class="top"></div>
      <div class="left"></div>
    </div>
  </div>
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

<style lang="scss">
.triangle {
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #ff0000;
  margin: 0 auto;
}
.outer {
  height: 400px;
  position: relative;
  width: 300px;
  .top {
    height: 100px;
    background-color: red;
  }
  .left {
    position: absolute;
    top: 100px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: blue;
  }
}
</style>
