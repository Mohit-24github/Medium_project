import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createblogInput, updateblogInput } from '@mohit_npm/medium-project'

export const blog_router = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	},
    Variables:{
        userId: string
    }
}>()

//middleware
blog_router.use('/*', async (c, next) => {
    try{
      const token = c.req.header('Authorization')
      if (!token){
        c.status(401)
        return c.json('Message: "Unauthorized') 
      }
      const response = await verify(token,c.env.JWT_SECRET)
      if(!response){
        c.status(401)
        return c.json('Message: "Unauthorized')
      }
      c.set("userId",response.id as string)
      await next()
    }catch(e){
      c.status(401)
      return c.json({'message':"Authorization Error"})
    }
  }
)

blog_router.post('/',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{    
        const body = await c.req.json()
        const {success} = createblogInput.safeParse(body)
        if (!success){
            c.status(411)
            return c.json({
                "message" : 'Invalid Input Credentials'
            })
        }
        const authID = c.get("userId")
        const blog = await prisma.post.create({
            data:{
                title: body.title,
                content: body.content,
                authorID: authID
            }
        })
        return c.json({id: blog.id})
    }catch(e){
        c.status(411)
        return c.json({
            message:"Error creating POST"
        })
    }
  }
)
  
blog_router.put('/',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const body = await c.req.json()
        const {success} = updateblogInput.safeParse(body)
        if (!success){
            c.status(411)
            return c.json({
                "message" : 'Invalid Input Credentials'
            })
        }
        const response = await prisma.post.update({
            where:{
                id: body.id
            },
            data:{
                title : body.title,
                content: body.content
            }
        })
        return c.json({
            message: "Post updated",
            id: response.id
        })
    }catch(e){
        c.status(411)
        return c.json({
            message:"Error updating POST"
        })
    }
}
)
   
blog_router.get('/get/:id',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const id = c.req.param('id');
        const blog = await prisma.post.findFirst({
            where:{
                id: id
            },
            select:{
                title:true,
                content: true,
                id: true,
                author:{
                    select:{
                        name: true
                    }
                }
            }
        })
        return c.json({
            blog
        })
    }catch(e){
        c.status(411)
        return c.json({
            message:"Error requesting the POST"
        })
    }
  }
)
 
// Todo: add pagination
blog_router.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.post.findMany({
            select:{
                title: true,
                content: true,
                id: true,
                author:{
                    select:{
                        name: true
                    }
                }
            }
        })
        return c.json({blog})
    }catch(e){
        c.status(411)
        return c.json({
            "message": " Cannot print the titles"
        })
    }
  }
)