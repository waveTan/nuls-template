<template>
  <div class="home w1200">
    <div class="address">
      <span>地址: {{addressInfo.address}}</span> <font> 余额：{{addressInfo.totalBalance/100000000}} NULS</font>
    </div>
  </div>
</template>

<script>
  import {chainIdNumber} from '@/api/util'

  export default {
    data() {
      return {
        addressInfo: JSON.parse(localStorage.getItem(chainIdNumber())),//地址信息
      };
    },
    created() {
    },
    methods: {}
  }
</script>
