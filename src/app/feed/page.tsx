import style from './feed.module.css';
import node from '../../../public/node.png';
import Image from 'next/image';
export default function feed(){
    return (
        <div className={style.b1}>
            <h1 className={style.h1}>Feed</h1>
            <div className={style.div1}>
                <div className={style.div2}>
                    <Image src={node} alt='v' width={350} height={300}/>
                </div>
                <div className={style.div3}>
                <h1 className={style.h2}>Available now</h1>
                <h1 className={style.h3}>30.10.24</h1>
                <p className={style.p1}> Available starting early November. Now accepting bookings for new projects, exciting collaborations, and creative partnerships.
                </p>
                </div>
            </div>
            <div className={style.div1}>
                <div className={style.div2}>
                    <Image src={node} alt='v' width={350} height={300}/>
                </div>
                <div className={style.div3}>
                <h1 className={style.h2}>Available now</h1>
                <h1 className={style.h3}>30.10.24</h1>
                <p className={style.p1}> Available starting early November. Now accepting bookings for new projects, exciting collaborations, and creative partnerships.
                </p>
                </div>
            </div>
        </div>
    )
}