<template>
  <div>
    <!-- 新增特性 -->
    <p><input type="text" @keydown.enter="addFeature" /></p>
    <ul>
      <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>
    特性总数：{{ count }}
    <h3>{{ msg }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";

@Component
export default class Hello extends Vue {
  // 属性就是data
  features: string[] = [];

  // 括号中的配置是给Vue的
  // 变量的是给ts的
  @Prop({ type: String, required: true })
  msg!: string; // !感叹号 一定赋值断言 或者给个默认值 msg: string = ''

  // 函数直接作为回调， 原methods
  addFeature(e: KeyboardEvent) {
    // target类型是EventTarget
    const inp = e.target as HTMLInputElement;
    this.features.push(inp.value);
    inp.value = "";
  }

  // 如果和生命周期钩子同名， 就是生命周期
  created() {
    this.features = ["类型注解", "编译型语言"];
    // 扩展之后可以使用$axios
    // this.$axios;
  }

  // 存取器用于计算属性
  get count() {
    return this.features.length;
  }
}
</script>

<style lang="scss" scoped></style>
