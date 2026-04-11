import { createPromptCanvasRouteContent } from "$lib/canvas/content";

export const routeContent = createPromptCanvasRouteContent({
  initialValue:
    "How does cyber insurance work? How does it work in this specific industry? And why would Cirque du Soleil need it?",
  placeholder:
    "Dig into cyber insurance or ask about Cirque du Soleil specifically",
  trainer: {
    name: "Aaron Weinstock",
    title: "National Practice Leader-Environmental Risk",
    avatar: "/avatars/weinstock.webp",
  },
  railMessage: {
    body: "Your colleague Aaron Weinstock trained this tool with knowledge about Cyber insurance. Aaron may receive a notification if you ask a hard question. This is to let Aaron continue training the tool",
    dismissalKey: "cirque-cyber-right-rail-intro",
  },
});
