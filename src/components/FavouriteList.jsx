import { Button, Col, Container, Row } from "react-bootstrap"
import { Trash3 } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeFavAction } from "../redux/actions"

const FavouriteList = () => {
  const favourite = useSelector((state) => state.favourite.content)
  const dispatch = useDispatch()
  return (
    <Container>
      <Row>
        <h1>My Favourite Company</h1>
        <Col>
          <ul className="mt-5">
            {favourite.map((data, i) => (
              <li
                key={i}
                style={{ listStyleType: "none" }}
                className="border border-black p-2 w-75 ps-5 mb-2 d-flex justify-content-between align-items-center"
              >
                <div>
                  <Link to={"/" + data.company_name}>{data.company_name}</Link>
                  <p className="mb-0">{data.title}</p>
                  <span className="text-black-50">{data.salary}</span>
                </div>
                <div>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFavAction(data._id))}
                  >
                    <Trash3 />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default FavouriteList
