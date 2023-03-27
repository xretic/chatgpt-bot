import { Command } from "../types/command";
import { CustomContext } from "../types/context";

export const execute: Command = {
	name: "make_request",
	collect: async (ctx: CustomContext): Promise<void> => {
		await ctx.scene.enter("makeRequest");
	},
};
