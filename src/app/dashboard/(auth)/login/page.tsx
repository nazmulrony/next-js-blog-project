'use client';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

export default function Login() {
	const session = useSession();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e: FormEvent) => {
		setIsLoading(true);
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;
		const email = (formElement[0] as HTMLInputElement).value;
		const password = (formElement[1] as HTMLInputElement).value;
		console.log(email, password);
		const res = await signIn('credentials', {
			email,
			password,
			redirect: false,
		});
		if (res?.error) {
			setError(res.error);
		}
		setIsLoading(false);
	};
	console.log(error);

	//useEffect was used to avoid a warning
	useEffect(() => {
		if (session.status === 'authenticated') {
			router.push('/dashboard');
		}
	}, [router, session?.status]);

	return (
		<div className="grid place-items-center">
			<form
				onSubmit={handleSubmit}
				className="w-[300px] flex flex-col gap-5"
			>
				<input
					type="email"
					className=" p-5 bg-transparent border-2 border-[#bbb] rounded text-xl font-bold"
					required
					placeholder="email"
				/>
				<input
					type="password"
					className=" p-5 bg-transparent border-2 border-[#bbb] rounded text-xl font-bold"
					required
					placeholder="password"
				/>
				{error && <p className="text-red-500">{error}</p>}
				<button
					type="submit"
					className="w-[300px] p-5 cursor-pointer bg-[#53c28b] border-none rounded text-[#eee] font-bold flex justify-center gap-2 items-center "
				>
					{isLoading && (
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
					Login
				</button>
			</form>
			<button
				onClick={() => signIn('google')}
				className="border rounded p-5 w-[300px] mt-5"
			>
				Login with Google
			</button>
			<p className="my-6">
				New to Devs Blog?
				<Link
					className="ml-1 hover:text-[#53c28b]"
					href="/dashboard/register"
				>
					Register
				</Link>
			</p>
		</div>
	);
}
