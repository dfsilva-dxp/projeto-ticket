import { ChangeEvent, Dispatch } from "react";

import { Credentials } from "contexts/auth/types";

const useForm = () => {
  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    const { name, value } = target;

    return function (
      data: Credentials,
      setData: Dispatch<React.SetStateAction<Credentials>>
    ) {
      setData({
        ...data,
        [name]: value,
      });
    };
  }

  return { onChange };
};

export default useForm;
