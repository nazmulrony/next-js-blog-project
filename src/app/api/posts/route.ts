import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export async function GET(request: Request) {
    try {
        await connect();
        const posts: any = Post.find();
        return new NextResponse(posts, { status: 200 });
    } catch {
        return new NextResponse("Database Error", { status: 500 });
    }
}
