import { createPromptCanvasRouteContent } from "$lib/canvas/content";

export const routeContent = createPromptCanvasRouteContent({
  initialValue:
    "How does international business insurance work? How does it work in this specific industry? And why would Cirque du Soleil need it?",
  trainer: {
    name: "Andrew Torr",
    title: "Senior Vice-President - Risk Management",
    avatar: "/avatars/torr.webp",
  },
  documents: [
    {
      id: "global-services-overview",
      title: "Global Services Coverage Overview",
    },
    {
      id: "international-exposure-guide",
      title: "International Exposure Intake Guide",
    },
  ],
});
