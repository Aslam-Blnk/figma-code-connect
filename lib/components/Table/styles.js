module.exports = ({ theme, transitionColorsStyles, h4Styles }) => ({
  '.table-container': {
    position: 'relative',
    width: '100%',
    overflow: 'auto',
    backgroundColor: theme('backgroundColor.default'),
  },
  '.table-rounded': {
    borderRadius: '1rem',
    border: `1px solid ${theme('borderColor.default')}`,
    /* Row Padding for rounded table */
    '& thead th:first-of-type': {
      paddingLeft: '0.75rem',
    },
    '& thead th:last-of-type': {
      paddingRight: '0.75rem',
    },
    '& tbody td:first-of-type': {
      paddingLeft: '0.75rem',
    },
    '& tbody td:last-of-type': {
      paddingRight: '0.75rem',
    },
  },
  table: {
    position: 'relative',
    width: '100%',
  },
  tr: {
    padding: '0 0.5rem',
    borderBottom: `1px solid ${theme('borderColor.default')}`,
    ...transitionColorsStyles(theme),
  },
  tbody: {
    '& tr:hover': {
      backgroundColor: theme('backgroundColor.accent.gray-light'),
    },
    '& tr[data-state="selected"]': {
      backgroundColor: theme('backgroundColor.accent.gray-light'),
    },
    '& > tr:last-child': {
      borderWidth: '0',
    },
    td: {
      padding: '0 0.5rem',
    },
  },
  tfoot: {
    borderTopWidth: '1px',
    borderColor: theme('borderColor.default'),
    '& > tr:last-child': {
      borderBottomWidth: '0',
    },
  },
  th: {
    height: '2.25rem',
    minHeight: '2.25rem',
    padding: '0 0.5rem',
    verticalAlign: 'middle',
    ...h4Styles(theme),
    color: theme('textColor.subtle'),
  },
  /* Row Padding for default table */
  '.table-default': {
    '& thead th:first-of-type': {
      paddingLeft: '1rem',
      [`@media (min-width: ${theme('screens.sm')})`]: {
        paddingLeft: '1.25rem',
      },
    },
    '& thead th:last-of-type': {
      paddingRight: '1rem',
      [`@media (min-width: ${theme('screens.sm')})`]: {
        paddingLeft: '1.25rem',
      },
    },
    '& tbody td:first-of-type': {
      paddingLeft: '1rem',
      [`@media (min-width: ${theme('screens.sm')})`]: {
        paddingLeft: '1.25rem',
      },
    },
    '& tbody td:last-of-type': {
      paddingRight: '1rem',
      [`@media (min-width: ${theme('screens.sm')})`]: {
        paddingLeft: '1.25rem',
      },
    },
  },
  '.table-sort': {
    color: theme('colors.icon.subtle'),
    backgroundColor: theme('backgroundColor.default'),
    border: `1px dashed ${theme('borderColor.default')}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    padding: '0.25rem',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    '&:focus-visible': {
      outlineOffset: '0px',
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
    },
    '& svg, & .mui-icon': {
      height: '0.75rem',
      minHeight: '0.75rem',
      width: '0.75rem',
      minWidth: '0.75rem',
      fontSize: '0.75rem',
    },
    '&[data-state="selected"]': {
      borderStyle: 'solid',
    },
  },
})
