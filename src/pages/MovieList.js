import { useSearchParams } from 'react-router-dom'

import {Card} from "../components";
import useFetch from "../hooks/useFetch";

export const MovieList = ({apiPath}) => {
    let [params] = useSearchParams(apiPath);
    const queryTerm = params.get("q")
    const {data} = useFetch(apiPath, queryTerm)

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap ">
                    {data.map((movie) => (
                        <Card
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}