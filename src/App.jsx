import { useState } from 'react'

import CostaaCard from './components/CostaaCard/CostaaCard';
import { useGlitch } from 'react-powerglitch';

import * as styles from './App.module.scss'
import topHUDImage from './assets/TopHUD.png'
import topHUDImage2 from './assets/topHUDNoLogo.png'
import logoNew from './assets/logoNew.png'
import dvm from './assets/dvm.png'
import costaa1 from './assets/costaaPic1.png'

export default function App() {
  const [costaaIndex, setCostaaIndex] = useState(0);

  const { ref, startGlitch } = useGlitch({
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

  const list = [
    {
      'name': "Vedant Vyas",
      'img': dvm,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'Department of Visual Media'
    },
    {
      'name': "Aarohi Uniyal",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'Department of Paper Evaluation and Presentation'
    },
    {
      'name': "Yash Choudhary",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'Department of Art, Design and Publicity'
    },
    {
      'name': "Sachika Lala",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'Department of Publications and Correspondence Apogee'
    },
    {
      'name': "Dharun R. Bail",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'Department of Controls'
    },
    {
      'name': "Tushar Vigh",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'Department of Reception and Accommodation'
    },
    {
      'name': "Hitansh Tanna",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'Department of Sponsorship and Marketing'
    },
    {
      'name': "Abhinav Lamba",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'General Secretary, Students’ Union'
    },
    {
      'name': "Sarthak Aggarwal",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'President, Students’ Union'
    }
  ]

  window.addEventListener('keyup', (event) => {
    let digit = parseInt(event.code[event.code.length - 1]) - 1
    if (digit !== NaN && digit >= 0 && digit < 10) {
      setCostaaIndex(digit)
      startGlitch()
    }
  })

  return (
    <main>
      <div className={styles.topHUD}>
        <img
          className={styles.topHUD}
          src={topHUDImage2}
          alt="top hud"
        />
        <img
          className={styles.topHUD}
          src={logoNew}
          alt="logo"
        />
      </div>
      <CostaaCard details={list[costaaIndex]} ref={ref} />
    </main>
  )
}