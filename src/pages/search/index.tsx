import {NextPage} from "next";
import Search from "../../components/Search";
import {Input} from "antd";
import {useState} from "react";
import {useFetch} from "../../hooks/useFetch";

const Index: NextPage = () => {
    const [search, setSearch] = useState('');
    const [pageIndex, setPageIndex] = useState(1);

    const {
        details,
        isLoading
    } = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&page=${pageIndex}`)


    const onSearch = (value: string) => setSearch(value);

    return (
        <div>
            <Input.Search placeholder="Search for a movie ..." size="large" enterButton="Search" onSearch={onSearch}/>
            <Search pageIndex={pageIndex} setPageIndex={setPageIndex} search={search} details={details}
                    isLoading={isLoading}/>
        </div>
    );
};

export default Index;
