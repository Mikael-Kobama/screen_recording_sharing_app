import { createAuthClient } from "better-auth/react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
