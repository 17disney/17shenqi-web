<style lang="stylus">
@require '../../styles/disney/var/color.styl';

$header-height = 80px;

.header {
  height: $header-height;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  position: relative;
  position: absolute;
  z-index: 200;

  .logo-text {
    margin-top: 15px;
    height: 50px;

    path {
      fill: #FFF;
    }
  }

  .container {
    height: 100%;
  }

  .logo {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: 400;
    cursor: pointer;
  }

  .nav {
    float: right;
    background: transparent;
    padding: 0;
    margin: 0;
    z-index: 10;
    // position: relative;
  }

  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    float: left;
    list-style: none;
    cursor: pointer;
    height: $header-height;

    .insert {
      font-size: 17px;
      text-decoration: none;
      color: #FFF;
      display: block;
      padding: 0 22px;
      opacity: 0.8;
      transition: 0.15s;
      line-height: 30px;

      &:hover {
        opacity: 1;
      }

      .name {
        // line-height: 80px;
      }
    }
  }

  &__detail {
    position: absolute;
    z-index: -1;
    left: 0px;
    right: 0px;
    top: 0px;
    height: 250px;
    padding-top: 80px;
    background: rgba($color-grey, 0.6);
    transition: 0.15s;

    .container {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.park-list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &-item {
    flex: 1;
    text-align: center;
    cursor: pointer;

    &__icon {
      font-size: 50px;
      margin-bottom: 8px;
    }

    &__name {
      font-size: 16px;
    }

    &.is-close {
      opacity: 0.6;
    }
  }
}
</style>

<template>
  <div class="header">
    <div class="container">
      <h1 class="logo">
        <el-tooltip effect="dark" content="祝你拥有奇妙的一天" placement="bottom">
          <logo-text></logo-text>
        </el-tooltip>
      </h1>
      <ul class="nav">
        <li @mouseenter="enter" @mouseleave="leave" class="nav-item">
          <div class="insert">
            <span class="name">上海迪士尼乐园</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
            <div class="header__detail" v-show="detail">
              <div class="container">
                <div class="park-list">
                  <div class="park-list-item" :class="{'is-close': !item.open}" :key="item.id" v-for="item in PARK_LIST">
                    <el-tooltip effect="dark" :content="item.open ? item.nameCN : '敬请期待'" placement="bottom">
                      <a>
                        <div class="park-list-item__icon icon--pep" :class="'icon__' + item.icon"></div>
                        <div class="park-list-item__name">{{item.nameCN}}</div>
                      </a>
                    </el-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <el-popover placement="bottom-end" width="200" trigger="hover">
            <popover-wxapp></popover-wxapp>
            <div class="insert" slot="reference" href="">
              <span class="name">小程序</span>
            </div>
          </el-popover>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LogoText from './LogoText.vue'
import PARK_LIST from '@/common/data/park-list'
import PopoverWxapp from '@/components/Popover/PopoverWxapp'

export default {
  components: { LogoText, PopoverWxapp },

  props: {
  },

  data() {
    return {
      PARK_LIST,
      detail: false,
      timeout: null,
      visible: false,
    }
  },

  computed: {},

  mounted() {

  },

  methods: {
    enter() {
      this.detail = true
    },
    leave() {
      this.detail = false
    },

    show() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.visible = true;
      }, this.trigger === 'click' ? 0 : 250);
    },
    hide() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.visible = false;
      }, this.trigger === 'click' ? 0 : 150);
    },

  }
}
</script>
