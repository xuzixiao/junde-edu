<template>
  <div class="notfound" id="notfound">
        <div class="notfound-img">
            <img src="/static/images/notfound.jpg" />
            <p>本页面将于<span>{{notfound.miaoval}}</span>秒后自动跳转至网站首页</p>
        </div>
        <my-ewm></my-ewm>
        
        
  </div>
</template>

<script>
import ewm from "@/components/ewm.vue"
export default ({
    components:{
        "my-ewm":ewm
    },
    data () {
      return{
          notfound:{
              miaoval:5
          }
         

      }  
    },
    mounted:function(){    
      const djs=setInterval(() => {
            this.notfound.miaoval--;
            //console.log(this);
           if(this.notfound.miaoval<=0){
               clearInterval(djs);
               window.location.href="/";
           }
        },1000)
    }

})
</script>

<style>
.notfound{
    width: 100%;
    height: auto;
    position: relative;
}
.notfound>.notfound-img{
    display:block;
    width: 1000px;
    margin:0 auto;
    position: relative;
}
.notfound>.notfound-img img{
    display:block;
}
.notfound>.notfound-img p{
    display: block;
    position: absolute;
    font-family: "微软雅黑";
    font-size: 26px;
    color: #000;
    bottom: 160px;
    right: 220px;
}
</style>
