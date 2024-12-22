import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const directionsRouter = createTRPCRouter({
  calculateRoute: publicProcedure
    .input(
      z.object({
        sourceAddress: z.string().optional(),
        targetAddress: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      // здесь будет реализована вся логика по просчету маршрута доставки, но чуть попозжа :)
      return {
        from: input.sourceAddress,
        to: input.targetAddress,
      };
    }),
});
