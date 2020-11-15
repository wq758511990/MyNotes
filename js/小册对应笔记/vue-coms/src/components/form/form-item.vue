<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
    <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import Emitter from '../../mixins/emitter'
export default {
  name: 'iFormItem',
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      isRequired: false, // 是否为必填
      validateState: '', // 校验状态
      validateMessage: '' // 校验不通过时的提示信息
    }
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop]
    }
  },
  inject: ['form'],
  // 组件渲染时，将实例缓存在form中
  mounted() {
    // 创建： 外->内
    // 渲染： 内->外
    // 故而需要在Form的created里监听
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this)
      this.setRules()
      // 设置初始值，以便在重置时恢复默认值,而不是清空
      this.initialValue = this.fieldValue
    }
  },
  methods: {
    setRules() {
      this.$on('on-form-blur', this.onFieldBlur)
      this.$on('on-form-change', this.onFieldChange)
    },
    // 获取当前key的规则
    getRules() {
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },
    resetField() {
      this.validateState = ''
      this.validateMessage = ''
      this.form.model[this.prop] = this.initialValue
    },
    // 过滤
    getFilteredRule(trigger) {
      const rules = this.getRules()
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
    /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validate(trigger, callback = function() {}) {
      let rules = this.getFilteredRule(trigger)

      if (!rules || rules.length === 0) {
        return true
      }

      // 设置状态为校验中
      this.validateState = 'validating'

      // 以下为 async-validator 库的调用方法
      let descriptor = {}
      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      let model = {}

      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        callback(this.validateMessage)
      })
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      this.validate('change')
    }
  },
  beforeDestroy() {
    this.dispatch('iForm', 'on-form-item-remove', this)
  }
}
</script>

<style lang="scss">
.i-form-item-label-required:before {
  content: '*';
  color: red;
}
.i-form-item-message {
  color: red;
}
</style>
