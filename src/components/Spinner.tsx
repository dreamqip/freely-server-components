import { FC } from "react"
import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"

const antIcon = (
    <LoadingOutlined style={{ fontSize: 70, color: "#6200EE" }} spin />
)

const Spinner: FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Spin indicator={antIcon} />
        </div>
    )
}

export default Spinner
