
import img1 from "../images/img1.jpg"


const Home = () => {
    return (
        <div className="home">
            <img className="img1" src={img1} alt="img1"/>
            <div>
                <div className="intro">
                    <h1>Hello!</h1>
                    <h3>My name is Krishna</h3>
                    <p>I am a software developer</p>
                </div>
                <div className="circles">
                    <div className="circle1">Resume</div>
                    <div className="circle2">Projects</div>
                    <div className="circle3">Contacts</div>
                </div>
            </div>
        </div>
        
       
    )
}

export default Home