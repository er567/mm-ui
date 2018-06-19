<template>
  <div class="slider">
    <slot/>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "mm-slider",
  components: {},
  props: [],
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.slider {
  width: 100%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  z-index: 10;
  min-height: 100px;
  position: relative
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    width: 100%;
    display: block;
  }
}
</style>
