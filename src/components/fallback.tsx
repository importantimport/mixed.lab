import { useProgress } from '@react-three/drei'
import { Progress } from '@react-three/uikit-default'

export const Fallback = () => {
  const { progress } = useProgress()

  return (
    <Progress value={progress} width={200} />
  )
}
