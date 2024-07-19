/** From {@link https://github.com/pmndrs/uikit/blob/main/packages/kits/default/src/menubar.tsx} */

import { ComponentInternals, Container, ContainerProperties, DefaultProperties } from '@react-three/uikit'
import { ReactNode, RefAttributes, forwardRef } from 'react'
import { borderRadius, colors } from '@react-three/uikit-default'

export type MenubarMenuProperties = { children?: ReactNode }

export function MenubarMenu({ children }: MenubarMenuProperties) {
  return <>{children}</>
}

export type MenubarProperties = ContainerProperties

export const Menubar: (props: MenubarProperties & RefAttributes<ComponentInternals>) => ReactNode = forwardRef(
  (props, ref) => {
    return (
      <Container
        flexDirection="row"
        height={40}
        alignItems="center"
        gap={4}
        borderRadius={borderRadius.sm}
        borderWidth={1}
        backgroundColor={colors.background}
        padding={4}
        ref={ref}
        {...props}
      />
    )
  },
)

export type MenubarTriggerProperties = ContainerProperties

export const MenubarTrigger: (props: MenubarTriggerProperties & RefAttributes<ComponentInternals>) => ReactNode
  = forwardRef(({ children, ...props }, ref) => {
    // TODO: data-[state=open]:bg-accent data-[state=open]:text-accent-foreground
    return (
      <Container
        hover={{ backgroundColor: colors.accent }}
        flexDirection="row"
        alignItems="center"
        cursor="pointer"
        borderRadius={borderRadius.md}
        paddingY={6}
        paddingX={12}
        ref={ref}
        {...props}
      >
        <DefaultProperties fontSize={14} lineHeight={20} fontWeight="medium">
          {children}
        </DefaultProperties>
      </Container>
    )
  })
