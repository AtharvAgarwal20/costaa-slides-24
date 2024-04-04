import * as styles from './CostaaCard.module.scss'

import { forwardRef } from 'react'

import cardFrame from '../../assets/cardFrame2.png'

const CostaaCard = forwardRef(function ({ details, index, images }, ref) {
    const imageArray = images.map(image => {
        return (
            <img
                src={image}
                alt="costaan"
                key={images.indexOf(image)}
                style={index === images.indexOf(image) ? { opacity: '1' } : { opacity: '0' }}
            />
        )
    })
    return (
        <div
            className={styles.card}
            ref={ref}
        >
            <img
                src={cardFrame}
                alt="card frame"
            />
            <div
                className={styles.imageContainer}
            >
                {imageArray}
            </div>
            <div className={styles.contentContainer}>
                <h1>{details.name}</h1>
                <h2>{details.department}</h2>
            </div>
        </div>
    )
})

export default CostaaCard