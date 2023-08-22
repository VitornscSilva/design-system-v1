import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@vitorsilva-dev-ui/react'
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/78030768?v=4',
    alt: 'Klever',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
