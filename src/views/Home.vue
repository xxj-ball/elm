<template>
<div>
  <router-view :id='id'/>
  <div class="home pages">
    <div class="scrollWrap" ref="scroll">
      <div class="view">
        <home-top :position='position' :y='y1' @topAction='topAction'/>
        <home-list @listAction="listAction" @rank='rank' @select="selectAction" :listShow='listShow' :y='y2' :replaceText='rankText' @imgAction='imgAction'/>
      </div>
    </div>
    <div class="rankList" v-if="show" :style="{top:'182px'}" @click="showAction">
        <ul class="menuList" >
            <li v-for="item in rankData" :key="item.value" @click.stop='rankAction(item)' :class="{rank:item.name==rankText}">{{item.name}}</li>
        </ul>
    </div>
    <div class="selectList" v-if="selectShow" :style="{top:'92px'}" @click="closeAction">
      <div class="change" @click.stop="select">
          <div class="service">
            <p>商家服务(可选)</p>
            <ul class="listOne">
              <li>
                <img src="">
                <span>{{selectData.delivery_mode.text}}</span>
              </li>
              <li v-for="item in selectData.support" :key="item.id">
                <img src="">
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
          <div class="action">
            <p>优惠活动(单选)</p>
            <ul class="listTwo">
              <li v-for="item in selectActionData" :key="item.id">
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
          <div class="sail">
            <p>人均消费</p>
            <ul class="listThree">
              <li v-for="(item,index) in sailData" :key="index">
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="btn">
          <span class="btn1">清空</span>
          <span class="btn2">确定</span>
        </div>
    </div>
  </div>
</div> 
</template>

<script>
import homeTop from '../components/home/home-top'
import homeList from '../components/home/home-list'
import {mapState} from 'vuex'
export default {
  components: {
    homeTop,
    homeList
  },
  data(){
    return{
      position:false,
      y1:'',
      distance:0,
      listDistance:0,
      listShow:false,
      y2:'',
      show:false,
      rankText:'综合排序',
      selectShow:false,
      sailData:['￥20以下','￥20-￥40','￥40-￥60','￥60-￥80','￥80-￥100','￥100以上'],
      id:''
    }
  },
  computed:{
    ...mapState({
        rankData:state=>state.filter.rankData,
        selectData:state=>state.filter.selectData,
        selectActionData:state=>state.filter.selectActionData,
    })
  },
  methods:{
    topAction(num){
      this.distance=num;
    },
    listAction(num){
      this.listDistance=num-204;
      // console.log(this.listDistance);
    },
    rank(){
      this.scroll.scrollTo(0,-800,300);
      this.show=true;
    },
    rankAction(item){
      this.rankText=item.name;
    },
    selectAction(){
      this.scroll.scrollTo(0,-800,300);
      this.selectShow=true;
    },
    showAction(){
      this.show=false;
    },
    select(){

    },
    closeAction(){
      this.selectShow=false;
    },
    imgAction(id){
      this.id = id;
      // console.log(id);
    }
  },
  created(){
      this.$store.dispatch('entries/singerAction');
      this.$store.dispatch('goods/goodsAction');
    },
    mounted(){
        const scroll= this.scroll=new IScroll(this.$refs.scroll,{
            
            probeType: 3,
        });
        scroll.on('beforeScrollStart', ()=>{
          scroll.refresh();
        });
         scroll.on('scroll', ()=>{
          //  console.log(scroll.y);
           if(scroll.y < (-1*this.distance)){
             this.position=true;
             this.y1=-1 * scroll.y + 'px';
           }else{
             this.position=false;
           }
           if(scroll.y < (-1*this.listDistance)){
             this.listShow=true;
             this.y2=-1 * scroll.y+102+'px';
           }else{
             this.listShow=false;
           }
        });
        // this.rank();
    }
}
</script>
<style scoped lang="scss">
.pages{
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 100px;
  top: 0;
}
.scrollWrap{
  height: 100%;
  overflow: hidden;
}
.rankList{
    width: 100%;
    box-sizing: border-box;
    z-index: 5;
    background:rgba($color: #000000, $alpha: 0.3);
    position: absolute;
    left: 0;
    bottom: 0;
    li{
        width: 100%;
        height: 80px;
        border-bottom: 1Px solid #eee;
        background: #fff;
        padding-left: 40px;
        box-sizing: border-box;
        line-height: 80px;
        font-size: 28px;
        color: #333;
    }
    .rank{
      color:blue;
      font-weight: 500;
    }
}
.selectList{
    margin-top: 92px;
    width: 100%;  
    z-index: 5;
    background:rgba($color: #000000, $alpha: 0.3);
    position: absolute;
    left: 0;
    bottom: 0;
    .service,.action,.sail{
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      background: #fff;
      display: flex;
      flex-direction: column;
      p{
        width: 100%;
        height: 32px;
        font-size: 24px;
        color: #666;
        box-sizing: border-box;
        margin: 0 0 15px 7px;
        line-height: 60px;
      }
      ul{
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        // justify-content: space-between;
        
        li{
          align-self: flex-start;
          width: 30%;
          height: 70px;
          background:#fafafa; 
          box-sizing: border-box;
          margin: 6px 7px;
          text-align: center;
          line-height: 70px;
          span{
            font-size: 26px;
            color: #333;
          }
          
        }
      }

    }
    .action{
      background: #fff;
    }
    .sail{
      background: #fff;
    }
    .btn{
      width: 100%;
      height: 87px;
      display: flex;
      border: none;
      font-size: 32px;
      // box-sizing: border-box;
      padding-top: 20px;
      background: #fff;
      .btn1{
        flex: 1;
        height: 100%;
        background: #fff;
        color: #ddd;
        line-height:87px ;
        text-align: center;
      }
      .btn2{
        flex: 1;
        background-color: #00d762;
        color: #fff;
        line-height: 87px;
        text-align: center;
      }
    }
}

</style>