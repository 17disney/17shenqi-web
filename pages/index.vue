<style lang="stylus" scoped>
@require '../styles/disney/var/color.styl';

.timesguide-list {
  margin-top: 20px;
}
</style>

<template>
  <div>
    <div class="container">
      <div class="ds-card" style="margin-top: 50px">
        <ds-tab @click="handleClickType" :select="type" :list="TIMESGUIDE_TYPE_LIST"></ds-tab>
      </div>
      <timesguide-list @click="handleClickTimesguide" v-loading="loading" :columns="columns" :list="activeList"></timesguide-list>
    </div>
    <el-dialog width="960px" custom-class="dialog-timesguide" :visible.sync="dialog.visible">
      <timesguide-detail :data="dialog.data"></timesguide-detail>
    </el-dialog>
  </div>
</template>

<script>
import DsTab from '@/components/DsTab/DsTab'
import Timesguide from '@/common/api/timesguide'
import TimesguideList from '@/components/Timesguide/TimesguideList'
import TimesguideFilter from '@/components/Timesguide/TimesguideFilter'
import TimesguideDetail from '@/components/Timesguide/TimesguideDetail'

import { TIMESGUIDE_TYPE_LIST, TIMESGUIDE_TYPE } from '@/common/const'
export default {
  components: {
    DsTab, TimesguideList, TimesguideFilter, TimesguideDetail
  },
  data() {
    return {
      TIMESGUIDE_TYPE_LIST,
      list: [],
      type: TIMESGUIDE_TYPE.TIMESGUIDE,
      local: 'shanghai',
      loading: true,
      dialog: {
        visible: false,
        data: { "dateRang": "2016.06.08", "price": 100, "id": 10116, "startDate": "2016-06-08T00:00:00.000Z", "endDate": "2016-06-11T00:00:00.000Z", "local": "shanghai", "rate": 4, "picUrl": "http://cdn.17disney.com/Fv-2K54A8cXjowSNo53j-XyCBzWy", "have": 5, "exchange": 5, "contribute": 0, "type": 1, "started": 0, "created_at": "2018-04-15T14:02:31.000Z", "updated_at": "2018-04-15T14:02:31.000Z", "userid": "f5684fb3-124f-4d48-bee3-ed4c02ff0121", "user": { "id": "f5684fb3-124f-4d48-bee3-ed4c02ff0121", "avatar": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJrAqdpbKTCISj3BBibsTzal9x3W9rIOlmOicrMYicqFNbufnRzqGnHM8OyasJFdEsqSTUQIRNbokcuw/0", "name": "余海滨13061734811" }, "timesguides_children": [{ "id": "1a1fa80b-525c-4946-952b-b3bfa095d051", "status": 1 }, { "id": "3a4b91ae-da33-4b5c-a7c3-33de99b25024", "status": 1 }, { "id": "62f4f38f-5c1f-4989-b507-32e7ffcd92c7", "status": 1 }, { "id": "eb44758d-d01e-4ae4-ae0e-3573bf3f00bd", "status": 1 }, { "id": "f73fb95d-b143-438e-9f0c-f07d3485f125", "status": 1 }] }
      }
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    activeList() {
      return this.list
      // return this.list.filter(item => item.type === this.type)
    },
    columns() {
      return TIMESGUIDE_TYPE_LIST.find(_ => _.id === this.type)['columns']
    }
  },
  methods: {
    async init() {
      const { local, type } = this
      let list = await Timesguide.explorerList({ local, type })
      this.list = list
      this.loading = false
    },
    async handleClickTimesguide(data) {
      data = await Timesguide.explorerId(data.id)

      this.dialog.visible = true
      this.dialog.data = data
    },

    handleClickType(type) {
      this.loading = true
      this.type = type
      this.init()

      setTimeout(() => {
        this.loading = false
      }, 1000);
    }

  }
}
</script>

