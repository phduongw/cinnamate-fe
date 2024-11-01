import useFetch from "../hooks/useFetch";
import {Card} from "../components";
import {useSearchParams} from "react-router-dom";
import {useTitle} from "../hooks/useTitle";


export const Search = ({apiPath}) => {
    const [params] = useSearchParams();
    const queryTerm = params.get("q");
    const {data: movies} = useFetch(apiPath, queryTerm);
    useTitle(`Search result for ${queryTerm} / Cinema`);

    return (
        <main>
            <section className="py-3 px-3">
                <p className="text-3xl text-gray-700 dark:text-white">
                    {movies.length === 0 ? `No results found for '${queryTerm}'` : `Result for '${queryTerm}'`}
                </p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {movies.map((movie) => (
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