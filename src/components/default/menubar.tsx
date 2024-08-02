/** From {@link https://github.com/pmndrs/uikit/blob/main/packages/kits/default/src/menubar.tsx} */

import type { ComponentInternals, ContainerProperties } from '@react-three/uikit'
import type { ReactNode, RefAttributes } from 'react'

import { Container, DefaultProperties } from '@react-three/uikit'
import { borderRadius, colors } from '@react-three/uikit-default'
import { forwardRef } from 'react'

export interface MenubarMenuProperties { children?: ReactNode }

export function MenubarMenu({ children }: MenubarMenuProperties) {
  return <>{children}</>
}

export type MenubarProperties = ContainerProperties

export const Menubar: (props: MenubarProperties & RefAttributes<ComponentInternals>) => ReactNode = forwardRef(
  (props, ref) => {
    return (
      <Container
        alignItems="center"
        backgroundColor={colors.background}
        borderRadius={borderRadius.sm}
        borderWidth={1}
        flexDirection="row"
        gap={4}
        height={40}
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
        alignItems="center"
        borderRadius={borderRadius.md}
        cursor="pointer"
        flexDirection="row"
        hover={{ backgroundColor: colors.accent }}
        paddingX={12}
        paddingY={6}
        ref={ref}
        {...props}
      >
        <DefaultProperties fontSize={14} fontWeight="medium" lineHeight={20}>
          {children}
        </DefaultProperties>
      </Container>
    )
  })
