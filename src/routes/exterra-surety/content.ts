import { createPromptCanvasRouteContent } from "$lib/canvas/content";

export const routeContent = createPromptCanvasRouteContent({
  initialValue:
    "How do surety bonds work? How does it work in this specific industry? And why would Exterra need them?",
  placeholder: "Dig into surety bonds or ask about Exterra specifically",
  trainer: {
    name: "Brad Cox",
    title: "National Practice Leader, Transportation",
    avatar: "/avatars/cox.webp",
  },
  railMessage: {
    body: "Your colleague Brad Cox trained this tool with knowledge about Surety bonds. Brad may receive a notification if you ask a hard question. This is to let Brad continue training the tool",
    dismissalKey: "exterra-surety-right-rail-intro",
  },
});
