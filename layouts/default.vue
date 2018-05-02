<style lang="stylus">
</style>
<template>
  <div>
    <layout-header></layout-header>
    <div class="ds-first">
      <div class="ds-first__cover"></div>
      <video id="mtyvideo2" autoplay="autoplay" class="ds-first__video" muted="muted" preload="auto" loop="loop" poster="//cdn.17disney.com/video.jpg">
        <source src="//cdn.17disney.com/video_1.mp4" type="video/mp4">
      </video>
      <div class="ds-first__inner">
        <div class="container">
          <div class="ds-first__icon icon--pep icon__shanghai-disney-resort"></div>
          <h1 class="ds-first__title">上海迪士尼乐园</h1>
        </div>
      </div>
    </div>
    <nuxt/>
    <div class="footer">
      <div class="container">
        <div class="wxapp-list">
          <div class="wxapp-list-item">
            <img class="wxapp-list-item__img" src="//17disney.com/static/wxapp_17disney.jpg" alt="">
            <div class="wxapp-list-item__name">微信小程序</div>
            <div class="wxapp-list-item__desc">17俱乐部</div>
          </div>
          <div class="wxapp-list-item">
            <img class="wxapp-list-item__img" src="//17disney.com/static/wx_17shenqi.jpg" alt="">
            <div class="wxapp-list-item__name">公众号</div>
            <div class="wxapp-list-item__desc">一起神奇</div>
          </div>
          <div class="wxapp-list-item">
            <img class="wxapp-list-item__img" src="//17disney.com/static/wxapp_timesguide.jpg" alt="">
            <div class="wxapp-list-item__name">微信小程序</div>
            <div class="wxapp-list-item__desc">乐园时间表</div>
          </div>
        </div>
        <div class="footer__text">
          ©2018 17shenqi · 一起神奇吧
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/components/Layout/LayoutHeader'
export default {
  components: { LayoutHeader },

  props: {
  },

  data() {
    return {
    }
  },

  computed: {},

  mounted() { },

  methods: {}
}
</script>
