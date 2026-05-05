const plugin = require('tailwindcss/plugin')

const badgeStyles = require('./components/Badge/styles.js')
const bannerStyles = require('./components/Banner/styles.js')
const buttonStyles = require('./components/Button/styles.js')
const cardStyles = require('./components/Card/styles.js')
const checkboxStyles = require('./components/Checkbox/styles.js')
const commandStyles = require('./components/Command/styles.js')
const dateRangePickerStyles = require('./components/DateRangePicker/styles.js')
const dialogStyles = require('./components/Dialog/styles.js')
const drawerStyles = require('./components/Drawer/styles.js')
const emptyStateStyles = require('./components/EmptyState/styles.js')
const filterStyles = require('./components/Filter/styles.js')
const formBarStyles = require('./components/FormBar/styles.js')
const inputStyles = require('./components/Input/styles.js')
const inputFileStyles = require('./components/InputFile/styles.js')
const labelStyles = require('./components/Label/styles.js')
const linkButtonStyles = require('./components/LinkButton/styles.js')
const popoverStyles = require('./components/Popover/styles.js')
const progressStyles = require('./components/Progress/styles.js')
const radioStyles = require('./components/Radio/styles.js')
const resourceIconStyles = require('./components/ResourceIcon/styles.js')
const resourceTagStyles = require('./components/ResourceTag/styles.js')
const separatorStyles = require('./components/Separator/styles.js')
const sheetStyles = require('./components/Sheet/styles.js')
const sidebarStyles = require('./components/Sidebar/styles.js')
const skeletonStyles = require('./components/Skeleton/styles.js')
const spinnerStyles = require('./components/Spinner/styles.js')
const switchStyles = require('./components/Switch/styles.js')
const tableStyles = require('./components/Table/styles.js')
const tabsStyles = require('./components/Tabs/styles.js')
const tagStyles = require('./components/Tag/styles.js')
const toasterStyles = require('./components/Toaster/styles.js')
const toggleFilterStyles = require('./components/ToggleFilter/styles.js')
const tooltipStyles = require('./components/Tooltip/styles.js')

const animateIn = (theme) => ({
  animationName: 'enter',
  animationDuration: theme('animationDuration.DEFAULT'),
  '--tw-enter-opacity': 'initial',
  '--tw-enter-scale': 'initial',
  '--tw-enter-rotate': 'initial',
  '--tw-enter-translate-x': 'initial',
  '--tw-enter-translate-y': 'initial',
})

const animateOut = (theme) => ({
  animationName: 'exit',
  animationDuration: theme('animationDuration.DEFAULT'),
  '--tw-exit-opacity': 'initial',
  '--tw-exit-scale': 'initial',
  '--tw-exit-rotate': 'initial',
  '--tw-exit-translate-x': 'initial',
  '--tw-exit-translate-y': 'initial',
})

const transitionAllStyles = (theme) => ({
  transitionProperty: theme('transitionProperty.all'),
  transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
  transitionDuration: theme('transitionDuration.DEFAULT'),
})
const transitionColorsStyles = (theme) => ({
  transitionProperty: theme('transitionProperty.colors'),
  transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
  transitionDuration: theme('transitionDuration.DEFAULT'),
})

const transitionTransformStyles = (theme) => ({
  transitionProperty: theme('transitionProperty.transform'),
  transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
  transitionDuration: theme('transitionDuration.DEFAULT'),
})

const favoritHeadingStyles = {
  fontVariantNumeric: 'lining-nums proportional-nums slashed-zero',
  fontFeatureSettings: "'ss02' on, 'ss03' on, 'ss04' on, 'ss05' on, 'liga' off",
}

const h1Styles = (theme) => ({
  fontFamily: theme('fontFamily.heading'),
  fontSize: theme('fontSize.xl'),
  fontWeight: theme('fontWeight.medium'),
  lineHeight: theme('lineHeight.5'),
  letterSpacing: theme('letterSpacing.denser'),
  ...favoritHeadingStyles,
})
const h2Styles = (theme) => ({
  fontFamily: theme('fontFamily.heading'),
  fontSize: theme('fontSize.lg'),
  fontWeight: theme('fontWeight.medium'),
  lineHeight: theme('lineHeight.5'),
  letterSpacing: theme('letterSpacing.dense'),
  ...favoritHeadingStyles,
})
const h3Styles = (theme) => ({
  fontFamily: theme('fontFamily.heading'),
  fontSize: theme('fontSize.base'),
  fontWeight: theme('fontWeight.medium'),
  lineHeight: theme('lineHeight.4'),
  ...favoritHeadingStyles,
})
const h4Styles = (theme) => ({
  fontFamily: theme('fontFamily.heading'),
  fontSize: theme('fontSize.sm'),
  fontWeight: theme('fontWeight.medium'),
  lineHeight: theme('lineHeight.4'),
  ...favoritHeadingStyles,
})

const textContentStyles = (theme) => ({
  fontFamily: theme('fontFamily.body'),
  fontSize: theme('fontSize.sm'),
  fontWeight: theme('fontWeight.medium'),
  lineHeight: theme('lineHeight.4'),
})
const textContentLightStyles = (theme) => ({
  fontFamily: theme('fontFamily.body'),
  fontSize: theme('fontSize.sm'),
  fontWeight: theme('fontWeight.normal'),
  lineHeight: theme('lineHeight.4'),
})
const textContentParagraphStyles = (theme) => ({
  fontFamily: theme('fontFamily.body'),
  fontSize: theme('fontSize.sm'),
  fontWeight: theme('fontWeight.normal'),
  lineHeight: theme('lineHeight.4'),
})
const textContentCaptionStrongStyles = (theme) => ({
  fontFamily: theme('fontFamily.body'),
  fontSize: theme('fontSize.xs'),
  fontWeight: theme('fontWeight.medium'),
  lineHeight: theme('lineHeight.2'),
})
const textContentCaptionStyles = (theme) => ({
  fontFamily: theme('fontFamily.body'),
  fontSize: theme('fontSize.xs'),
  fontWeight: theme('fontWeight.normal'),
  lineHeight: theme('lineHeight.2'),
})
const textContentLabelStyles = (theme) => ({
  fontFamily: theme('fontFamily.body'),
  fontSize: theme('fontSize.xs'),
  fontWeight: theme('fontWeight.semibold'),
  lineHeight: theme('lineHeight.2'),
  letterSpacing: theme('letterSpacing.sparse'),
})
const textContentLabelLightStyles = (theme) => ({
  fontFamily: theme('fontFamily.body'),
  fontSize: theme('fontSize.xs'),
  fontWeight: theme('fontWeight.normal'),
  lineHeight: theme('lineHeight.2'),
  letterSpacing: theme('letterSpacing.sparse'),
})
const textNumberXSStyles = (theme) => ({
  fontFamily: theme('fontFamily.number'),
  fontSize: theme('fontSize.xs'),
  fontWeight: theme('fontWeight.medium'),
  lineHeight: theme('lineHeight.2'),
})
const textNumberSMStyles = (theme) => ({
  fontFamily: theme('fontFamily.number'),
  fontSize: theme('fontSize.sm'),
  fontWeight: theme('fontWeight.medium'),
  lineHeight: theme('lineHeight.4'),
})
const textNumberXLStyles = (theme) => ({
  fontFamily: theme('fontFamily.number'),
  fontSize: theme('fontSize.xl'),
  fontWeight: theme('fontWeight.medium'),
  lineHeight: theme('lineHeight.5'),
})
const textNumber3XLStyles = (theme) => ({
  fontFamily: theme('fontFamily.number'),
  fontSize: theme('fontSize.3xl'),
  fontWeight: theme('fontWeight.medium'),
  lineHeight: theme('lineHeight.9'),
})

module.exports = plugin(({ addUtilities, addComponents, addBase, theme }) => {
  addBase({
    h1: h1Styles(theme),
    h2: h2Styles(theme),
    h3: h3Styles(theme),
    h4: h4Styles(theme),
    svg: {
      overflow: 'visible',
    },
    '.mui-icon': {
      overflow: 'hidden',
    },
    // scrollbars
    /* width */
    '::-webkit-scrollbar': {
      width: '0.875rem',
    },
    /* Track */
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    /* Handle */
    '::-webkit-scrollbar-thumb': {
      width: '0.375rem',
      borderRadius: '9999px',
      borderWidth: '4px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      backgroundColor: theme('backgroundColor.accent.gray'),
      backgroundClip: 'padding-box',
      mixBlendMode: 'multiply',
      '&:hover': {
        backgroundColor: theme('backgroundColor.accent.gray-intense'),
      },
    },
    '.material-symbols-rounded': {
      'font-variation-settings': '"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 24',
    },
    '.material-symbols-rounded.filled': {
      'font-variation-settings': '"FILL" 1,"wght" 400,"GRAD" 0,"opsz" 24',
    },
  })

  addUtilities({
    '.text-content': textContentStyles(theme),
    '.text-content-light': textContentLightStyles(theme),
    '.text-content-paragraph': textContentParagraphStyles(theme),
    '.text-content-caption-strong': textContentCaptionStrongStyles(theme),
    '.text-content-caption': textContentCaptionStyles(theme),
    '.text-content-label': textContentLabelStyles(theme),
    '.text-content-label-light': textContentLabelLightStyles(theme),
    '.text-number-xs': textNumberXSStyles(theme),
    '.text-number-sm': textNumberSMStyles(theme),
    '.text-number-xl': textNumberXLStyles(theme),
    '.text-number-3xl': textNumber3XLStyles(theme),
  })

  addComponents([
    badgeStyles({ theme, textContentStyles, textNumberXSStyles }),
    bannerStyles({ theme, textContentStyles, textContentLightStyles }),
    buttonStyles({
      theme,
      transitionAllStyles,
      transitionColorsStyles,
      textContentStyles,
    }),
    cardStyles(theme),
    checkboxStyles(theme),
    commandStyles({
      theme,
      transitionColorsStyles,
      textContentLabelStyles,
      textContentCaptionStrongStyles,
    }),
    dateRangePickerStyles({
      theme,
      textContentStyles,
      textNumberSMStyles,
      textContentLabelLightStyles,
    }),
    dialogStyles({
      theme,
      animateIn,
      animateOut,
      h2Styles,
      textContentParagraphStyles,
      transitionAllStyles,
    }),
    drawerStyles({ theme, h2Styles, textContentParagraphStyles }),
    emptyStateStyles({ theme, textContentStyles, textContentLightStyles }),
    filterStyles({ theme, transitionColorsStyles, textContentStyles }),
    formBarStyles({ theme, animateIn }),
    inputStyles({ theme, transitionColorsStyles, textContentStyles }),
    inputFileStyles({ theme }),
    labelStyles({ theme, textContentCaptionStrongStyles }),
    linkButtonStyles({ theme, transitionColorsStyles, textContentStyles }),
    popoverStyles({ theme, animateIn, animateOut }),
    progressStyles({ theme, transitionTransformStyles }),
    radioStyles({ theme, transitionColorsStyles }),
    resourceIconStyles(theme),
    resourceTagStyles({ theme, transitionAllStyles, textContentStyles }),
    separatorStyles(theme),
    sheetStyles({
      theme,
      animateIn,
      animateOut,
      h2Styles,
      textContentParagraphStyles,
      transitionAllStyles,
    }),
    sidebarStyles({
      theme,
      textContentLabelStyles,
      transitionColorsStyles,
      animateIn,
      animateOut,
      transitionAllStyles,
    }),
    skeletonStyles({ theme, transitionColorsStyles }),
    spinnerStyles(theme),
    switchStyles({
      theme,
      transitionColorsStyles,
      transitionTransformStyles,
    }),
    tableStyles({ theme, transitionColorsStyles, h4Styles }),
    tabsStyles({
      theme,
      transitionAllStyles,
      textContentStyles,
      transitionColorsStyles,
    }),
    tagStyles({ theme, textContentStyles }),
    toasterStyles({
      theme,
      textContentStyles,
      textContentLightStyles,
      animateIn,
      animateOut,
      buttonStyles: buttonStyles({
        theme,
        transitionAllStyles,
        transitionColorsStyles,
        textContentStyles,
      }),
    }),
    toggleFilterStyles({ theme, transitionColorsStyles, textContentStyles }),
    tooltipStyles({ theme, animateIn, animateOut }),
  ])
})
