<template>
  <div class="import-address bg-gray">
    <div class="bg-white">
      <BackBar backTitle="创建地址"></BackBar>
      <h3 class="title tc mt_f_20">导入账户</h3>
    </div>
    <div class="tab bg-white w1200 mt_30">
      <el-form :model="importForm" :rules="importRules" ref="importForm" status-icon class="import-form w630">
        <el-form-item label="明文私钥" prop="keys">
          <el-input type="textarea" v-model="importForm.keys" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="importForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="importForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="form-bnt">
          <el-button type="success" @click="submitForm('importForm')">创建账户</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import BackBar from '@/components/BackBar'
  export default {
    name: "import-address",
    data() {
      return {
        importForm: {
          keys: '',
          pass: '',
          checkPass: ''
        },
        importRules: {
          keys:
            [
              {required: true, message: '请填写活动形式', trigger: 'blur'}
            ],
          pass: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
          ],
          checkPass: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
          ],
        }
      }
        ;
    },
    components: {
      BackBar
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="less">
  .import-address {
    .import-form {
      margin: 60px auto 0;
    }
  }

</style>
