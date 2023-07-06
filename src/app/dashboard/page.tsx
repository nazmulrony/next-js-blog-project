'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect } from 'react';
import useSWR, { Fetcher } from 'swr';

export default function Dashboard() {
	const session = useSession();
	const router = useRouter();

	// typescript version of SWR
	const fetcher: Fetcher<Post[]> = (apiUrl: string) =>
		fetch(apiUrl).then((res) => res.json());

	const { data, error, mutate, isLoading } = useSWR<Post[]>(
		`/api/posts?username=${session?.data?.user?.name}`,
		fetcher
	);
	console.log(data);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;
		const title = (formElement[0] as HTMLInputElement).value;
		const desc = (formElement[1] as HTMLInputElement).value;
		const img = (formElement[2] as HTMLInputElement).value;
		const content = (formElement[3] as HTMLInputElement).value;
		try {
			await fetch('/api/posts', {
				method: 'POST',
				body: JSON.stringify({
					title,
					desc,
					img,
					content,
					username: session?.data?.user?.name,
				}),
			});
			mutate();
		} catch (err: any) {
			console.log(err);
		}
	};

	const handleDelete = async (id: string) => {
		try {
			await fetch(`/api/posts/${id}`, { method: 'DELETE' });
			mutate();
		} catch (err) {
			console.log(err);
		}
	};

	//useEffect was used to avoid a warning
	useEffect(() => {
		if (session.status === 'unauthenticated') {
			router.push('/dashboard/login');
		}
	}, [router, session?.status]);

	if (session.status === 'loading')
		return <p className="text-center my-auto">Loading...</p>;

	if (session.status === 'authenticated') {
		return (
			<div className="flex gap-24">
				<div className="flex-1  ">
					{isLoading
						? 'Loading..'
						: data?.map((post) => (
								<div
									key={post._id}
									className="flex items-center justify-between my-12"
								>
									<div className="relative">
										<Image
											src={post.img}
											alt=""
											width={200}
											height={100}
											className="object-cover"
										/>
									</div>
									<h2>{post.title}</h2>
									<button
										onClick={() => handleDelete(post._id)}
										className="cursor-pointer bg-red-500 text-white h-5 w-5 flex items-center justify-center rounded  hover:scale-110 duration-150"
									>
										×
									</button>
								</div>
						  ))}
				</div>
				<form
					onSubmit={handleSubmit}
					className="flex-1 flex gap-5 flex-col "
				>
					<h1 className="text-3xl font-bold">Add New Post</h1>
					<input
						type="text "
						placeholder="Title"
						className="p-3 bg-transparent border-2 border-[#bbb] rounded text-xl font-bold"
					/>
					<input
						type="text "
						placeholder="Description"
						className="p-3 bg-transparent border-2 border-[#bbb] rounded text-xl font-bold"
					/>
					<input
						type="text "
						placeholder="Image"
						className="p-3 bg-transparent border-2 border-[#bbb] rounded text-xl font-bold"
					/>
					<textarea
						placeholder="Content"
						cols={30}
						rows={10}
						className="p-3 bg-transparent border-2 border-[#bbb] rounded text-xl font-bold"
					></textarea>
					<button
						type="submit"
						className="p-5 cursor-pointer bg-[#53c28b] border-none rounded text-[#eee] font-bold"
					>
						Send
					</button>
				</form>
			</div>
		);
	}
}
