import React, { memo } from "react"
import './style.scss'
function Form() {
  return (
    <div className="form">
      <span>Город</span>
      <select className="select">
        <option value="moscow">Москва</option>
        <option value="kazan">Казань</option>
      </select>
      <span>Улица</span>
      <input className="input" type="text" placeholder="Улица" />
    </div>
  )
}

export default memo(Form)