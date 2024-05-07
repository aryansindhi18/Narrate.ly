import { Hono } from 'hono'
import { router } from './api'


// Define the Hono app with types for environment variables
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

// Define routes under a base path
// export const router = app.basePath('/api/v1')

app.route('api/v1',router)

// Root route under '/api/v1'
// router.get('/', (c) => {
//   return c.json({ msg: 'hello from /api/v1' })
// })

// Additional route under '/api/v1/hello'
// router.get('/hello', (c) => {
//   return c.json({ msg: 'ok report from /api/v1/hello' })
// })

export default app
