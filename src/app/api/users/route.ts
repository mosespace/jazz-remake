import bcrypt from "bcrypt";
import { Resend } from "resend";
import { prismaClient } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "@/components/(back-end)/email-template";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    //extract the credentials
    const { name, email, password, role = "USER" } = await request.json();
    //Check if the user Already exists in the prismaClient
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: `User with this email ( ${email})  already exists in the Database`,
        },
        { status: 409 }
      );
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        token: userToken,
      },
    });

    //Send an Email with the Token on the link as a search param
    const token = newUser.token;
    const userId = newUser.id;
    const linkText = "Complete Onboarding ";
    const message =
      "Thank you for registering with SmartBox. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    const sendMail = await resend.emails.send({
      from: "SmartBox <info@jazzafricaadventures.com>",
      to: email,
      subject: "Verify Your Email Address",
      react: EmailTemplate({ name, token, linkText, message }),
    });
    console.log(token);
    console.log(sendMail);
    console.log(newUser);
    return NextResponse.json(
      {
        data: newUser,
        message: "User Created Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Server Error: Something went wrong",
      },
      { status: 500 }
    );
  }
}
