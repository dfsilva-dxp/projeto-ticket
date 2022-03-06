import {
  AvatarProps,
  ContentProps,
  EmailProps,
  NameProps,
  PhotoProps,
  WrapperProps,
} from "./types";

import { Container, Content, Email, Name, Photo, Wrapper } from "./styles";

export default function Avatar({ children }: AvatarProps) {
  return <Container>{children}</Container>;
}

Avatar.Wrapper = function AvatarWrapper({ children }: WrapperProps) {
  return <Wrapper>{children}</Wrapper>;
};

Avatar.Photo = function AvatarPhoto({ children, photoURL = null }: PhotoProps) {
  return <Photo BackgroundUrl={photoURL}>{!!!photoURL && children}</Photo>;
};

Avatar.Content = function AvatarContent({ children }: ContentProps) {
  return <Content>{children}</Content>;
};

Avatar.Name = function AvatarName({ displayName }: NameProps) {
  return <Name>{displayName}</Name>;
};

Avatar.Email = function AvatarEmail({ email }: EmailProps) {
  return <Email>{email}</Email>;
};
