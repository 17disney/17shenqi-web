<style lang='stylus'>
@require '../../styles/disney/var/color.styl';

.btn-icon {
  position: relative;
  text-align: center;
  color: #FFF;
  font-size: 16px;
  line-height: 48px;
  background: $color-primary;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid $color-primary;
  cursor: pointer;

  &__icon {
    font-size: 18px;
    margin-right: 4px;
  }

  &__text {
    font-size: 16px;
  }

  &.is-white {
    background: #FFF;
    color: $color-primary-dark;
    border-color: $color-light-grey-s;
  }
}
</style>
<template>
  <div @click="handleClick" class="btn-icon" :class="'is-' + type">
    <div class="icon--pep btn-icon__icon" :class="'icon__' + icon"></div>

    <div class="btn-icon__text">{{text}}</div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    icon: String,
    text: String,
    type: String
  },

  data() {
    return {
    }
  },

  computed: {},

  mounted() {

  },

  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
