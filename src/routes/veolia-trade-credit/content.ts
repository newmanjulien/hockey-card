import { createPromptCanvasRouteContent } from "$lib/canvas/content";

export const routeContent = createPromptCanvasRouteContent({
  initialValue:
    "How does trade credit insurance work? How does it work in this specific industry? And why would Veolia need it?",
  placeholder:
    "Dig into trade credit insurance or ask about Veolia specifically",
  trainer: {
    name: "Adam Bunz",
    title: "Affinity Groups Leader-Western Region",
    avatar: "/avatars/bunz.webp",
  },
  railMessage: {
    body: "Your colleague Adam Bunz trained this tool with knowledge about Trade credit insurance. Adam may receive a notification if you ask a hard question. This is to let Adam continue training the tool",
    dismissalKey: "veolia-trade-credit-right-rail-intro",
  },
});
