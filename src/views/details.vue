<template>
  <div class="details">
      <details-header/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import detailsHeader from '../components/home/details-header'
export default {
    components:{
        detailsHeader
    },
    computed:{
        ...mapState({
            detailsList:state=>state.details.detailsList
        })
    },
    created(){
        // console.log(this.$route.params.id);
        this.$store.dispatch('details/requestDetails',this.$route.params.id);
    }
}
</script>

<style lang="scss" scoped>
.details{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 200;
    background: #fff;
    
}
</style>