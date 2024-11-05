import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { title, role } = await request.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `${role || "I am a helpful assistant"}. Write with HTML tags.`,
        },
        {
          role: "user",
          content: `Create a 3-line blog post with HTML tags based on this title: ${title}`,
        },
      ],
    });

    const content = response.choices[0]?.message?.content;

    return NextResponse.json({ content }, { status: 200 });
  } catch (error) {
    console.error("Request error:", error);
    return NextResponse.json({ error: "Error generating post" }, { status: 500 });
  }
}
