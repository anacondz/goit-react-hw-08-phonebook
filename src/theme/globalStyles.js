import backgroundImage from 'images/bg.svg';

export const globalStyles = {
  html: {
    background: 'linear-gradient(#000000, #000000)',
  },

  body: {
    background: `linear-gradient(#000000a0, #000000a0), url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },

  '#root': {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },

  main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
  },
};
