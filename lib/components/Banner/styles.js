module.exports = ({ theme, textContentStyles, textContentLightStyles }) => ({
  '.banner-root': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  '.banner-inline': {
    alignItems: 'flex-start',
    '& .banner-content-wrapper': {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem',
    },
    '& .banner-content-wrapper > svg, & .banner-content-wrapper > .mui-icon': {
      marginTop: '2px',
      height: '1rem',
      minHeight: '1rem',
      width: '1rem',
      minWidth: '1rem',
      color: 'inherit',
      fontSize: theme('fontSize.base'),
    },
    '& .banner-content': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    '& .banner-content p': {
      color: 'inherit',
      ...textContentStyles(theme),
    },
  },
  '.banner-block': {
    width: '100%',
    flex: '1 1 0%',
    borderRadius: '1rem',
    borderWidth: '1px',
    padding: '1rem',
    '&.banner-neutral': {
      borderColor: theme('borderColor.bold'),
      backgroundColor: theme('backgroundColor.default'),
    },
    '&.banner-highlight': {
      borderColor: theme('borderColor.brand.DEFAULT'),
      backgroundColor: theme('backgroundColor.brand.DEFAULT'),
    },
    '&.banner-positive': {
      borderColor: theme('borderColor.positive'),
      backgroundColor: theme('backgroundColor.positive'),
    },
    '&.banner-notice': {
      borderColor: theme('borderColor.notice'),
      backgroundColor: theme('backgroundColor.notice'),
    },
    '&.banner-negative': {
      borderColor: theme('borderColor.negative'),
      backgroundColor: theme('backgroundColor.negative'),
    },
    '& .banner-content-wrapper': {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
    },
    '& .banner-content': {
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.25rem',
    },
    '& .banner-content p:nth-of-type(1)': {
      color: theme('textColor.subtle'),
      ...textContentStyles(theme),
    },
    '& .banner-content p:nth-of-type(2)': {
      color: theme('textColor.subtler'),
      ...textContentLightStyles(theme),
    },
  },
  '.banner-neutral .banner-content-wrapper': {
    color: theme('textColor.subtle'),
  },
  '.banner-highlight .banner-content-wrapper': {
    color: theme('textColor.brand.DEFAULT'),
  },
  '.banner-positive .banner-content-wrapper': {
    color: theme('textColor.positive'),
  },
  '.banner-notice .banner-content-wrapper': {
    color: theme('textColor.notice'),
  },
  '.banner-negative .banner-content-wrapper': {
    color: theme('textColor.negative'),
  },
})
