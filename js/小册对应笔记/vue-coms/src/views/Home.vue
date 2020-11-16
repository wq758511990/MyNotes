<template>
  <div class="home_page">
    <!-- <form-page></form-page> -->
    <!-- <alert-page></alert-page> -->
    <!-- <table-page></table-page> -->
    <SlotPage></SlotPage>
  </div>
</template>

<script>
// import FormPage from './FormPage'
// import AlertPage from './AlertPage'
// import TablePage from './TablePage'
import SlotPage from './SlotPage'
export default {
  components: {
    // 'form-page': FormPage,
    // 'table-page': TablePage
    // 'alert-page': AlertPage
    SlotPage
  }
}
</script>

<style lang="scss">
.home_page {
  width: 100%;
  height: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>
