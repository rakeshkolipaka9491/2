import "./project.css";
const Header=()=>{
    return(
        <div className="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" className="logo" alt="reactlogo"/>

            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

const Nav=()=>{
    return(
        <div>
            <h1>Reasons I'm excited to learn React!</h1>
            <ol>
                <li>React is an efficient, flexible and open source javascript framework library </li>
                <li>React allows developers to the creation of simple,fast and scalable web applications</li>
                <li>React was first deployed on the news feed of facebook in 2011
                    instagram in 2012 and released in 2013 </li>
                <li>React is a component based frontend library that responsible for MVM architecture like model view controller</li>
            </ol>
        </div>
    )
}

const Footer=()=>{
    return(
        <div>
            <small>This is a footer</small>
        </div>
    )
}

export const Project=()=>{
    return(
        <div>

            <Header />
            <Nav />
            <Footer />
        </div>
    )
}