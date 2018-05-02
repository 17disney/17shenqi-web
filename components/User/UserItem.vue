<style lang='stylus'>
@require '../../styles/disney/var/color.styl';

.user-item {
  text-align: center;

  &.is-active {
    .user-item__avatar {
      border-color: $color-primary;
    }

    .user-item__name {
      font-weight: 600;
      color: $color-primary;
    }
  }

  &__avatar {
    overflow: hidden;
    border-radius: 100%;
    width: 64px;
    height: 64px;
    line-height: 64px;
    margin-bottom: 5px;
    font-size: 25px;
    color: $color-primary;
    background-color: $color-primary-ss;
    border: 3px solid #FFF;
  }

  &__name {
    color: $color-grey;
    font-size: 17px;
    line-height: 1;
  }
}
</style>
<template>
  <div @click="handleClick(data.id, data.exid)" class="user-item" :class="{'is-active': active}">
    <img class="user-item__avatar" v-if="data.avatar" :src="data.avatar" alt="">
    <div class="user-item__avatar icon--pep icon__characters" v-else></div>
    <div class="user-item__name">{{data.name}}</div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    data: Object,
    active: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick (id, exid) {
      this.$emit('click', { id, exid })
    }
  }
}
</script>
