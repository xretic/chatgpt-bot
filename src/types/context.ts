import { Context, Scenes } from "telegraf";

export interface CustomSession extends Scenes.SceneSessionData {
	state?: {};
}

export interface CustomContext extends Context {
	scene: Scenes.SceneContextScene<CustomContext, CustomSession>;
}
