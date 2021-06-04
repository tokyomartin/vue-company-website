<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">滚动栏 Bootstrap carousel</h1>
                    <p class="lead text-white mt-4">设计团队帮忙你快速的设计出好的产品，可以根据你的喜好改变各方面的需求.</p>
                    <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                       class="btn btn-white mt-4">查看各种组件</a>
                </div>
                <div class="col-lg-4 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1"
                                    controls>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/gallery/App1.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/gallery/App2.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/gallery/App3.png"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>
