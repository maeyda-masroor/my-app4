import  style from "./Footer.module.css";
export default function Navbar(){
    return (
        <div className={style.navbar}>
            <div className={style.navLinks}>
                <ul>
                    <li><a href="#">Email</a></li>
                    <li><a href="#">linkedin</a></li>
                </ul>
            </div>
            <div className={style.logo}>
                @2024
            </div>
        </div>
    )
}