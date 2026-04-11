import { createPromptCanvasRouteContent } from "$lib/canvas/content";

export const routeContent = createPromptCanvasRouteContent({
  initialValue:
    "How does environmental risk insurance work? How does it work in this specific industry? And why would Exterra need it?",
  placeholder:
    "Dig into environmental risk insurance or ask about Exterra specifically",
  trainer: {
    name: "Leanne Thompson",
    title: "Senior Vice-President, Real Estate Leader",
    avatar: "/avatars/thompson.webp",
  },
  railMessage: {
    body: "Your colleague Leanne Thompson trained this tool with knowledge about Environmental risk insurance. Leanne may receive a notification if you ask a hard question. This is to let Leanne continue training the tool",
    dismissalKey: "exterra-environmental-risk-right-rail-intro",
  },
});
