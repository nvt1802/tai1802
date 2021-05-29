import i18next from 'i18next'
import common_cn from "translations/cn/common.json"
import common_en from "translations/en/common.json"
import common_jp from "translations/jp/common.json"
import common_kr from "translations/kr/common.json"
import common_vn from "translations/vn/common.json"

import login_cn from "translations/cn/login.json"
import login_en from "translations/en/login.json"
import login_jp from "translations/jp/login.json"
import login_kr from "translations/kr/login.json"
import login_vn from "translations/vn/login.json"

import signup_cn from "translations/cn/signup.json"
import signup_en from "translations/en/signup.json"
import signup_jp from "translations/jp/signup.json"
import signup_kr from "translations/kr/signup.json"
import signup_vn from "translations/vn/signup.json"

import forgot_password_cn from "translations/cn/forgot-password.json"
import forgot_password_en from "translations/en/forgot-password.json"
import forgot_password_jp from "translations/jp/forgot-password.json"
import forgot_password_kr from "translations/kr/forgot-password.json"
import forgot_password_vn from "translations/vn/forgot-password.json"

import header_cn from "translations/cn/header.json"
import header_en from "translations/en/header.json"
import header_jp from "translations/jp/header.json"
import header_kr from "translations/kr/header.json"
import header_vn from "translations/vn/header.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: `${localStorage.getItem('lng') || 'vn'}`,
  resources: {
    cn: {
      common: common_cn,
      login: login_cn,
      signup: signup_cn,
      forgot_password: forgot_password_cn,
      header: header_cn
    },
    en: {
      common: common_en,
      login: login_en,
      signup: signup_en,
      forgot_password: forgot_password_en,
      header: header_en
    },
    jp: {
      common: common_jp,
      login: login_jp,
      signup: signup_jp,
      forgot_password: forgot_password_jp,
      header: header_jp
    },
    kr: {
      common: common_kr,
      login: login_kr,
      signup: signup_kr,
      forgot_password: forgot_password_kr,
      header: header_kr
    },
    vn: {
      common: common_vn,
      login: login_vn,
      signup: signup_vn,
      forgot_password: forgot_password_vn,
      header: header_vn
    },
  },
})