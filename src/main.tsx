import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { Route, Switch } from 'wouter'

import { FiberDemo } from './pages/demo/fiber'
import { UikitDemo } from './pages/demo/uikit'
import { XRDemo } from './pages/demo/xr'
import { Index } from './pages'

const store = createXRStore()

export const Main = () => (
  <>
    <button type="button" onClick={() => store.enterVR()}>Enter VR</button>
    <button type="button" onClick={() => store.enterAR()}>Enter AR</button>
    <Canvas
      // frameloop="demand"
      gl={{ localClippingEnabled: true }}
      style={{ height: '100dvh', touchAction: 'none' }}
    >
      <XR store={store}>
        <Environment preset="city" />
        <Switch>
          <Route path="/demo/fiber" component={FiberDemo} />
          <Route path="/demo/uikit" component={UikitDemo} />
          <Route path="/demo/xr" component={XRDemo} />
          <Route path="/" component={Index} />
        </Switch>
      </XR>
    </Canvas>
  </>
)
