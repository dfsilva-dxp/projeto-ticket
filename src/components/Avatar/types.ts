import { HTMLAttributes, ReactNode } from "react";

export type AvatarProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type WrapperProps = {
  size?: "normal" | "large";
} & Pick<AvatarProps, "children">;

export type EditorProps = Pick<AvatarProps, "children">;

export type PhotoProps = {
  photoURL?: string | null | undefined;
} & Pick<AvatarProps, "children">;

export type ContentProps = Pick<AvatarProps, "children">;

export type NameProps = {
  displayName: string | number | readonly string[] | null | undefined;
};

export type EmailProps = {
  email: string | null | undefined;
};
