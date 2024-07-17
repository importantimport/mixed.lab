import { Canvas } from '@react-three/fiber'
import { Fullscreen } from '@react-three/uikit'
import { Route, Switch } from 'wouter'
import { XR, createXRStore } from '@react-three/xr'

import { FiberDemo } from './pages/demo/fiber'
import { UikitDemo } from './pages/demo/uikit'
import { XRDemo } from './pages/demo/xr'
import { Index } from './pages'

const store = createXRStore()

export const Main = () => (
  <Canvas gl={{ localClippingEnabled: true }}>
    <XR store={store}>
      <Fullscreen flexDirection="row" padding={10} gap={10}>
        <Switch>
          <Route path="/demo/fiber" component={FiberDemo} />
          <Route path="/demo/uikit" component={UikitDemo} />
          <Route path="/demo/xr" component={XRDemo} />
          <Route path="/" component={Index} />
        </Switch>
      </Fullscreen>
    </XR>
  </Canvas>
)
