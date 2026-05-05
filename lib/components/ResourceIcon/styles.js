const accentVariant = (theme, accent) => ({
  borderColor: theme(`borderColor.accent.${accent}`),
  backgroundColor: theme(`backgroundColor.accent.${accent}`),
  color: theme(`colors.icon-accent.${accent}`),
  '&::after': {
    backgroundColor: theme(`backgroundColor.accent.${accent}-intense`),
    opacity: 0.6,
  },
})

const nonAccentVariant = (
  theme,
  variant,
  bgColor = undefined,
  borderColor = undefined
) => ({
  borderColor: theme(borderColor ?? `borderColor.${variant}`),
  backgroundColor: theme(bgColor ?? `backgroundColor.${variant}`),
  color: theme(`colors.icon.${variant}`),
  '&::after': {
    backgroundColor: theme(`backgroundColor.${variant}-intense`),
    opacity: 0.1,
  },
})

module.exports = (theme) => ({
  '.resource-icon-container': {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '0.75rem',
    mixBlendMode: 'multiply',
  },
  '.resource-icon-default': {
    borderRadius: '0.5rem',
    padding: '0.25rem',
    height: '1.5rem',
    minHeight: '1.5rem',
    width: '1.5rem',
    minWidth: '1.5rem',
    '& svg, & .mui-icon': {
      height: '1rem',
      minHeight: '1rem',
      width: '1rem',
      minWidth: '1rem',
      fontSize: theme('fontSize.base'),
      color: 'inherit',
    },
  },
  '.resource-icon-large': {
    borderRadius: '0.75rem',
    borderWidth: '1px',
    padding: '0.5rem',
    height: '2.25rem',
    minHeight: '2.25rem',
    width: '2.25rem',
    minWidth: '2.25rem',
    '& svg, & .mui-icon': {
      height: '1.25rem',
      minHeight: '1.25rem',
      width: '1.25rem',
      minWidth: '1.25rem',
      fontSize: theme('fontSize.xl'),
      color: 'inherit',
      overflow: 'visible',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '1rem',
      top: '1rem',
      zIndex: '-1',
      height: '1.5rem',
      minHeight: '1.5rem',
      width: '1.5rem',
      minWidth: '1.5rem',
      borderRadius: '100%',
    },
  },
  /* Neutral */
  '.resource-icon-neutral': {
    borderColor: theme('borderColor.default'),
    backgroundColor: theme('backgroundColor.accent.gray'),
    color: theme('colors.icon.subtle'),
    '&::after': {
      backgroundColor: theme('backgroundColor.accent.gray-intense'),
      opacity: 0.6,
    },
  },

  '.resource-icon-brand': nonAccentVariant(
    theme,
    'brand',
    'backgroundColor.brand.DEFAULT',
    'borderColor.brand.DEFAULT'
  ),
  '.resource-icon-positive': nonAccentVariant(theme, 'positive'),
  '.resource-icon-notice': nonAccentVariant(theme, 'notice'),
  '.resource-icon-negative': nonAccentVariant(theme, 'negative'),
  '.resource-icon-lime': accentVariant(theme, 'lime'),
  '.resource-icon-violet': accentVariant(theme, 'violet'),
  '.resource-icon-amber': accentVariant(theme, 'amber'),
  '.resource-icon-indigo': accentVariant(theme, 'indigo'),
  '.resource-icon-teal': accentVariant(theme, 'teal'),
})
