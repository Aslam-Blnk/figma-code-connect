import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      {...props}
      position="bottom-right"
      icons={{
        success: (
          <span className="mui-icon material-symbols-rounded filled">
            check_circle
          </span>
        ),
        info: (
          <span className="mui-icon material-symbols-rounded filled">info</span>
        ),
        warning: (
          <span className="mui-icon material-symbols-rounded filled">
            warning
          </span>
        ),
        error: (
          <span className="mui-icon material-symbols-rounded filled">
            error
          </span>
        ),
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'toast-base',
        },
      }}
    />
  )
}

export { Toaster }
