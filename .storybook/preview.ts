import type { Preview } from '@storybook/react-vite'

import '../lib/font-faces.css'
import '../src/storybook.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
