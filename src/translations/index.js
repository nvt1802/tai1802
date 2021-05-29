import i18next from 'i18next'
import common_en from "translations/en/common.json"
import common_vn from "translations/vn/common.json"
import login_en from "translations/en/login.json"
import login_vn from "translations/vn/login.json"
import signup_en from "translations/en/signup.json"
import signup_vn from "translations/vn/signup.json"
import forgot_password_en from "translations/en/forgot-password.json"
import forgot_password_vn from "translations/vn/forgot-password.json"
import header_en from "translations/en/header.json"
import header_vn from "translations/vn/header.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: `${localStorage.getItem('lng') || 'vn'}`,
  resources: {
    en: {
      common: common_en,
      login: login_en,
      signup: signup_en,
      forgot_password: forgot_password_en,
      header: header_en
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