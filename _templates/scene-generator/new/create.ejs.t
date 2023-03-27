---
to: src/scenes/<%= name %>.ts
---

import { Scenes } from "telegraf";
import { CustomContext } from "../types/context";

export const <%= name %> = new Scenes.BaseScene<CustomContext>("<%= name %>").enter(
	async (ctx) => {}
);