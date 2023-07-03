"use client";

import useSWR, { Fetcher } from "swr";

//typescript version of SWR
export default function Dashboard() {
    const fetcher: Fetcher<Blog[]> = (apiUrl: string) =>
        fetch(apiUrl).then((res) => res.json());

    const { data, error, isLoading } = useSWR<Blog[]>(
        "https://jsonplaceholder.typicode.com/posts",
        fetcher
    );
    console.log(data);
    return <div>Dashboard</div>;
}
