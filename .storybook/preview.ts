import type { Preview } from "@storybook/vue3-vite";
import { themes } from "storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    docs: {
      theme: {
        ...themes.light,
        brandTitle: "Design System",
      },
    },
    backgrounds: {
      default: "Surface",
      values: [
        { name: "Surface", value: "#f6f6f6" },
        { name: "Branco", value: "#ffffff" },
      ],
    },
    options: {
      storySort: {
        order: [
          "Cores",
          [
            "Sistema",
            "Novidades",
            "Cores primitivas",
            "Cores semanticas",
            "Aplicacao",
            "Proporcao",
            "Acessibilidade",
          ],
        ],
      },
    },
  },
};

export default preview;
