import React from 'react'
import style from './Body5.module.css'
import Plant3 from '../../../public/images/Plant3.png'
const Body5 = () => {
    return (
        <div className={style.outerContainer1}>
            <img src={Plant3} />
            <div className={style.textArea1}>
                <h2>We have made the beauty of plants one of the most beautiful features in your home.
                </h2>
                <p>A cozy home is a home that is decorated with the freshness of green and fresh plants</p>
            </div>

        </div>
    )
}

export default Body5