<template>
  <div class="header bg-white">
    <div class="w1200">
      <div class="logo fl">
        <img class="clicks" @click="toUrl('home')" src="../assets/logo.png">
      </div>
      <div class="nav fl">
        <el-menu :default-active="activeIndex" class="fl" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><i class="el-icon-share"></i>模块仓库</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-video-camera-solid"></i>搭建区块链</el-menu-item>
        </el-menu>
        <el-link type="primary" @click="toUrl('newAddress')" class="user click fr tc" v-if="!accountAddress">登陆
        </el-link>
        <div v-else>
          <i class="el-icon-s-custom click " @click="toUrl('backupsAddress')"></i>&nbsp;
          <span class="click tc" @click="signOut">退出</span>
        </div>

      </div>
    </div>
    <div class="cb"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',//导航选中
        accountInfo: {},//账户信息
        accountAddress: '',
      };
    },
    created() {
      setInterval(() => {
        if (localStorage.hasOwnProperty('accountInfo')) {
          this.accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
          this.accountAddress = this.accountInfo.address;
        }
      }, 500);
    },

    methods: {

      /**
       * 导航切换
       * @param key
       * @param keyPath
       */
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      /**
       * 退出
       */
      signOut() {
        localStorage.removeItem('accountInfo');
        this.accountInfo = {};
        this.accountAddress = '';
      },

      /**
       * url 连接
       * @param name
       */
      toUrl(name) {
        this.$router.push({
          name: name,
        })
      }
    }
  }
</script>

<style lang="less">
  @import "./../assets/css/style";

  .header {
    border-bottom: @BD1;
    height: 80px;
    line-height: 80px;
    .logo {
      width: 150px;
      margin: 18px 0 0 0;
      height: 62px;
    }
    .nav {
      width: 1050px;
      .el-menu.el-menu--horizontal {
        border-bottom: 0;
        width: 950px;
        .el-menu-item {
          height: 79px;
          line-height: 80px;
          font-size: 16px;
          &:hover {
            color: @Ncolour;
          }
        }
        .is-active {
          color: @Ncolour;
          border-bottom: 0 solid transparent;
        }
      }
      .user {
        width: 100px;
        line-height: 80px;
      }
    }
  }
</style>
