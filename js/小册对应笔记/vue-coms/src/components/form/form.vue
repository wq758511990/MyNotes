<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: 'iForm',
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      fields: []
    }
  },
  methods: {
    resetFields() {
      // 重置每个formItem表单
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    validate(callback) {
      return new Promise((resolve, reject) => {
        let valid = true // 先置状态
        let count = 0
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (++count === this.fields.length) {
              // 校验结束
              resolve(valid)
              if (typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    }
  },
  created() {
    this.$on('on-form-item-add', field => {
      if (field) this.fields.push(field)
    })
    this.$on('on-form-item-remove', field => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1)
    })
  }
}
</script>
