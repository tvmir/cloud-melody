import { fetcher } from "./fetcher";

interface CredInput {
  email: string;
  password: string;
}

export function auth(mode: "signup" | "login", body: CredInput) {
  return fetcher(`/${mode}`, body as any);
}
