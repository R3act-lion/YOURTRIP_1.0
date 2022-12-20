import { Link } from "react-router-dom"
import Button from "../../../modules/Button/Button"

const MyProfileBtn = () => {
  return (
    <>
      <Link to="/profile/edit">
        <Button
          text="프로필 수정"
          margin="24px 0"
          color = "#767676;" 
          backgroundColor = "#FFF"
          width="120px"
          height="34px"
          fontSize="14px"
          fontWeight="500"
          className="btnChecked" />
      </Link>
    </>
  )
}

export default MyProfileBtn