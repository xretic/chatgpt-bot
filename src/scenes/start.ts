import { Markup, Scenes } from "telegraf";
import { CustomContext } from "../types/context";

export const start = new Scenes.BaseScene<CustomContext>("start")
	.enter(async (ctx) => {
		ctx.reply("*Привет! Я ChatGPT бот.*", {
			parse_mode: "Markdown",
			...Markup.inlineKeyboard([
				[Markup.button.callback("🔎 Новый запрос", "makeRequest")],
			]),
		});
	})
	.action("makeRequest", (ctx) => ctx.scene.enter("makeRequest"));
