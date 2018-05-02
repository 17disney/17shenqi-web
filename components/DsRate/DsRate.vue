<style lang='stylus'>
@require '../../styles/disney/var/color.styl';

.ds-rate {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  .ds-rate__item {
    color: rgba($color-grey, 0.2);

    &.is-active {
      color: $color-primary;
    }
  }

  &.size-mini {
    font-size: 10px;

    .ds-rate__item {
      color: rgba(255, 255, 255, 0.5);

      &.is-active {
        color: #FFF;
      }
    }
  }
}
</style>
<template>
  <div class="ds-rate" :class="'size-' + size">
    <div class="ds-rate__item icon--pep icon__attractions" v-for="item in list" :key="item" :class="{'is-active': item <= rate}"></div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    rate: Number,
    size: String
  },

  data () {
    return {
      list: [1, 2, 3, 4, 5]
    }
  },

  computed: {},

  mounted () { },

  methods: {}
}
</script>
