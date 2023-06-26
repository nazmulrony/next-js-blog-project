import Link from 'next/link';
import { FC, ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	url?: string;
};

const Button: FC<ButtonProps> = ({ children, url }) => {
	return url ? (
		<Link href={url}>
			<button className="px-5 py-3 cursor-pointer bg-[#53c28b] border-none rounded w-max text-white hover:bg-[#46a877] duration-200">
				{children}
			</button>
		</Link>
	) : (
		<button className="px-5 py-3 cursor-pointer bg-[#53c28b] border-none rounded w-max text-white hover:bg-[#53c28b] duration-200">
			{children}
		</button>
	);
};

export default Button;
