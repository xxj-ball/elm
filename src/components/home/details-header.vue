<template>
  <div class="header">
      <div class="image" :style="{backgroundImage:'url('+dataImg.path1+')'}">
          <span class="iconfont iconfanhui" @click="backAction"></span>
      </div>
      <img :src='dataImg.path2' class="logo">
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
      <div class="tab">
          <div v-for="(item,index) in tabList" :key="index" class="nav" :class="{show:text==item}" @click="selectAction(item)">
              <p>{{item}}</p>
              <span :class="{active:text==item}"></span>
          </div>
      </div>
      <div class="box">
        <div class="safe">
            <img :src="dataImg.path3">
        </div>
        <div class="top">
                <p>{{foodsData.name}}</p>
                <ul class="list">
                    <li v-for="(item,index) in foodsData.items" :key="item.item_id" class="foods">
                        <img :src="foodsData.foodImg[index]">

                    </li>
                </ul>
        </div>
        <div class="toggle">
            <div class="left">
                <ul class="listOne">
                    <li class="tab-list" v-for="(item,index) in detailsList.menu" :key="index" >
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="right">
                <p>{{foodsData.name}}</p>
                <ul class="listTwo">
                    <li v-for="(item) in foodsData.items" :key="item.item_id">
                        <!-- <img :src="foodsData.foodImg[index]"> -->

                    </li>
                </ul>
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            img:'',
            tabList:['点餐','评价','商家'],
            text:'点餐'
        }
    },
    computed:{
        ...mapState({
            detailsList:state=>state.details.detailsList,
            dataImg:state=>state.details.dataImg,
            foodsData:state=>state.details.foodsData,
        })
    },
    methods:{
        selectAction(item){
            this.text = item;
        },
        backAction(){
            this.$router.back();
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped lang="scss">
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
    .safe{
        width: 100%;
        height: 176px;
        padding-top: 14px;
        img{
            display: block;
            margin: 0 32px;
            height: 100%;
        }
    }
    .top{
        width: 100%;
        .list{
            width: 100%;
            box-sizing: border-box;
            padding-left: 32px;
            display: flex;
            .foods{
                width: 240px;
                padding-bottom: 32px;
                margin-right: 20px;
                img{
                    width: 240px;
                }
            }
        }
    }
    .toggle{
        width: 100%;
        padding-top:32px;
        display: flex;
        .left{
            width: 20%;
            display: flex;
            flex-direction: column;
        }
        .right{
            width: 80%;
            .listTwo{
                width: 100%;
            }
        }
    }
    
}

</style>