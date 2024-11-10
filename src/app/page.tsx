"use client"
import Image from "next/image";
import styles from "./page.module.css";
import nodejs from '../../public/node.png';

export default function Home() {
  
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <h1 className={styles.h1}><a href="#" >NODE JS.</a></h1>
        <h1 className={styles.h1}><a href="#" >JS.</a></h1>
        <h1 className={styles.h1}><a href="#" >REACT.</a></h1>
     
      </div>
      <div className={styles.div2}>
          <div className={styles.div3}>
            cc
          </div>
          <div className={styles.div4}>
          <Image src={nodejs} alt="Selected" width={50} height={50} />
          </div>
      </div>
    </div>
  );
}
