<template>
<div class="sc" ref="Wrap">
  <div class="header">
      <div class="image" :style="{backgroundImage:'url(https://cube.elemecdn.com/5/37/ee95509e19a4001f2a86c369d2d96png.png)'}">
          <span class="iconfont iconfanhui" @click="backAction"></span>
      </div>
      <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534333352,2268662817&fm=26&gp=0.jpg' class="logo">
      <div class="title" v-if="detailsList.rst">
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
      <tab-one  :class="{posi:posi}" v-show="(text=='点餐')" @addGoodsAction="addGoodsAction"/>
      <tab-two  :class="{posi:posi}" v-show="(text=='评价')"/>
      <tab-three  :class="{posi:posi}" v-show="(text=='商家')"/>
      
    </div>
    <div class="bottom" v-if="text=='点餐'">
        <div class="jian"><span>满20减2</span>
        </div>
        <div class="chart">
            <div class="iconfont iconshopCar" :class="{color:isColor}"></div>
            
            <div class="song" @click="payAction">结算</div>
        </div>
    </div>
    <div class="xian" v-show="isGoods">
        
    </div>
    <div class="pay" v-show="isPay">
        <div class="order">
            <span class="iconfont iconfanhui" @click="closeAction"></span>
             <h1>确认订单</h1>
        </div>
        <div class="store">
            <h2 v-if="detailsList.rst">{{detailsList.rst.name}}</h2>
            <ul class="program">
                <li v-for="item in goods" :key="item.id">
                    <img src="https://cube.elemecdn.com/b/d9/c9c8c8575ccaa2668ad8a89c3def6jpeg.jpeg?x-oss-process=image/format,webp/resize,w_72,h_72,m_fixed">
                    <span class="name">{{item.name}}</span>
                    <span class="num">x{{item.num}}</span>
                    <span class="price">￥{{item.price }}</span>
                </li>
            </ul>
            <div class="delive">
                <span>配送费</span>
                <span>￥2</span>
            </div>
            <div class="all">
                <span>小计￥{{(price).toFixed(2)}}</span>
            </div>
            <div class="mask">
                <span>￥{{price}}</span>
                <div class="payMoney" @click="payMoneyAction">
                    去支付
                </div>
            </div>
        </div>
    </div>
  
</div>
</template>
<script>
import {mapState} from 'vuex'
import tabOne from './details/tabOne'
import tabTwo from './details/tabTwo'
import tabThree from './details/tabThree'
export default {
    components:{
        tabOne,
        tabTwo,
        tabThree
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
            heig:'',
            posi:false,
            isGoods:false,
            isColor:false,
            goods:[],
            isPay:false,
            price:2
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
            // this.posi=true;
        },
        addGoodsAction(){
            this.isColor = true;
            this.goods = JSON.parse(localStorage.getItem('goods'));
            // console.log(this.goods);
        },
        payAction(){
            this.isPay = true;
            this.goods = JSON.parse(localStorage.getItem('goods'));
            this.goods.map(item=>{
                this.price += item.price*item.num;
            })
            this.$store.commit('order/orderAction',({
                rst:this.detailsList.rst.name,
                price:this.price,
                time:new Date().toLocaleString(),
                name:this.goods.map(item=>item.name)
            }))
        },
        closeAction(){
            this.isPay = false;
        },
        payMoneyAction(){
            this.$router.push('/order');
            localStorage.clear();
        }
    },
    mounted(){
        // console.log(this.$refs.tab.offsetTop);
        // console.log(this.$refs);
        // console.log(this.$refs.Wrap);
        const scroll=this.scroll = new IScroll(this.$refs.Wrap,{
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
        });
        
    }
}
</script>

<style scoped lang="scss">
.sc{
    height: 100%;
    overflow: hidden;
}
.posi{
    position: absolute;
    top: 80px;
}
.mask{
    width: 100%;
    height: 88px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(61,61,63,.9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        font-size: 36px;
        margin-left: 20px;
        color:#fff;
    }
    div{
        width: 210px;
        line-height: 88px;
        color: #fff;
        font-size: 30px;
        background: #38ca73;
        text-align: center;
    }
}
.act{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 900;
}
.xian{
    width: 100%;
    height: 40px;
    background: chartreuse;
    position: absolute;
    left: 0;
    bottom: 96px;
    z-index: 500;
}
.bottom{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    .jian{
        width: 100%;
        height: 40px;
        background: #fffad6;
        text-align: center;
        span{
            font-size: 20px;
            height: 20px;
            color: #333;
            line-height: 40px;
        }
    }
    .chart{
        width: 100%;
        height: 96px;
        background: rgba(61,61,63,.9);
        display: flex;
        .iconfont{
            width: 80px;
            height: 80px;
            font-size: 80px;
            position: absolute;
            left: 20px;
            bottom: 40px;
            z-index: 600;
        }
        .color{
            color: rgb(35, 149, 255);
        }
        .shang{
            margin-left: 150px;
            line-height: 96px;
            font-size: 25px;
            color: #999;
        }
        .song{
            position: absolute;
            right: 0;
            width: 210px;
            line-height: 96px;
            color: #fff;
            font-size: 30px;
            background: #38ca73;
            text-align: center;
        }
    }
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
.pay{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 700;
    background: #eee;
    box-sizing: border-box;
    .order{
        width: 100%;
        height: 88px;
        position: relative;
        background: linear-gradient(90deg,#0af,#0085ff);
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        .iconfont{
            position: absolute;
            left: 30px;
            font-size: 30px;
            color: #fff;
        }
        h1{
            font-size: 36px;
            color: #fff;
            font-weight: 700;
        }
    }
    .store{
        width: 100%;
        margin-top: 20px;
        box-sizing: border-box;
        padding:0 40px;
        background: #fff;
        display: flex;
        flex-direction: column;
        h2{
            width: 100%;
            height: 102px;
            box-sizing: border-box;
            padding: 32px 0;
            font-size: 34px;
            color: #333;
            font-weight: 600;
            border-bottom: 1px solid #eee;
        }
        .program{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            li{
                width: 100%;
                height: 121px;
                position: relative;
                box-sizing: border-box;
                padding: 24px 0;
                border-bottom: 1px solid #eee;
                display: flex;
                align-items: center;
                .name{
                    width: 280px;
                    font-size: 28px;
                    color: #333;
                    margin-left: 26px;
                }
                .num{
                    color: #333;
                    font-size: 24px;
                }
                .price{
                    color: #333;
                    font-size: 32px;
                    position: absolute;
                    right: 5px;
                }
            }
        }
        .delive{
            width: 100%;
            height: 103px;
            box-sizing: border-box;
            padding: 32px 0;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .all{
           width: 100%;
            height: 118px;
            line-height: 118px;
            box-sizing: border-box;
            padding: 32px 0;
            position: relative;
            span{
                display: block;
                position: absolute;
                right: 10px;
                font-size: 30px;
            }
        }
    }
}

</style>