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

import videos_cn from "translations/cn/videos.json"
import videos_en from "translations/en/videos.json"
import videos_jp from "translations/jp/videos.json"
import videos_kr from "translations/kr/videos.json"
import videos_vn from "translations/vn/videos.json"

import notFount404_cn from "translations/cn/404.json"
import notFount404_en from "translations/en/404.json"
import notFount404_jp from "translations/jp/404.json"
import notFount404_kr from "translations/kr/404.json"
import notFount404_vn from "translations/vn/404.json"

import about_cn from "translations/cn/about.json"
import about_en from "translations/en/about.json"
import about_jp from "translations/jp/about.json"
import about_kr from "translations/kr/about.json"
import about_vn from "translations/vn/about.json"

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
      videos: videos_cn,
      404: notFount404_cn,
      about: about_cn,
    },
    en: {
      common: common_en,
      login: login_en,
      register: register_en,
      forgot_password: forgot_password_en,
      header: header_en,
      home: home_en,
      settings: settings_en,
      videos: videos_en,
      404: notFount404_en,
      about: about_en,
    },
    jp: {
      common: common_jp,
      login: login_jp,
      register: register_jp,
      forgot_password: forgot_password_jp,
      header: header_jp,
      home: home_jp,
      settings: settings_jp,
      videos: videos_jp,
      404: notFount404_jp,
      about: about_jp,
    },
    kr: {
      common: common_kr,
      login: login_kr,
      register: register_kr,
      forgot_password: forgot_password_kr,
      header: header_kr,
      home: home_kr,
      settings: settings_kr,
      videos: videos_kr,
      404: notFount404_kr,
      about: about_kr,
    },
    vn: {
      common: common_vn,
      login: login_vn,
      register: register_vn,
      forgot_password: forgot_password_vn,
      header: header_vn,
      home: home_vn,
      settings: settings_vn,
      videos: videos_vn,
      404: notFount404_vn,
      about: about_vn,
    },
  },
})
