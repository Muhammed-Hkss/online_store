import React from 'react'
import useDarkMode from '../../hooks/darkmode/useDarkMode'
import cls from './Setting.module.scss'
import { BsMoon, BsSun } from "react-icons/bs"


const Settings = () => {
  const [isDarkMode, setDarkMode] = useDarkMode()

  return (
    <div>
      Settings

      <div className={cls.card}></div>

      <button className="toggle_btn" onClick={() => setDarkMode(!isDarkMode)}>
        {isDarkMode ? (
          <BsSun color="#ff0" size="24" title="Switch to light mode" />
        ) : (
          <BsMoon size="24" title="Switch to dark mode" />
        )}
      </button>
    </div>
  )
}

export default Settings
