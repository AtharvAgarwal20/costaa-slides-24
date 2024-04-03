import { useState } from 'react'

import CostaaCard from './components/CostaaCard/CostaaCard';
import { useGlitch } from 'react-powerglitch';

import * as styles from './App.module.scss'
import topHUDImage from './assets/TopHUD.png'
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
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'Department of Visual Media'
    },
    {
      'name': "Vedant Vyas",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'ADP'
    },
    {
      'name': "Vedant Vyas",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'Spons'
    },
    {
      'name': "Vedant Vyas",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'PEP'
    },
    {
      'name': "Vedant Vyas",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'PCrA'
    },
    {
      'name': "Vedant Vyas",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'RecNAcc'
    },
    {
      'name': "Vedant Vyas",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'Controls'
    },
    {
      'name': "Vedant Vyas",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'SU Prez'
    },
    {
      'name': "Vedant Vyas",
      'img': costaa1,
      'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit.',
      'department': 'SU Gensec'
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
      <img
        className={styles.topHUD}
        src={topHUDImage}
        alt="top hud"
      />
      <CostaaCard details={list[costaaIndex]} ref={ref} />
    </main>
  )
}