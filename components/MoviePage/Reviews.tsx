import {FC} from 'react';
import {Comment, List, Skeleton} from "antd";
import {useFetch} from "../../hooks/useFetch";

interface Props {
    id: any;
}

const Reviews: FC<Props> = ({id}) => {
    const {details, isLoading} = useFetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`)

    if (isLoading) return <Skeleton />

    return (
        <List
            itemLayout={"vertical"}
            dataSource={details.results}
            renderItem={(item: any) => (
                <List.Item>
                    <Comment
                        content={(
                            <p className="dark:text-white w-52 xs:w-auto">{item.content}</p>
                        )}
                        author={(
                            <span className="dark:text-primary-dark">{item.author}</span>
                        )}
                        avatar={`https://joeschmoe.io/api/v1/random`}
                        datetime={item.created_at}
                    />
                </List.Item>
            )}
        />
    );
};

export default Reviews;
