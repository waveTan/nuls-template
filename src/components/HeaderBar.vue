<template>
  <div class="header bg-white">
    <div class="w1200">
      <div class="logo fl">
        <img src="../assets/logo.png">
      </div>
      <div class="nav fl">
        <router-link to="/newAddress" tag="div" class="user click fr">登陆</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>

<style lang="less">
  @import "./../assets/css/style";

  .header {
    border-bottom: @BD1;
    height: 60px;
    .logo {
      width: 30%;
      margin: 5px 0 0 0;
    }
    .nav {
      width: 70%;
      .user {
        line-height: 60px;
      }
    }
  }
</style>
