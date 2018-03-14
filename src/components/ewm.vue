<template>
  <div class="ewm">
    <div class="ewm-main">
      <dl>
        <dt>
          <img src="/static/images/ewm1.jpg"/>
        </dt>
        <dd>教考咨询</dd>
      </dl>

      <dl>
        <dt>
          <img src="/static/images/ewm2.jpg"/>
        </dt>
        <dd>就业推荐</dd>
      </dl>

      <dl>
        <dt>
          <img src="/static/images/ewm3.jpg"/>
        </dt>
        <dd>对外合作</dd>
      </dl>

      <dl>
        <dt>
          <img src="/static/images/ewm4.jpg"/>
        </dt>
        <dd>加入我们</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.ewm{
  width:100%;
  height:188px;
  background: #eeeeee;
}
.ewm-main{
  width: 1000px;
  height: 188px;
  margin: 0 auto;
}
.ewm-main dl{
  display:inline-block;
  margin-top: 30px;
  margin-right: 160px;
}
.ewm-main dl:last-child{
  margin-right: 0px;
}
.ewm-main dl dd{
  text-align:center;
  line-height: 24px;
}
</style>
