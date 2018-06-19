import Swiper from './swiper.vue';
import Slider from './slider.vue';

export default {
	install (Vue) {
    Vue.component(Swiper.name, Swiper);
    Vue.component(Slider.name, Slider);
	}
}

export {
	Swiper,Slider
}
