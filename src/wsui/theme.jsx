import { Button, mergeThemes, withDefaultProps } from "@wsui/base";
import theme from "@wsui/theme-minimal";

import "./index.css";

export default mergeThemes(theme, {
  typography: {
    fonts: {
      // Inter: "/fonts/Inter.var.woff2",
      "Open Sans": {
        src: {
          normal:
            'url("/fonts/OpenSans-VariableFont_wdth,wght.ttf") format("truetype")',
          italic:
            'url("/fonts/OpenSans-Italix-VariableFont_wdth,wght.ttf") format("truetype")',
        },
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          color: "primary.main",
        },
      },
    },
    SiteLayout: {
      defaultProps: {
        components: {
          // Header,
          // Footer,
        },
      },
    },
    Header: {
      defaultProps: {
        color: "white",
        components: {
          HamburgerMenuToggle: withDefaultProps(Button, { variant: "primary" }),
        },
      },
    },
    MunicipioPostsModule: {
      defaultProps: {
        itemColor: "gray.100",
      },
    },
  },
});
