<style lang='stylus'>
</style>
<template>
  <div class="ds-tab">
    <div class="ds-tab-item" v-for="(item, index) in list" :key="index">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ds-tab',
  components: {},

  props: {
    list: Array
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
