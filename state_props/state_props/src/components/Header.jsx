import './Header.css'
export const Header = ({image, title}) => {
    return (
        <div className="header">
            <img src={image} alt="" />
            <b>{title}</b>
        </div>
    )
}