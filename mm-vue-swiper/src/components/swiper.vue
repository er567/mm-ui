<template>
	<div class="contains">
    <div class="ui-swiper" @touchstart="s" @touchmove="m" @touchend="e">
        <slot/>
    </div>
	</div>
</template>

<script>
import Vue from "vue";

export default {
  name: "mm-swiper",
  components: {},
  props: {
    threshold:{//阀值
        default:30
    },
    autoPlay: {
      default: true
    },
    duration: {
      default: 500
    },
    interval: {
      default: 2500
    }
  },
  data() {
    return {
      show:true,
      slidesLength: 1,
      auto: true,
      sliding: true,
      dom: {},
      slider:null,
      onlyOne:false,
      timer1: '',
      _width: 0,
      index: 1,
      touch: {
        sx: 0,
        start: 0,
        distance: 0
      },
    };
  },
  mounted() {
    console.log(this)
    this.$nextTick(() => {
      //克隆dom
      this.starDom()
      if(this.onlyOne){
          this.show =false
          return
      }
      this.dom.transform = `translate3d(${this._width * -1}px, 0px, 0px)`
      this.dom['-webkit-transform'] = `translate3d(${this._width * -1}px, 0px, 0px)`
      this.dom['-ms-transform'] = `translate3d(${this._width * -1}px, 0px, 0px)`
      if (this.autoPlay) {
          this.setTime()
      }
    }, 50)
  },
  methods: {
    starDom() {
      this.slider = document.querySelector('.ui-swiper')
      let SlideDom = this.slider.getElementsByClassName('slider')
      this.slidesLength = SlideDom.length
      if(this.slidesLength==1){
          this.onlyOne = true
          return
      }
      let cloneDom1 = SlideDom[0].cloneNode(true) //向最后append
      let cloneDom2 = SlideDom[this.slidesLength - 1].cloneNode(true) //向最前append
      this.slider.insertBefore(cloneDom2, SlideDom[0])
      this.slider.appendChild(cloneDom1)
      this._width = this.slider.offsetWidth
      this.dom = this.slider.style
    },
    setTransform(num) {
      this.dom.transform = `translate3d(${num}px, 0px, 0px)`
      this.dom['-webkit-transform'] = `translate3d(${num}px, 0px, 0px)`
      this.dom['-ms-transform'] = `translate3d(${num}px, 0px, 0px)`
    },
    wh(type) {
      this.sliding = false
      this.dom.transition = type == 'touch' ? '250ms' : this.duration + 'ms'
      this.setTransform(this.index * -1 * this._width)
      if (this.autoPlay) {
        //开启定时器
        this.setTime()
      }
      var timeDuration = type == 'touch' ? '250' : this.duration
      setTimeout(() => {
          this.dom.transition = '0s'
          if (this.index >= this.slidesLength + 1) { //滑到最右边的情况
              this.index = 1
              this.setTransform(this.index * -1 * this._width)
          }
          if (this.index <= 0) { //滑到最左边的情况
              this.index = this.slidesLength
              this.setTransform(this.index * -1 * this._width)
          }
          this.auto = true
          this.sliding = true
      }, timeDuration)
    },
    setTime() {
      this.timer1 = window.setTimeout(() => {
          if (this.auto) {
              this.index++
              this.wh()
          }else{
              window.clearTimeout(this.timer1)
          }
      }, this.interval)
    },
    clearTimeOut() {
      this.auto = false
      window.clearTimeout(this.timer1)
    },
    left() {
      return this.slider.getBoundingClientRect().left;
    },
    s(x) {
      if (this.sliding && !this.onlyOne) {
          this.$emit('scrollStatus', 'start')
          this.clearTimeOut()
          this.touch.sx = this.left()
          this.touch.start = x.touches[x.touches.length - 1].clientX
      }
    },
    m(x) {
      if (this.sliding && this.touch.start != -1 && !this.onlyOne) {
          this.$emit('scrollStatus', 'moving')
          this.clearTimeOut()
          this.touch.distance = x.touches[x.touches.length - 1].clientX - this.touch.start
          this.setTransform(this.touch.distance + this.touch.sx)
      }
    },
    e(x) {
      if (this.sliding && this.touch.start != -1 && !this.onlyOne) {
          this.$emit('scrollStatus', 'end')
          this.clearTimeOut()
          this.setTransform(this.touch.distance + this.touch.sx)
          let x = this.left()
          console.log(x)
          x += this.touch.distance > 0 ? this._width * 0.5 - this.threshold : this._width * -0.5 + this.threshold
          console.log(x)
          this.index = Math.round(x / this._width) * -1
          console.log(this.index)
          this.wh('touch')
      }
    },
  }
};
</script>
<style lang="scss" scoped>
@import "../../src/assets/sass/reset";
@import "../../src/assets/sass/vars";
.contains{
  z-index: 1;
  overflow: hidden;
}
.ui-swiper{
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -moz-transition-duration: 0s linear;
  -webkit-transition-duration: 0s linear;
  -o-transition-duration: 0s linear;
  transition-duration: 0s linear;
}
</style>
