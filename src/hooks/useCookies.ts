import { useCallback, useState } from "react";
import { destroyCookie, parseCookies, setCookie as set } from "nookies";

const useCookies = (key: string) => {
  const [cookies, setCookies] = useState(() => {
    const response = parseCookies();
    return response[key];
  });

  try {
    const setCookie = useCallback(
      (value: string) => {
        set(undefined, key, value, {
          maxAge: 60 * 60, // 1 hour
          path: "/",
        });

        const response = parseCookies();
        setCookies(response[key]);
      },
      [key]
    );

    const getCookie = useCallback(() => {
      const response = parseCookies();
      return response[key];
    }, [key]);

    const removeCookie = useCallback(
      () => destroyCookie(undefined, key),
      [key]
    );

    return { setCookie, getCookie, removeCookie, cookies };
  } catch (e) {
    throw new Error("no refreshToken storage");
  }
};

export default useCookies;
