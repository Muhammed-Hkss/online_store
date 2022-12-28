import React from "react"
import { Products } from "../config"


export const GetProducts = () => {
  const [ base, setBase ] = React.useState(null)


  React.useEffect(() => {
    Products()
      .then(res => setBase(res.data))
  }, [])

  return {
    base,
  }
}
