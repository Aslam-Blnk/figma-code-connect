const optionItemStyles = {
  display: 'flex',
  cursor: 'pointer',
  userSelect: 'none',
  alignItems: 'center',
  padding: '0.125rem 0.5rem',
  width: '100%',
}

const optionListItemContentContainerStyles = ({
  theme,
  transitionColorsStyles,
}) => ({
  display: 'flex',
  flex: '1 1 0%',
  alignItems: 'center',
  gap: '0.75rem',
  borderRadius: '0.5rem',
  padding: '0.5rem',
  ...transitionColorsStyles(theme),
})

module.exports = ({
  theme,
  transitionColorsStyles,
  textContentLabelStyles,
  textContentCaptionStrongStyles,
}) => ({
  '.cmdk-root': {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: '1rem',
    backgroundColor: theme('backgroundColor.default'),
    '& [cmdk-group-heading]': {
      padding: '0.75rem 1rem 0.375rem 1rem',
      color: theme('textColor.subtle'),
      ...textContentLabelStyles(theme),
    },
    '& [cmdk-input-wrapper]': {
      display: 'flex',
      width: '100%',
      borderBottom: `1px solid ${theme('borderColor.default')}`,
      padding: '0.625rem',
    },
    '& [cmdk-group]': {
      paddingTop: '0.375rem',
      paddingBottom: '0.375rem',
    },
    '& [cmdk-action-list-group][cmdk-group]': {
      paddingTop: '0',
      paddingBottom: '0.25rem',
    },
    '& [cmdk-list]': {
      height: '20rem',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    '& [cmdk-empty]': {
      display: 'flex',
      height: '20rem',
      flex: '1 1 0%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& [cmdk-separator]': {
      height: '1px',
      minHeight: '1px',
      width: '100%',
      backgroundColor: theme('backgroundColor.separator'),
    },
    /* Action List Item */
    '& [cmdk-action-list-item]': {
      display: 'flex',
      cursor: 'pointer',
      userSelect: 'none',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.625rem 1rem',
      width: '100%',
    },
    '& [cmdk-action-list-item]:hover, & [cmdk-action-list-item]:focus, & [cmdk-action-list-item][data-selected="true"]':
      {
        backgroundColor: theme('backgroundColor.interactive.hover'),
      },
    /* Option List Item */
    '& [cmdk-option-list-item]': {
      ...optionItemStyles,
    },
    '& [cmdk-option-list-item]:hover [cmdk-option-list-item-content-container]':
      {
        backgroundColor: theme('backgroundColor.interactive.hover'),
      },
    '& [cmdk-option-list-item]:focus [cmdk-option-list-item-content-container]':
      {
        backgroundColor: theme('backgroundColor.interactive.hover'),
      },
    '& [cmdk-option-list-item][data-selected="true"] [cmdk-option-list-item-content-container]':
      {
        backgroundColor: theme('backgroundColor.interactive.hover'),
      },
    '& [cmdk-option-list-item-content-container]': {
      ...optionListItemContentContainerStyles({
        theme,
        transitionColorsStyles,
      }),
    },
    '& [cmdk-option-list-item-content-container][data-checked="true"]': {
      backgroundColor: theme('backgroundColor.interactive.activated'),
    },
    '& [cmdk-option-list-item-content-container]:hover': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
    },
    '& [cmdk-option-check]': {
      display: 'none',
      height: '1.25rem',
      minHeight: '1.25rem',
      width: '1.25rem',
      minWidth: '1.25rem',
      color: theme('colors.icon.brand'),
    },
    /* Multi Option List Item */
    '& [cmdk-multi-option-list-item]': {
      ...optionItemStyles,
    },
    '& [cmdk-multi-option-list-item]:hover [cmdk-multi-option-list-item-content-container]':
      {
        backgroundColor: theme('backgroundColor.interactive.hover'),
      },
    '& [cmdk-multi-option-list-item]:focus [cmdk-multi-option-list-item-content-container]':
      {
        backgroundColor: theme('backgroundColor.interactive.hover'),
      },
    '& [cmdk-multi-option-list-item][data-selected="true"] [cmdk-multi-option-list-item-content-container]':
      {
        backgroundColor: theme('backgroundColor.interactive.hover'),
      },
    '& [cmdk-multi-option-list-item-content-container]': {
      ...optionListItemContentContainerStyles({
        theme,
        transitionColorsStyles,
      }),
    },
    '& [cmdk-multi-option-list-item-content-container]:hover': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
    },
    '& [cmdk-multi-option-list-header]': {
      display: 'flex',
      flex: '1 1 0%',
      alignItems: 'center',
      gap: '0.75rem',
      borderBottom: `1px solid ${theme('borderColor.default')}`,
      backgroundColor: theme('backgroundColor.default'),
      padding: '0.5rem 1rem',
    },
    '& [cmdk-multi-option-list-heading]': {
      display: 'flex',
      flex: '1 1 0%',
      alignItems: 'center',
      gap: '0.5rem',
      color: theme('textColor.subtle'),
    },
    '& [cmdk-multi-option-list-heading] svg, & [cmdk-multi-option-list-heading] .mui-icon':
      {
        height: '1rem',
        minHeight: '1rem',
        width: '1rem',
        minWidth: '1rem',
        color: theme('colors.icon.subtle'),
        fontSize: theme('fontSize.base'),
      },
    '& [cmdk-multi-option-list-footer]': {
      display: 'flex',
      flex: '1 1 0%',
      alignItems: 'center',
      gap: '1rem',
      backgroundColor: theme('backgroundColor.default'),
      padding: '0.625rem',
    },
    '& [cmdk-multi-option-list-footer-text]': {
      paddingLeft: '0.5rem',
      color: theme('textColor.subtler'),
      ...textContentCaptionStrongStyles(theme),
    },
    '& [cmdk-multi-option-list-footer-actions]': {
      display: 'flex',
      flex: '1 1 0%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '0.5rem',
    },
    [`@media (max-width: ${theme('screens.sm')})`]: {
      '& [cmdk-list]': {
        height: 'auto',
      },
    },
  },
})
