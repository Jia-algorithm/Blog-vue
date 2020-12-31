<template>
  <div class="hello">
    
    <h1>{{ msg }}</h1>
    <h2>有意愿加入Sleepycat Club大家族的欢迎联系本咸鱼</h2>
    <img style="width:250px;height:250px;margin-top:5%;" src="../assets/logo.jpg">
    <h2>这里期待你的到来！</h2>
  </div>
</template>

<script>
export default {
  name: 'tips',
  data () {
    return {
      msg: '该部分功能尚未开放'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: white;
  width:100%;
  height:100%;
}
h1, h2 {
  font-weight: normal;
  padding: 2%;
}
</style>
