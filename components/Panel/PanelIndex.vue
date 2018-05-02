<style lang='stylus' scoped>
@require '../../styles/disney/var/color.styl';

.panel-index {
  background: #FFF;
  padding: 16px 0;
  color: $color-primary-dark;

  &__list {
    display: flex;

    .panel-index__item {
      &:last-child {
        border: none;
      }
    }
  }

  &__item {
    flex: 1;
    text-align: center;
    border-right: 0.5px solid $color-light-grey-ss;
  }

  &__num {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 5px;
  }

  &__desc {
    color: $color-light-grey;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
<template>
  <div class="panel-index">
    <div class="panel-index__list">
      <div class="panel-index__item" v-for="item in data" :key="item">
        <div class="panel-index__num">{{item.num}}</div>
        <div class="panel-index__desc">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    data: Array
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
