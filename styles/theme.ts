import { Card, Container, createTheme, Paper, rem, Select, ThemeIcon, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";
import type { MantineThemeOverride } from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

const themeOverride: MantineThemeOverride = createTheme({
  fontFamily: `
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif
  `,
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  spacing: {
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
  },

  primaryColor: 'blue',
  primaryShade: 2,
  
  headings: {
    sizes: {
      h1: { fontSize: rem(26) },
      h2: { fontSize: rem(22) },
      h3: { fontSize: rem(18) },
      h4: { fontSize: rem(16) },
      h5: { fontSize: rem(12) },
      h6: { fontSize: rem(10) },
    }
  },

  components: {
    /* Mantine component overrides */
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "var(--mantine-radius-default)",
        withBorder: true,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      defaultProps: {
        color: "transparent",
        size: "30px",
      }
    })
  },

  other: {
    style: "mantine",
  },

});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);