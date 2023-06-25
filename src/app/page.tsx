import Button from '@/components/button/Button';
import Image from 'next/image';
import Hero from 'public/images/hero.png';

export default function Home() {
    return (
        <div className="flex items-center gap-24">
            <div className="flex-1 flex flex-col gap-12">
                <h1 className=" text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent font-bold ">
                    Better design for your digital products.
                </h1>
                <p className="text-2xl font-light ">
                    Turning your Idea into Reality. We bring together the teams
                    from the global tech industry.
                </p>
                <Button url="/portfolio">See Our Works</Button>
            </div>
            <div className="flex-1 flex flex-col gap-12">
                <Image
                    src={Hero}
                    alt=""
                    className="animate-moveVertical object-contain"
                />
            </div>
        </div>
    );
}
