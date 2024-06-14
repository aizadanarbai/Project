import styles from "./Footer.module.css"



const Footer = () => {
    return(
        <div className={styles.container}>
           <h2><img className={styles.telefon}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRJ3NoWgUEFlSe2Q9_pkNcTifIeIn7_vZVgHc2iq5Dg&s"/>+996757385734</h2> 
           <h2><img className={styles.gmail}src="https://cdn.icon-icons.com/icons2/2429/PNG/512/mail_ru_logo_icon_147267.png"/>cucci_@gmail.com</h2>
        </div>
    )
}
export default Footer