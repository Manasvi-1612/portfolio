import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

type emailTypes = {
    name: string,
    email: string,
    subject?: string,
    message: string
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_APP_PASSWORD
    }
});

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { name, email, subject, message } = reqBody.values

        const mailOptions = {
            from: `Client support ${email}`,
            to: process.env.MAIL_USER,
            subject: `Message form ${name} (${email})  ${subject ? `subject: ${subject}` : ''}`,
            text: message
        }

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(info);
                }
            });
        });
        return NextResponse.json({
            message: "Your message has been sent successfully",
            success: true,
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}