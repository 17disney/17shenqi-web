<template>
  <div>
    <div class="container">
      <ds-tab :list="TIMESGUIDE_TYPE_LIST"></ds-tab>
      <timesguide-list :data="Timesguide"></timesguide-list>
    </div>
  </div>
</template>

<script>
import DsTab from '@/components/DsTab/Dstab'
import TimesguideList from '@/components/Timesguide/TimesguideList'
import { TIMESGUIDE_TYPE_LIST } from '@/common/const'
import Timesguide from '@/common/api/timesguide'


export default {
  components: {
    DsTab, TimesguideList
  },
  data() {
    return {
      TIMESGUIDE_TYPE_LIST,
      list: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      this.list = await Timesguide.explorerList('shanghai')


    }

  }
}
</script>

