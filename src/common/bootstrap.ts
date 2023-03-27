import { startBot } from "./telegram";
import { config } from "dotenv";
import path from "path";

export default async (): Promise<void> => {
	config({
		path: path.resolve(__dirname, "../../.env"),
	});

	await startBot();

	console.log("App started!");
};
