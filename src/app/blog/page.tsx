import Button from '@/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata = {
	title: 'Rony | Blog',
	description: 'This is blog page',
};

export const dynamic = 'force-dynamic';

async function getData() {
	const res = await fetch(
		'https://next-js-blog-project-phi.vercel.app/api/posts',
		{
			cache: 'no-cache',
		}
	);

	if (res.ok) {
		return res.json();
	}
	return notFound();
}

export default async function Blog() {
	const posts: Post[] = await getData();

	return (
		<div>
			{posts?.map((post) => (
				<Link
					href={`/blog/${post._id}`}
					key={post._id}
					className="flex gap-12 mt12 mb-24 items-start "
				>
					<div className=" h-[300px] relative">
						<Image
							src={post.img}
							alt=""
							className="object-cover"
							width={400}
							height={250}
						/>
					</div>
					<div className="flex-1 flex flex-col gap-5 justify-center">
						<h1 className="text-4xl font-bold">{post.title}</h1>
						<p>{post.desc}</p>
						<Button>See More</Button>
					</div>
				</Link>
			))}
		</div>
	);
}
