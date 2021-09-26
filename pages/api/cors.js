import axios from 'axios'
import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  console.log(req.query)
  console.log(req.headers.cookie)

  try {
    const response = await axios({
      method: "get",
      url: `https://flomoapp.com/api/memo`,
      headers: req.query?.flomo_session ? { cookie: `flomo_session=${req.query?.flomo_session}` } : undefined,
      withCredentials: true,
    })
    res.json({response})
  } catch (error) {
    res.json({error})
  }
  // Rest of the API logic
  // res.json({ message: 'Hello Everyone!' })
}
