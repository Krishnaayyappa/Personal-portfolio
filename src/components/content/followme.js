import { Space } from "antd";
import { LinkedinFilled, GithubOutlined } from "@ant-design/icons";

function Followme(){
    return(
        <div className="follow">
            <h3>Follow me</h3>
            <Space>
                <a href="https://www.linkedin.com/in/krishna-ayyappa-a78b86114/" target="_blank" rel="noreferrer"><LinkedinFilled className = "ContactIcon"/></a>
                {/* <a href="linkedin.com/in/krishna-ayyappa-a78b86114" target="_blank" rel="noreferrer"><InstagramFilled className = "ContactIcon"/></a> */}
                <a href="https://github.com/Krishnaayyappa" target="_blank" rel="noreferrer"><GithubOutlined className = "ContactIcon"/></a>
            </Space>
        </div>
    )
}

export default Followme;