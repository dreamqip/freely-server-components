import type {FC} from 'react';
import {Button, Card, Col, Row} from "antd";
import {IMovies} from "../types/IMovies";
import {IMovie} from "../types/IMovie";
import {useState} from "react";
import UpcomingMovie from "./UpcomingMovie";

interface UpcomingProps {
    movies: IMovies;
}

const UpcomingMovies: FC<UpcomingProps> = ({movies}) => {
    const [showMore, setShowMore] = useState<boolean>(false)

    return (
        <div className="pt-16">
            <h2 className="text-center dark:text-white font-bold text-6xl">Upcoming movies</h2>
            <Card className="dark:bg-dark-theme cursor-pointer" bordered={false}>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {showMore
                        ? movies.results.map((movie: IMovie) => {
                            return (
                                <Col
                                    key={movie.id}
                                    xs={{span: 24}}
                                    md={{span: 8}}
                                    lg={{span: 6}}
                                    sm={{span: 12}}
                                    className="hover:-translate-y-4 duration-300 transition-transform"
                                    span={6}>
                                    <UpcomingMovie movie={movie} />
                                </Col>
                            )
                        })
                        : movies.results.slice(0, 4).map((movie: IMovie) => {
                            return (
                                <Col
                                    key={movie.id}
                                    xs={{span: 24}}
                                    md={{span: 8}}
                                    lg={{span: 6}}
                                    sm={{span: 12}}
                                    className="hover:-translate-y-4 duration-300 transition-transform"
                                    span={6}>
                                    <UpcomingMovie movie={movie} />
                                </Col>
                            )
                        })
                    }

                </Row>
                <Button
                    className="text-primary-500 mt-10 dark:text-white dark:bg-primary-500 block mx-auto dark:border-none"
                    size={'large'}
                    onClick={() => setShowMore((prevState: boolean) => !prevState)}>
                    {showMore ? "Show less" : "Show more"}
                </Button>
            </Card>
        </div>
    );
};

export default UpcomingMovies;
