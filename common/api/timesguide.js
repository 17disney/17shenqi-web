import request from '~/utils/request'
const base = 'https://api.17disney.com/timesguide-service'

export default {
  explorerList: function list(data) {
    return request({
      url: `${base}/v2/timesguides`,
      method: 'get',
      params: data
    })
  },

  explorerId: function id(id) {
    return request({
      url: `${base}/v1/timesguides/${id}`,
      method: 'get'
    })
  },

  updateExplorerId: function updateExplorerId(id, data) {
    return request({
      url: `${base}/v1/timesguides/${id}`,
      method: 'put',
      data
    })
  },

  contributesList: function timesguidesList() {
    return request({
      url: `${base}/v1/contributes/`,
      method: 'get'
    })
  },

  activeContributesId: function activeContributesId(id, data) {
    return request({
      url: `${base}/admin/contributes/${id}`,
      method: 'put',
      data
    })
  }
}
