import type {
  PromptCanvasAction,
  PromptCanvasDocument,
  PromptCanvasContent,
  PromptCanvasRouteContent,
  PromptCanvasTrainer,
} from "$lib/canvas/types";

const DEFAULT_PROMPT_HEADING = "Do you have questions about the docs?";
const DEFAULT_PROMPT_ACTIONS = [
  {
    id: "image",
    label: "Learn about this insurance",
    suggestions: [
      "Explain how this type of insurance works",
      "What risks does this insurance usually cover?",
      "Who typically buys this type of insurance and why?",
      "What are the main exclusions or limitations to know about?",
    ],
  },
  {
    id: "edit",
    label: "What to ask the client",
    suggestions: [
      "What questions should I ask the client first?",
      "What details do we need to underwrite this properly?",
      "What follow-up questions would clarify the client’s risks?",
      "What information is usually missing in early client conversations?",
    ],
  },
] as const satisfies readonly PromptCanvasAction[];

function createPromptContent(initialValue: string): PromptCanvasContent {
  return {
    heading: DEFAULT_PROMPT_HEADING,
    initialValue,
    actions: DEFAULT_PROMPT_ACTIONS,
  };
}

export function createPromptCanvasRouteContent(options: {
  initialValue: string;
  trainer: PromptCanvasTrainer;
  documents?: readonly PromptCanvasDocument[];
}): PromptCanvasRouteContent {
  return {
    prompt: createPromptContent(options.initialValue),
    trainer: options.trainer,
    documents: options.documents ?? [],
  };
}
