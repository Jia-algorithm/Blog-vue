<template>
    <div class="body">
         <el-button @click="drawer = true" type="primary" class="bnt">
            点击留言
        </el-button>
        <el-col>
            <div class="grid-content" v-if="arr.length!=0">
                <el-card v-for="item in arr" :key="item.ID" shadow="hover">
                    <div class="title">
                        <label style="margin-bottom:10px;"><el-rate v-model="item.score" disabled show-score text-color="#ff9900"></el-rate></label>
                        
                        <label style="margin-right:20px;">{{item.date}}</label>
                        <label >{{item.name}}</label>
                        
                    </div>
                    <div class='text'>{{item.content}}</div>
                </el-card>
            </div>
        </el-col>
       
        <el-drawer
        title="留言板"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
            <el-form :label-position="labelPosition" label-width="80px" >
                <el-form-item label="让我看看你叫什么">
                    <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item class="block" label="给我的网站评个分吧！">
                    <el-rate v-model="score"></el-rate>
                </el-form-item>
                <el-form-item label="写下你的留言">
                    <el-input type="textarea" v-model="content"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button @click="cancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-drawer>
    </div>
</template>
<script>
import moment from "moment"
  export default {
    name:"message",
    data() {
    return {
        drawer: false,
        direction: 'rtl',
        arr:[{
            ID:1,
            name:'Sleepycat',
            date:'2021/01/05 23:00:00',
            content:'留言板终于开通啦，点击右上角按钮就可以留言！',
            score:5
        }],
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        labelPosition: 'top',
        name: '',
        score:null,
        content: ''
    };
    },
    methods: {
    handleClose(done) {
        this.$confirm('确认关闭？')
            .then(_ => {
            done();
            })
            .catch(_ => {});
        },
    onSubmit(){
        if (this.name=='' || this.score==null || this.content==''){
            this.$message.error('还没有填写完整哦！');
            return;
        }
        var time=moment(new Date()).format("YYYY/MM/DD HH:mm:ss");
        console.log(new Date())
        var object = {
            ID:this.arr.length+1,
            name:this.name,
            score:this.score,
            content:this.content,
            date:time
        };
        this.arr.push(object);
        this.drawer = false;
    },
    cancel(){
        this.drawer = false;
    }
    },
        
  };
</script>
<style scoped>
.body {
    background: rgb(255, 255, 255);
    width:100%;
    height:100%;
    background-image: url("../assets/background.jpg");
}
.el-col {
    margin-top: 20px;
}
.grid-content{
    display:flex;
    flex-direction: column;
    align-items: center;

}
.el-card {
    width:80%;
    display:flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 20px;
}
.title {
    font-size:16px;
    color:#606266;
    width:100%;
}
.text {
    float: left;
    margin-top: 10px;
}
.bnt {
    float:right;
    margin-right: 50px;
    margin-top:20px;
    background-color: rgb(3, 165, 165);
    border-color: teal;
}

.el-form-item {
    width:80%;
    margin-left: 10%;
}

</style>