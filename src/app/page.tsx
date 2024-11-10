"use client"
import Image from "next/image";
import { useState } from 'react';
import styles from "./page.module.css";
import nodejs from '../../public/node.png';
import js from '../../public/js.png';
import react from '../../public/html.png';
import Link from "next/link";
export default function Home() {
  const [imageSrc, setImageSrc] = useState('');
  const handleImageChange = (newImageSrc:any) => {
    setImageSrc(newImageSrc);
  };
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <h1 className={styles.h1}><a href="#" onClick={() => handleImageChange('/public/node.png')}>NODE JS.</a></h1>
        <h1 className={styles.h1}><a href="#" onClick={() => handleImageChange('')}>JS.</a></h1>
        <h1 className={styles.h1}><a href="#" onClick={() => handleImageChange('')}>REACT.</a></h1>
     
      </div>
      <div className={styles.div2}>
          <div className={styles.div3}>
            cc
          </div>
          <div className={styles.div4}>
          {imageSrc && <Image src={imageSrc} alt="Selected" width={50} height={50} />}
          </div>
      </div>
    </div>
  );
}
