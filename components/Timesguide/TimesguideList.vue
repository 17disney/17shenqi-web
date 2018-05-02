<style lang='stylus'>
.timesguide-list {
  padding: 0px;

  .timesguide-item {
    margin-bottom: 20px;
  }
}
</style>
<template>
  <div class="timesguide-list">
    <el-row :gutter="20">
      <el-col :span="4" v-for="(item, index) in list" :key="index">
        <timesguide-item @click="handleClick" :data="item"></timesguide-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TimesguideItem from './TimesguideItem'
export default {
  components: { TimesguideItem },

  props: {
    list: Array
  },

  data() {
    return {
    }
  },

  computed: {},

  mounted() { },

  methods: {
    handleClick(data) {
      this.$emit('click', data)
    }
  }
}
</script>
