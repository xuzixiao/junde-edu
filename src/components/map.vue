<template>
    <!--地图容器-->
    <div class="map">
    <div id="XSDFXPage" class="XSDFXPage"></div>
    </div>
</template>
<script>
import BMap from 'BMap'
    export default {
        name:'',
        data () {
            return {

            }
        },
        mounted() { 
          // 百度地图API功能
          var map = new BMap.Map("XSDFXPage");
          var point = new BMap.Point(112.990332,28.130112);
          map.centerAndZoom(point, 17);
          map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
          var marker = new BMap.Marker(point);  // 创建标注
          map.addOverlay(marker);               // 将标注添加到地图中
          marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
          var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
          var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
          var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
          map.addControl(top_left_control);        
          map.addControl(top_left_navigation);     
          map.addControl(top_right_navigation);  
        }
    }
</script>
<style scoped>
html,body,.map{
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
}
html,body,.XSDFXPage{
            width: 100%;
            height: 100%;
            overflow: hidden;
            margin: 0;
            font-family: "微软雅黑";
        }
</style>