import backgroundImage from 'images/bg.svg';

export const globalStyles = {
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
    minHeight: '100vh',
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
