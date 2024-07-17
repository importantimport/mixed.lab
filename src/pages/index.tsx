// import { Link } from 'wouter'
import { Fullscreen } from '@react-three/uikit'
import { Header } from '../components/header'

export const Index = () => (
  <Fullscreen flexDirection="row" padding={10} gap={10}>
    <Header />
    {/* <h1>Mixed.Lab</h1>
    <ul>
      <li>
        <Link href="/demo/fiber">Fiber Demo</Link>
      </li>
      <li>
        <Link href="/demo/uikit">Uikit Demo</Link>
      </li>
    </ul> */}
  </Fullscreen>
)
