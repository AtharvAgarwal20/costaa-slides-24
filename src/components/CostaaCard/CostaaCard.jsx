import * as styles from './CostaaCard.module.scss'

import { useRef } from 'react'

import cardFrame from '../../assets/cardFrame.png'
import { useGlitch } from 'react-powerglitch'

export default function CostaaCard({ details }) {
    const glitch = useGlitch({
        playMode: "manual",
        createContainers: true,
        hideOverflow: false,
        timing: {
            duration: 300,
            iterations: 1,
        },
        glitchTimeSpan: {
            start: 0,
            end: 1,
        },
        shake: {
            velocity: 15,
            amplitudeX: 0.2,
            amplitudeY: 0.2,
        },
        slice: {
            count: 20,
            velocity: 20,
            minHeight: 0.02,
            maxHeight: 0.15,
            hueRotate: true,
        },
        pulse: false,
    });

    return (
        <div
            className={styles.card}
            ref={glitch.ref}
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