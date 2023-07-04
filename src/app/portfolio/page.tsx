import Link from "next/link";

export const metadata = {
    title: "Rony | Portfolio",
    description: "This is portfolio page",
};
export default function Portfolio() {
    return (
        <div>
            <h1 className=" text-3xl mb-5 font-bold ">Choose a gallery</h1>
            <div className="flex gap-12">
                <Link
                    href="/portfolio/illustrations"
                    className=" border-4 border[#bbb] rounded w-[300px] h-[400px] relative bg-[url(/images/illustration.png)] bg-cover group"
                >
                    <span className="absolute right-3 bottom-3 text-4xl font-bold group-hover:text-[#53c28b]">
                        Illustrations
                    </span>
                </Link>
                <Link
                    href="/portfolio/websites"
                    className=" border-4 border[#bbb] rounded w-[300px] h-[400px] relative bg-[url(/images/websites.jpg)] bg-cover group"
                >
                    <span className="absolute right-3 bottom-3 text-4xl font-bold group-hover:text-[#53c28b]">
                        Websites
                    </span>
                </Link>
                <Link
                    href="/portfolio/applications"
                    className=" border-4 border[#bbb] rounded w-[300px] h-[400px] relative bg-[url(/images/apps.jpg)] bg-cover group"
                >
                    <span className="absolute right-3 bottom-3 text-4xl font-bold group-hover:text-[#53c28b]">
                        Applications
                    </span>
                </Link>
            </div>
        </div>
    );
}
