import useSWR from "swr";
import {fetcher} from "../utilities/fetcher";

export const useFetch = (url: string) => {
    const {data, error} = useSWR(url, fetcher);

    return {
        details: data,
        isLoading: !error && !data,
        isError: error
    }
}
