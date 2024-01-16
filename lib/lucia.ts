import { lucia } from "lucia";
import type { Env } from "lucia";
import { astro } from "lucia/middleware";
import { prisma } from "@lucia-auth/adapter-prisma";
import sql from "./prisma";

export const auth = lucia({
  adapter: prisma(sql),
  middleware: astro(),
  env: "DEV" as Env,
  getUserAttributes: (data) => {
    return {
      username: data.username,
    };
  },
});

export type Auth = typeof auth;
