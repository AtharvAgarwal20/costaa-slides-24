import * as styles from './CostaaCard.module.scss'

import { useRef } from 'react'
import { useGlitch } from 'react-powerglitch'

export default function CostaaCard({ details }) {
    const glitch = useGlitch({
        playMode: "always",
        createContainers: true,
        hideOverflow: false,
        timing: {
            delay: 2000,
            duration: 9000,
            easing: "ease-in-out",
        },
        glitchTimeSpan: {
            start: 0.1,
            end: 0.2,
        },
        shake: {
            velocity: 15,
            amplitudeX: 0.01,
            amplitudeY: 0.01,
        },
        slice: {
            count: 6,
            velocity: 15,
            minHeight: 0.01,
            maxHeight: 0.05,
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