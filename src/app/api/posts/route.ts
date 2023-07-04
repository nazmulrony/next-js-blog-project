import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export async function GET(request: Request) {
    try {
        await connect();
        const posts: Post[] = await Post.find(); //here the post type is from types.d.ts file
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch {
        return new NextResponse("Database Error", { status: 500 });
    }
}
