<template>
  <div>
    <h1 v-if="loading">Loading......</h1>
    <img v-if="loaded" :src="result.message" alt="" />
  </div>
</template>

<script lang="ts">
import { onMounted, watch } from "vue";
import useURLLoaders from "../hooks/useURLLoader";
export default {
  setup() {
    const { result, loading, loaded } = useURLLoaders(
      "https://dog.ceo/api/breeds/image/random"
    );
    onMounted((): void => {
      console.log("onMounted");
    });
    watch(result, () => {
      console.log(result.value);
    });
    return {
      result,
      loading,
      loaded,
    };
  },
};
</script>
<style lang="scss"></style>
