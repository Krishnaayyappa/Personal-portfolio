import {LinkedinFilled, InstagramFilled}  from '@ant-design/icons'
import {Space} from 'antd'

const Footer = () => {
    return (
        <div className = "footer">
            <hr />
            <div className = "details">
                <div className = "phone">
                    <h3>Phone</h3>
                    <p>438-458-3949</p>
                </div>
                <div className = "email">
                    <h3>Email</h3>
                    <p>krishnanarina8@outlook.com</p>
                </div>
                <div className="follow">
                    <h3>Follow me</h3>
                    <Space>
                        <LinkedinFilled className = "ContactIcon"/>
                        <InstagramFilled className = "ContactIcon"/>
                    </Space>
                </div>
                <div className="copyright">
                <p>© 2023 By Krishna Narina</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer