import {FC} from 'react';
import {Pagination, PaginationProps} from "antd";

interface Props {
    pageIndex: number;
    setPageIndex: any;
    total: number;
}

const PagePagination: FC<Props> = ({pageIndex,setPageIndex, total}) => {

    const onChange: PaginationProps['onChange'] = page => {
        setPageIndex(page);
    };

    return (
        <div>
            <Pagination showSizeChanger={false} onChange={onChange} current={pageIndex} total={total}/>
        </div>
    );
};

export default PagePagination;
