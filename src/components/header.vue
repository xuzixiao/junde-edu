<template>
<div class="header">  
        <h1 class="logo"><img src="/static/images/logo.png" alt="长沙峻得文化传播有限公司" title="长沙峻得文化传播有限公司" name="长沙峻得文化传播有限公司" /></h1>
        <div class="nav">
            <ul>
                <li><router-link to="/index">首页</router-link></li>
                <!-- <li><router-link to="server">公司业务</router-link></li> -->
                <li><a href="http://jundeedu.bie-ye.com/" target="_blank">公司业务</a></li>
                <li><router-link to="/organ">公司架构</router-link></li>
                <li><router-link to="/contact">联系我们</router-link></li>
            </ul>
        </div>
</div>  
</template>

<script>
export default {
  
}
</script>

<style>
.header{
    width: 100%;
    height:100px;
    background:#fff;
    min-width: 1000px;
}
.logo{
    display:block;
    width: 200px;
    height: 80px;
    float: left;
    margin: 10px 0px;
}
.logo img{
    display: block;
    height: 80px
}
.nav{
    width:auto;
    height: 60px;
    float: left;
} 
.nav li{
    float: left;
    margin:0px 75px;
    line-height: 100px;
}
.nav li:last-child{
    margin-right: 0px;
}
.nav li a{
    font-size: 18px;
    font-family:"微软雅黑";
}
</style>
