"use client"

import { fetcher } from "@/utils/fetcher"
import Filter from "./components/Filter"
import useSWR from "swr"
import { Projects } from "./components/Projects"
// import { useEffect, useState } from "react"

const url = `${process.env.SANITY_ALL_PROJECTS_URL}`


export default function Page() {

    const { data, error } = useSWR(url, fetcher)

    const results = data?.result

    return (
        <div className="container-md">
            <section className="section">
                <Filter />

                {results?.length === 0 ? (<>No Project Found</>) : (
                    <Projects projects={results} />
                )}
            </section>
        </div>
    )
}

