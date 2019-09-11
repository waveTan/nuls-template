<template>
  <div class="backups-address bg-gray">
    <div class="bg-white">
      <h3 class="title tc">{{$t('backupsAddress.backupsAddress0')}}</h3>
    </div>
    <div class="tab bg-white w1200 mt_30">
      <div class="address w630">
        <p>
          {{$t('backupsAddress.backupsAddress1')}}
          <span class="yellow">{{accountAddress.address}}</span>
          &nbsp;<i class="el-icon-document-copy click" @click="copy(accountAddress.address)"></i>
        </p>
      </div>
      <div class="tips bg-gray w630">
        <p class="font14"><i></i> {{$t('backupsAddress.backupsAddress2')}}</p>
        <p class="font14"><i></i> {{$t('backupsAddress.backupsAddress3')}}</p>
      </div>

      <div class="w630 tc btn-next">
        <div>
          <el-button type="success" @click="backupsKey">{{$t('backupsAddress.backupsAddress4')}}</el-button>
        </div>
        <div class="mt_20">
          <el-button @click="toUrl('home')"> {{$t('backupsAddress.backupsAddress5')}}</el-button>
        </div>
      </div>
    </div>
    <Password ref="password" @passwordSubmit="passSubmit">
    </Password>
    <el-dialog :title="$t('backupsAddress.backupsAddress6')" width="40%"
               :visible.sync="keyDialog"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
    >
      <span></span>
      <p class="bg-white">
        {{accountAddress.pri}}
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="copy(accountAddress.pri)">{{$t('public.copy')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import nuls from 'nuls-sdk-js'
  import Password from '@/components/PasswordBar'
  import {API_CHAIN_ID, API_PREFIX} from '@/config'
  import {copys} from '@/api/util'

  export default {
    components: {Password},
    data() {
      return {
        accountAddress: JSON.parse(localStorage.getItem('accountInfo')),
        keyDialog: false, //key弹框
      };
    },
    methods: {

      /**
       *  获取密码框的密码
       * @param password
       **/
      async passSubmit(password) {
        const pri = nuls.decrypteOfAES(this.accountAddress.aesPri, password);
        const newAddressInfo = nuls.importByKey(API_CHAIN_ID, pri, password, API_PREFIX);
        if (newAddressInfo.address === this.accountAddress.address) {
          this.keyDialog = true;
          this.accountAddress.pri = pri;
        }
      },

      /**
       *  备份私钥
       **/
      backupsKey() {
        this.$refs.password.showPassword(true);
      },

      /**
       * 连接跳转
       * @param name
       */
      toUrl(name) {
        this.$router.push({
          name: name,
        })
      },

      /**
       * 复制方法
       * @param sting
       **/
      copy(sting) {
        copys(sting);
        this.$message({message: this.$t('public.copyComplete'), type: 'success', duration: 1000});
      },
    }
  }
</script>

<style lang="less">
  @import "./../../assets/css/style";

  .backups-address {
    .bg-white {
      height: 100px;
      .title {
        margin: 20px auto 10px;
        font-size: 30px;
      }
    }
    .tab {
      .address {
        margin: 20px auto 0;
        font-size: 18px;
      }
      .tips {
        margin: 40px auto;
        padding: 20px 30px;
        p {
          line-height: 24px;
          i {
            width: 5px;
            height: 5px;
            display: block;
            float: left;
            margin: 9px 10px 0 0;
            border-radius: 5px;
            background: #000000;
          }
        }
      }
    }
  }

</style>
