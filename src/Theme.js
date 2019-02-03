import { createMuiTheme } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const DEFAULT_SPACING = 8;

const palette = {
  common: {
    black: '#000',
    white: '#fff',
  },
  background: {
    paper: '#fff',
    default: '#fafafa',
  },
  primary: {
    light: 'rgba(141, 146, 189, 1)',
    main: 'rgba(36, 104, 188, 1)',
    dark: 'rgba(15, 70, 196, 1)',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff4081',
    main: '#f50057',
    dark: '#c51162',
    contrastText: '#fff',
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  button: {
    standard: '#dfdaf0',
  },
};

export default createMuiTheme({
  palette,
  spacing: {
    unit: DEFAULT_SPACING
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiDivider: {
      root: {
        margin: `0px ${DEFAULT_SPACING * 2}px`
      }
    },
    MuiSpeedDialAction: {
      button: {
        color: palette.primary.main,
        backgroundColor: palette.button.standard,
        '&:hover': {
          backgroundColor: emphasize(palette.button.standard, 0.15),
        },
      }
    },
    MuiChip: {
      root: {
        backgroundColor: palette.button.standard,
      },
      colorPrimary: {
        backgroundColor: palette.primary.light,
        '&:hover': {
          backgroundColor: emphasize(palette.primary.light, 0.15),
        },
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: palette.button.standard,
        color: palette.text.primary
      },
      containedPrimary: {
        backgroundColor: palette.primary.light,
        '&:hover': {
          backgroundColor: emphasize(palette.primary.light, 0.15),
        },
      }
    },
    MuiIconButton: {
      colorPrimary: {
        color: palette.primary.light
      }
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: palette.button.standard,
        color: palette.primary.main
      },
    }
  }
});
