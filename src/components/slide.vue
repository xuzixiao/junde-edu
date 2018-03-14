<template>
<div class="slide">
  <slider :pages="pages" :sliderinit="sliderinit">

    <!-- slot  -->
  </slider>
</div>
</template>
 
<script>
import slider from 'vue-concise-slider'// 引入slider组件
export default {
   data () {
      return {
        //图片列表[arr]
        pages:[
          {
            title: '',
            style:{
             background:'url(static/images/banner1.jpg)'
            }
          },
          {
           title: '',
           style:{
            background:'url(static/images/banner2.jpg)'
            }
          }
        ],
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 800,//滑动判定距离
          thresholdTime: 200,//滑动判定时间
          autoplay:5000,//自动滚动[ms]
          loop:true,//循环滚动
          //direction:'vertical',方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
          timingFunction: 'ease',
        }
      }
    },
    components: {
        slider
    }
}
</script>

<style>
.slide{
  width: 100%;
  height: 650px;
  min-width: 1000px;
}
</style>


