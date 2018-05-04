// const SERVER_URL = 'http://192.168.31.46:7002'
const CDN_URL = 'http://cdn.17disney.com'
const UPLOAD_URL = 'https://upload.qiniup.com'
const SERVER_URL = 'https://api.17disney.com/timesguide-service'

const TIMESGUIDE_CDN_STYLES = {
  SMALL_CUT:
    'imageMogr2/thumbnail/180x2000/gravity/North/crop/x360/format/jpg/interlace/1/blur/1x0/quality/75|imageslim'
}

const TIPS_TYPE = {
  MODEL: 1,
  TOAST: 2
}

const EXCHANGE_ACTION_TYPE = {
  GIVE: 1,
  WITH_NPC: 2,
  CREATE_WITH_USER: 3,
  JOIN_WITH_USER: 4
}

const EXCHANGE_STATUS = {
  DELETED: 0,
  HAVE: 1,
  SELL: 2
}

const TIMESGUIDE_CHILDREN_STATUS = {
  DELETE: 0,
  OPEN: 1,
  STARTED: 2 // 交换中
}

const MESSAGE_TYPE = {
  DEFAULT: 0,
  REWARD: 1,
  TIPS: 2
}

const ERROR_CODE = {
  SEESION_FAIL: 40001
}

const TIMESGUIDE_TYPE = {
  TIMESGUIDE: 1,
  GUIDEMAP: 2,
  TOWNGUIDE: 3,
  OTHERGUIDE: 4,
  TICKET: 5,
  VOUCHER: 6,
  STICKER: 7
}

const TIMESGUIDE_TYPE_LIST = [
  {
    id: TIMESGUIDE_TYPE.TIMESGUIDE,
    name: '乐园时间表',
    icon: 'icon__magic-morning',
    class: 'is-timesguide',
    columns: 8
  },
  {
    id: TIMESGUIDE_TYPE.GUIDEMAP,
    name: '乐园指南',
    icon: 'icon__disney-resort',
    class: 'is-timesguide',
    columns: 8
  },

  {
    id: TIMESGUIDE_TYPE.TOWNGUIDE,
    name: '小镇指南',
    icon: 'icon__shdr-disneytown',
    class: 'is-timesguide',
    columns: 8
  },

  {
    id: TIMESGUIDE_TYPE.OTHERGUIDE,
    name: '其它指南',
    icon: 'icon__catalogs',
    class: 'is-timesguide',
    columns: 8
  },
  {
    id: TIMESGUIDE_TYPE.TICKET,
    name: '乐园门票',
    icon: 'icon__tickets',
    class: 'is-ticket',
    columns: 4
  },
  {
    id: TIMESGUIDE_TYPE.VOUCHER,
    name: '乐园兑换券',
    icon: 'icon__wdw-tickets-and-passes',
    class: 'is-ticket',
    columns: 4
  },
  {
    id: TIMESGUIDE_TYPE.STICKER,
    name: '乐园贴纸',
    icon: 'icon__show-contains-bubble',
    class: 'is-sticker',
    columns: 6
  }
]

const MAX_GIVE = 4

module.exports = {
  CDN_URL,
  UPLOAD_URL,
  TIMESGUIDE_TYPE,
  TIMESGUIDE_TYPE_LIST,
  TIMESGUIDE_CDN_STYLES,
  TIPS_TYPE,
  SERVER_URL,
  EXCHANGE_ACTION_TYPE,
  MAX_GIVE,
  MESSAGE_TYPE,
  EXCHANGE_STATUS,
  TIMESGUIDE_CHILDREN_STATUS,
  ERROR_CODE
}
