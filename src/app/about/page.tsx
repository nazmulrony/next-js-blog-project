import Button from '@/components/button/Button';
import Image from 'next/image';

type Props = {};
export default function About({}: Props) {
	return (
		<div>
			<div className="w-full h-[300px] relative">
				<Image
					src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt=""
					fill={true}
					className=" grayscale"
				/>
				<div className="absolute left-5 bottom-5 bg-[#53c28b] py-1 px-2 text-white">
					<h1 className="text-2xl font-bold">Digital Storytellers</h1>
					<h2 className="text-xl font-semibold">
						Handcrafting award winning digital experiences
					</h2>
				</div>
			</div>
			<div className="flex gap-24 mt-12 ">
				<div className="flex-1 flex flex-col gap-7">
					<h1 className="text-2xl font-bold">Who Are We?</h1>
					<p className="text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ducimus quae dolor, optio voluptatibus magnam iure esse
						tempora beatae. A suscipit eos. Animi quibusdam cum
						omnis officiis voluptatum quo ea eveniet? Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora
						beatae, a suscipit eos. Animi quibusdam cum omnis
						officiis
						<br />
						<br />
						voluptatum quo ea eveniet? Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Ducimus quae dolor, optio
						voluptatibus magnam iure esse tempora beatae, a suscipit
						eos. Animi quibusdam cum omnis officiis voluptatum quo
						ea eveniet?
					</p>
				</div>
				<div className="flex-1 flex flex-col gap-7">
					<h1 className="text-2xl font-bold">What We Do?</h1>
					<p className=" text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ducimus quae dolor, optio voluptatibus magnam iure esse
						tempora beatae, a suscipit eos. Animi quibusdam cum
						omnis officiis voluptatum quo ea eveniet? Lorem ipsum
						dolor sit amet consectetur adipisicing elit. - Creative
						Illustrations
						<br />
						<br /> - Dynamic Websites
						<br />
						<br /> - Fast and Handy
						<br />
						<br /> - Mobile Apps
					</p>
					<Button url="/contact">Contact</Button>
				</div>
			</div>
		</div>
	);
}
