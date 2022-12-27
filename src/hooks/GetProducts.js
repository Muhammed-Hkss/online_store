import React from "react"
import { Products } from "../config"


export const GetProducts = () => {
  const [ base, setBase ] = React.useState(null)
  // const [ page, setPage ] = React.useState(1)

  // const PAGE_SIZE = 10
  // const ALL_PAGE = base?.length / PAGE_SIZE 

  // const TOTAL_PAGE = Math.ceil(ALL_PAGE)


  React.useEffect(() => {
    Products()
      .then(res => setBase(res.data))
  }, [])

  return {
    base,
    // PAGE_SIZE,
    // TOTAL_PAGE,
    // page,
    // setPage,
  }
}
