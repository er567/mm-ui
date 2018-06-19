<template>
    <div>
        <mm-vue-tab :options="option">
          <div class="tab-bd" slot="bd-0">
              <ul>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
                    <li>天干物燥小心火烛</li>
              </ul>
          </div>
          <div slot="bd-1">
                <ul>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                    <li>I don't like anymore jodan</li>
                </ul>
          </div>
        </mm-vue-tab>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Tab from '@/components'
    Vue.use(Tab);
    export default {
        data() {
            return {
               option:{
                   name: ['导航一','导航二'],
                   lineColor: '',//默认 #f95d5b
                   slotName: ['bd-0','bd-1'],
                   tabClick:function(){
                       console.log('点击了tab')
                   }
               } 
            }
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
@import "./src/assets/sass/vars";
.tab-bd{
    ul{
        li{
            height: rem(100);
            line-height: rem(100);
            border-bottom: 1px solid #ccc;
        }
    }
}
</style>