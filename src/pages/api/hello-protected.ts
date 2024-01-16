import type { APIRoute } from "astro";

import sql from "../../../lib/prisma";

// this is an examle to show data retrival from database but
// auth can also be used to return user data/attributes from the database

export const GET: APIRoute = async (context) => {
  const session = await context.locals.auth.validate();
  if (!session) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const user = await sql.user.findUnique({
    where: { id: session.user.userId },
  });

  if (!user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  return new Response(
    JSON.stringify({
      greeting: `Hello, ${user.username}!`,
    })
  );
};
