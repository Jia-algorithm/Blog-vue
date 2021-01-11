<template>
<div class="block">
  <el-timeline>
    <el-timeline-item :timestamp="date1" placement="top" size="large" color="#3e7272">
        <el-card shadow="hover">
            <span style="font-size:10px;color:#606266;">{{date1}}</span>
            <br><br>
            <span style="color:#303133">{{message1}}</span>
        </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top" color="#3e7272">
        <el-card shadow="hover">
            <span style="font-size:10px;color:#606266;">{{date2}}</span>
            <br><br>
            <span style="color:#303133">{{message2}}</span>
        </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top" color="#3e7272">
        <el-card shadow="hover">
            <span style="font-size:10px;color:#606266;">{{date3}}</span>
            <br><br>
            <span style="color:#303133">{{message3}}</span>
        </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top" color="#3e7272">
        <el-card shadow="hover">
            <span style="font-size:10px;color:#606266;">{{date4}}</span>
            <br><br>
            <span style="color:#303133">{{message4}}</span>
        </el-card>
    </el-timeline-item>
  </el-timeline>
</div>

</template>
<style scoped>
.block {
    padding-left: 100px;
    padding-top:50px;
}
.el-card {
    width:1000px;
}
</style>

<script>
export default {
    name: 'account',
  data() {
    return {
      message1: '就在今天，本咸鱼决定建一个自己的网站！一年的腾讯云服务器加一年的域名，总共花费还不到一百，看看这个网站最后会建成什么样。',
      message2:'终于把域名和SSL证书搞好了orz......但是因为放了个微信二维码就被封了……',
      message3:'今天是平安夜啊，不，今天是java DDL夜，以及java答辩前夜orz',
      message4:'java终于磕磕绊绊答辩完了，下午一直在搞数仓，orz',
      date1:'2020/12/21/21:18',
      date2:'2020/12/22/17:26',
      date3:'2020/12/24/22:48',
      date4:'2020/12/25/16:38',
    };
  }
}
</script>