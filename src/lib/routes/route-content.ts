import type {
  PromptCanvasAction,
  PromptCanvasContent,
  PromptCanvasDocument,
  PromptCanvasRouteContent,
} from "$lib/canvas/types";
import {
  getDemoClient,
  getDemoRoute,
  type DemoRouteId,
  type DemoRouteRecord,
} from "$lib/demo-data/dashboard";

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

function toTitleCase(value: string) {
  return value.replace(
    /(^|[\s-])([a-z])/g,
    (_match, separator: string, letter: string) => {
      return `${separator}${letter.toUpperCase()}`;
    },
  );
}

function createPromptContent(initialValue: string): PromptCanvasContent {
  return {
    heading: DEFAULT_PROMPT_HEADING,
    initialValue,
    actions: DEFAULT_PROMPT_ACTIONS,
  };
}

function toPromptCanvasDocuments(
  route: DemoRouteRecord,
): readonly PromptCanvasDocument[] {
  return route.documents.map((document) => ({
    id: document.id,
    title: document.title,
    href: document.href,
  }));
}

function createDocumentsNote(route: DemoRouteRecord) {
  return `${route.expert.firstName} selected these documents to help you learn about ${route.insurance.name} ${route.insurance.label}. Click a document to read it, or use the chat to explore the content`;
}

export function getExpertFullName(route: DemoRouteRecord) {
  return `${route.expert.firstName} ${route.expert.lastName}`;
}

export function getInsuranceDisplayName(route: DemoRouteRecord) {
  const insuranceName = route.insurance.name.trim();
  const insuranceLabel = route.insurance.label.trim();

  return insuranceLabel ? `${insuranceName} ${insuranceLabel}` : insuranceName;
}

export function getRouteNavLabel(route: DemoRouteRecord) {
  return toTitleCase(route.insurance.name);
}

export function getRouteTitle(route: DemoRouteRecord) {
  const client = getDemoClient(route.clientId);

  return `${getRouteNavLabel(route)} for ${client.fullName}`;
}

export function getRouteSectionHeading(route: DemoRouteRecord) {
  return getDemoClient(route.clientId).fullName;
}

export function createPromptInitialValue(route: DemoRouteRecord) {
  const client = getDemoClient(route.clientId);

  return `Help me understand ${getInsuranceDisplayName(route)}. How does this coverage work in this specific industry, and why would ${client.fullName} need it?`;
}

export function createPromptCanvasRouteContent(
  routeId: DemoRouteId,
): PromptCanvasRouteContent {
  const route = getDemoRoute(routeId);

  return {
    prompt: createPromptContent(createPromptInitialValue(route)),
    trainer: {
      name: getExpertFullName(route),
      title: route.expert.title,
      avatar: route.expert.avatar,
    },
    documents: toPromptCanvasDocuments(route),
    documentsNote: createDocumentsNote(route),
  };
}
