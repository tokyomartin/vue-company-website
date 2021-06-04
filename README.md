# Vue company website
# 1 项目目录下： main.js

从main.js启动



# 1 项目目录下： router.js

## 添加支持的语言
const supportedLocales = ['zh-cn', 'en', 'jp', 'de', 'es', 'fr', 'hu', 'it', 'nl', 'pt-br', 'sv', 'tr'];

增加组件页面时
需要添加
```js
 routes: [
    {
      path: '*',
      redirect: `/${browserLang}/home`,
      
    },
    
    {
        path: '/home',
        redirect: `/${browserLang}/home`
    },
 ]

``` 


## 项目目录下： public/i18n/zh-cn

复制文件夹内容， 修改json内容


## 项目目录下：  home/home.vue
首页元素

```js
<template>
    <div>
        <main-slider></main-slider>
        <features></features>
        <pricing-area></pricing-area>
        <pricing-card></pricing-card>
        <customer-support></customer-support>
        <amazing-team></amazing-team>
        <carousel></carousel>
        <say-hello-area></say-hello-area>
    </div>
</template>
<script>

import MainSlider from "./components/MainSlider";
import Features from "./components/Features";
import PricingCard from "./components/PricingCard";
import PricingArea from "./components/PricingArea";
import CustomerSupport from "./components/CustomerSupport";
import AmazingTeam from "./components/AmazingTeam";
import Carousel from "./components/Carousel";
import SayHelloArea from "./components/SayHelloArea";
export default {
  name: "components",
  components: {
    MainSlider,       // 导航栏第1个栏目
    Features,         // 导航栏第2个栏目
    PricingArea,      // 导航栏第3个栏目
    PricingCard,      // 导航栏第4个栏目
    CustomerSupport,  // 导航栏第5个栏目
    AmazingTeam,      // 导航栏第6个栏目
    Carousel,         // 导航栏第7个栏目
    SayHelloArea,     // 导航栏第8个栏目
  },

  ```


## 项目目录下：  App.vue
首页元素
```js

  import ScrollTopComponent from './views/components/ScrollTop'
import { FadeTransition } from "vue2-transitions";

import AppHeader from "./layout/header/Header"
import AppFooter from "./layout/footer/Footer";
export default {
  components: {
    FadeTransition,
    AppHeader,
    AppFooter,
    ScrollTopComponent
  },

```

## 项目目录下：  src/layout/header/Header.vue

导航目录

common文件 全局变量:
public/i18n/zh-cn/common.json

```js
     <li><router-link :to="'home'" active-class="is-active is-active--home"> {{ $t('common:header.home') }}</router-link></li>
                                        <li><router-link :to="'about-us'" active-class="is-active is-active--about_us">{{ $t('common:header.about_us') }}</router-link></li>
                                        <li><router-link :to="'blogs'" active-class="is-active is-active--blogs">Blogs</router-link></li>

 ```
###  导航目录 添加下面项目

header
"portfolio": "图片集锦",
"pages": "其他",  
"faq": "问答",

footer



                        <h3 class="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
                        <h4 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>

                        <h3 class="text-primary font-weight-light mb-2">谢谢您的支持！</h3>
                        <h4 class="mb-0 font-weight-light">让我们一起成长，接触各种系统平台。</h4>


<mail-chip></mail-chip>

   <p>Heaven fruitful doesn't over lesser in days. Appear </p>


华翔一品科技， 客户永远放在首要位置！紧跟时代科技的步伐， 最求卓越的未来！IM CHAT系统， OEM系统， 敏捷开发， 模版引擎， FLUTTER移动开发，IPHONE APP/ANDROID APP开发，全面提升客户IT系统的整体价值。