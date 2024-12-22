import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";

export const trucksRouter = createTRPCRouter({
  allTrucks: publicProcedure.query(async () => {
    return await db.truck.findMany();
  }),
});
