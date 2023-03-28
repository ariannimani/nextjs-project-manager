import { UserPropsWithoutId } from "./types";

type FetcherOptions = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, any>;
  json?: boolean;
};

export const fetcher = async ({
  url,
  method,
  body,
  json = true,
}: FetcherOptions) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: { Accept: "application/json", "Content-type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("Api Error");
  }
  if (json) {
    const data = await res.json();
    return data.data;
  }
};

export const register = (user: UserPropsWithoutId) => {
  return fetcher({ url: "/api/register", method: "POST", body: user });
};

export const signIn = (user: UserPropsWithoutId) => {
  return fetcher({ url: "/api/signIn", method: "POST", body: user });
};

export const createNewProject = (name: string) => {
  return fetcher({
    url: "/api/project",
    method: "POST",
    body: { name },
  });
};
