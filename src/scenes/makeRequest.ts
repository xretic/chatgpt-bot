import { Scenes } from "telegraf";
import { CustomContext } from "../types/context";
import { OpenAIApi, Configuration } from "openai";

export const makeRequest = new Scenes.BaseScene<CustomContext>("makeRequest")
	.enter(async (ctx) => {
		ctx.reply("Отправьте в чат ваш запрос.");
	})
	.on("text", async (ctx) => {
		await ctx.reply("Ответ загружается, ожидайте");

		try {
			const configuration = new Configuration({
				apiKey: process.env.OPENAI_API_KEY,
			});

			const openai = new OpenAIApi(configuration);

			const completion = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: ctx.message.text,
				max_tokens: 10000,
			});

			const answer =
				completion.data.choices[0].text ??
				"Не удалось получить ответ от ChatGPT";

			await ctx.reply(answer);
		} catch (e) {
			console.log(e);
			await ctx.reply("Вы ввели некорректный запрос!");
		}

		ctx.scene.enter("start");
	});
