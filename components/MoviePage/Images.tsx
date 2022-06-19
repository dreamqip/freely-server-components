import type {FC} from 'react';
import {Skeleton, Empty, Image} from "antd";
import {useFetch} from "../../hooks/useFetch";

interface Props {
    id: any;
}

const Images: FC<Props> = ({id}) => {
    const {
        details,
        isLoading
    } = useFetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

    if (isLoading) return <Skeleton.Image className="w-full"/>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image.PreviewGroup>
                {details?.backdrops.length > 0
                    ? details?.backdrops.map((image: any) => {
                        return (
                            <div className="flex" key={image.file_path}>
                                <Image
                                    placeholder={true}
                                    src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                                    alt="backdrop image"
                                    fallback="/image-placeholder.webp"
                                />
                            </div>
                        )
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
