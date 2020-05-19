import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/irc/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/auc/userinfo',
    method: 'get'
  })
}

export function getUser(id) {
  return request({
    url: '/auc/user/' + id,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
