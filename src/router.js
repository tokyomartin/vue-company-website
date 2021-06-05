import Vue from "vue";
import VueI18n from 'vue-i18n';
import Router from "vue-router";
import home from "./views/home/home.vue";

const contactUs = () => import('./views/contact/contact_us');
const aboutUs = () => import('./views/about/about_us');
const blogs = () => import('./views/blogs/blogs');
const blogdetails = () => import('./views/BlogDetails');
const portfolio = () => import('./views/portfolio/portfolio');
const careers = () => import('./views/careers/careers');
const profile = () => import('./views/Profile.vue');
const login = () => import('./views/login/Login.vue');
const register = () => import('./views/register/Register.vue');
const landing = () => import('./views/Landing.vue');
const privacy_policy = () => import('./views/privacy_policy/PrivacyPolicy.vue');

import i18next from 'i18next';
import store from './store';
const locale = require('browser-locale')();
const supportedLocales = ['zh-CN', 'en', 'jp', 'de', 'es', 'fr', 'hu', 'it', 'nl', 'pt-br', 'sv', 'tr'];
import root from './views/root.vue';
import weekSelectPlugin from "flatpickr/dist/plugins/weekSelect/weekSelect";

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    fallbackLocale: 'zh-CN',//没有英文的时候默认中文语言
    silentFallbackWarn: true,//抑制警告
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': require('./common/lang/zh'),   // 中文语言包
        'en-US': require('./common/lang/en')    // 英文语言包
    }
})


const browserLang = (locale || 'zh-CN').substring(0, 2);
//const browserLang = (locale || 'zh-CN').trim();
//const browserLang = (locale || 'cn').trim();

var langURL = "";
if(browserLang == 'zh-CN')
     langURL = 'zh-CN';
else
    langURL = browserLang;

console.log("langURL: " + langURL);


Vue.use(Router);

//BUG 解决vue-router报NavigationDuplicated:
// Avoided redundant navigation to current location 的问题
//https://blog.csdn.net/luer_LJS/article/details/108362563

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const getLocalizedTitle = key => {
  return (i18next.t(`common:meta.${key}`) + ' | 华翔一品科技') || '华翔一品科技';
};

const router = new Router({
  //mode: 'history',
    mode: 'hash',
  linkExactActiveClass: "active",
  routes: [
    {
      path: '*',
      redirect: `/${browserLang}/home`,

    },

    {
        path: '/home',
        redirect: `/${browserLang}/home`
    },
    {
      path: '/contact-us',
      redirect: `/${browserLang}/contact-us`
    },
    {
        path: '/about-us',
        redirect: `/${browserLang}/about-us`
    },
    {
        path: '/blogs',
        redirect: `/${browserLang}/blogs`
    },
    {
        path: '/portfolio',
        redirect: `/${browserLang}/portfolio`
    },
    {
        path: '/blogdetails',
        redirect: `/${browserLang}/blogdetails`
    },
    {
      path: '/careers',
      redirect: `/${browserLang}/careers`
    },
    {
      path: '/privacy_policy',
      redirect: `/${browserLang}/privacy_policy`
    },

    {
      path: '/:locale',
      component: root,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
            path: 'about-us',
            name: 'about-us',
            component: aboutUs
        },
        {
            path: 'contact-us',
            name: 'contact-us',
            component: contactUs
        },
        {
            path: 'blogs',
            name: 'blogs',
            component: blogs
        },
        {
            path: 'blogdetails',
            name: 'blogdetails',
            component: blogdetails
        },
        {
            path: 'portfolio',
            name: 'portfolio',
            component: portfolio
        },
        {
          path: 'careers',
          name: 'careers',
          component: careers
        },
        {
          path: 'privacy_policy',
          name: 'privacy_policy',
          component: privacy_policy
        },
        {
            path: '*',
            redirect: `/${browserLang}/home`
        }

      ]
    },

  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  let locale = to.params.locale;
  if (!locale && to.name === 'manifesto') {
      locale = to.path.split('/')[1];
  } else if (!locale) {
      locale = browserLang;
  }

  // ugly workaround for waiting until the translations are ready
  // to set the title
  const interval = setInterval(() => {
      if (store.getters.isI18nLoaded) {
          document.title = getLocalizedTitle(to.name);
          clearInterval(interval);
      }
  }, 500);

  if (supportedLocales.indexOf(locale) === -1) {
      next('/zh-CN/home');
  } else {
      i18next.changeLanguage(locale);
      return next();
  }
});

export default router
