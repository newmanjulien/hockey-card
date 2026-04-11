export type PromptCanvasActionId = 'image' | 'edit';

export type PromptCanvasAction = {
	id: PromptCanvasActionId;
	label: string;
	suggestions: readonly [string, string, string, string];
};

export type PromptCanvasTrainer = {
	name: string;
	title: string;
	avatar: string;
};

export type PromptCanvasRailMessage = {
	body: string;
	dismissalKey: string;
};

export type PromptCanvasContent = {
	heading: string;
	initialValue: string;
	placeholder?: string;
	actions: readonly PromptCanvasAction[];
	railMessage?: PromptCanvasRailMessage;
};

export type PromptCanvasRouteContent = {
	prompt: PromptCanvasContent;
	trainer: PromptCanvasTrainer;
};
