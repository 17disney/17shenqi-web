<style lang='stylus'>
@require '../../styles/disney/var/color.styl';

.user-avatar {
  overflow: hidden;
  width: 76px;
  height: 76px;
  border-radius: 100%;
  margin: 0 auto;
  background-color: $color-primary-ss;

  &__img {
    width: 100%;
    height: 100%;
  }

  &__icon {
    color: $color-primary;
    line-height: 76px;
    font-size: 30px;
  }
}
</style>

<template>
  <div class="user-avatar">
    <img v-if="url" class="user-avatar__img" :src="url" alt="">
    <div e-else class="user-avatar__icon icon--pep icon__characters"></div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null
    }
  },
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {}
}

</script>

