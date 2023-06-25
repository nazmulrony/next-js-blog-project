import Image from 'next/image';

export default function Footer() {
    return (
        <div className="h-32 flex justify-between items-center">
            <div>©2023 Devs Blog. All rights reserved.</div>
            <div className="flex items-center gap-3">
                <Image
                    src="/images/1.png"
                    width={18}
                    height={18}
                    alt="Rony Facebook"
                    className="cursor-pointer opacity-60 hover:opacity-100 duration-150"
                />
                <Image
                    src="/images/2.png"
                    width={18}
                    height={18}
                    alt="Rony Instagram"
                    className="cursor-pointer opacity-60 hover:opacity-100 duration-150"
                />
                <Image
                    src="/images/3.png"
                    width={18}
                    height={18}
                    alt="Rony Tweeter"
                    className="cursor-pointer opacity-60 hover:opacity-100 duration-150"
                />
                <Image
                    src="/images/4.png"
                    width={18}
                    height={18}
                    alt="Rony Youtube"
                    className="cursor-pointer opacity-60 hover:opacity-100 duration-150"
                />
            </div>
        </div>
    );
}
