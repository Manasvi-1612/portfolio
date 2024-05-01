"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { validationSchema } from "@/lib/validators"
import { defaultValues } from "@/constants"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "../ui/textarea"
import ButtonComponent from "./ButtonComponent"
import toast from "react-hot-toast"
import emailjs from '@emailjs/browser'
import { useRef } from "react"


export default function ContactForm() {

    const form = useForm<z.infer<typeof validationSchema>>({
        defaultValues,
        resolver: zodResolver(validationSchema),
    })

    async function onSubmit(values: z.infer<typeof validationSchema>) {
        try {
            const emailServiceId = process.env.EMAIL_SERVICE_ID!;
            const emailTemplateId = process.env.EMAIL_TEMPLATE_ID!;
            const emailPublicId = process.env.EMAIL_PUBLIC_ID!;

            console.log("emailServiceId", emailServiceId, "emailTemplateId", emailTemplateId, "emailPublicId", emailPublicId)

            const templateParams: any = {
                from_email: values.email,
                from_name: values.name,
                message: values.message,
                subject: values.subject,
            }

            const response = await emailjs.send(emailServiceId, emailTemplateId, templateParams, {
                publicKey: emailPublicId
            })

            console.log("response", response)

            if (response.status === 200) {
                toast.success("Message sent successfully")
                form.reset()
            }

        } catch (error: any) {
            toast.error(error.message || "Failed to send message")
        }
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 text-start">
                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Name" {...field} className="input-field  rounded-3xl py-6 px-6 p-medium-20" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Email" {...field} className="input-field rounded-3xl py-6 px-6 p-medium-20" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Subject" {...field} className="input-field rounded-3xl py-6 px-6 p-medium-20" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl className="h-48">
                                    <Textarea placeholder="Message" {...field} className="textarea rounded-3xl py-6 px-6 p-medium-20 bg-secondary-light ring-offset-white  border-0 focus-visible:ring-primary-light  dark:bg-secondary-dark dark:ring-offset-slate-950 placeholder:text-title-light dark:placeholder:text-badge-dark dark:focus-visible:ring-primary-dark" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <ButtonComponent title={`${form.formState.isSubmitting ? 'Sending...' : 'send message'}`} name="Message" />
                </div>
            </form>
        </Form>
    )
}
