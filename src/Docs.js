import { useTheme } from '@material-ui/core/styles';
import { RedocStandalone } from 'redoc';

export default function Docs() {
  const theme = useTheme();

  const options = {
    nativeScrollbars: true,
    theme: {
      typography: {
        headings: {
          fontWeight: 700,
        },
      },
      schemaView: {
        linesColor: '#ffffff',
        typeNameColor: '#ffffff',
        typeTitleColor: '#ffffff',
        requireLabelColor: '#ffffff',
        nestingSpacing: '#DFC350',
      },
      colors: {
        primary: {
          main: theme.palette.primary.main,
          text: '#ffffff',
        },
        secondary: {
          main: 'red',
        },
        text: {
          primary: theme.palette.background.alt,
          secondary: '#000712',
        },

        http: {
          get: theme.palette.fill.success,
          post: theme.palette.fill.info,
        },
        success: {
          main: '#47FF94',
        },
        error: {
          main: theme.palette.fill.alert,
        },
      },
      menu: {
        backgroundColor: '#000E24',
        textColor: '#ffffff',
      },
      rightPanel: {
        backgroundColor: '#000712',
        borderLeft: '1px solid white',
      },
      logo: {
        maxHeight: '200px',
        maxWidth: '200px',
        gutter: '40px',
      },
    },
  };

  return <RedocStandalone specUrl='https://api.dropboxreads.com/spec' options={options} />;
}
