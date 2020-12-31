<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <div class="block">
                    <span class="demonstration">来看看你是什么星座吧~</span>
                    <el-date-picker class="selecter"
                    v-model="value"
                    type="date"
                    placeholder="选择阳历生日">
                    </el-date-picker>
                     <el-button class="bnt" type="primary" icon="el-icon-search" @click="changecsl()">查看</el-button>
                </div>
            </div>
        </el-col>
        <el-col :span="16">
          <div class="other-content bg-purple">
            <el-card class="icon"><img class="image" :src="require('../assets/'+csl[i]+'.png')"></el-card>
            <div class="details">
                <span style="font-size:14px;color:grey;margin-top:10px;">{{date[i]}}</span>
                <span style="font-size:18px;color:#117c6f;margin-top:10px;">{{csl[i]}}</span>
                <span style="font-size:18px;color:#117c6f;margin-top:10px;">守护神：{{god[i]}}</span>
                <span style="font-size:18px;color:#117c6f;margin-top:10px;">星座特征：{{char[i]}}</span>
            </div>
          </div>
        </el-col>
    </el-row>
</template>

<style>
  .el-row {
    width:100%;
    margin-top: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .block{
      
      
      display:flex;
      flex-direction: column;
      align-items: center;
  }
  .demonstration{
      font-size:15px;
      color:#117c6f;
      margin-top:20px;
      margin-bottom: 20px;
  }
  .selecter{
      margin-bottom: 20px;
  }
  
  .bg-purple {
    background: #ffffff;
    height:200px;
  }
  
  .grid-content {
    margin-left:20px;
    border-radius: 4px;
  }
  .other-content {
      display:flex;
      flex-direction: row;
  }
  .icon{
      width:160px;
      height:160px;
      margin-top:20px;
      margin-left:20px;
  }
  .image{
      width:130px;
      height:130px;
  }
  .details {
      margin-top:20px;
      margin-left:20px;
      display:flex;
      flex-direction: column;
      align-items: flex-start;
  }
    .bg-purple {
    background: #ffffff;
    height:200px;
  }
</style>
<script>
import moment from "moment"

export default {
    name:'constellation',
    
    data() {
      return {
        i:1,
        value: '',
        csl:['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
        date:['3月21日- 4月19日','4月20日 - 5月20日','5月21日 - 6月21日','6月22日 - 7月22日','7月23日 - 8月22日','8月23日 - 9月22日','9月23日 - 10月23日','10月24日 - 11月22日','11月23日 - 12月21日','12月22日 - 1月19日','1月20日 - 2月18日','2月19日 - 3月20日'],
        god:['阿瑞斯、玛尔斯','阿佛洛狄忒、维纳斯','赫尔墨斯、墨丘利','阿尔忒弥斯、狄安娜','阿波罗','赫尔墨斯、墨丘利','阿佛洛狄忒、维纳斯','哈迪斯、普鲁托','宙斯、朱庇特','克洛诺斯、萨图恩','雅典娜、密涅瓦','波塞冬、尼普顿'],
        char:['热情、冲动、自信','固执、耐心、慢热','多变、好奇心、花心','温柔体贴、善良、同情心','慷慨、大方、自负自大','完美主义、挑剔、认真','优雅、公正、追求和平','爱恨分明、冷酷、神秘','乐观、热爱自由、粗心','古板、稳重、严肃','智慧、独特、叛逆','幻想、奉献精神、多情']
      };
    },
    methods:{
        changecsl:function(){
          var time=moment(this.value).format("MM-DD")
          var date = moment(time, "MM-DD")
          console.log(date)
          var temp1 = moment('03-21',"MM-DD")
          console.log(temp1)
          var temp2 = moment('04-20',"MM-DD")
          var temp3 = moment('05-21',"MM-DD")
          var temp4 = moment('06-22',"MM-DD")
          var temp5 = moment('07-23',"MM-DD")
          var temp6 = moment('08-23',"MM-DD")
          var temp7 = moment('09-23',"MM-DD")
          var temp8 = moment('10-24',"MM-DD")
          var temp9 = moment('11-23',"MM-DD")
          var temp10 = moment('12-22',"MM-DD")
          var temp11 = moment('01-20',"MM-DD")
          var temp12 = moment('02-19',"MM-DD")
          if(date.diff(temp1)>=0 && date.diff(temp2)<0){
            this.i = 0;
          }
          else if(date.diff(temp2)>=0 && date.diff(temp3)<0){
            this.i=1;
          }
          else if(date.diff(temp3)>=0 && date.diff(temp4)<0){
            this.i=2;
          }
          else if(date.diff(temp4)>=0 && date.diff(temp5)<0){
            this.i=3;
          }
          else if(date.diff(temp5)>=0 && date.diff(temp6)<0){
            this.i=4;
          }
          else if(date.diff(temp6)>=0 && date.diff(temp7)<0){
            this.i=5;
          }
          else if(date.diff(temp7)>=0 && date.diff(temp8)<0){
            this.i=6;
          }
          else if(date.diff(temp8)>=0 && date.diff(temp9)<0){
            this.i=7;
          }
          else if(date.diff(temp9)>=0 && date.diff(temp10)<0){
            this.i=8;
          }
          else if(date.diff(temp10)>=0 || date.diff(temp11)<0){
            this.i=9;
          }
          else if(date.diff(temp11)>=0 && date.diff(temp12)<0){
            this.i=10;
          }
          else if(date.diff(temp12)>=0 && date.diff(temp1)<0){
            this.i=11;
          }
        }
    }
}
</script>