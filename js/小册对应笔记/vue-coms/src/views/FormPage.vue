<template>
  <div>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <button @click="handleSubmit">提交</button>
      <button @click="handleReset">重置</button>
    </i-form>
  </div>
</template>

<script>
import iForm from '../components/form/form.vue'
import iFormItem from '../components/form/form-item.vue'
import iInput from '../components/input/input'
export default {
  components: {
    'i-form': iForm,
    'i-form-item': iFormItem,
    'i-input': iInput
  },
  data() {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'change' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleReset() {
      this.$refs.form.resetFields()
    },
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert('提交成功')
        } else {
          window.alert('表单校验失败')
        }
      })
    }
  }
}
</script>

<style lang=""></style>
