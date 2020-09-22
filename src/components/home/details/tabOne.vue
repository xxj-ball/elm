<template>
  <div class="box" ref="box">
        <div class="safe">
            <img src="https://cube.elemecdn.com/5/37/ee95509e19a4001f2a86c369d2d96png.png">
        </div>
        <div class="top">
            <p class="name">{{foodsData.name}}</p>
            <scroll-row>
                <ul class="list">
                    <li v-for="(item,index) in foodsData.items" :key="item.item_id" class="foods">
                        <img :src="foodsData.foodImg[index]">
                        <div class="fod">
                            <h3>{{item.name}}</h3>
                            <div class="yue"><span>月售{{item.month_sales}}</span><span>好评{{item.satisfy_rate}}%</span></div>
                            <div class="price"><p>￥{{item.price}}</p>
                                <span class="iconfont iconjia"></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </scroll-row>
        </div>
        <div class="toggle">
            
                <div class="left" >
                    <scroll ref="left" class="scl">
                    <ul class="listOne">
                        <li class="tab-list" v-for="(item,index) in detailsList.menu" :key="index" >
                            <span>{{item.name}}</span>
                        </li>
                    </ul>
                    </scroll>
                </div>
                <div class="scroll-wrap" ref="wrap" :style="{height:wrapHeight}">
                    <div class="scroll" >
                        <div class="right">
                            <div class="listTwo">
                                <div v-for="item in detailsList.menu" :key="item.item_id">
                                    <div class="headline">
                                        <span class="desc1">{{item.name}}</span>
                                        <span class="desc2">{{item.description}}</span>
                                    </div>
                                    <div v-for="(text,index) in item.foods" :key="index" class="caption">
                                        <div class="image"><img src="https://cube.elemecdn.com/d/3a/9a79a24b3c98495b5917015c2108ajpeg.jpeg"></div>
                                        <div class="sales">
                                            <h3>{{text.name}}</h3>
                                            <p>{{text.materials}}</p>
                                            <div class="yue"><span>月售{{text.month_sales}}</span><span>好评{{text.satisfy_rate}}%</span></div>
                                            <div class="price"><p>￥{{text.price}}</p>
                                                <span class="iconfont iconjia"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
                
        </div>
      </div>
</template>

<script>
import {mapState} from 'vuex'
import downUpVue from '../../../../../../program/my-app/src/components/common/down-up.vue'
export default {
    data(){
        return{
            wrapHeight:''
        }
    },
    computed:{
        ...mapState({
            foodsData:state=>state.details.foodsData,
            detailsList:state=>state.details.detailsList,
        })
    },
    methods:{
        handleScrollAction({x,y}){

        }
    },
    mounted(){
        const scroll=new IScroll(this.$refs.wrap,{
            tap: true,
            click: true,
            probeType: 3,
        });
        scroll.on('beforeScrollStart', ()=>{
        scroll.refresh();
        });
        this.wrapHeight = document.documentElement.clientHeight -220 +'px';
        // console.log(this.wrapHeight);
        this.$refs.box.addEventListener('touchstart',()=>{
            this.$emit('touchAction');
        })
    }
}
</script>

<style lang="scss" scoped>
.box{
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
        box-sizing: border-box;
        padding-top: 32px;
        .name{
            width: 100%;
            height: 38px;
            box-sizing: border-box;
            padding-left: 32px;
            margin-bottom: 20px;
            color: #333;
            font-size: 32px;
            font-weight: 600;
        }
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
                .fod{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    h3{
                        width: 100%;
                        height: 33px;
                        font-size: 28px;
                        color: #333;
                        margin: 14px 0 7px;
                         white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                    .yue{
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        height: 24px;
                        margin-bottom: 14px;
                        span{
                            color: #999;
                            font-size: 20px;
                            margin: 0 3px;
                        }
                    }
                    .price{
                        width: 100%;
                        height: 44px;
                        display: flex;
                        justify-content: space-between;
                        p{
                            color: #ff5339;
                            font-size: 36px;
                        }
                        span{
                            font-size: 44px;
                        }
                    }
                }
            }
        }
    }
    .scroll-wrap{
        overflow: hidden;
    }
    .toggle{
        width: 100%;
        padding-top:32px;
        display: flex;
        .left{
            width: 20%;
            display: flex;
            flex-direction: column;
            .scl{
                width: 100%;
                height: 700px;
            }
            .listOne{
                width: 100%;
                display: flex;
                flex-direction: column;
                background: #eee;
                li{
                    width: 100%;
                    box-sizing: border-box;
                    padding: 35px 15px;
                    span{
                        display: block;
                        font-size: 24px;
                        color: #666;
                    }
                }
            }
        }
        .right{
            width: 100%;
            .listTwo{
                width: 100%;
                .headline{
                    width: 100%;
                    box-sizing: border-box;
                    padding: 15px 0 15px 20px;
                    .desc1{
                        font-size: 24px;
                        color: #666;
                        margin-right: 10px;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                    .desc2{
                        font-size: 20px;
                        color: #999;
                    }
                }
                .caption{
                    width: 100%;
                    box-sizing: border-box;
                    padding: 20px 0 20px 20px;
                    display: flex;
                    .image{
                        width: 190px;
                        img{
                            width: 100%;
                            display: block;
                        }
                    }
                    .sales{
                        flex: 1;
                        padding-right: 30px;
                        margin-left: 20px;
                        display: flex;
                        flex-direction: column;
                        h3{
                            font-size: 30px;
                            color: #333;
                            height: 36px;
                            line-height: 36px;
                            font-weight: 700;
                        }
                        p{
                            margin: 10px 0;
                            height: 24px;
                            font-size: 20px;
                            color: #999;
                        }
                        .yue{
                        width: 100%;
                            display: flex;
                            flex-direction: row;
                            height: 24px;
                            margin-bottom: 14px;
                            span{
                                color: #999;
                                font-size: 20px;
                                margin: 0 3px;
                            }
                        }
                        .price{
                            width: 100%;
                            height: 44px;
                            display: flex;
                            margin-top: 30px;
                            justify-content: space-between;
                            p{
                                color: #ff5339;
                                font-size: 36px;
                            }
                            span{
                                font-size: 44px;
                            }
                        }
                    }
                }
            }
        }
    }
    
}
</style>