import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
    };
};

async function getData(id: string) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export async function generateMetadata({ params: { id } }: Props) {
    const data: Post = await getData(id);
    return {
        title: data.title,
    };
}

export default async function BlogPost({ params: { id } }: Props) {
    const data: Post = await getData(id);
    return (
        <div className="">
            <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-5">
                    <h1 className="text-4xl font-bold">{data.title}</h1>
                    <p className="font-light text-xl">{data.desc}</p>
                    <div className="flex gap-4 items-center">
                        <div className="h-10 w-10 rounded-full relative overflow-hidden">
                            <Image
                                src={data.img}
                                alt=""
                                fill
                                className="object-cover "
                            />
                        </div>
                        <span className="">{data.username}</span>
                    </div>
                </div>
                <div className=" flex-1 relative h-[300px]">
                    <Image src={data.img} alt="" fill={true} className="" />
                </div>
            </div>
            <div className=" mt-12 text-xl font-light text-justify">
                <p className="">{data.content}</p>
            </div>
        </div>
    );
}
