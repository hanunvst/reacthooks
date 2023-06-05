import Datatransfer from "./Data.js"
import profilepic from"./Assets/Profile.jpg"
const App=()=>{
    return(<main className="container">
        <ul className="comments-container">
            {/*<li className="comment">
                <div className="comments-header">
                    <h3 className="email">ganna@gmail.com</h3>
                    <h3 className="name">some random name</h3>
                </div>
                <p className="message">hanuma ganna</p>
</li>*/}
{
    Datatransfer.map((eachobj)=>{
        const{id,email,name,body}=eachobj;
        return <li key={id} className="comment">
            <div className="comments-header">
            <img src={profilepic}alt="do hanuma "/>
              <h3 className="email">{email}</h3>
              <h3 className="name">{name}</h3> 
            </div>
            <p className="message">{body}</p>
        </li>;})}    
        </ul>
    </main>)
}

export default App;