import React from "react";
import { ReactDOM } from "react";
import styles from "./Header.module.css"

const Header = () =>{
    return(
        <div className={styles.header}>
              <p className={styles.headerTitle}>کتاب های چاپی به جرعه کتاب آمدند </p>
        </div>
    )
}
export default Header;