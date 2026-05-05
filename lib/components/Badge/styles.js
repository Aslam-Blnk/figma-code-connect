module.exports = ({ theme, textContentStyles, textNumberXSStyles }) => ({
  '.badge-base': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.375rem',
    textWrap: 'nowrap',
    borderRadius: '0.5rem',
    padding: '0.25rem 0.5rem',
    mixBlendMode: 'multiply',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    ...textContentStyles(theme),
    '& svg, & .mui-icon': {
      fontSize: theme('fontSize.base'),
    },
  },
  '.badge-dot': {
    height: '0.375rem',
    minHeight: '0.375rem',
    width: '0.375rem',
    minWidth: '0.375rem',
    borderRadius: '0.125rem',
  },
  '.badge-outline': {
    border: `1px solid ${theme('borderColor.bold')}`,
    backgroundColor: theme('backgroundColor.default'),
    color: theme('textColor.subtle'),
  },
  '.badge-count': {
    borderRadius: '0.375rem',
    padding: '1px 0.25rem',
    ...textNumberXSStyles(theme),
  },
  /* Outline */
  '.badge-neutral .badge-dot': {
    backgroundColor: theme('colors.icon.subtle'),
  },
  '.badge-brand .badge-dot': {
    backgroundColor: theme('colors.icon.brand'),
  },
  '.badge-positive .badge-dot': {
    backgroundColor: theme('colors.icon.positive'),
  },
  '.badge-notice .badge-dot': {
    backgroundColor: theme('colors.icon.notice'),
  },
  '.badge-negative .badge-dot': {
    backgroundColor: theme('colors.icon.negative'),
  },
  /* Flat */
  '.badge-flat': {
    '&.badge-neutral': {
      backgroundColor: theme('backgroundColor.accent.gray'),
      color: theme('textColor.subtle'),
    },
    '&.badge-brand': {
      backgroundColor: theme('backgroundColor.brand.DEFAULT'),
      color: theme('textColor.brand.DEFAULT'),
    },
    '&.badge-positive': {
      backgroundColor: theme('backgroundColor.positive'),
      color: theme('textColor.positive'),
    },
    '&.badge-notice': {
      backgroundColor: theme('backgroundColor.notice'),
      color: theme('textColor.notice'),
    },
    '&.badge-negative': {
      backgroundColor: theme('backgroundColor.negative'),
      color: theme('textColor.negative'),
    },
  },
  // svg color
  '.badge-neutral svg, .badge-neutral .mui-icon': {
    color: theme('colors.icon.subtle'),
  },
  '.badge-brand svg, .badge-brand .mui-icon': {
    color: theme('colors.icon.brand'),
  },
  '.badge-positive svg, .badge-positive .mui-icon': {
    color: theme('colors.icon.positive'),
  },
  '.badge-notice svg, .badge-notice .mui-icon': {
    color: theme('colors.icon.notice'),
  },
  '.badge-negative svg, .badge-negative .mui-icon': {
    color: theme('colors.icon.negative'),
  },
})
