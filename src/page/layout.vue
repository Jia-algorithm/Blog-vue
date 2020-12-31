<template>
    <el-container>
    <el-header>Welcome to Sleepy Cat Club</el-header>
    <el-container>
        <el-aside width="200px">
            <el-row class="tac">
                <el-col>
                    <el-menu
                    default-active="$route.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    router>
                    
                      <el-card style="margin:10px;font-size:15px;color:#606266;">
                          网站尚在开发中,更多功能敬请期待！
                      </el-card>
                      <el-menu-item index="/">
                          <i class="el-icon-house"></i>
                          <span slot="title">咸鱼页</span>
                      </el-menu-item>
                      <el-menu-item index="/account">
                          <i class="el-icon-collection"></i>
                          <span slot="title">碎碎念</span>
                      </el-menu-item>
                      <el-menu-item index="/tips">
                          <i class="el-icon-notebook-1"></i>
                          <span slot="title">留言板</span>
                      </el-menu-item>
                      <el-submenu index="1">
                        <template slot="title">
                          <i class="el-icon-menu"></i>
                          <span>更多功能</span>
                        </template>
                        <el-menu-item-group>
                          <el-menu-item index="/constellation">星座查询</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                    
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-main ><router-view/></el-main>
    </el-container>
    </el-container>
</template>
    
<script>
export default {
    name:'App',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style>
  .el-header {
    background-color: #3e7272;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
    padding:0;
    z-index:1000;
  }
  
  .el-aside {
    background-color: #d3e6e6;
    color: #3e7272;
    text-align: center;
  }
  
  .el-main {
    background-color: #e9f3f3;
    padding:0;
  }
  .el-container {
    width:100%;
    height:100%;
    position:relative;
    top:0px;
    left:0;
    bottom:0;
  }
  .el-menu{
      display:flex;
      flex-direction: column;
      align-items: center;
      background-color: #d3e6e6;
  }
  .el-menu-item{
      width:100%;
  }
</style>