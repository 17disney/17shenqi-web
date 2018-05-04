<style lang='stylus'>
@require '../../styles/disney/var/color.styl';

.footer {
  margin-top: 32px;
  text-align: center;
  padding: 30px;
  background: $color-primary-ss;
  color: $color-light-grey;
}

.chart {
  width: 100%;
  height: 400px;

  .inner {
    height: 400px;
  }
}

.wxapp-list {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  &-item {
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    padding: 16px;
    margin: 0 30px;
    border: 1px solid rgba(0, 0, 0, 0);
    transition: 0.15s;

    &:hover {
      border-color: $color-primary;
    }

    &__img {
      width: 100px;
    }

    &__name {
      font-size: 12px;
      color: $color-light-grey-s;
      margin-top: 8px;
    }

    &__desc {
      font-size: 15px;
      color: $color-grey;
    }
  }
}
</style>
<template>
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
    </div>
    <div class="footer__end">
      <div class="container">
        <div class="footer__text">
          ©2018 17shenqi · 一起神奇吧
        </div>
      </div>
    </div>
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
