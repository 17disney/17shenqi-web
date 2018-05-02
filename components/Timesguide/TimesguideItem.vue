<style lang='stylus'>
@require '../../styles/disney/var/color.styl';

.timesguide-item {
  position: relative;
  width: 100%;
  background: $color-primary;
  border: 1px solid $color-light-grey-ss;
  overflow: hidden;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.2), inset 0 0 3em hsla(0, 0%, 0%, 0.15), 0 0 0.5em hsla(0, 0%, 0%, 0.25), 0 0.25em 0.25em hsla(0, 0%, 0%, 0.1);
  }

  &__pic {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &.is-timesguide {
    padding-bottom: 225%;
  }

  &.is-ticket {
    padding-bottom: 65%;
  }
}
</style>
<template>
  <div @click="handleClick(data)" class="timesguide-item" :class="typeClass">
    <img class="timesguide-item__pic" :src="data.picUrl" alt="">
  </div>
</template>

<script>

import { TIMESGUIDE_TYPE } from '@/common/const'
export default {
  components: {},

  props: {
    data: Object
  },

  data() {
    return {

    }
  },

  computed: {
    typeClass() {
      const { type } = this.data
      if (type === TIMESGUIDE_TYPE.TICKET || type === TIMESGUIDE_TYPE.VOUCHER) {
        return 'is-ticket'
      } else {
        return 'is-timesguide'
      }
    }
  },

  mounted() { },

  methods: {
    handleClick(data) {
      this.$emit('click', data)
    }
  }
}
</script>
