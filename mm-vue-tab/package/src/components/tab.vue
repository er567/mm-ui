<template>
	<div class="contains">
    <div class="mod-tab jWrap">
        <ul class="tab-hd">
            <li v-for="(item, index) in options.name" :key="index" class="hd-item" :class="bdItemShow==index?'active':''" :data-type="index" role="tabItem" @click="tabClick($event),options.tabClick()">
                <span>{{item}}</span>
            </li>
            <li class="hd-line" :class="{'_animation-all':headerClick}" role="line" :style="{width:headLineWidth+'px',left:headLineLeft+'px',borderColor:options.lineColor}"></li>
        </ul>
        <div class="mod-cp tab-bd">
          <div class="bd-inner" role="tabInner">
            <div v-for="(item, index) in options.slotName" :key="index" v-show="bdItemShow==index" class="bd-item" role="tabPanel" :data-type="index">
              <slot :name="item"></slot>
            </div>
          </div>
        </div>
    </div>
	</div>
</template>

<script>
import Vue from "vue";
function pr(x) {
  return console.log(x);
}
export default {
  name: "mm-vue-tab",
  components: {},
  props: ['options'],
  data() {
    return {
      bdItemShow: "0",
      headLineWidth: "",
      headLineLeft: "",
      headerClick: false,
      empty: false,
      noMore: false,
      loading: false,
      currentPage: 0,
      listData: ""
    };
  },
  mounted() {
    this.headLineWidth = document.getElementsByClassName("hd-item")[0].children[0].offsetWidth;
    this.headLineLeft = document.getElementsByClassName("hd-item")[0].children[0].offsetLeft;
  },
  methods: {
    tabClick(e) {
      if (!this.headerClick) this.headerClick = true;
      if (this.bdItemShow != e.currentTarget.getAttribute("data-type")) {
        this.bdItemShow = e.currentTarget.getAttribute("data-type");
      } else {
        return;
      }
      this.headLineWidth = e.currentTarget.children[0].offsetWidth;
      this.headLineLeft = e.currentTarget.children[0].offsetLeft;
    },
    loadMore() {
      if (this.noMore) {
        return false;
      }
      this.currentPage++;
      this.loading = true;
      this.$ajax
        .get("http://localhost:8000/api/electronicList", {
          isAjax: 1,
          pageNo: this.currentPage,
          time: 1
        })
        .then(res => {
          pr(res);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./src/assets/sass/reset";
@import "./src/assets/sass/vars";
ul,
li {
  list-style: none;
}

.tab-hd {
  @include flexbox((display: box));
  position: fixed;
  border-bottom: 1px solid #e8e9ea;
  background: #fff;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  .hd-item {
    @include flexbox((box-flex:1));
    text-align: center;
    height: rem(80);
    line-height: rem(80);
    span {
      display: inline-block;
      height: rem(80);
      line-height: rem(80);
      font-size: rem(18);
    }
    &.active {
      color: #f95d5b;
      transform: scale(1.2, 1.2);
    }
  }
  .hd-line {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 0px;
    border-bottom: rem(4) solid #f95d5b;
  }
}

.tab-bd {
  margin-top: rem(80);
}

._animation-all {
  @include transition(all 0.2s ease-in);
}
._animation-none {
  @include transition(all 0s ease-in);
}
</style>
