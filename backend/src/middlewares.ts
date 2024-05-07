import { createMiddleware } from 'hono/factory'
import { verify } from 'hono/jwt';

export const auth = createMiddleware(async (c, next) => {
  const token = c.req.header('authorization')?.split(" ")[1] || "";
  if(!token){
    return c.json({msg:"unauthorized !token"})
  }
  try{
    const response = await verify(token,c.env.JWT_SECRET)
    if(response.userId){
        await next();
        return c.set("userId",response.id);
      }
    else{
        return c.json({msg:"unauthorized !response.userId"},403)
      }
  }
  catch(e){
    return c.json({msg:"unauthorized",error:e})
  }
  
  
})