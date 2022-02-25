import { HeadProps } from "./types";

export const Head = ({ title, description }: HeadProps) => {
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);

  return <></>;
};
