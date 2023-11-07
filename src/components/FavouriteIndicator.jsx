import { Button } from "react-bootstrap"
import { HeartFill } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const FavouriteIndicatore = () => {
  const navigate = useNavigate()
  const favouriteLength = useSelector((state) => state.favourite.content.lenght)

  return (
    <div className="d-flex justify-content-end my-3 mx-3">
      <Button
        onClick={() => navigate("/favourite")}
        className="d-flex align-items-center"
      >
        {" "}
        Favourite List
        <HeartFill className="ms-3" />
        <span className="ms-2">{favouriteLength}</span>
      </Button>
    </div>
  )
}

export default FavouriteIndicatore
