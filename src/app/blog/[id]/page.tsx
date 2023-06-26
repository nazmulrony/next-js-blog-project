import Image from 'next/image';

type Props = {};
export default function BlogPost({}: Props) {
	return (
		<div className="">
			<div className="flex gap-4">
				<div className="flex-1 flex flex-col gap-5">
					<h1 className="text-4xl font-bold">
						Lorem ipsum dolor sit amet consectetur.
					</h1>
					<p className="font-light text-xl">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Sunt vel quasi nostrum perspiciatis repellat
						laudantium, hic recusandae eveniet repudiandae eaque.
					</p>
					<div className="flex gap-4 items-center">
						<div className="h-10 w-10 rounded-full relative overflow-hidden">
							<Image
								src={
									'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								}
								alt=""
								fill
								className="object-cover "
							/>
						</div>
						<span className="">useName</span>
					</div>
				</div>
				<div className=" flex-1 relative h-[300px]">
					<Image
						src={
							'https://images.pexels.com/photos/3110502/pexels-photo-3110502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						}
						alt=""
						fill={true}
						className=""
					/>
				</div>
			</div>
			<div className=" mt-12 text-xl font-light text-[#999] text-justify">
				<p className="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Atque minus ratione libero incidunt eum velit quisquam harum
					sequi doloribus. Facere soluta repellat a impedit libero
					illum ratione tempora modi et ipsam, at aliquid, unde atque
					possimus explicabo, illo aperiam harum non repudiandae?
					Repellendus voluptatibus, maxime aliquid ratione minus ea
					laudantium, quisquam sed quia at veritatis hic. Id
					voluptatem dignissimos a. Adipisci inventore voluptatibus
					rem eveniet beatae provident. Hic doloribus quisquam dolor.
					Rerum mollitia laboriosam et nihil ipsam quod dolor
					voluptas.
				</p>
			</div>
		</div>
	);
}
