import { Hono } from 'hono'
import { router_index } from './routes/router_index'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
}>()

//router in HONO
app.route("/api/v1", router_index)

export default app