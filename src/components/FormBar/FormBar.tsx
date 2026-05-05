import {
  BannerContent,
  BannerContentWrapper,
  BannerRoot,
} from '@/components/Banner'
import { Button } from '@/components/Button'
import { FormBarContent, FormBarRoot } from '@/components/FormBar'

type FormBarProps = {
  isErrored?: boolean
  shake?: boolean
}

export const formBar = ({
  shake = false,
  isErrored = false,
}: FormBarProps = {}) => (
  <FormBarRoot>
    <FormBarContent className={shake ? 'animate-shake' : undefined}>
      <BannerRoot
        variant="inline"
        bannerIntent={isErrored ? 'negative' : 'highlight'}
      >
        <BannerContentWrapper>
          <span className="mui-icon material-symbols-rounded">info</span>
          <BannerContent
            bannerContent={
              isErrored
                ? 'Some fields have errors'
                : 'You have unsaved changes.'
            }
          />
        </BannerContentWrapper>
      </BannerRoot>
      <div className="ml-auto flex items-center gap-4">
        <Button variant="neutral">Discard changes</Button>
        <Button variant="brand" disabled={isErrored}>
          Save changes
        </Button>
      </div>
    </FormBarContent>
  </FormBarRoot>
)
