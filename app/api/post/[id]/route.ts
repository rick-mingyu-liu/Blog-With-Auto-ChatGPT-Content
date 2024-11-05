import { NextResponse } from "next/server";
import { prisma } from "../../client";
import type { NextRequest } from "next/server";

export async function PATCH(request: NextRequest, context: any) {
  try {
    const { id } = context.params; // Access params directly
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
