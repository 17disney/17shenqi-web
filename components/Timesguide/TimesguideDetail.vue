<style lang='stylus'>
@require '../../styles/disney/var/color.styl';

.timesguide-detail {
  display: flex;
  overflow: hidden;

  .timesguide-item {
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid $color-grey;
    cursor: default;
  }

  &__user {
    display: flex;
    padding: 16px;
    border-radius: 10px;
  }

  .user-avatar {
    width: 48px;
    height: 48px;
  }

  &__media {
    width: 400px;
    padding: 30px 0;
    background: linear-gradient(to bottom, $color-primary-s, $color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;

    .panels-cell {
      // width: 300px;
      width: 100%;
    }
  }

  &__index {
    display: flex;
    background: $color-light-grey-sss;
    padding: 15px 0;
  }

  &__item {
    flex: 1;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid $color-light-grey-ss;
    }
  }

  &__num {
    font-size: 30px;
    font-weight: 600;
    color: $color-grey;
  }

  &__name {
    font-size: 14px;
    color: $color-grey;
  }

  .btn-icon {
    max-width: 300px;
    margin: 0 auto;
  }
}
</style>
<template>
  <div class="timesguide-detail">
    <div class="timesguide-detail__media">
      <div class="timesguide">
        <timesguide-item :data="data"></timesguide-item>
      </div>
    </div>
    <div class="timesguide-detail__main">
      <div class="panels-cell">
        <panel-index :data="panelIndex"></panel-index>
        <div class="panel panel-cell">
          <div class="panel__title">时间</div>
          <div class="panel__text">{{data.dateRang}}</div>
        </div>
        <div class="panel panel-cell">
          <div class="panel__title">质量</div>
          <ds-rate :rate="data.rate"></ds-rate>
        </div>
        <div class="panel panel-cell">
          <div class="panel__title">贡献者</div>
          <user-item v-if="data.user" :data="data.user"></user-item>
        </div>
        <el-popover placement="top" width="200" trigger="hover">
          <popover-wxapp></popover-wxapp>
          <btn-icon slot="reference" icon="tours-events" text="立即领取"></btn-icon>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import TimesguideItem from '@/components/Timesguide/TimesguideItem'
import DsRate from '@/components/DsRate/DsRate'
import UserItem from '@/components/User/UserItem'
import PanelIndex from '@/components/Panel/PanelIndex'
import BtnIcon from '@/components/Btn/BtnIcon'
import PopoverWxapp from '@/components/Popover/PopoverWxapp'
export default {
  components: { TimesguideItem, DsRate, UserItem, PanelIndex, BtnIcon, PopoverWxapp },

  props: {
    data: Object
  },

  data() {
    return {
    }
  },

  computed: {
    panelIndex() {
      return [
        {
          num: this.data.exchange,
          name: '领取数量'
        },
        {
          num: this.data.exchange,
          name: '交换次数'
        },
        {
          num: this.data.price,
          name: '所需积分'
        }
      ]
    }
  },

  mounted() { },

  methods: {}
}
</script>
