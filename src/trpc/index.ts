import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { query } from "express";
import { QueryValidator } from "../lib/validators/query-validator";
import { getPayloadClient } from "../get-payload";
import { paymentRouter } from "./payment-router";

export const appRouter = router({
  auth: authRouter,
  payment: paymentRouter,
  getInfiniteCauses: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100),
        cursor: z.number().nullish(),
        query: QueryValidator,
      })
    )
    .query(async ({ input }) => {
      const { query, cursor } = input;
      const { limit, sort, ...queryOpts } = query;

      const payload = await getPayloadClient();
      const parsedQueryOpts: Record<string, { equals: string }> = {};

      // for categorization if need arises
      Object.entries(queryOpts).forEach(([key, value]) => {
        parsedQueryOpts[key] = {
          equals: value,
        };
      });

      const page = cursor || 1;
      const {
        docs: items,
        hasNextPage,
        nextPage,
      } = await payload.find({
        collection: "causes",
        where: {
          approved: {
            equals: "approved",
          },
        },
        sort: sort,
        depth: 1,
        limit: limit,
        page: page,
      });
      return { items, nextPage: hasNextPage ? nextPage : null };
    }),
});

export type AppRouter = typeof appRouter;
