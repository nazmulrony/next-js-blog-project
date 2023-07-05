'use client';
import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';

export default function Login() {
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;
		const email = (formElement[0] as HTMLInputElement).value;
		const password = (formElement[1] as HTMLInputElement).value;
		console.log(email, password);
		signIn('credentials', { email, password });
	};

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
					Register
				</button>
			</form>
			<button
				onClick={() => signIn('google')}
				className="border rounded p-5 w-[300px] mt-5"
			>
				Login with Google
			</button>
		</div>
	);
}
