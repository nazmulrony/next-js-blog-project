'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Register() {
	const [error, setError] = useState<boolean>(false);
	const router = useRouter();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;
		const name = (formElement[0] as HTMLInputElement).value;
		const email = (formElement[1] as HTMLInputElement).value;
		const password = (formElement[2] as HTMLInputElement).value;
		try {
			const res = await fetch('/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, password }),
			});
			res.status === 201 &&
				router.push(
					'/dashboard/login?success=Account has been created.'
				);
		} catch (err) {
			setError(true);
		}
	};
	return (
		<div className="flex justify-center items-center flex-col gap-5">
			<form
				onSubmit={handleSubmit}
				className="w-[300px] flex flex-col gap-5"
			>
				<input
					type="text"
					className=" p-5 bg-transparent border-2 border-[#bbb] rounded text-xl font-bold"
					required
					placeholder="username"
				/>
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
			</form>
			{error && <p className="text-red-500">Something went wrong!</p>}
			<button className="w-[300px] p-5 cursor-pointer bg-[#53c28b] border-none rounded text-[#eee] font-bold">
				Register
			</button>
			<Link href="/dashboard/login">Login with an existing account.</Link>
		</div>
	);
}
