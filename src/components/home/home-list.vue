<template>
  <div class="home-list">
      <div class="title">
          <span class="line"></span>
          <h3>推荐商家</h3>
          <span class="line"></span>
      </div>
      <div class="menu" ref="menu" :class="{active:listShow}" :style={top:y}>
          <p @click='rankAction'><span>{{replaceText}}</span><span class="iconfont iconxiala"></span></p>
          <p><span>距离最近</span></p>
          <p><span>销量最高</span></p>
          <p @click="selectAction"><span>筛选</span><span class="iconfont iconshaixuan"></span></p>
      </div>
      
      <ul class="list">
          <li v-for="(item,index) in data" :key='item.id' class="goods" @click="detailsAction(item,index)">
                  <div class="top">
                      <img :src="item.image_path">
                      <div class="details">
                          <div class="name">
                              <span class="store">{{item.name}}</span>
                              <span class="icon">口···</span>
                          </div>
                          <div class="rate">
                              <div class="star">
                                  <span>
                                      <van-rate v-model=item.rating allow-half void-icon="star" color="#FFB500" void-color="#eee" />
                                  </span>
                                  <span>{{item.rating}}</span>
                                  <span>月售{{item.recent_order_num}}单</span>
                              </div>
                              <div class="trans" >
                                  蜂鸟专送
                              </div>
                          </div>
                          <div class="delivery">
                              <div class="money">
                                  <span>￥{{item.piecewise_agent_fee.rules.map(item=>item.price).join()}}起送</span> |
                                  <span>{{item.piecewise_agent_fee.tips}}</span>
                              </div>
                              <div class="time">
                                  <span>{{item.distance}}m</span> |
                                  <span>{{item.order_lead_time}}分钟</span>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                  <div class="bottom">
                      <p class="text">{{item.support_tags.map(item=>item.text).join()}}</p>
                      <div class="subtract ">
                          <p class="jian">减</p>
                          <span>{{item.activities[0].description}}</span>
                      </div>
                      <div></div>
                  </div>
          </li>
      </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { Rate } from 'vant';

Vue.use(Rate);
import {mapState} from 'vuex'
export default {
    props:{
        listShow:Boolean,
        y:String,
        replaceText:String
    },
    data(){
        return{
            show:false,
        }
    },
    computed:{
        ...mapState({
            data:state=>state.goods.goodsData,
            rankData:state=>state.filter.rankData
        })
    },
    methods:{
        rankAction(){
            
            // this.show=true;
            this.$emit('rank');
        },
        selectAction(){
            this.$emit('select');
        },
        detailsAction(item,index){
            this.$router.push({name:'details',params:{id:item.id}})
            this.$emit('imgAction',item.id);
        }
    },
    mounted(){
        this.$emit('listAction',this.$refs.menu.offsetTop);
        this.$store.dispatch('filter/filterRequest');
    }
}
</script>

<style scoped lang="scss">
.title{
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    .line{
        display: block;
        width: 50px;
        height: 1Px;
        background: #000;
    }
    h3{
        font-size: 30px;
        margin: 0 30px;
    }
}
.menu{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        font-size: 28px;
        color: #666;
        .iconxiala{
            font-size: 20px;
        }
        .iconshaixuan{
            font-size: 26px;
        }
    }
}
.active{
    position: absolute;
    top: 0;
    z-index: 10;
    background: #fff;
  }

.list{
    width: 100%;
    .goods{
        width: 100%;
        height: 288px;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1Px solid #eee;
        .top{
            width: 100%;
            height: 130px;
            box-sizing: border-box;
            padding: 0 20px;
            display: flex;
            img{
                width: 130px;
            }
            .details{
                width: 100%;
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .name{
                    display: flex;
                    justify-content: space-between;
                    .store{
                        font-size: 30px;
                        color:#333;
                        font-weight: 700;
                    }
                }
                .rate{
                    display: flex;
                    justify-content: space-between;
                    color: #666;
                    .star{
                        span{
                            margin: 0 5px;
                        }
                    }
                    .trans{
                        width: 85px;
                        height: 25px;
                        box-sizing: border-box;
                        padding: 0 4px;
                        background:linear-gradient(45deg,#0085ff,#0af);
                        color: #fff;
                        font-size: 18px;
                        line-height: 25px;
;
                    }
                }
                .delivery{
                    display: flex;
                    justify-content: space-between;
                    color: #666;
                    align-items: center;
                }
            }
        }
        .bottom{
            width: 100%;
            height: 98px;
            box-sizing: border-box;
            padding-left: 170px;
            display: flex;
            flex-direction: column;
            color: #666;
            .text{
                width: 560px;
                height: 34px;
                margin: 20px 20px 0 0;
                border-bottom: 1Px solid #eee;
            }
            .subtract{
                width:560px ;
                height: 36px;
                font-size: 22px;
                display: flex;
                align-items: center;
                .jian{
                    width: 28px;
                    height: 28px;
                    background: chocolate;
                    color:#fff;
                    text-align: center;
                    line-height: 28px;
                    margin-right: 6px;
                }
                span{
                    width: 402px;
                    height: 36px;
                    display: block;
                    overflow: hidden;
                    line-height: 36px;
                }
            }
        }
    }
}
</style>