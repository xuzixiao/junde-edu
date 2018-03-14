<template>
  <div class="contact">
      <div class="contact-main">
          <h3>联系我们</h3>
          <ul class="contact-list">
            <li>
              <img src="static/images/about1.jpg" alt="">
                <p>
                  <span>联系我们</span>
                  <br>
                  <span>0731-83392633</span>
                </p>
            </li>

            <li>
              <img src="static/images/about2.jpg" alt="">
                <p>
                  <span>公司地址</span>
                  <br>
                  <span>湖南省长沙市天心区友谊路560号雅苑国际813</span>
                </p>
            </li>

            <li><img src="static/images/about3.jpg" alt="">
                <p>
                  <span>企业邮箱</span>
                  <br>
                  <span>706887591@qq.com</span>
                </p>
            </li>

            <li>
              <img src="static/images/about4.jpg" alt="">
              <p>
                <span>工作时间</span>
                  <br>
                <span>周一至周五</span>
                <br>
                <span>9:00-18:00</span>
              </p>  
            </li>
          </ul>    
       <div class="clear"></div>
        
        <div class="map">
          <my-map></my-map>
        </div>



      </div>
      <my-ewm></my-ewm>
  </div>
</template>

<script>
import ewm from "@/components/ewm.vue"
import map from "@/components/map.vue"

export default ({
  components:{
    "my-ewm":ewm,
    "my-map":map
  }
})
</script>

<style>
.contact{
  width: 100%;
  height: auto;
}
.contact-main{
  width: 880px;
  height: auto;
  margin: 0 auto;
}
.contact-main h3{
  line-height: 100px;
  font-size: 24px;
  text-align: center;
  font-weight:normal;
}


.clear{
  clear: both;
}

.contact-list li{
  width:430px;
  height:170px;
  position: relative;
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: default;
}
.contact-list li:nth-child(2n){
  margin-right: 0px;

}
.contact-list li img{
  display: block;
  width:430px;
  height:170px;
}
.contact-list li p{
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  color: #ffffff;
  font-family:"微软雅黑";
  text-align: center;
}
.contact-list li p span{
   display:block;
   width:80%;
   font-family:"微软雅黑";
   font-size: 24px;
   line-height: 40px;
   margin:0px  10%;
}
.contact-list li p span:first-child{
  margin-top: 15px;
}
</style>
