import { Link } from "react-router-dom"

export const Navbar = () => {
    const nav = [
    {title:"Home", to:"/"},
    {title:"About", to:"/about"},
    {title:"Users", to:"/users"}
    ]
    return(
        <div>
            {nav.map((e,i)=>{
                return <Link style={{margin: "10px"}} key={e.i} to={e.to}>{e.title}</Link>
            })}
        </div>
    )
}