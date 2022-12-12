import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FiShoppingBag } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';



const Navbar = () =>{
    return(
        <div className={styles.navbarMainContainer}>
            <div className={styles.navbarRightSide}>
                <div className={styles.navbarTitle}>
                    <p><span>جرعه</span> کتاب</p>
                </div>

                <div className={styles.navbarList}>
                    <ul>
                        <li><a>دسته بندی</a></li>
                        <li><a>بی نهایت</a></li>
                        <li><a>صوتی</a></li>
                    </ul>
                </div>

                <div className={styles.navbarSearch}>
                    < BiSearch className={styles.navbarSearchIcon}/>
                    <input placeholder="جستجو"></input>
                </div>
            </div>

            <div className={styles.navbarLeftSide}>
               < FiShoppingBag className={styles.navbarShopIcon}/>
                <Link to="/login">ورود</Link>
            </div>

        </div>

    )
}
export default Navbar;