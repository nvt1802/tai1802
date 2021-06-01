import React, { Fragment, useMemo, useState } from "react"
import {
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core"
import { useTranslation } from "react-i18next"

const SetingLanguageForm = () => {
  const { t, i18n } = useTranslation(["common", "settings"])
  const [selectedValue, setSelectedValue] = useState(
    localStorage.getItem("lng") || "vn"
  )

  const handleChangeLanguage = (event) => {
    setSelectedValue(event.target.value)
  }

  const handleConfirm = () => {
    i18n.changeLanguage(selectedValue || "vn")
    localStorage.setItem("lng", selectedValue)
  }

  const arrLanguage = useMemo(
    () => [
      { label: t("common:language.cn"), value: "cn" },
      { label: t("common:language.en"), value: "en" },
      { label: t("common:language.jp"), value: "jp" },
      { label: t("common:language.kr"), value: "kr" },
      { label: t("common:language.vn"), value: "vn" },
    ],
    [t]
  )

  return (
    <Fragment>
      <FormControl>
        <RadioGroup
          aria-label="language"
          name="language"
          value={selectedValue}
          onChange={handleChangeLanguage}
        >
          {arrLanguage.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                value={item?.value}
                control={<Radio />}
                label={item?.label}
              />
            )
          })}
        </RadioGroup>
        <Button
          variant="contained"
          style={{ marginTop: "1em", backgroundColor: "green", color: "white" }}
          onClick={handleConfirm}
        >
          {t("common:btn_confirm")}
        </Button>
      </FormControl>
    </Fragment>
  )
}

export default SetingLanguageForm
