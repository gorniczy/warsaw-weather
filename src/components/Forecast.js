import React from "react"
import "./Forecast.css"

export const Forecast = props => {
  const day = ["ND", "PN", "WT", "ŚR", "CZW", "PT", "SB"]
  const dayNum = new Date().getDay()
  let nextDay = []
  for (var x = dayNum; x < 13; x++) {
    nextDay.push(day[x % 7])
  }
  const { forecast } = props

  return (
    <div className="wrapper">
      <div style={{ fontSize: props.fontSize }}>
        <p>{nextDay[1]}</p>
      </div>
      <div style={{ fontSize: props.fontSize }}>
        <p>{nextDay[2]}</p>
      </div>
      <div style={{ fontSize: props.fontSize }}>
        <p>{nextDay[3]}</p>
      </div>
      <div style={{ fontSize: props.fontSize }}>
        <p>{nextDay[4]}</p>
      </div>
      <div style={{ fontSize: props.fontSize }}>
        <p>{nextDay[5]}</p>
      </div>
      <div style={{ fontSize: props.fontSize }}>
        <p>{forecast[0]}˚</p>
      </div>
      <div style={{ fontSize: props.fontSize }}>
        <p>{forecast[1]}˚</p>
      </div>
      <div style={{ fontSize: props.fontSize }}>
        <p>{forecast[2]}˚</p>
      </div>
      <div style={{ fontSize: props.fontSize }}>
        <p>{forecast[3]}˚</p>
      </div>
      <div style={{ fontSize: props.fontSize }}>
        <p>{forecast[4]}˚</p>
      </div>
      <span className="break_2" />
    </div>
  )
}
