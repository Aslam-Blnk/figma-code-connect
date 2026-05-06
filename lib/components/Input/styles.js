module.exports = ({ theme, transitionColorsStyles, textContentStyles }) => ({
  /* Input container wrapper */
  '.input-container-wrapper': {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    borderRadius: '0.75rem',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    ...transitionColorsStyles(theme),
    '&:focus-within:not(.disabled)': {
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
      outlineOffset: '0px',
    },
    '&[aria-invalid="true"]:not(:focus-within):not(.disabled)': {
      outline: `1px solid ${theme('outlineColor.negative-bold')}`,
      outlineOffset: '0px',
    },
    '&.disabled': {
      cursor: 'not-allowed',
    },
    '&:not(.disabled):not(:focus-within)[data-valid="true"]': {
      outline: `1px solid ${theme('outlineColor.positive-bold')}`,
      outlineOffset: '0px',
    },
  },
  /* Input container */
  '.input-container': {
    position: 'relative',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: '0.75rem',
    border: `1px solid ${theme('borderColor.bold')}`,
    backgroundColor: theme('backgroundColor.default'),
    color: theme('textColor.subtler'),
    ...transitionColorsStyles(theme),
    '&:focus-within': {
      backgroundColor: theme('backgroundColor.default'),
      color: theme('textColor.subtle'),
    },
    '&.disabled': {
      cursor: 'not-allowed',
      color: theme('textColor.interactive.disabled'),
      borderColor: theme('borderColor.interactive.disabled'),
    },
    '&.disabled .separator': {
      backgroundColor: theme('borderColor.interactive.disabled'),
    },
    '&.disabled > *': {
      cursor: 'not-allowed',
      color: theme('textColor.interactive.disabled'),
      borderColor: theme('borderColor.interactive.disabled'),
    },
    '&:hover:not(.disabled)': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
    },
    '&:hover:not(.disabled) .input': {
      color: theme('textColor.subtle'),
    },
    '&.disabled .input-leading-icon': {
      color: theme('colors.icon.disabled'),
    },
  },
  /* Leading and trailing */
  '.input-leading, .input-trailing': {
    color: 'inherit',
    ...transitionColorsStyles(theme),
    ...textContentStyles(theme),
  },
  '.input-leading-icon': {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme('colors.icon.subtle'),
    ...transitionColorsStyles(theme),
    '& svg, & .mui-icon': {
      color: 'inherit',
      height: '1rem',
      minHeight: '1rem',
      width: '1rem',
      minWidth: '1rem',
      fontSize: theme('fontSize.base'),
    },
  },
  '.input-trailing': {
    marginLeft: 'auto',
  },
  /* Input field */
  '.input-wrapper': {
    position: 'relative',
    display: 'flex',
    minHeight: '2.25rem',
    width: '100%',
    flex: '1 1 0%',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0rem 0.75rem',
    ...transitionColorsStyles(theme),
  },
  '.input': {
    width: '100%',
    backgroundColor: 'transparent',
    color: theme('textColor.subtle'),
    outline: '2px solid transparent',
    outlineOffset: '2px',
    ...transitionColorsStyles(theme),
    ...textContentStyles(theme),
    '&:disabled': {
      cursor: 'not-allowed',
      color: theme('textColor.interactive.disabled'),
    },
    '&::placeholder': {
      color: theme('textColor.subtler'),
    },
    '&:disabled::placeholder': {
      color: theme('textColor.interactive.disabled'),
    },
    '&::-webkit-search-cancel-button': {
      '-webkit-appearance': 'none',
      position: 'relative',
      display: 'flex',
      height: '1rem',
      minHeight: '1rem',
      width: '1rem',
      minWidth: '1rem',
      borderRadius: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.6667 4.27337L11.7267 3.33337L8.00004 7.06004L4.27337 3.33337L3.33337 4.27337L7.06004 8.00004L3.33337 11.7267L4.27337 12.6667L8.00004 8.94004L11.7267 12.6667L12.6667 11.7267L8.94004 8.00004L12.6667 4.27337Z' fill='%2371717A'/%3E%3C/svg%3E%0A")`,
    },
    '&:autofill, &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
      {
        backgroundColor: 'transparent!important',
        color: theme('textColor.subtle'),
        boxShadow: 'none!important',
        '-webkit-box-shadow': 'none!important',
        '-webkit-background-clip': 'text',
      },
  },
})
