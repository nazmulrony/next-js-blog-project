import Button from '@/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		cache: 'no-cache',
	});

	if (!res.ok) {
		notFound();
	}

	return res.json();
}

export default async function Blog() {
	const blogs: Blog[] = await getData();
	return (
		<div>
			{blogs.map((blog) => (
				<Link
					href={`/blog/${blog.id}`}
					key={blog.id}
					className="flex gap-12 mt12 mb-24 "
				>
					<div className=" h-[300px] relative">
						<Image
							src={
								'https://images.pexels.com/photos/3110502/pexels-photo-3110502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							}
							alt=""
							className="object-cover"
							width={400}
							height={250}
						/>
					</div>
					<div className="flex-1 flex flex-col gap-5 justify-center">
						<h1 className="text-4xl font-bold">{blog.title}</h1>
						<p>{blog.body}</p>
						<Button>See More</Button>
					</div>
				</Link>
			))}
		</div>
	);
}
