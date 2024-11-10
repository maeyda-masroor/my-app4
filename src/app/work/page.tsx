import style from './work.module.css';
import Image  from 'next/image';
import node from '../../../public/js.png';
export default function work(){
    return(
        <div className={style.b1}>
            <h1 className={style.h1}>Work</h1>
            <div className={style.div1}>
                <div className={style.div2}>
                    <Image src={node} alt='c' width={300} height={300}/>
                    <h2 className={style.h2}>Node Js</h2>
                    <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    </p>
                </div>
                <div className={style.div3}>
                    <Image src={node} alt='c' width={300} height={250}/>
                    <h2 className={style.h2}>React Js</h2>
                    <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    </p>
                </div>
                <div className={style.div4}>
                    <Image src={node} alt='c' width={400} height={500}/>
                    <h2 className={style.h2}>Mongo Db</h2>
                    <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit</p>
            
                </div>
            </div>
        </div>
    )
}