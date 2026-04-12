import { createPromptCanvasRouteContent } from "$lib/canvas/content";

export const routeContent = createPromptCanvasRouteContent({
  initialValue:
    "How does environmental risk insurance work? How does it work in this specific industry? And why would Exterra need it?",
  trainer: {
    name: "Leanne Thompson",
    title: "Senior Vice-President, Real Estate Leader",
    avatar: "/avatars/thompson.webp",
  },
  documents: [
    {
      id: "environmental-risk-overview",
      title: "Environmental Risk Coverage Overview",
    },
    {
      id: "pollution-liability-guide",
      title: "Pollution Liability Intake Guide",
    },
  ],
});
