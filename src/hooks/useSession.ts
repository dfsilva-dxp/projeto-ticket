import { useCallback } from "react";

import useCookies from "hooks/useCookies";

const useSession = () => {
  const { setCookie, removeCookie } = useCookies("ticke.refreshToken");

  const setSesstion = useCallback(
    (refreshToken: string) => {
      setCookie(refreshToken);
    },
    [setCookie]
  );

  const removeSession = useCallback(() => {
    removeCookie();
  }, [removeCookie]);

  return { setSesstion, removeSession };
};

export default useSession;
