import * as styles from './CostaaCard.module.scss'

import { useRef } from 'react'

import cardFrame from '../../assets/cardFrame.png'

export default function CostaaCard({ details }) {
    return (
        <div
            className={styles.card}
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
}