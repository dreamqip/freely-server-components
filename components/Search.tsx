import type {FC} from 'react';
import {useEffect, useState} from "react";
import {Empty, Input} from "antd";
import axios from "axios";

const Search: FC = () => {
    const [search, setSearch] = useState<any>(null)
    const onSearch = (value: string) => setSearch(value);

    const fetchSearchQuery = async (query: string) => {
        try {
            return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&language=en-US&page=1`)
                .then(res => res.data)
        } catch (e) {
            console.log(e)
        }
    }


    useEffect( () => {
        fetchSearchQuery(search)
    }, [search])



    return (
        <div>
            <Input.Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </div>
    );
};

export default Search;
