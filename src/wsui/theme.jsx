import { mergeThemes } from "@wsui/base";
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
});
