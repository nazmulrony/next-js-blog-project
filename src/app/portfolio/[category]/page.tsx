import Button from '@/components/button/Button';
import Image from 'next/image';

type Props = {
	params: {
		category: string;
	};
};
export default function Category({ params: { category } }: Props) {
	return (
		<div>
			<h1 className="text-[#53c28b font-bold text-3xl]">{category}</h1>
			<div className="flex gap-12 mt12 mb-24 odd:flex-row-reverse ">
				<div className="flex-1 flex flex-col gap-5 justify-center">
					<h1 className="text-4xl font-bold">Test</h1>
					<p>Description</p>
					<Button>See More</Button>
				</div>
				<div className="flex-1 h-[500px] relative">
					<Image
						fill={true}
						src={
							'https://images.pexels.com/photos/3110502/pexels-photo-3110502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						}
						alt=""
						className="object-cover"
					/>
				</div>
			</div>
			<div className="flex gap-12 mt12 mb-24 odd:flex-row-reverse ">
				<div className="flex-1 flex flex-col gap-5 justify-center">
					<h1>Test</h1>
					<p>Description</p>
					<Button>Test</Button>
				</div>
				<div className="flex-1 h-[500px] relative">
					<Image
						fill={true}
						src={
							'https://images.pexels.com/photos/3110502/pexels-photo-3110502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						}
						alt=""
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
