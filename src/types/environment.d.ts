export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TELEGRAM_TOKEN: string;
			OPENAI_API_KEY: string;
		}
	}
}
