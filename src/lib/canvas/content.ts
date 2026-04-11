import type {
	PromptCanvasAction,
	PromptCanvasContent,
	PromptCanvasRailMessage,
	PromptCanvasRouteContent,
	PromptCanvasTrainer
} from '$lib/canvas/types';

const DEFAULT_PROMPT_HEADING = 'What question can I help with?';
const DEFAULT_PROMPT_PLACEHOLDER = 'Ask a question...';
const DEFAULT_PROMPT_ACTIONS = [
	{
		id: 'image',
		label: 'Learn about this insurance',
		suggestions: [
			'Explain how this type of insurance works',
			'What risks does this insurance usually cover?',
			'Who typically buys this type of insurance and why?',
			'What are the main exclusions or limitations to know about?'
		]
	},
	{
		id: 'edit',
		label: 'What to ask the client',
		suggestions: [
			'What questions should I ask the client first?',
			'What details do we need to underwrite this properly?',
			'What follow-up questions would clarify the client’s risks?',
			'What information is usually missing in early client conversations?'
		]
	}
] as const satisfies readonly PromptCanvasAction[];

function createPromptContent(
	initialValue: string,
	options?: {
		placeholder?: string;
		railMessage?: PromptCanvasRailMessage;
	}
): PromptCanvasContent {
	return {
		heading: DEFAULT_PROMPT_HEADING,
		initialValue,
		placeholder: options?.placeholder ?? DEFAULT_PROMPT_PLACEHOLDER,
		actions: DEFAULT_PROMPT_ACTIONS,
		railMessage: options?.railMessage
	};
}

export function createPromptCanvasRouteContent(options: {
	initialValue: string;
	placeholder?: string;
	trainer: PromptCanvasTrainer;
	railMessage?: PromptCanvasRailMessage;
}): PromptCanvasRouteContent {
	return {
		prompt: createPromptContent(options.initialValue, {
			placeholder: options.placeholder,
			railMessage: options.railMessage
		}),
		trainer: options.trainer
	};
}
