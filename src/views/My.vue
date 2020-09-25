<template>
  <div class="my">
      <div class="login">
        <div class="image">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534333352,2268662817&fm=26&gp=0.jpg">
        </div>
        <div class="sign">
          <div class="deng">
            <span>登录/</span>
            <span>注册</span>
          </div>
          <p>登录后享受更多特权</p>
        </div>
        <span></span>
      </div>
      <div class="discounts">
        <div class="packet">
          <p class="iconfont iconhongbao"></p>
          <span>红包</span>
        </div>
        <div class="gold">
          <p class="iconfont iconjinbi"></p>
          <span>金币</span>
        </div>
      </div>
      <div class="address public">
        <span class="iconfont icondizhi"></span>
        <p>我的地址</p>
      </div>
      <div class="center">
        <div class="shop public">
          <span class="iconfont iconshangcheng1"></span>
          <p>金币商城</p>
        </div>
        <div class="share public">
          <span class="iconfont iconlibao"></span>
          <p>分享拿20元现金</p>
        </div>
      </div>
      <div class="bottom">
        <div class="service public">
          <span class="iconfont iconerji"></span>
          <p>我的客服</p>
        </div>
        <div class="download public">
          <span class="iconfont iconelemo"></span>
          <p>下载饿了么APP</p>
        </div>
        <div class="rule public">
          <span class="iconfont iconguize"></span>
          <p>规则中心</p>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>
<style scoped lang="scss">
.my{
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 100px;
  background: #eee;
  .login{
    width: 100%;
    height: 220px;
    box-sizing: border-box;
    padding: 50px 30px;
    display: flex;
    align-items: center;
    color: #fff;
    background: linear-gradient(90deg,#0af,#0085ff);
    .image{
      width: 120px;
      height: 120px;
      border: 1px solid;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 120px;
      }
    }
    .sign{
      display: flex;
      margin-left: 30px;
      flex-direction: column;
      height: 120px;
      justify-content: space-between;
      .deng{
        height: 50px;
        margin-bottom: 16px;
        span{
          font-size: 42px;
          font-weight: 700;
        }
      }
      p{
        margin-bottom: 15px;
      }
    }
  }
  .discounts{
    width: 100%;
    height: 168px;
    box-sizing: border-box;
    display: flex;
    background: #fff;
    .packet,.gold{
      flex: 1;
      height: 100%;
      box-sizing: border-box;
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p{
        font-size: 52px;
        margin-bottom: 15px;
      }
      span{
        font-size: 24px;
        color: #666;
      }
      
    }
    .packet{
        border-right: 1px solid #eee;
        p{
          color: red;
        }
      }
      .gold{
        p{
          color: yellow;
        }
      }
  }
  .address,.center,.bottom{
    width: 100%;
    margin-top: 20px;
    background: #fff;
  }
  .public{
    width: 100%;
    display: flex;
    align-items: center;
    // height: 34px;
    p{
      padding: 28px 0;
      height: 34px;
      margin-left: 20px;
      color: #333;
      font-size: 32px;
    }
    span{
      margin-left: 30px;
      font-size: 36px;
    }
  }
}
</style>