import type {FC} from 'react';
import {Empty, Image} from "antd";
import {useAppSelector} from "@/hooks/redux";
import {Backdrop} from "@/types/images";

const Images: FC = () => {
    const {images} = useAppSelector(state => state.movie)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image.PreviewGroup>
                {images?.backdrops.length > 0
                    ? images?.backdrops.map((image: Backdrop) => {
                        return (
                            <div className="flex object-cover" key={image.file_path}>
                                <Image
                                    placeholder={true}
                                    src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                                    alt="backdrop"
                                    fallback="./fallback.jpeg"
                                />
                            </div>
                        );
                    })
                    : <Empty description={""}>
                        <h3 className="dark:text-primary-dark text-xl">No images</h3>
                    </Empty>
                }
            </Image.PreviewGroup>
        </div>
    );
};

export default Images;
