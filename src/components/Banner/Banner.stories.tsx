import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  BannerContent,
  BannerContentWrapper,
  BannerRoot,
} from '@/components/Banner'
import { LinkAnchorButton } from '@/components/LinkButton'
import { ResourceIcon } from '@/components/ResourceIcon'

const meta = {
  title: 'Design System/Components/Banner',
  component: BannerRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['block', 'inline'],
      description: 'The variant of the banner',
    },
    bannerIntent: {
      control: {
        type: 'select',
      },
      options: ['neutral', 'highlight', 'positive', 'notice', 'negative'],
      description: 'The intent of the banner',
    },
    isDismissible: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the banner is dismissible',
    },
    afterDismiss: {
      action: 'dismissed',
      description: 'Callback fired after the banner is dismissed',
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof BannerRoot>

export default meta
type Story = StoryObj<typeof BannerRoot>

export const NeutralBlockBanner: Story = {
  args: {
    variant: 'block',
    bannerIntent: 'neutral',
    children: (
      <>
        <BannerContentWrapper>
          <ResourceIcon resourceIconColor="neutral" size="large">
            <span className="mui-icon material-symbols-rounded">info</span>
          </ResourceIcon>
          <BannerContent
            bannerContent="{content}"
            bannerDescription="{description}"
          />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}

export const DismissibleNeutralBlockBanner: Story = {
  args: {
    variant: 'block',
    bannerIntent: 'neutral',
    isDismissible: true,
    afterDismiss() {
      alert('Banner dismissed!')
    },
    children: (
      <>
        <BannerContentWrapper>
          <ResourceIcon resourceIconColor="neutral" size="large">
            <span className="mui-icon material-symbols-rounded">info</span>
          </ResourceIcon>
          <BannerContent
            bannerContent="{content}"
            bannerDescription="{description}"
          />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}

export const HighlightBlockBanner: Story = {
  args: {
    variant: 'block',
    bannerIntent: 'highlight',
    children: (
      <>
        <BannerContentWrapper>
          <ResourceIcon resourceIconColor="brand" size="large">
            <span className="mui-icon material-symbols-rounded">info</span>
          </ResourceIcon>
          <BannerContent
            bannerContent="{content}"
            bannerDescription="{description}"
          />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}

export const PositiveBlockBanner: Story = {
  args: {
    variant: 'block',
    bannerIntent: 'positive',
    children: (
      <>
        <BannerContentWrapper>
          <ResourceIcon resourceIconColor="positive" size="large">
            <span className="mui-icon material-symbols-rounded">
              check_circle
            </span>
          </ResourceIcon>
          <BannerContent
            bannerContent="{content}"
            bannerDescription="{description}"
          />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}

export const NoticeBlockBanner: Story = {
  args: {
    variant: 'block',
    bannerIntent: 'notice',
    children: (
      <>
        <BannerContentWrapper>
          <ResourceIcon resourceIconColor="notice" size="large">
            <span className="mui-icon material-symbols-rounded">warning</span>
          </ResourceIcon>
          <BannerContent
            bannerContent="{content}"
            bannerDescription="{description}"
          />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}

export const NegativeBlockBanner: Story = {
  args: {
    variant: 'block',
    bannerIntent: 'negative',
    children: (
      <>
        <BannerContentWrapper>
          <ResourceIcon resourceIconColor="negative" size="large">
            <span className="mui-icon material-symbols-rounded">error</span>
          </ResourceIcon>
          <BannerContent
            bannerContent="{content}"
            bannerDescription="{description}"
          />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}

export const NeutralInlineBanner: Story = {
  args: {
    variant: 'inline',
    bannerIntent: 'neutral',
    children: (
      <>
        <BannerContentWrapper>
          <span className="mui-icon material-symbols-rounded">info</span>
          <BannerContent bannerContent="{content}" />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}

export const HighlightInlineBanner: Story = {
  args: {
    variant: 'inline',
    bannerIntent: 'highlight',
    children: (
      <>
        <BannerContentWrapper>
          <span className="mui-icon material-symbols-rounded">info</span>
          <BannerContent bannerContent="{content}" />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}

export const PositiveInlineBanner: Story = {
  args: {
    variant: 'inline',
    bannerIntent: 'positive',
    children: (
      <>
        <BannerContentWrapper>
          <span className="mui-icon material-symbols-rounded">
            check_circle
          </span>
          <BannerContent bannerContent="{content}" />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}

export const NoticeInlineBanner: Story = {
  args: {
    variant: 'inline',
    bannerIntent: 'notice',
    children: (
      <>
        <BannerContentWrapper>
          <span className="mui-icon material-symbols-rounded">warning</span>
          <BannerContent bannerContent="{content}" />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}

export const NegativeInlineBanner: Story = {
  args: {
    variant: 'inline',
    bannerIntent: 'negative',
    children: (
      <>
        <BannerContentWrapper>
          <span className="mui-icon material-symbols-rounded">error</span>
          <BannerContent bannerContent="{content}" />
        </BannerContentWrapper>
        <LinkAnchorButton variant="neutral">Link</LinkAnchorButton>
      </>
    ),
  },
}
