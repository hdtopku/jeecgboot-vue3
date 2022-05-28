<template>
  <div style="height: 100vh">
    <div id="components-back-top-demo-custom" style="height: 1000px; overflow: scroll">
      Scroll down to see the bottom-right
      <strong style="color: #1088e9">blue</strong>
      button.
    </div>
  </div>
  <a-back-top class="ant-back-top" :visibilityHeight="100" :target="target">
    <div class="ant-back-top-inner">UP</div>
  </a-back-top>
</template>
<script lang="ts" setup>
  const target = () => {
    let a = document.getElementById('components-back-top-demo-custom');
    console.log(a);
    return document.getElementById('components-back-top-demo-custom');
  };
</script>
<style scoped>
  .ant-back-top {
    bottom: 100px;
  }
  .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
</style>
