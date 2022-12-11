import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footerMainContainer}>

          <hr></hr>

          <div className={styles.footerSectionOne}>
                    <div className={styles.Description}>
                        <p>فروشگاه اینترنتی کتاب طاقچه جایی برای خرید آنلاین کتاب با فرمت‌های متنوع است؛ از خرید و سفارش کتاب چاپی تا دانلود کتاب صوتی و خرید کتاب الکترونیکی. در کتاب فروشی آنلاین طاقچه هزاران کتاب الکترونیکی و کتاب گویا در دسترس است که در میان آن‌ها کتاب رایگان هم وجود دارد. شما می‌توانید کتاب‌ها را در موبایل، تبلت، رایانه یا سایت بخوانید و بشنوید</p>
                    </div>
                    <div className={styles.ContactLinks}>
                        <p>جرعه کتاب</p>
                        <ul>
                            <li><a>تماس با ما</a></li>
                            <li><a>درباره جرعه کتاب</a></li>
                            <li><a>وبلاگ جرعه کتاب</a></li>
                            <li><a>سوال های متداول</a></li>
                        </ul>
                    </div>
                    <div className={styles.OfferBooks}>
                        <p>کتاب های پیشنهادی</p>
                        <ul>
                            <li><a>رمان سالتو</a></li>
                            <li><a>شازده کوچولو</a></li>
                            <li><a>غرور و تعصب</a></li>
                            <li><a>انسان خردمند</a></li>
                            <li><a>پدیدارشناسی روح</a></li>
                            <li><a>عقاید یک دلقک</a></li>
                            <li><a>مغازه خودکشی</a></li>
                            <li><a>نیمه تارک وجود</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>وبلاگ جرعه کتاب</p>
                        <ul>
                            <li><a> رمان جدید</a></li>
                            <li><a> فلورانس اسکاول شین</a></li>
                            <li><a>زندگی نامه و آثار سعدی</a></li>
                            <li><a> کتاب های اطلاعات عمومی</a></li>
                            <li><a>زندگی نامه فردوسی و شاهنامه</a></li>
                            <li><a>زندگی نامه و اشعار حافظ شیرازی</a></li>
                            <li><a>زندگی نامه و اشعار سهراب سپهری</a></li>
                            <li><a>معرفی کتاب های مشابه ملت عشق</a></li>
                        </ul>

                    </div>  
           </div>

           <hr></hr>

           <div className={styles.footerSectionTwo}>
            <div>
                <p>© کلیه حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی کتاب جرعه کتاب است.</p>
            </div>
            <div>
                <ul>
                    <li><a>1</a></li>
                    <li><a>12</a></li>
                    <li><a>123</a></li>
                    <li><a>1234</a></li>
                    <li><a>12345</a></li>
                    <li><a>123456</a></li>
                    <li><a>1234567</a></li>
                    <li><a>12345678</a></li>
                </ul>
            </div>
           </div>
        </div>
    );
};

export default Footer;