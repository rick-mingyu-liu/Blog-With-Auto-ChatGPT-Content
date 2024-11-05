import { NextResponse } from "next/server";
import { prisma } from "../../client";

export async function PATCH(request: Request, context: { params: Record<string, string> }) {
  try {
    // Make sure `params` is awaited if it needs to be resolved asynchronously
    const { id } = context.params;
    
    const { title, content } = await request.json();
    const post = await prisma.post.update({
      where: { id },
      data: { title, content },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("request error", error);
    return NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
