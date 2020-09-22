<template>
<div class="page">
  <div id="nav">
      <router-link to="/home">
        <div class="header">
          <span class="iconfont iconchangyonglogo40-copy"></span>
          <span>首页</span>
        </div>
      </router-link> 
      <router-link to="/discover">
        <div class="header">
          <span class="iconfont iconfaxian"></span>
          <span>发现</span>
        </div>
      </router-link>
      <router-link to="/order">
        <div class="header">
          <span class="iconfont icondd"></span>
          <span>订单</span>
        </div>
      </router-link>
      <router-link to="/my">
        <div class="header">
          <span class="iconfont iconwode"></span>
          <span>我的</span>
        </div>
      </router-link>
    </div>
    <router-view/>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#nav{
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding-top: 10px;
  border-top: 2Px solid #eee;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  .header{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #8e8e93;
    .iconfont{
      font-size: 36px;
      margin-bottom: 5px;
    }
    span{
      font-size: 24px;
    }
  }
  .router-link-active{
    .header{
      color: blue;
    }
  }
}

</style>