import * as styles from './CostaaCard.module.scss'

import { forwardRef } from 'react'

import cardFrame from '../../assets/cardFrame.png'

const CostaaCard = forwardRef(function ({ details }, ref) {
    return (
        <div
            className={styles.card}
            ref={ref}
        >
            <img
                src={cardFrame}
                alt="card frame"
            />
            <img
                src={details.img}
                alt="costaan"
            />
            <div className={styles.contentContainer}>
                <h1>{details.department}</h1>
                <h2>{details.name}</h2>
                <p>{details.desc}</p>
            </div>
        </div>
    )
})

export default CostaaCard