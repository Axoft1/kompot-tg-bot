import React, { memo, useEffect, useState } from "react"
import './style.scss'
import { useTelegram } from "../../hooks/useTelegram"
function Form() {
  const { tg } = useTelegram()
  const [city, setCity] = useState('moscow')
  const [address, setAddress] = useState('')

  const onChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value)
  }
  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить'
    })
  }, [tg.MainButton])
  useEffect(() => {
    if (!city || !address) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [address, city, tg.MainButton])
  return (
    <div className="form">
      <span>Город</span>
      <select className="select" value={city} onChange={onChangeCity}>
        <option value="moscow">Москва</option>
        <option value="kazan">Казань</option>
      </select>
      <span>Улица</span>
      <input className="input" value={address} onChange={onChangeAddress} type="text" placeholder="Улица" />
    </div>
  )
}

export default memo(Form)