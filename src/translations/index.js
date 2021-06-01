import i18next from "i18next"
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

import register_cn from "translations/cn/register.json"
import register_en from "translations/en/register.json"
import register_jp from "translations/jp/register.json"
import register_kr from "translations/kr/register.json"
import register_vn from "translations/vn/register.json"

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

import home_cn from "translations/cn/home.json"
import home_en from "translations/en/home.json"
import home_jp from "translations/jp/home.json"
import home_kr from "translations/kr/home.json"
import home_vn from "translations/vn/home.json"

import settings_cn from "translations/cn/settings.json"
import settings_en from "translations/en/settings.json"
import settings_jp from "translations/jp/settings.json"
import settings_kr from "translations/kr/settings.json"
import settings_vn from "translations/vn/settings.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: `${localStorage.getItem("lng") || "vn"}`,
  resources: {
    cn: {
      common: common_cn,
      login: login_cn,
      register: register_cn,
      forgot_password: forgot_password_cn,
      header: header_cn,
      home: home_cn,
      settings: settings_cn,
    },
    en: {
      common: common_en,
      login: login_en,
      register: register_en,
      forgot_password: forgot_password_en,
      header: header_en,
      home: home_en,
      settings: settings_en,
    },
    jp: {
      common: common_jp,
      login: login_jp,
      register: register_jp,
      forgot_password: forgot_password_jp,
      header: header_jp,
      home: home_jp,
      settings: settings_jp,
    },
    kr: {
      common: common_kr,
      login: login_kr,
      register: register_kr,
      forgot_password: forgot_password_kr,
      header: header_kr,
      home: home_kr,
      settings: settings_kr,
    },
    vn: {
      common: common_vn,
      login: login_vn,
      register: register_vn,
      forgot_password: forgot_password_vn,
      header: header_vn,
      home: home_vn,
      settings: settings_vn,
    },
  },
})
