import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = internalMutation({
  args: {
    clearkId: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      clerkId: args.clearkId,
      email: args.email,
      imageUrl: args.imageUrl,
      name: args.name,
    });
  },
});
