import { createPromptCanvasRouteContent } from "$lib/canvas/content";

export const routeContent = createPromptCanvasRouteContent({
  initialValue:
    "How does trade credit insurance work? How does it work in this specific industry? And why would Veolia need it?",
  trainer: {
    name: "Adam Bunz",
    title: "Affinity Groups Leader-Western Region",
    avatar: "/avatars/bunz.webp",
  },
  documents: [
    {
      id: "trade-credit-overview",
      title: "Trade Credit Insurance Overview",
    },
    {
      id: "veolia-receivables-brief",
      title: "Veolia Receivables Risk Brief",
    },
  ],
});
