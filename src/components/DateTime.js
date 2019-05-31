import React from "react"
import "./DateTime.css"

export class DateTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: "",
      month: "",
      date: "",
      day: "",
      time: ""
    }
  }

  componentDidMount() {
    this.loadTime()
    this.timer = setInterval(() => this.loadTime(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  loadTime = () => {
    const date = new Date()
    const day = ["ND", "PN", "WT", "ŚR", "CZW", "PT", "SB"]
    const month = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]
    this.setState({
      year: date.getFullYear(),
      month: month[date.getMonth()],
      date: date.getDate(),
      day: day[date.getDay()],
      time:
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2)
    })
  }

  render() {
    const { fontSize } = this.props
    const { year, day, date, month, time } = this.state
    return (
      <p className="date_time" style={{ fontSize: fontSize }}>
        {day} {date}.{month}.{year} {time}
      </p>
    )
  }
}
