import { useState } from 'react'

import CostaaCard from './components/CostaaCard/CostaaCard';

import * as styles from './App.module.scss'
import topHUDImage from './assets/TopHUD.png'
import costaa1 from './assets/costaaPic1.png'

export default function App() {
  const [costaaIndex, setCostaaIndex] = useState(0);

  const list = [{
    'name': "Vedant Vyas",
    'img': costaa1,
    'desc': 'Lorem ipsum dolor sit amet consectetur. Pharetra dui fringilla blandit sit. Dapibus feugiat aenean amet morbi tincidunt facilisis ornare in. Aliquet ac a lectus a. Lectus nisi praesent semper pharetra lorem. Dignissim nisi pellentesque vitae condimentum id gravida nulla cursus sit. Cras vulputate porttitor senectus sed bibendum urna vitae viverra. Nibh neque quis commodo pretium quam in. Leo tincidunt turpis a tempor lorem tristique vitae malesuada. Ultrices quis consectetur luctus semper gravida. Ultrices nec non nunc et at imperdiet pulvinar amet. Adipiscing sapien duis et sit scelerisque. Facilisi et mattis orci neque nunc porta leo pretium dignissim. Maecenas id aliquam auctor eget arcu magna. Semper lectus nibh nunc laoreet mi viverra convallis posuere massa. In massa at ornare scelerisque aenean. Adipiscing in eleifend tortor integer rhoncus pulvinar feugiat. Condimentum justo volutpat dictum in ut vitae diam id turpis.',
    'department': 'Department of Visual Media'
  }]

  return (
    <main>
      <img
        className={styles.topHUD}
        src={topHUDImage}
        alt="top hud"
      />
      <CostaaCard details={list[costaaIndex]} />
    </main>
  )
}