import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat: string) => {
    const data = items[cat];
    if (!data) {
        return notFound();
    }
    return data;
};

type Props = {
    params: {
        category: string;
    };
};
export default function Category({ params: { category } }: Props) {
    const data = getData(category);
    console.log(data);

    return (
        <div>
            <h1 className="text-[#53c28b font-bold text-3xl]">{category}</h1>
            {data.map((item) => (
                <div
                    key={item.id}
                    className="flex gap-12 mt12 mb-24 odd:flex-row-reverse "
                >
                    <div className="flex-1 flex flex-col gap-5 justify-center">
                        <h1 className="text-4xl font-bold">{item.title}</h1>
                        <p>{item.desc}</p>
                        <Button>See More</Button>
                    </div>
                    <div className="flex-1 h-[500px] relative">
                        <Image
                            fill={true}
                            src={item.image}
                            alt=""
                            className="object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
