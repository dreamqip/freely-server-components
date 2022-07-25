import {FC, useEffect, useState} from 'react';
import {Input} from "antd";
import {useAppDispatch} from "@/hooks/redux";
import {setSearchQuery} from '@/features/search/searchSlice'

const SearchInput: FC = () => {
    const dispatch = useAppDispatch()
    const [search, setSearch] = useState<string>('a');

    useEffect(() => {
        dispatch(setSearchQuery(search))
    }, [search, dispatch])

    const onSearch = (query: string) => setSearch(query);

    return (
        <Input.Search
            placeholder="Search for a movie"
            type={"search"}
            allowClear
            onSearch={onSearch}
            size="large"
        />
    );
};

export default SearchInput;
