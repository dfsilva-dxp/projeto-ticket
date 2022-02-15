import { destroyCookie, parseCookies, setCookie } from "nookies";

const useCookies = () => {
  try {
    const set = (key: string, refreshToken: string) => {
      setCookie(undefined, key, refreshToken, {
        maxAge: 60 * 60, // 1 hour
        path: "/",
      });
    };

    const get = (key: string) => {
      const response = parseCookies();

      return response;
    };

    const remove = (key: string) => destroyCookie(undefined, key);

    return { set, get, remove };
  } catch (e) {
    throw new Error("no refreshToken storage");
  }
};

export default useCookies;
