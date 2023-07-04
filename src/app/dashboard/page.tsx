"use client";

import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from "swr";

export default function Dashboard() {
    const session = useSession();
    console.log(session);

    //typescript version of SWR
    // const fetcher: Fetcher<Blog[]> = (apiUrl: string) =>
    //     fetch(apiUrl).then((res) => res.json());

    // const { data, error, isLoading } = useSWR<Blog[]>(
    //     "https://jsonplaceholder.typicode.com/posts",
    //     fetcher
    // );
    // console.log(data);
    return <div>Dashboard</div>;
}
