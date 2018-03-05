<template>
 <swiper :options="swiperOption" ref="mySwiper" @click="fn">
    <swiper-slide >
        <t-item class="sitem" 
        :id="'fileSwiperCanvas1'"
        :firstname="'小明'"
        :lastname="'小明'"
        :history="'缺失'"
         />
    </swiper-slide>
    <swiper-slide>
        <t-item class="sitem"  
        :id="'fileSwiperCanvas2'" 
         :firstname="'小红'"
        :lastname="'小红'"
        :history="'不缺失'"
        />
    </swiper-slide>
    <swiper-slide>
        <t-item class="sitem"  :id="'fileSwiperCanvas3'"
         :firstname="'小蓝'"
        :lastname="'小蓝'"
        :history="'缺失'"
        />
    </swiper-slide>
    <swiper-slide>
        <t-item class="sitem"  :id="'fileSwiperCanvas4'"
         :firstname="'小蓝'"
        :lastname="'小蓝'"
        :history="'缺失'"
        />
    </swiper-slide>
 
 
 </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import tItem from './topItem';
export default {
  name: '',
  data () {
      return {
          swiperOption:{
              width:300,
              height:300,
              autoplay:true,
               loop : true,
              effect : 'cube',
              cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 100,
                shadowScale: 0.6
  },
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
     fn() {
        this.$router.push('/ooda');
     }
  },
  components: {
    swiper,
    swiperSlide,
    tItem
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .sitem
        width 300px
        height 200px
</style>
