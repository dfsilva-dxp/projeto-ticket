import { ProfileProps } from "./types";

import { FormContent, Jumbotron, PhotoContent } from "./styles";

export default function Profile({ children }: ProfileProps) {
  return <Jumbotron>{children}</Jumbotron>;
}

Profile.Photo = function ProfilePhoto({ children }: ProfileProps) {
  return <PhotoContent>{children}</PhotoContent>;
};

Profile.Form = function ProfileForm({ children }: ProfileProps) {
  return <FormContent>{children}</FormContent>;
};
