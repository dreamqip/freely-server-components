import { FC } from "react"
import { useAppSelector } from "@/hooks/redux"
import ShowCarousel from "../ShowCarousel/ShowCarousel"

const Similar: FC = () => {
    const { similar } = useAppSelector((state) => state.series)

    return (
        <div>
            <ShowCarousel series={similar} title={"Similar"} />
        </div>
    )
}

export default Similar
