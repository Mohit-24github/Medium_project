import { Hono } from 'hono'
import { user_router } from './user_router'
import { blog_router } from './blog_router'

export const router_index = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()

router_index.route("/blog", blog_router)
router_index.route("/user", user_router)