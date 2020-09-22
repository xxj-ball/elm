<template>
  <div class="top">
    <div class="header">
      <span class="iconfont icondizhi"></span>
      <p>未知地址</p>
    </div>
    <div class="search" :class="{active:position}" :style={top:y} ref="search">
      <div class="btn">
        <span class="iconfont iconsearch"></span>
        <span class="elm">搜索饿了么商家、商品名称</span>
      </div>
    </div>
    <ul class="list">
      <li v-for="item in data" :key='item.id'>
        <img :src="item.picUrl">
        <span>{{item.name}}</span>
      </li>
    </ul>
    <div class="shop">
      <div class="title">
        <div class="left">
          <h3>品质套餐</h3>
          <p>搭配齐全吃得好</p>
          <span>立即抢购 ></span>
        </div>
        <div class="right">
          <img src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png">
        </div>
      </div>
      <div class="super">
          <img src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg">
          <span class="member">超级会员</span>
          <span class="money"> 以为我节省11元</span>
          <span class="bounty">下单即可获得奖励金 ></span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props:{
    position:Boolean,
    y:String
  },
  computed:{
    ...mapState({
      data:state=>state.entries.entriesData
    })
  },
  mounted(){

    this.$emit('topAction',this.$refs.search.offsetTop);
  }
  
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  padding: 30px 28px 0;
  display: flex;
  color: #fff;
  background: linear-gradient(90deg,#0af,#0085ff);
  .iconfont{
    font-size: 34px;
  }
  p{
    margin-left: 10px;
    font-size: 34px;
    font-weight: 800;
  }
}
.search{
  width: 100%;
  height: 102px;
  box-sizing: border-box;
  padding: 15px 28px;
  
  background: linear-gradient(90deg,#0af,#0085ff);
  .btn{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #999;
    .iconfont{
      font-size: 32px;
      margin-right: 10px;
    }
    .elm{
      font-size: 28px;
      font-family: simsun;
    }
  }
}
.active{
    position: absolute;
    top: 0;
    z-index: 10;
  }
.list{
  width: 100%;
  height: 354px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  li{
    width: 20%;
    height: 128px;
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img{
      width: 90px;
    }
    span{
      line-height: 1;
      font-size: 24px;
      color: #666;
      margin-top: 10px;
    }
  }
}
.shop{
  width: 100%;
  height: 306px;
  box-sizing: border-box;
  padding: 0 20px;
  margin-bottom: 16px;
  
  .title{
    display: flex;
    box-sizing: border-box;
    width: 710px;
    height: 220px;
    padding: 24px 0 0 30px;
    position: relative;
    background: #eee;
    .left{
      h3{
        height: 40px;
        margin-bottom: 10px;
        font-size: 34px;
        color: #333;
        font-weight: 700;
      }
      p{
        font-size: 26px;
        color: 777;
        margin-bottom: 18px;
      }
      span{
        font-size: 24px;
        color: #af8260;
      }
    }
    .right{
      width: 282px;
      height: 188px;
      position: absolute;
      top: 18px;
      right: 28px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .super{
    width: 710px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 80px;
    padding: 0 20px 0 30px;
    background: linear-gradient(90deg,#ffefc4,#f3dda0);
    margin-top: 5px;
    position: relative;
    img{
      width: 34px;
      margin-right: 15px;
    }
    .member{
      font-size: 28px;
      color: #644f1b;
      font-weight: 700;
      margin-right: 10px;
    }
    .money{
      font-size: 22px;
      color: #644f1b;
    }
    .bounty{
      color: #644f1b;
      font-size: 22px;
      position: absolute;
      right: 20px;
    }
  }
  
}
</style>
