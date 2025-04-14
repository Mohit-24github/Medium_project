import { Hono } from 'hono'
import { router_index } from './routes/router_index'
import { cors } from 'hono/cors'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
}>()

app.use('/api/*', cors())
//router in HONO
app.route("/api/v1", router_index)

export default app