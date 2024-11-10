import styles from './about.module.css';
export default function About(){
    return (
        <div className={styles.b1}>
            <div>
                <h1 className={styles.h1}>SPH!NX — Design Studio® is the online showcase of London based Digital Design & Art Director Javier Aguirre.</h1>
            </div>
            <div className={styles.record}>
                <div className={styles.record_item}>
                    <div className={styles.record__item__icon}>
                        ABOUT
                    </div>
                    <div className={styles.record_item_text}>
                    Independent Design Director with 18+ years of experience, specializing in crafting digital experiences that bring clarity and elegance to complex user journeys.

                    Currently based between the UK and the EU, I collaborate globally, working with clients across a range of industries.

                    My focus lies in bridging Design Direction, Branding and Technology to create digital experiences that resonate with audiences and drive meaningful engagement through meticulous attention to detail.
                    </div>
                </div>
                <div className={styles.record_item}>
                    <div className={styles.record__item__icon}>
                        ABOUT
                    </div>
                    <div className={styles.record_item_text}>
                    Independent Design Director with 18+ years of experience, specializing in crafting digital experiences that bring clarity and elegance to complex user journeys.

                    Currently based between the UK and the EU, I collaborate globally, working with clients across a range of industries.

                    My focus lies in bridging Design Direction, Branding and Technology to create digital experiences that resonate with audiences and drive meaningful engagement through meticulous attention to detail.
                    </div>
                </div>
            </div>
        </div>
    )
}