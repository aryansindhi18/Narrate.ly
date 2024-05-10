// import { router } from "./index"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import { auth } from './middlewares'
import { cors } from 'hono/cors'
import {signupInput,signinInput,createPostInput,updatePostInput} from '@aryansindhi18/blogwebiste-common'

// const baseUrl: string = '/api/v1'
export const router = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId:string
  }
}>()
router.use('/*',cors())
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
  const { success } = signupInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
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
  const { success } = signinInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
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

router.post(`/blog`,async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
  try{
    const post = await prisma.post.create({
      data:{
        title:body.title,
        content: body.content,
        authorId:c.get("userId")
      }
    })
    return c.json({msg:'Posted succesfully',
      postId: post.id
    })
  }
  catch(e){
    console.log(e)
    return c.json({msg:"Error in posting content.",
      error:e
    },406)
  }
  

})
  
router.put(`/blog`,async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();
  const { success } = updatePostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
  try{
    const post = await prisma.post.update({
      where:{
        id:body.id
      },
      data:{
        title:body.title,
        content: body.content,
      }
    })
    return c.json({msg:'Post updated succesfully',
      postId: post.id
    })
  }
  catch(e){
    return c.json({msg:"Error in updating the post.",
      error:e
    },406)
  }

})

router.get(`/get/:id`,async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const id = c.req.param('id');
  const body = await c.req.json();
  try{
    const post = await prisma.post.findFirst({
      where:{
        id
      }
    })
    
    return c.json({msg:'Post fetched succesfully',
      post: post
    })
  }
  catch(e){
    return c.json({msg:"Error in getting post.",
      error:e
    },406)
  }
})

//to add pagination
router.get(`/blog/bulk`,async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try{
    const posts = await prisma.post.findMany();
    return c.json({
      msg:'success',
      posts: posts
    })
  }
  catch(e){
    return c.json({
      msg:'error',
      error:e
    })
  }

})