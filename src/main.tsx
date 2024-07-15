import { Canvas } from '@react-three/fiber'
import { Fullscreen } from '@react-three/uikit'
import { Route, Switch } from 'wouter'
import { FiberDemo } from './pages/demo/fiber'
import { UikitDemo } from './pages/demo/uikit'
import { Index } from './pages'

/** Example from {@link https://docs.pmnd.rs/react-three-fiber/getting-started/introduction} */
export const Main = () => (
  <Canvas gl={{ localClippingEnabled: true }}>
    <Fullscreen flexDirection="row" padding={10} gap={10}>
      <Switch>
        <Route path="/demo/fiber" component={FiberDemo} />
        <Route path="/demo/uikit" component={UikitDemo} />
        <Route path="/" component={Index} />
      </Switch>
    </Fullscreen>
  </Canvas>
)
