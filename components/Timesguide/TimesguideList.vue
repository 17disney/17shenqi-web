<style lang='stylus'>
.timesguide-list {
  padding: 0px;

  .timesguide-item {
    margin-bottom: 15px;
  }
}
</style>
<template>
  <div class="timesguide-list">
    <el-row :gutter="15">
      <el-col :span="col" v-for="(item, index) in list" :key="index">
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
    list: Array,
    columns: Number
  },

  data() {
    return {
    }
  },

  computed: {
    col() {
      return 24 / this.columns
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
