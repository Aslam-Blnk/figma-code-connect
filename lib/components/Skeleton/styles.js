// animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

module.exports = ({ theme }) => ({
  '.skeleton': {
    animation: theme('animation.pulse'),
    background: 'linear-gradient(90deg, #FAFAFA 0%, #F4F4F5 100%)',
    borderRadius: '9999px',
    '@keyframes pulse': theme('keyframes.pulse'),
  },
})
