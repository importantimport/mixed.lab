import { Container, Text } from '@react-three/uikit'
import { Button, colors } from '@react-three/uikit-default'
import { ComponentPropsWithoutRef } from 'react'

const MainNav = (props: Omit<ComponentPropsWithoutRef<typeof Container>, 'children'>) => (
  <Container alignItems="center" flexDirection="row" gap={16} lg={{ gap: 24 }} {...props}>
    <Text fontSize={14} lineHeight={20} fontWeight="medium">
      Lorem
    </Text>
    <Text color={colors.mutedForeground} fontSize={14} lineHeight={20} fontWeight="medium">
      Ipsum
    </Text>
    <Text color={colors.mutedForeground} fontSize={14} lineHeight={20} fontWeight="medium">
      Dolor
    </Text>
    <Text color={colors.mutedForeground} fontSize={14} lineHeight={20} fontWeight="medium">
      Sit
    </Text>
  </Container>
)

export const Header = () => (
  <Container flexShrink={0} flexDirection="column" borderBottomWidth={1}>
    <Container height={64} alignItems="center" flexDirection="row" paddingX={16}>
      <MainNav marginX={24} />
      <Container marginLeft="auto" flexDirection="row" alignItems="center" gap={16}>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => window.open('https://github.com/importantimport/mixed.lab', '_blank')}
        >
          <Text>Source Code</Text>
        </Button>
      </Container>
    </Container>
  </Container>
)
