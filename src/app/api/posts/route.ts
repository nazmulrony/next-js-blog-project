import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

export async function GET(request: Request) {
	const url = new URL(request.url);
	const username = url.searchParams.get('username');

	try {
		await connect();
		// let posts: Post[];
		// if (username) {
		// 	posts = await Post.find({ username }); //here the post type is from types.d.ts file
		// } else {
		// 	posts = await Post.find();
		// }
		const posts: Post[] = await Post.find(username ? { username } : {});
		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch {
		return new NextResponse('Database Error', { status: 500 });
	}
}

export const POST = async (request: Request) => {
	const postData = await request.json();

	const newPost = new Post(postData);
	console.log(newPost);
	try {
		await connect();
		await newPost.save();
		return new NextResponse('post has been created', { status: 201 });
	} catch (err) {
		return new NextResponse((err as Error).message, { status: 500 });
	}
};
