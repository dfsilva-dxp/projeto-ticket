import { ChangeEvent, Dispatch } from "react";

import { SignUpData } from "../contexts/auth";

const useForm = () => {
  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    const { name, value } = target;

    return function (
      customer: SignUpData,
      setCustomer: Dispatch<React.SetStateAction<SignUpData>>
    ) {
      setCustomer({
        ...customer,
        [name]: value,
      });
    };
  }

  return { onChange };
};

export default useForm;
