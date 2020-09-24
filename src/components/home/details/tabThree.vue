<template>
  <div class="three">
      <div class="delivery">
        <h3>配送信息</h3>
        <div class="distance">
          <div class="courier">蓝骑士专送</div>
          <span>约40分钟送达，</span>
          <span>距离304米</span>
        </div>
        <p>配送费￥0.0</p>
      </div>
      <div class="service">
        <h3>商家服务</h3>
        <p>该商户已购买食品安全责任险，食品安全有保障</p>
      </div>
      <div class="scenery">
        <h3>商家实景</h3>
        <div class="image">
          <img src="https://cube.elemecdn.com/0/cb/ea20a501840b59875d32fe2bb4f56jpeg.jpeg">
        </div>
      </div>
      <div class="message">
        <div class="msg">
          <h3>商家信息</h3>
          <span>简介</span>
        </div>
        <div class="category">
          <p class="lei">品类</p>
          <span>川湘菜</span>
        </div>
        <div class="phone">
          <p>商家电话</p>
          <span>联系商家</span>
        </div>
        <div class="address">
          <p>地址</p>
          <div></div>
        </div>
        <div class="time">
          <p>营业时间</p>
          <span>10:00-23:00</span>
        </div>
      </div>
      <div class="qualification">
        营业资格
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.three{
  width: 100%;
  background: #f5f5f5;
  .delivery{
    width: 100%;
    padding: 30px;
    background: #fff;
    display: flex;
    flex-direction: column;
    h3{
      height: 42px;
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 32px;
    }
    .distance{
      display: flex;
      width: 100%;
      height: 64px;
      margin-bottom: 14px;
      .courier{
        width: 108px;
        height: 64px;
        color: #fff;
        background: #0097ff;
        margin-right: 20px;
        text-align: center;
      }
      span{
        display: block;
        margin-top: 30px;
        font-size:26px;
        color: #666;
      }
    }
    p{
      font-size: 26px;
      color: #666;
    }
  }
  .service{
    width: 100%;
    margin:20px 0;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: #fff;
    h3{
      height: 42px;
      font-size: 30px;
      font-weight: 700;
    }
    p{
      margin-top: 32px;
      color: #666;
      font-size: 26px;
    }
  }
  .scenery{
    width: 100%;
    margin:20px 0;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: #fff;
    h3{
      height: 42px;
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 32px;
    }
    .image{
      width: 100%;
      height: 156px;
      img{
        width: 156px;
        height: 100%;
      }
    }
  }
  .message{
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    padding: 32px 30px 20px 30px;
    display: flex;
    flex-direction: column;
    .msg{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-bottom: 1px solid #999;
      h3{
        height: 42px;
        font-size: 30px;
        font-weight: 700;
      }
      span{
        display: block;
        padding: 30px 0;
        font-size: 26px;
        color: #666;
      }
    }
    .category,.phone,.address,.time{
      width: 100%;
      box-sizing: border-box;
      padding: 30px 30px 30px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1Px solid #999;
      p{
        font-weight: 700;
      }
      .lei{
        color: #333;
        font-size: 26px;
      }
    }
    .time{
      border: none;
    }
  }
  .qualification{
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 30px;
    font-size: 30px;
    font-weight: 700;
    background: #fff;
  }
  

}
</style>