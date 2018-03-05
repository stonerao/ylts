<template>
   <swiper :options="swiperOption" ref="mySwiper">
       <template>
        <swiper-slide v-for="i in 30" :key="i" v-if="i!==0">
        <m-card 
        :num="i"
        class="s-item"
         />
    </swiper-slide> 
       </template>   
 </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import mCard from './card';
export default {
  name: '',
  data () {
      return {
           swiperOption:{
              width:300,
              height:300,
              autoplay:true,
               loop : true,
              effect : 'flip',
            flipEffect: {
                slideShadows : true,
                limitRotation : true,
            }
          }
      }
  },
 computed: {
       swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  mounted () {
      this.swiper.slideTo(3, 1000, false)
  },
  methods: {
     
  },
  components: {
    swiper,
    swiperSlide,
    mCard
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    // .s-item
    //     width 300px
    //     height 200px
</style>
