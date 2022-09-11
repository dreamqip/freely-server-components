import {FC} from 'react';
import {Comment, List} from "antd";
import {useAppSelector} from "@/hooks/redux";

const Reviews: FC = () => {
    const {reviews} = useAppSelector(state => state.movie)

    return (
        <div className="relative">
            <h2 className="mt-4 text-center font-bold dark:text-white text-2xl md:text-5xl">Reviews</h2>
            <List
                itemLayout={"vertical"}
                dataSource={reviews?.results}
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
        </div>
    );
};

export default Reviews;
