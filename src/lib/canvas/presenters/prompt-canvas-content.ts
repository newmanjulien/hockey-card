import type {
  PromptCanvasContent,
  PromptCanvasDocument,
  PromptCanvasRouteContent,
  PromptCanvasSuggestions,
} from "$lib/canvas/types";
import {
  getCategory,
  getExpert,
  getPolicy,
  getPolicyDocuments,
  type PolicyId,
  type PolicyRecord,
} from "$lib/demo-data";
import {
  getPolicyDisplayName,
  getRouteTitle,
} from "$lib/routes/route-metadata";

const DEFAULT_PROMPT_HEADING = "What would you like to know about this policy?";
const DEFAULT_PROMPT_SUGGESTIONS = [
  "Explain how this policy typically works",
  "What exposures is this policy designed to address?",
  "Where does this policy usually respond, and where does it not?",
  "What exclusions, limits, or conditions matter most here?",
] as const satisfies PromptCanvasSuggestions;

function createPromptContent(initialValue: string): PromptCanvasContent {
  return {
    heading: DEFAULT_PROMPT_HEADING,
    initialValue,
    suggestions: DEFAULT_PROMPT_SUGGESTIONS,
  };
}

function toPromptCanvasDocuments(
  policy: PolicyRecord,
): readonly PromptCanvasDocument[] {
  return getPolicyDocuments(policy.id);
}

function createDocumentsNote(policy: PolicyRecord) {
  const category = getCategory(policy.categoryId);
  const expert = getExpert(policy.expertId ?? category.expertId);

  return `${expert.name} curated these reference documents for ${getRouteTitle(policy)}. Open a document or use the prompt to explore the coverage.`;
}

function createPromptInitialValue(policy: PolicyRecord) {
  return `What does a ${getPolicyDisplayName(policy)} policy cover? And why would Exterra need this specifically?`;
}

export function createPromptCanvasRouteContent(
  routeId: PolicyId,
): PromptCanvasRouteContent {
  const route = getPolicy(routeId);
  const expert = getExpert(
    route.expertId ?? getCategory(route.categoryId).expertId,
  );

  return {
    prompt: createPromptContent(createPromptInitialValue(route)),
    trainer: {
      name: expert.name,
      title: expert.title,
      avatar: expert.avatar,
    },
    documents: toPromptCanvasDocuments(route),
    documentsNote: createDocumentsNote(route),
  };
}
