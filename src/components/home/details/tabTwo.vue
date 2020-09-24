<template>
  <div class="two">
      <div class="header">
          <div class="headLeft">
              <div class="rate1" v-if="rataData.rating">
                  {{rataData.rating.shop_score}}
              </div>
              <div class="rate2">
                  <span>商家评分</span>
                  <span><van-rate v-model=value allow-half void-icon="star" color="#FFB500" void-color="#eee" /></span>
              </div>
          </div>
          <div class="headRight">
              <div class="center">
                  <div class="tast">
                      <span>味道</span>
                      <p  v-if="rataData.rating">{{rataData.rating.taste_score}}</p>
                  </div>
                  <div class="score">
                      <span>包装</span>
                      <p  v-if="rataData.rating">{{rataData.rating.food_score}}</p>
                  </div>
              </div>
              <div class="ride">
                  <p>配送</p>
                  <span  v-if="rataData.rating">{{rataData.rating.rider_score}}</span>
              </div>
          </div>
      </div>
      <div class="line">

      </div>
      <div class="evaluate">
          <ul class="list">
              <li v-for="(item,index) in rataData.tags" :key="index" :class="{active:text==item.name}" @click="selsetAction(item)">
                 <span>{{item.name}}</span>  <span>{{item.count}}</span>
              </li>
          </ul>
          <div class="see">
              <span>只看有内容的评价</span>
          </div>
          <ul class="appraise">
              <li v-for="(item,index) in rataData.comments" :key="index">
                  <div class="content">
                      <div class="image">
                          <img src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg">
                      </div>
                      <div class="name">
                          <p>{{item.username}}</p>
                          <span>2020-06-25</span>
                      </div>
                      <div class="rating">
                          <span><van-rate v-model=item.rating allow-half void-icon="star" color="#FFB500" void-color="#eee" /></span>
                      </div>
                      <div class="ping">
                          {{item.rating_text}}
                      </div>
                      <div class="merchant">{{item.reply.content}}</div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Rate } from 'vant';

Vue.use(Rate);
import {mapState} from 'vuex'
export default {
    data(){
        return{
            value:4.5,
            text:'全部'
        }
    },
    computed:{
        ...mapState({
            rataData:state=>state.rate.rateData,
        })
    },
    methods:{
        selsetAction(item){
            this.text = item.name;
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
.two{
    width: 100%;
    .header{
        width: 100%;
        height: 282px;
        box-sizing: border-box;
        padding: 40px 0 60px 48px;
        display: flex;
        .headLeft{
            width: 252px;
            display: flex;
            align-items: center;
            .rate1{
                width: 140px;
                height: 182px; 
                font-weight: 400;
                font-size: 76px;
                color: #ff6000;
                word-break:break-all 
            }
            .rate2{
                margin-left: 20px;
                span{
                    display: block;
                    font-size: 24px;
                    color: #666;
                    margin-bottom: 10px;
                }
            }
        }
        .headRight{
            flex: 1;
            display: flex;
            align-items: center;
            .center{
                width: 170px;
                height: 86px;
                padding: 0 54px;
                display: flex;
                border-right: 1px solid #999;
                .tast,.score{
                    color: #666;
                    font-size: 24px;
                    text-align: center;
                    margin-left: 5px;
                    span{
                        display: block;
                        margin-bottom: 10px;
                    }
                    p{
                        font-size: 42px;
                        color: #666;
                    }
                }
            }
            .ride{
                width: 172px;
                height: 87px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                p{
                    font-size: 24px;
                    color: #666;
                }
                span{
                    display: block;
                    font-size: 42px;
                    color: #666;
                    margin-bottom: 10px;
                }
            }
        }
    }
    .line{
        width: 100%;
        height: 16px;
        background: #eee;
    }
    .evaluate{
        width: 100%;
        box-sizing: border-box;
        padding: 20px 24px;
        .list{
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
            display: flex;
            flex-wrap: wrap;
            li{
                height: 56px;
                padding: 0 18px;
                margin: 7px;
                background: #ebf5ff;
                color: #6d7885;
                font-size: 24px;
                line-height: 56px;
            }
            .active{
                background: #0097ff;
                color: #fff;
            }
        }
        .see{
            width: 100%;
            height: 80px;
            box-sizing: border-box;
            padding-left: 30px;
            border-bottom: 1px solid #eee;
            span{
                line-height: 80px;
                font-size: 27px;
                color: #666;
            }
        }
        .appraise{
            width: 100%;
            display: flex;
            flex-direction: column;
            li{
                width: 100%;
                padding: 30px 0 24px 0;
                border-bottom: 1px solid #eee;
                position: relative;
                .content{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    box-sizing: border-box;
                    padding-left: 80px;
                    .image{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 60px;
                        height: 60px;
                        border: 1px;
                        border-radius: 50%;
                        overflow: hidden;
                        img{
                            display: block;
                            width: 100%;
                        }
                    }
                    .name{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        p{
                            font-size: 26px;
                            color: #333;
                        }
                        span{
                            font-size: 22px;
                            color: #999;
                        }
                    }
                    .rating{
                        margin: 12px 0 4px;
                    }
                    .ping{
                        width: 100%;
                        // height: 34px;
                        margin: 16px 0;
                        font-size: 28px;
                        color: #333;
                    }
                    .merchant{
                        padding: 20px;
                        margin: 20px 0;
                        background: #f3f3f3;
                        color: #333;
                        font-size: 26px;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
}
</style>