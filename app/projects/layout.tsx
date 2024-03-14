"use client"

import { fetcher } from "@/utils/fetcher"
import Filter from "./components/Filter"
import useSWR from "swr"
import { Projects } from "./components/Projects"
import { useState } from "react"
import { ErrorBoundary } from "react-error-boundary";
import Error from "../error"

const url = `${process.env.SANITY_ALL_PROJECTS_URL}`


export default function Page({ children }: { children: React.ReactNode }) {


    const [category, setCategory] = useState<string>()

    const filterUrl = `${process.env.SANITY_PROJECT_URL}${process.env.SANITY_PROJECT_BY_CATEGORY}${category}${process.env.URL}`

    const fetchUrl = category ? filterUrl : url

    const { data, error } = useSWR(fetchUrl, fetcher)

    const results = data?.result

    const onClick = (catName: string) => setCategory(catName);

    return (
        <div className="container-md">
            <section className="section">

                <main>{children}</main>

                <Filter onClick={onClick} />

                {results === undefined ? (
                    <div>Loading....</div>
                ) : (
                    results.length > 0 ? (<ErrorBoundary fallback={<Error />}><Projects projects={results} /></ErrorBoundary>) : (<div>No project found</div>)
                )}
            </section>
        </div>
    )
}


