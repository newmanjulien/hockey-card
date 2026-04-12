import { createPromptCanvasRouteContent } from "$lib/canvas/content";

export const routeContent = createPromptCanvasRouteContent({
  initialValue:
    "How does cyber insurance work? How does it work in this specific industry? And why would Cirque du Soleil need it?",
  trainer: {
    name: "Aaron Weinstock",
    title: "National Practice Leader-Environmental Risk",
    avatar: "/avatars/weinstock.webp",
  },
  documents: [
    {
      id: "cyber-coverage-overview",
      title: "Cyber Coverage Overview",
    },
    {
      id: "incident-response-checklist",
      title: "Incident Response Readiness Checklist",
    },
  ],
});
