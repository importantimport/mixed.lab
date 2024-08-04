import { Text } from '@react-three/uikit'
// import { colors } from '@react-three/uikit-default'

interface Props {
  children: string
}

/** @see {@link https://ui.shadcn.com/docs/components/typography#h1} */
export const H1 = ({ children }: Props) => (
  <Text
    fontSize={36}
    fontWeight={800}
    letterSpacing={-0.4}
    lg={{ fontSize: 48, lineHeight: 48 }}
    lineHeight={40}
  >
    {children}
  </Text>
)

/** @see {@link https://ui.shadcn.com/docs/components/typography#h2} */
export const H2 = ({ children }: Props) => (
  <Text
    // borderBottomWidth={1}
    // borderColor={colors.border}
    fontSize={30}
    fontWeight={600}
    letterSpacing={-0.4}
    lineHeight={36}
    paddingBottom={8}
  >
    {children}
  </Text>
)
