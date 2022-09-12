import { FC } from "react"
import { IProfile } from "@/types/images"
import { Empty, Image } from "antd"

interface ImageListProps {
    images: IProfile[]
}

const ImageList: FC<ImageListProps> = ({ images }) => {
    if (!images) {
        return (
            <Empty description={""}>
                <h3 className="text-xl dark:text-primary-dark">No images</h3>
            </Empty>
        )
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Image.PreviewGroup>
                {images &&
                    images.map((image) => {
                        return (
                            <div
                                className="min-h-[100px] md:min-h-[200px]"
                                key={image.file_path}
                            >
                                <Image
                                    rootClassName="flex h-full"
                                    placeholder={true}
                                    src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                                    alt="backdrop"
                                    fallback="./fallback.jpeg"
                                    loading="lazy"
                                />
                            </div>
                        )
                    })}
            </Image.PreviewGroup>
        </div>
    )
}

export default ImageList
