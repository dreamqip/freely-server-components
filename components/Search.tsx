import type {FC} from 'react';
import {useState} from "react";
import {Input} from "antd";
import {useFetch} from "../hooks/useFetch";

const Search: FC = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [search, setSearch] = useState<any>('')

    const onSearch = (value: string) => setSearch(value);

    const {details, isLoading} = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&page=${pageIndex}`)

    console.log(details)

    return (
        <div>
            <Input.Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </div>
    );
};

export default Search;
