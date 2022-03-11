import {
  AvatarProps,
  ContentProps,
  EditorProps,
  EmailProps,
  FileProps,
  NameProps,
  PhotoProps,
  WrapperProps,
} from "./types";

import {
  Container,
  Content,
  Editor,
  Email,
  File,
  Name,
  Photo,
  Wrapper,
} from "./styles";

export default function Avatar({ children }: AvatarProps) {
  return <Container>{children}</Container>;
}

Avatar.Wrapper = function AvatarWrapper({
  children,
  size = "normal",
}: WrapperProps) {
  return <Wrapper size={size}>{children}</Wrapper>;
};

Avatar.Editor = function AvatarEditor({ children }: EditorProps) {
  return <Editor>{children}</Editor>;
};

Avatar.File = function AvatarFile({ ...props }: FileProps) {
  return <File {...props} />;
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
