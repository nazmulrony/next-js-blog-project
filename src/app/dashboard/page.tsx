'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import useSWR, { Fetcher } from 'swr';

export default function Dashboard() {
	const session = useSession();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	// typescript version of SWR
	const fetcher: Fetcher<Post[]> = (apiUrl: string) =>
		fetch(apiUrl).then((res) => res.json());

	const { data, error, mutate, isLoading } = useSWR<Post[]>(
		`/api/posts?username=${session?.data?.user?.name}`,
		fetcher
	);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
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
			formElement.reset();
		} catch (err: any) {
			console.log(err);
		}
		setLoading(false);
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
									className="flex items-start justify-between my-12 gap-6"
								>
									<div className="flex gap-2">
										<Image
											src={post.img}
											alt=""
											// fill={true}
											width={200}
											height={100}
											className="object-cover"
										/>

										<h2 className="text-2xl font-semibold">
											{post.title}
										</h2>
									</div>
									<button
										onClick={() => handleDelete(post._id)}
										className="cursor-pointer bg-red-500 text-white mt-4 flex  px-2 pb-1 rounded items-center justify-center   hover:scale-110 duration-150"
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
						className="p-5 cursor-pointer bg-[#53c28b] border-none rounded text-[#eee] font-bold flex items-center justify-center gap-2"
					>
						{loading && (
							<svg
								className="h-6 w-6 animate-spin"
								viewBox="3 3 18 18"
							>
								<path
									className="fill-[#91d8b5]"
									d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
								></path>
								<path
									className="fill-white"
									d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
								></path>
							</svg>
						)}
						{loading ? 'Sending' : 'Send'}
					</button>
				</form>
			</div>
		);
	}
}
