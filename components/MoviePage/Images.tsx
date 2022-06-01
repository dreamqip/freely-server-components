import type {FC} from 'react';
import {Col, Empty, Row} from "antd";
import Image from "next/image";

interface Props {
    images: any;
}

const Images: FC<Props> = ({images}) => {
    return (
        <Row className="justify-center">
            {images?.backdrops.length > 0
                ? images?.backdrops.map((image: any) => {
                    return (
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                            <Image
                                src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                                width={400}
                                height={600}
                                alt="backdrop image"
                            />
                        </Col>
                    )
                })
                : <Empty description={""}>
                    <h3 className="dark:text-primary-dark text-xl">No images</h3>
                </Empty>
            }
        </Row>
    );
};

export default Images;
