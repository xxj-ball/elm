<template>
<div class="sc" ref="sc">
  <div class="header">
      <div class="image" :style="{backgroundImage:'url(https://cube.elemecdn.com/5/37/ee95509e19a4001f2a86c369d2d96png.png)'}">
          <span class="iconfont iconfanhui" @click="backAction"></span>
      </div>
      <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534333352,2268662817&fm=26&gp=0.jpg' class="logo">
      <div class="title">
          <h3 class="tit">{{detailsList.rst.name}}</h3>
          <div class="evaluate">
              <span>评价{{detailsList.rst.rating}}</span>
              <span>月售{{detailsList.rst.recent_order_num}}单</span>
              <span>蓝骑士专送约40分钟</span>
          </div>
          <div class="discounts">
            <div class="reduction">
                <div v-for="(item,index) in (detailsList.rst.activity_tags)" :key="index" class="index">{{item.text}}</div>
            </div>
          </div>
          <div class="notice">
              <p>{{detailsList.rst.promotion_info}}</p>
          </div>
      </div>
      <div class="tab" ref="tab" :class="{act:tabShow}" :style="{top:heig}">
          <div v-for="(item,index) in tabList" :key="index" class="nav" :class="{show:text==item}" @click="selectAction(item)">
              <p>{{item}}</p>
              <span :class="{active:text==item}"></span>
          </div>
          
      </div>
      <tab-one @touchAction='touchAction'/>
      
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import tabOne from './details/tabOne'
export default {
    components:{
        tabOne
    },
    props:{
        da:String
    },
    data(){
        return{
            img:'',
            tabList:['点餐','评价','商家'],
            text:'点餐',
            tabShow:false,
            heig:''
        }
    },
    computed:{
        ...mapState({
            detailsList:state=>state.details.detailsList,
            dataImg:state=>state.details.dataImg,
            foodsData:state=>state.details.foodsData,
            data:state=>state.goods.goodsData,
        })
    },
    methods:{
        selectAction(item){
            this.text = item;
        },
        backAction(){
            this.$router.back();
        },
        touchAction(){
            // this.scroll.scrollTo(0,-466,300);
        }
    },
    mounted(){
        // console.log(this.$refs.tab.offsetTop);
        const scroll=this.scroll=new IScroll(this.$refs.sc,{
            tap: true,
            click: true,
            probeType: 3,
        });
        scroll.on('beforeScrollStart', ()=>{
        scroll.refresh();
        });
        scroll.on('scroll',()=>{
            if(scroll.y < (-1 * this.$refs.tab.offsetTop)){
                // console.log(scroll.y);
                this.tabShow = true;
                this.heig = (-1 * scroll.y) +'px';
            }else{
                this.tabShow = false;
            }
        })
    }
}
</script>

<style scoped lang="scss">
.sc{
    height: 100%;
    overflow: hidden;
}
.act{
    position: absolute;
    left: 0;
    top: 0;
}
.header{
    width: 100%;
    position: relative;
    .image{
        width: 100%;
        box-sizing: border-box;
        height: 200px;
        .iconfanhui{
            font-size: 34px;
            color: #fff;
            display: block;
            padding: 10px 0 0 10px;
        }
    }
    .logo{
        width: 150px;
        display: block;
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        border: 1Px solid #666;
        border-radius: 5px;
    }
    .title{
        width: 100%;
        padding-top: 60px;
        display: flex;
        flex-direction: column;
        .tit{
            text-align: center;
            font-size: 41px;
            color: #333;
            font-weight: 700;
        }
        .evaluate{
            margin-top: 13px;
            text-align: center;
            span{
                margin: 0 5px;
                font-size: 24px;
                color: #666;
            }
        }
        .discounts{
            width: 100%;
            height: 64px;
            box-sizing: border-box;
            padding: 24px 75px 0 75px;
            display: flex;
            justify-content: space-between;
            .reduction{
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                .index{
                    color: #ff4b33;
                    box-sizing: border-box;
                    margin: 5px;
                    padding: 2px 8px;
                    border: 1px solid rgb(255, 201, 193);
                }
            }
        }
        .notice{
            width: 100%;
            height: 64px;
            box-sizing: border-box;
            padding:17px 75px 20px 75px;
            p{
                width: 100%;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                font-size: 22px;
                color: #999;
            }
        }
    }
    .tab{
        width: 100%;
        height: 81px;
        display: flex;
        align-items: center;
        border-bottom: 1Px solid #eee;
        background: #fff;
        z-index: 300;
        .nav{
            flex: 1;
            text-align: center;
            font-size: 30px;
            position: relative;
        }
        .show{
            font-weight: 700;
        }
        .active{
            display: block;
            width: 60px;
            height: 4px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 50px;
            background-color: rgb(35, 149, 255);
        }
    }
    
}

</style>