export type PromptCanvasSuggestions = readonly [string, string, string, string];

export type PromptCanvasTrainer = {
	name: string;
	title: string;
	avatar: string;
};

export type PromptCanvasDocument = {
	id: string;
	title: string;
	href?: string;
};

export type PromptCanvasContent = {
	heading: string;
	initialValue: string;
	suggestions: PromptCanvasSuggestions;
};

export type PromptCanvasRouteContent = {
	prompt: PromptCanvasContent;
	trainer: PromptCanvasTrainer;
	documents: readonly PromptCanvasDocument[];
	documentsNote: string;
};
