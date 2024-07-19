import type { XRStoreOptions } from '@react-three/xr'

export const options = {
  hand: {
    teleportPointer: true,
    rayPointer: { cursorModel: { color: 'black' } },
    touchPointer: { cursorModel: { color: 'black' } },
  },
  controller: { teleportPointer: true },
} as const satisfies XRStoreOptions
