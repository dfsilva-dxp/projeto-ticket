import { LoadingProps, SpinnerProps } from "./types";

import { Container, Spinner } from "./styles";

export default function Loading({ children }: LoadingProps) {
  return <Container>{children}</Container>;
}

Loading.Spinner = function LoadingSpinner({ size }: SpinnerProps) {
  return (
    <Spinner size={size}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  );
};
