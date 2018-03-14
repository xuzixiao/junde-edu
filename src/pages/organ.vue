<template>
  <div class="organ">
   <div class="organ-banner">
      <img src="static/images/banner3.jpg" />
   </div>
  <div class="organ-about" v-html="organ.about"></div>
  <div class="organ-list">
     <dl v-for="items in organ.Team">
       <dt>
         <img :src="items.imgsrc" />
       </dt>
       <dd>
          <h4>{{items.zhiwei}}</h4>
          <p class="foreng">{{items.zhiweiEng}}</p>
          <p><span>负责人:{{items.fuzeren}}</span> <span>电话：{{items.tel}}</span></p>
          <ul v-for="(list,index) in items.zhiweicon">
            <li>{{list}}</li>
          </ul>
       </dd>
       <div class="clear"></div>
     </dl>
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
   data(){
     return {
       organ:{
         about:'<p>长沙峻德文化传播有限公司由70、80、90年代教育工作者创办，根据国家发展需要、社会急需设定职业培训、学历教育的专业机构。峻德文化立足湖南、放眼全国，在23个省建立分支机构，与北京质量管理学院，湖南三学教育、233网校平台等多家教育机构合作。结合移动互联技术，采用O2O教学形式，使参加学习、考证、取证学员利用碎片时间便捷灵活学习。</p><p>峻德文化已开网络职业培训有保育员，房产经纪人，物业经理人，美容师、美发师等；先后与长沙理工大学、湖南中医药大学、湖南商学院、兰州大学、长沙学院、湖南师范大学、湖南外国语职业学院等高校联合办学，开展自考、成教、现代远程教育和研究生教育等。至今为各企事业单位输送人才20000余名，独家开办的专业理工类、文史类和医卫类共6个专业，职业资格保育员，房产经纪人，颇具影响。峻德文化急学员之所急、想企业之所想，成立专家团队，夯实基础，上下求索，为广大学员推出线上学习、线下补习、一对一专家辅导、领先行业技巧，学员通过在峻德文化深造学习，提高自身职业素养、能力、学历，职位提升薪资年化、享受品质生活；为企业及时解决人才能力不足痛点。</p>',
         Team:[{
           zhiwei:"招生就业办公室",
           imgsrc:"static/images/ren1.jpg",
           zhiweiEng:"Enrolment and Employment Office",
           fuzeren:"张毅",
           tel:"18374887070",
           zhiweicon:[
                "1. 负责制定全年招生计划,按政策向上级申报单位并申报落实招生计划。",
                "2. 负责与招生地区（域）各地市招生主管部门联系，全面掌握招生政策和生源状况，并根据实际情况，制定招生办法，开展招生工作。",
                "3. 负责招生队伍建设和各类招生人员管理、培训、考核、奖惩工作。",
                "4.负责学生就业推荐、就业指导工作。",
                "5.负责证照验印表的数据采集、整理、编报工作。",
                "6.负责毕业生推荐表发放、审核以及就业协议书的签订、管理工作。"
           ]
         },{
           zhiwei:"教考中心",
           imgsrc:"static/images/ren2.jpg",
           zhiweiEng:"Teaching and examination center",
           fuzeren:"梁文芽",
           tel:"18374887051",
           zhiweicon:[
                "1. 全面统筹公司教务部的日常运行工作，负责教务管理工作及日常教学安排；", 
                "2. 参与建设和完善校区教务制度、流程； ",
                "3. 参与校区品牌建设工作，致力于提升校区的教学质量服务质量、综合市场竞争力。", 
                "4. 妥善处理各类突发事件，制定相应解决方案；提高校区学生续费率，组织控制退费及挽单的工作。"
           ]
         },{
           zhiwei:"对外合作交流中心",
           imgsrc:"static/images/ren3.jpg",
           zhiweiEng:"Foreign cooperation and Exchange Center",
           fuzeren:"何石美",
           tel:"15570854623",
           zhiweicon:[
                "1. 负责对外项目的开发、联络、实施及管理；负责制订外来访团组的接待计划；",
                "2. 协助领导落实日常工作的安排和协调；",
                "3. 协助领导制订战略、规划、报告和管理规定等；",
                "4. 协助合作办学项目的申报、审批、评估和延期等工作；",
                "5. 处理领导交办的其它工作。"

           ]
         },{
           zhiwei:"行政人事中心",
           imgsrc:"static/images/ren4.jpg",
           zhiweiEng:"Administrative Personnel Center",
           fuzeren:"龚晓林",
           tel:"18175157859",
           zhiweicon:[
                "1. 根据整体发展战略方向，推动公司人力资源战略规划的制定与实施.",
                "2. 完善公司人力资源管理体系，优化人力资源管理流程，",
                "3. 配合公司整体人力战略的发展规划，确保各岗位人力配置到位，以及人力优化考核工作到位，确保达成优胜略汰的人员管理目标；",
                "4. 根据公司整体发展战略，组织修定各项人力资源管理制度、考核制度 ",
                "5. 推进管理团队的建设，塑造、维护、发展和传播公司企业文化；"
           ]
         },{
           zhiwei:"信息化中心",
           imgsrc:"static/images/ren5.jpg",
           zhiweiEng:"Information Center",
           fuzeren:"郭鑫",
           tel:"",
           zhiweicon:[
                "1. 按照学校发展思路，总体规划、总体协调学校信息化建设工作；",
                "2. 负责公司信息化中心建设与二级办学单位的信息化建设和技术研发，为部门、二级办学部门提供信息化建设咨询，提升学校信息化维护；",
                "3. 负责学校信息公共平台的建设和维护；",
                "4. 提供学校网络基础设施建设和技术保障,研究网络技术；",
                "5. 承担网络故障咨询和网络故障维护服务；",
                "6. 积极开拓，应用新的网络、信息及多媒体技术服务。"
                
           ]
         }]
       }
     }
   }
   
});
</script>

<style>
.organ-banner {
  width: 100%;
  height: auto;
  min-width: 1000px;
}
.organ-banner img {
  width: 100%;
  display: block;
}
.organ-about{
  width:1000px;
  height: auto;
  margin: 40px auto;
}
.organ-about p{
  font-family:"微软雅黑";
  font-size: 14px;
  line-height: 34px;
  color:#333333;
  text-indent: 2em; 
  text-align: justify;
}
.organ-list{
  width: 100%;
  height: auto;
}
.organ-list dl{
  width: 1000px;
  height: auto;
  padding: 40px 0px;
  margin: 0 auto;
  border-top: #7d7d7d dashed 1px;
}
.organ-list dl dt{
  width: 260px;
  height: 260px;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  float: left;
  position: relative;
}
.organ-list dl dt img{
  display: block;
  position: absolute;
  width: 480px;
  height: 260px;
  left: 50%;
  margin-left: -240px;
  transition:all 0.8s; 
}
.organ-list dl dt:hover img{
  transform: scale(1.2);
}

.organ-list dl dd{
  margin-left: 40px;
  width:700px;
  float: left;
}
.clear{
  clear: both;
}
.organ-list dl dd h4{
  font-size: 16px;
  color: #333333;
  line-height: 30px;
  font-weight: normal;
  margin-top: 10px;
}
.organ-list dl dd>p{
  font-family:"微软雅黑";
  font-size: 14px;
  color: #324681;
  line-height:30px;
  font-weight: bold;
}

.organ-list dl dd>p span{
  font-family:"微软雅黑";
  font-size: 14px;
  color: #333333;
  line-height:30px;
  font-weight: normal;
  margin-right: 30px;
}
.organ-list dl dd ul{
 margin-top: 15px;
}
.organ-list dl dd li{
  font-family:"微软雅黑";
  font-size: 14px;
  color: #333333;
  line-height:25px;
}
</style>
