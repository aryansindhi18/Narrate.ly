// import { router } from "./index"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import { auth } from './middlewares'
// const baseUrl: string = '/api/v1'
export const router = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

router.use('/blog/*',auth);
router.use('/get/*',auth);

router.get('/',(c)=>{
  return c.json({msg:'ok report'})
})
router.post(`/signup`, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  try{
    const user = await prisma.user.create({
      data:{
        name: body.name,
        email: body.email,
        password: body.password
      }
    })

    // return c.json({token:"jwt token will be returned..."})
    const jwt = await sign({userId:user.id},c.env.JWT_SECRET)
    return c.json({token:jwt})
  }
  catch(e){
    console.log(`error in sign up: ${e}`);
    return c.json({msg:`sign up failed`},403);
  }
  
})
  
router.post(`/signin`,async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();
  // try{
    const user = await prisma.user.findUnique({
      where:{
        email:body.email,
        password: body.password
      }
    })
    if(user==null){
      return c.json({msg:`user not found`},403)
    }
    const jwt = await sign({userId:user?.id},c.env.JWT_SECRET)
    return c.json({token:jwt})
  // }
  
})

router.post(`/blog`,(c)=>{
return c.json({msg:'ok report'})
})
  
router.put(`/blog`,(c)=>{
return c.json({msg:`ok report`})
})

router.get(`/get/:id`,(c)=>{
return c.json({msg:`ok report`})
})

router.get(`/blog/bulk`,(c)=>{
return c.json({msg:'ok report'})
})