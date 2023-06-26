import Button from '@/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};
export default function Blog({}: Props) {
	return (
		<div>
			<Link href={'/blog/testId'} className="flex gap-12 mt12 mb-24 ">
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
					<h1 className="text-4xl font-bold">Test</h1>
					<p>Description</p>
					<Button>See More</Button>
				</div>
			</Link>
		</div>
	);
}
