import React from 'react'
import cls from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={cls.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default Loading
