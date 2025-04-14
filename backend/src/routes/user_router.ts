import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign} from 'hono/jwt'
import { signinInput, signupInput } from "@mohit_npm/medium-project"


export const user_router = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string
	}
}>()

user_router.post('/signup',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const body = await c.req.json()
        //input validation
        const {success} =  signupInput.safeParse(body)
        if (!success){
            c.status(411)
            return c.json({
                "message" : 'Invalid Input Credentials'
            })
        }
        const user = await prisma.user.create({
        data:{
          email: body.email,
          password: body.password,
          name: body.name
        }
      });
      const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
      // c.header('Authorization', `Bearer ${jwt}`)
      return c.json({jwt})
    }
    catch(e){
      c.status(403)
      return c.json({error: "Error occured while signup step"})
    }
  })
  
user_router.post('/signin',async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
      const body = await c.req.json()
      const {success} = signinInput.safeParse(body)
      if (!success){
        c.status(411)
        return c.json({
            "message" : 'Invalid Input Credentials'
        })
    }
      const user = await prisma.user.findUnique({
        where:{
          email: body.email,
          password: body.password
        }
      })
      if (!user){
        c.status(403)
        return c.json({'message': "User not found"})
      }
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
    }
    catch(e){
      c.status(403)
      return c.json({'message': "Error in the signin step"})
    }
  })