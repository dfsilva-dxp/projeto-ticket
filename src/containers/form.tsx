import { Form } from "components";

import { FormsProps } from "components/Form/types";

export default function FormContent({ children }: FormsProps) {
  return <Form className="float-left">{children}</Form>;
}
