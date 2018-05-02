<style lang='stylus'>
@require '../../styles/disney/var/color.styl';
.popover-wxapp {
  text-align: center;

  img {
    width: 150px;
    margin-bottom: 10px;
  }

  &__title {
    border-top: 1px solid $color-light-grey-sss;
    padding-top: 10px;
    font-weight: 600;
    font-size: 17px;
    color: $color-grey;
  }
}
</style>
<template>
  <div class="popover-wxapp">
    <img src="//17disney.com/static/wxapp_timesguide.jpg" alt="">
    <div class="popover-wxapp__title">扫码进入小程序</div>
  </div>
</template>

<script>
export default {
  components: {},

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
