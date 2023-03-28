import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export const handler = async (req: any, res: any) => {
  const cookieName = process.env.COOKIE_NAME || "defaultCookieName";

  const user = await validateJWT(req.cookies[cookieName]);

  await db.project.create({
    data: {
      name: req.body.name,
      userId: user.id,
    },
  });

  res.json({ data: { message: "ok" } });
};
