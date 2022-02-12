type PageHeadProps = {
  title: string;
  description: string;
};

export const PageHead = ({ title, description }: PageHeadProps) => {
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);

  return <></>;
};
