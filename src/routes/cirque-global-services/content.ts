import { createPromptCanvasRouteContent } from "$lib/canvas/content";

export const routeContent = createPromptCanvasRouteContent({
  initialValue:
    "How does international business insurance work? How does it work in this specific industry? And why would Cirque du Soleil need it?",
  placeholder:
    "Dig into international business insurance or ask about Cirque du Soleil specifically",
  trainer: {
    name: "Andrew Torr",
    title: "Senior Vice-President - Risk Management",
    avatar: "/avatars/torr.webp",
  },
  railMessage: {
    body: "Your colleague Andrew Torr trained this tool with knowledge about International business insurance. Andrew may receive a notification if you ask a hard question. This is to let Andrew continue training the tool",
    dismissalKey: "cirque-global-services-right-rail-intro",
  },
});
