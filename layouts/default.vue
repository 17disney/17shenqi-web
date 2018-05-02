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
    <layout-footer></layout-footer>

  </div>
</template>

<script>
import LayoutHeader from '@/components/Layout/LayoutHeader'
import LayoutFooter from '@/components/Layout/LayoutFooter'
export default {
  components: { LayoutHeader, LayoutFooter },

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
