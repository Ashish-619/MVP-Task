import React from 'react';
import style from './Body4.module.css';
import Plant2 from '../../../public/images/Plant2.png'
import Bag from '../../../public/images/bag.png'

const Body4 = ({ plants }) => {
    return (
        <div className={style.boxContainer}>
            {/* Map over the plants array to generate cards */}
            {plants.map((plant, index) => (
                <div key={index} className={style.card}>
                    <img className={style.mainImage} src={Plant2} alt='Plant' />
                    <div className={style.textArea}>
                        <p><b>{plant.name}</b></p>
                        <div className={style.priceContainer}>
                            <p>${plant.price}</p>
                            <div className={style.bagIconContainer}>
                                <img src={Bag} alt='Bag' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Body4;
