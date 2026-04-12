import { createPromptCanvasRouteContent } from "$lib/canvas/content";

export const routeContent = createPromptCanvasRouteContent({
  initialValue:
    "How do surety bonds work? How does it work in this specific industry? And why would Exterra need them?",
  trainer: {
    name: "Brad Cox",
    title: "National Practice Leader, Transportation",
    avatar: "/avatars/cox.webp",
  },
  documents: [
    {
      id: "surety-bonding-overview",
      title: "Surety Bonding Overview",
    },
    {
      id: "submission-checklist",
      title: "Contract Surety Submission Checklist",
    },
  ],
});
