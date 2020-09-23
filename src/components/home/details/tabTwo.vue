<template>
  <div class="two">
      <div class="header">
          <div class="headLeft">
              <div class="rate1">

              </div>
              <div class="rate2">

              </div>
          </div>
          <div class="headRight">
              <div class="center">
                  <div class="tast">
                      <span></span>
                      <span></span>
                  </div>
                  <div class="score">

                  </div>
              </div>
              <div class="ride">
                  <span></span>
                  <span></span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('rate/requestRate');
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
    }
}
</style>