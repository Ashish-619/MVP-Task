import React from 'react'
import style from './Body3.module.css'
import Plant2 from '../../../public/images/Plant2.png'

const Body3 = () => {
    return (
        <div>
            <div className={style.container} >
                <div className={style.textContainer}>
                    <h1>Make your home beautiful with plants</h1>
                </div>
                <img src={Plant2} />
            </div>
        </div>
    )
}

export default Body3