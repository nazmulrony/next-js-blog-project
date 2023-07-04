import Button from "@/components/button/Button";
import Image from "next/image";

export const metadata = {
    title: "Rony | Contact",
    description: "This is contact page",
};

export default function Contact() {
    return (
        <div>
            <h1 className="text-6xl mb-24 text-center font-bold">
                Let&apos;s Keep in Touch
            </h1>
            <div className="flex items-center gap-24">
                <div className="flex-1 h-[500px] relative">
                    <Image
                        src="/images/contact.png"
                        alt=""
                        fill={true}
                        className="object-contain animate-move"
                    />
                </div>
                <form className="flex-1 flex flex-col gap-5 ">
                    <input
                        className="p-5 bg-transparent  border rounded outline-none text-lg font-semibold"
                        type="text"
                        placeholder="name"
                    />
                    <input
                        className="p-5 bg-transparent border rounded outline-none  text-lg font-semibold"
                        type="email"
                        placeholder="email"
                    />
                    <textarea
                        className="p-5 bg-transparent  border rounded outline-none  text-lg font-semibold"
                        placeholder="message"
                        cols={30}
                        rows={10}
                    />
                    <Button>Send</Button>
                </form>
            </div>
        </div>
    );
}
