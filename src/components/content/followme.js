import { Space } from "antd";
import { LinkedinFilled, InstagramFilled, GithubOutlined } from "@ant-design/icons";

function Followme(){
    return(
        <div className="follow">
            <h3>Follow me</h3>
            <Space>
                <LinkedinFilled className = "ContactIcon"/>
                <InstagramFilled className = "ContactIcon"/>
                <GithubOutlined className = "ContactIcon"/>
            </Space>
        </div>
    )
}

export default Followme;