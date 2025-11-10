import { em } from "motion/react-client"
import {z} from "zod"

export const contactFormSchema = z.object({
    name:z.string().min(4,{message:"Full name must be at least 4 characters"}).trim(),
    email:z.string().email(),
    subject:z.string().min(10,{message:"Subject must be at least 6 characters"}).trim(),
    message:z.string().min(20,{message:"Message must be at least 6 characters"}).trim(),
})

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>