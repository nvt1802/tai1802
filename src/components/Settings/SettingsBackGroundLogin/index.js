import React, { Fragment, useState } from "react"
import {
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Button,
  Tabs,
  Tab,
  Slider,
} from "@material-ui/core"
import { useTranslation } from "react-i18next"
import BackGroundImage1 from "assets/image/bgLogin/bg-login-1.jpg"
import BackGroundImage2 from "assets/image/bgLogin/bg-login-2.jpg"
import BackGroundImage3 from "assets/image/bgLogin/bg-login-3.jpg"
import BackGroundImage4 from "assets/image/bgLogin/bg-login-4.jpg"
import BackGroundImage5 from "assets/image/bgLogin/bg-login-5.jpg"
import BackGroundImage6 from "assets/image/bgLogin/bg-login-6.jpg"
import When from "components/Condition/When"

const SettingsBackGroundLogin = () => {
  const { t } = useTranslation(["common", "settings", "login", "register"])
  const [value, setValue] = React.useState(1)
  const [height, setHeight] = React.useState(300)
  const [bgLogin, setBgLogin] = useState(
    localStorage.getItem("bgLogin") || BackGroundImage1
  )
  const [bgRegister, setBgRegister] = useState(
    localStorage.getItem("bgRegister") || BackGroundImage1
  )

  const handleChangeBgLogin = (event) => {
    setBgLogin(event.target.value)
  }

  const handleChangeBgRegister = (event) => {
    setBgRegister(event.target.value)
  }

  const handleConfirmBgLogin = () => {
    localStorage.setItem("bgLogin", bgLogin)
  }

  const handleConfirmbgRegister = () => {
    localStorage.setItem("bgRegister", bgRegister)
  }

  const handleChangeTab = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeSize = (event, newValue) => {
    console.log(newValue)
    setHeight(newValue)
  }

  const arrImage = [
    { label: "Background Image 1", src: BackGroundImage1 },
    { label: "Background Image 2", src: BackGroundImage2 },
    { label: "Background Image 3", src: BackGroundImage3 },
    { label: "Background Image 4", src: BackGroundImage4 },
    { label: "Background Image 5", src: BackGroundImage5 },
    { label: "Background Image 6", src: BackGroundImage6 },
  ]

  const renderForm = (bg, handleChangeBg, handleConfirm) => {
    return (
      <div style={{ display: "flex" }}>
        <FormControl>
          <RadioGroup
            aria-label="bgImg"
            name="bgImg"
            value={bg}
            onChange={handleChangeBg}
          >
            {arrImage.map((item, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={item?.src}
                  control={<Radio />}
                  label={item?.label}
                />
              )
            })}
          </RadioGroup>
          <Button
            variant="contained"
            style={{
              marginTop: "1em",
              backgroundColor: "green",
              color: "white",
            }}
            onClick={handleConfirm}
          >
            {t("common:btn_confirm")}
          </Button>
        </FormControl>
        <div style={{ width: "auto", height: `${height}px`, margin: "auto" }}>
          <img src={bg} alt="bg" width="auto" height={`${height}px`} />
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      <div style={{ display: "flex" }}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChangeTab}
          aria-label="disabled tabs example"
        >
          <Tab label={t("login:title")} value={1} />
          <Tab label={t("register:title")} value={2} />
        </Tabs>
        <div style={{ width: "300px", marginTop: "1em", marginLeft: "3em" }}>
          <Slider
            defaultValue={300}
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
            step={1}
            min={100}
            max={1000}
            onChange={handleChangeSize}
          />
        </div>
      </div>
      <When condition={value === 1}>
        {renderForm(bgLogin, handleChangeBgLogin, handleConfirmBgLogin)}
      </When>
      <When condition={value === 2}>
        {renderForm(
          bgRegister,
          handleChangeBgRegister,
          handleConfirmbgRegister
        )}
      </When>
    </Fragment>
  )
}

export default SettingsBackGroundLogin
