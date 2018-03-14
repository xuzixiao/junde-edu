<template>
<div class="mian">
  <my-slide></my-slide>
  <my-ewm></my-ewm>
  <!-- 二维码 -->
</div>
</template>
<script>
import slide from "@/components/slide.vue"
import ewm from "@/components/ewm.vue"
export default ({
  components:{
    "my-slide":slide,
    "my-ewm":ewm
  }
  
})
</script>
<style>

</style>
