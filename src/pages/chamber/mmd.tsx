import { useLoader } from '@react-three/fiber'
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js'
// import { MMDAnimationHelper } from 'three/addons/animation/MMDAnimationHelper.js'
// import { Suspense } from 'react'

// import { Fallback } from '../../components/fallback'

const examples = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples'

const Miku = () => {
  const pmd = useLoader(MMDLoader, `${examples}/models/mmd/miku/miku_v2.pmd`)

  return (<primitive object={pmd} scale={0.1} />)
}

export const MMDChamber = () => {
  return (
    // <Suspense fallback={<Fallback />}>
    <Miku />
    // </Suspense>
  )
}
