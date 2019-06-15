<template>
  <div class="bottom">
    <div class="w1200">

    </div>

  </div>

</template>

<script>
  export default {
    name: "bottom-bar"
  }
</script>

<style lang="less">
  @import "./../assets/css/style";

  .bottom {
    height: 100px;
    position: fixed;
    bottom: 0;
    width: 100%;
    .w1200{
      height: 100%;
    }
  }
</style>
