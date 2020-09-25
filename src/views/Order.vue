<template>
  <div class="order">
    <div class="title" v-for="(item,index) in data" :key="index">
        <div class="rst">
          <img src="https://cube.elemecdn.com/e/63/23054dfca5d9e008fc0972a3306c9jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed">
         <div class="store">
           <h2>{{item.rst}}</h2>
           <span>{{item.time}}</span>
         </div>
          <span class="text">{{order}}</span>
        </div>
        <div class="goods">
          <p class="name">{{item.name.join()}}</p>
          <span>￥{{item.price}}</span>
        </div>
        <div class="agin">
          <p>再来一单</p>
        </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      order:'订单支付成功',
      time:new Date().getTime()
    }
  },
  computed:{
    ...mapState({
      data:state=>state.order.data
    })
  },
  watch:{
    time(newVal){
        if((newVal-new Date(data.time).getTime())>=1000*60*10){
          this.order = '已送达';
          
        }
        console.log(newVal);
    }
  }
}
</script>

<style scoped lang="scss">
.order{
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 100px;
  background: #eee;
  .title{
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 20px 0 0 30px;
    background: #fff;
    
    .rst{
      width: 100%;
      height: 95px;
      box-sizing: border-box;
      padding: 0 26px 20px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      position: relative;
      .store{
        margin-left: 20px;
        h2{
          height: 48px;
          color: #333;
          font-size: 32px;
        }
        span{
          color: #999;
          font-size: 22px;
        }
      }
      .text{
        color: #333;
        font-size: 26px;
        position: absolute;
        top: 20px;
        right: 30px;
      }
    }
    .goods{
      width: 100%;
      height: 91px;
      box-sizing: border-box;
      padding: 30px 26px 30px 90px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      .name{
        max-width: 400px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
    .agin{
      width: 100%;
      height: 96px;
      box-sizing: border-box;
      padding: 20px 32px;
      display: flex;
      justify-content: flex-end;
      p{
        width: 104px;
        height: 34px;
        padding: 10px 20px;
        border:1px solid #2395ff;
        font-size: 26px;
        line-height: 34px;
        color:#2395ff;
      }
    }
  }
}
</style>