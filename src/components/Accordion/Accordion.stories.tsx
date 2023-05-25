import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { AccordionProps } from "./Accordion";
import { Accordion } from "./Accordion";

export default {
  title: "components/Accordion",
  component: Accordion,
  args: {
    isOpen: false,
    title: "My title",
    children: "Content",
  },
  parameters: {
    controls: {
      exclude: ["innerControl", "onToggle", "isOpen"],
    },
  },
} as Meta<AccordionStoryProps>;

type AccordionStoryProps = Pick<AccordionProps, "title" | "children">;

export const AccordionStoryTemplate: Story<AccordionStoryProps> = ({
  ...args
}) => <Accordion {...args} innerControl />;

AccordionStoryTemplate.storyName = "Accordion";

AccordionStoryTemplate.parameters = {
  // coming soon  https://github.com/storybookjs/addon-designs
  design: {
    type: "figma",
    url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  },
};
