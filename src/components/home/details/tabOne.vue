<template>
  <div class="box" ref="box">
        <div class="safe">
            <img src="https://cube.elemecdn.com/5/37/ee95509e19a4001f2a86c369d2d96png.png">
        </div>
        <div class="top">
            <p class="name">{{foodsData.name}}</p>
            <scroll-row>
                <ul class="list">
                    <li v-for="(item,index) in foodsData.items" :key="item.item_id" class="foods" @click="selectGoodsAction(item,index)">
                        <img :src="foodsData.foodImg[index]">
                        <div class="fod">
                            <h3>{{item.name}}</h3>
                            <div class="yue"><span>月售{{item.month_sales}}</span><span>好评{{item.satisfy_rate}}%</span></div>
                            <div class="price"><p>￥{{item.price}}</p>
                                <div>
                                    <span class="iconfont iconjian" v-show='isShow' @click="reduceAction"></span>
                                    <span ref="number"></span>
                                    <span class="iconfont iconjia" @click="addAction(item)"></span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </scroll-row>
        </div>
        <div class="toggle">
            
                <div class="left" >
                    <div ref="left" class="scl">
                    <ul class="listOne">
                        <li class="tab-list" v-for="(item,index) in detailsList.menu" :key="index" @click="selectAction(index)">
                            <span>{{item.name}}</span>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="scrollWrap" ref="wrp" :style="{height:wrapHeight}">
                    <div class="scll" >
                        <div class="right" >
                            <div class="listTwo">
                                <div v-for="(item) in detailsList.menu" :key="item.item_id" ref="scrol" >
                                    <div class="headline">
                                        <span class="desc1">{{item.name}}</span>
                                        <span class="desc2">{{item.description}}</span>
                                    </div>
                                    <div v-for="(text,index) in item.foods" :key="index" class="caption" @click="selectGoodsAction(text)">
                                        <div class="image"><img src="https://cube.elemecdn.com/d/3a/9a79a24b3c98495b5917015c2108ajpeg.jpeg"></div>
                                        <div class="sales">
                                            <h3>{{text.name}}</h3>
                                            <p>{{text.materials}}</p>
                                            <div class="yue"><span>月售{{text.month_sales}}</span><span>好评{{text.satisfy_rate}}%</span></div>
                                            <div class="price"><p>￥{{text.price}}</p>
                                                <div>
                                                    <span class="iconfont iconjian" @click="reduceAction" v-show='isShow'></span>
                                                    <span v-show='isShow'>{{}}</span>
                                                    <span class="iconfont iconjia" @click="addAction(text)"></span>
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
            
      </div>
</template>
// category_id
<script>
import {mapState} from 'vuex'
import downUpVue from '../../../../../../program/my-app/src/components/common/down-up.vue'
export default {
    data(){
        return{
            wrapHeight:'',
            tabShow:0,
            srt:0,
            isShow:false,
            goodsArr:[]
        }
    },
    computed:{
        ...mapState({
            foodsData:state=>state.details.foodsData,
            detailsList:state=>state.details.detailsList,
        })
    },
    methods:{
        touchAction(){
            this.$emit('touchAction');
        },
        selectAction(index){
            this.tabShow = index;
            this.str = -1*(this.$refs.scrol[index].offsetTop) ;
            console.log(this.str);
            this.scr.scrollTo(0,this.str,300);
        },
        selectGoodsAction(item,index){
            // this.$refs.number[index].innerText++;
        },
        reduceAction(){

        },
        addAction(item){
            this.$emit('addGoodsAction');
            if(localStorage.getItem('goods')){
                this.goodsArr = JSON.parse(localStorage.getItem('goods'));
            }
            let flag = false;
            let id = item.item_id;
            // console.log(id);
            this.goodsArr.map((item)=>{
                // console.log(item);
                if(item.id===id){
                    item.num+=1;
                    flag = true;
                    return false;
                }
            });
            if(!flag){
                this.goodsArr.push({
                    "id":item.item_id,
                    "name":item.name,
                    "num":1,
                    "price":item.price,
                    "ride_price":2
                })
            }
            localStorage.setItem('goods',JSON.stringify(this.goodsArr));
            // console.log(this.goodsArr);
        },
    },
    mounted(){
        const scr= this.scr=new IScroll(this.$refs.wrp,{
            probeType: 3,
        });
        scr.on('beforeScrollStart', ()=>{
        scr.refresh();
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
    .scrollWrap{
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
            position: relative;
            .tabList{
                position: absolute;
            }
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
                            width: 300px;
                            font-size: 30px;
                            color: #333;
                            height: 36px;
                            line-height: 36px;
                            font-weight: 700;
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
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