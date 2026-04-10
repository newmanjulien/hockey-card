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

export type PromptCanvasContent = {
	heading: string;
	initialValue: string;
	actions: readonly PromptCanvasAction[];
};
