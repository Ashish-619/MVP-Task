import React from 'react';
import style from './Body2.module.css';
import Flowerpot from '../../../public/images/Flowerpot.png'
import Bonsai from '../../../public/images/Bonsai.png'
import Plant3 from '../../../public/images/Plant3.png'

const Body2 = () => {
    return (
        <>
            <div className={style.body2Container}>
                <h1>New arrivals in this week</h1>
            </div>
            <div className={style.outerContainer}>
                <div className={style.flowerCard}>
                    <div className={style.flowerCardText}>
                        <p>Big Sale Product</p>
                        <h2>Plant for Interior Decoration</h2>
                        <p className={style.para}>Start From <b>$320</b></p>
                        <span>SHOP NOW</span>
                    </div>
                    <img src={Flowerpot} alt="Flower pot" />
                </div>
                <div className={style.rightPartition}>
                    <div className={style.pot1}>
                        <div className={style.pot1Text}>
                            <p>New Category</p>
                            <h2>Monsera</h2>
                            <span>SHOP NOW</span>
                        </div>
                        <img src={Bonsai} alt="Bonsai" />
                    </div>
                    <div className={style.pot2}>
                        <div className={style.pot2Text}>
                            <p>New Product</p>
                            <h2>Plant for Garden</h2>
                            <span>SHOP NOW</span>
                        </div>
                        <img src={Plant3} alt="Plant" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body2;
