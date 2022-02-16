import { useCallback, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";

const useCookies = (key: string) => {
  const [cookies, setCookies] = useState(() => {
    const cookie = parseCookies();
    return cookie;
  });

  try {
    const set = useCallback(
      (value: string) => {
        setCookie(undefined, key, value, {
          maxAge: 60 * 60, // 1 hour
          path: "/",
        });

        const cookie = parseCookies();
        setCookies(cookie);
      },
      [key]
    );

    const get = useCallback(() => {
      const cookie = parseCookies();
      return cookie;
    }, []);

    const remove = useCallback(() => destroyCookie(undefined, key), [key]);

    return { set, get, remove, cookies };
  } catch (e) {
    throw new Error("no refreshToken storage");
  }
};

export default useCookies;
