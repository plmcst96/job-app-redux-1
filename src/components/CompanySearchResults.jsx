import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import FavouriteIndicatore from "./FavouriteIndicator"
import { useDispatch, useSelector } from "react-redux"
import { getJobsAction } from "../redux/actions"

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([])
  const params = useParams()
  const dispatch = useDispatch()
  const jobsResult = useSelector((state) => state.jobs.job)

  // const baseEndpoint =
  //   "https://strive-benchmark.herokuapp.com/api/jobs?company="

  useEffect(() => {
    dispatch(getJobsAction(params.company))
    // getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.company)
  //     if (response.ok) {
  //       const { data } = await response.json()
  //       setJobs(data)
  //       console.log(data)
  //     } else {
  //       alert("Error fetching results")
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <FavouriteIndicatore />
          {jobsResult.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
