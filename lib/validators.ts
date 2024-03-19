import * as z from "zod";

export const validationSchema = z.object({
    name: z.string().min(2, "Name is Short!").max(50, "Name is too Long!"),
    email: z.string().email(),
    subject: z.string(),
    message: z.string().min(2, "Message is too Short!").max(250, "Message should contain at most 250 characters!")
});