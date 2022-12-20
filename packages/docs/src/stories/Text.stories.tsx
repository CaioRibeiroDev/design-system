import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste nemo repudiandae sint nisi vel cumque officia nostrum assumenda quam distinctio, incidunt velit soluta corrupti aliquid non. Et sint minima ex.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
