import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export async function GET(
    request: Request,
    { params: { id } }: { params: { id: string } }
) {
    try {
        await connect();
        const post: Post | null = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch {
        return new NextResponse("Database Error", { status: 500 });
    }
}
