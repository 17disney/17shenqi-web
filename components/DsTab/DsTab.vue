<style lang='stylus'>
@require '../../styles/disney/var/color.styl';

.ds-tab {
  display: flex;

  &-item {
    flex: 1;
    text-align: center;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    color: $color-grey;
    position: relative;
    transition: 0.15s;
    background: $color-light-grey-sss;

    &:after {
      content: '';
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      height: 4px;
      background: $color-light-grey-ss;
    }

    &:not(:last-child) {
      border-right: 1px solid $color-light-grey-ss;
    }

    &__icon {
      font-size: 23px;
      line-height: 23px;
      margin-bottom: 5px;
    }

    &__name {
      font-size: 17px;
      line-height: 17px;
    }

    &:hover {
      color: $color-primary;
    }

    &.is-active {
      color: $color-primary;
      background: #FFF;

      // font-weight: 600;
      &:after {
        background: $color-primary;
      }
    }
  }
}
</style>
<template>
  <div class="ds-tab">
    <div @click="handleClick(item.id)" class="ds-tab-item" v-for="(item, index) in list" :class="{'is-active': item.id === select}" :key="index">
      <div class="ds-tab-item__icon icon--pep" :class="item.icon"></div>
      <div class="ds-tab-item__name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ds-tab',
  components: {},

  props: {
    list: Array,
    select: [Number, String]
  },

  data() {
    return {
    }
  },

  computed: {},

  mounted() { },

  methods: {
    handleClick(type) {
      this.$emit('click', type)
    }
  }
}
</script>
