import z from "zod";

export const signupInput = z.object({
    name:z.string().min(1),
    email:z.string().email(),
    password:z.string().min(6)

})



export const signinInput = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})


export const createPostInput = z.object({
    title:z.string(),
    content:z.string()
})


export const updatePostInput = z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})


export type signupType = z.infer<typeof signupInput>
export type signinType = z.infer<typeof signinInput>
export type createPostType = z.infer<typeof createPostInput>
export type updatePostType = z.infer<typeof updatePostInput>
