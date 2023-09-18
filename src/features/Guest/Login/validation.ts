import { z } from "zod";

export const LoginValidationSchema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(6).max(24),
})