<template>
    <div>
      <mm-swiper class="swiper"
      :autoPlay="swiperOption.autoPlay"
      :duration="swiperOption.duration"
      :interval="swiperOption.interval">
        <mm-slider v-for="(item,index) in list" :key="index">
          <img :src="item.src" alt="">
        </mm-slider>
      </mm-swiper>
    </div>
</template>

<script>
import Vue from "vue";
import Swiper from "@/components";
Vue.use(Swiper);
export default {
  data() {
    return {
      list: [
        { src: '../static/image/1.jpg' },
        { src: '../static/image/2.jpg' },
        { src: '../static/image/3.jpg' }
      ],
      swiperOption:{
        autoPlay: true,//自动播放
        duration: 300, //运动时间
        interval: 1200 //过渡时间
      }
    };
  },
  mounted() {
    console.error("http://er567.cn");
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: rem(350);
  img{
    width: 100%;
  }
}
</style>
