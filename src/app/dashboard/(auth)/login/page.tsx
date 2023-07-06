'use client';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect } from 'react';

export default function Login() {
	const session = useSession();
	const router = useRouter();
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;
		const email = (formElement[0] as HTMLInputElement).value;
		const password = (formElement[1] as HTMLInputElement).value;
		console.log(email, password);
		signIn('credentials', { email, password });
	};

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

				<button
					type="submit"
					className="w-[300px] p-5 cursor-pointer bg-[#53c28b] border-none rounded text-[#eee] font-bold"
				>
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
