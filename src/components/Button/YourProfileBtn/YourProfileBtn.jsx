import { useState } from "react"
import Button from "../../../modules/Button/Button"

const YourProfileBtn = () => {
  const [follow, setFollow] = useState(true)

  const handleBtnClick = (e) => {
    e.preventDefault()
    setFollow(pre => !pre)
  }
  return (
    <>
      {follow ? 
        <Button
          text="언팔로우"
          margin="24px 0"
          color = "#767676;" 
          backgroundColor = "#FFF"
          width="120px"
          height="34px"
          fontSize="14px"
          fontWeight="500"
          className="btnChecked"
          onClick={handleBtnClick}
      />
      : <Button
          text="팔로우"
          margin="24px 0"
          color = "#FFF" 
          backgroundColor = "#3C70BC"
          width="120px"
          height="34px"
          fontSize="14px"
          fontWeight="500"
          onClick={handleBtnClick}
        />
      }
    </>
  )
}

export default YourProfileBtn