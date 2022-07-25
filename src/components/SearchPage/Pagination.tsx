import {FC, memo} from 'react';
import {Pagination, PaginationProps} from "antd";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {setPageIndex} from '@/features/search/searchSlice'

const SearchPagination: FC = () => {
    const {pageIndex, results} = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()

    const onChange: PaginationProps['onChange'] = (page) => {
        dispatch(setPageIndex(page))
    }

    return (
        <div className="flex justify-center mt-6">
            <Pagination showSizeChanger={false} defaultPageSize={20} onChange={onChange} current={pageIndex} total={results?.total_results}/>
        </div>
    );
};

export default memo(SearchPagination);
