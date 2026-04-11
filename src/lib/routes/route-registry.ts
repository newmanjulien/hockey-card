import { BadgeDollarSign, CircleQuestionMark, Globe, HandCoins, Leaf, Shield } from 'lucide-svelte';
import type { PromptCanvasAction, PromptCanvasContent, PromptCanvasTrainer } from '$lib/canvas/types';

type NavIcon = typeof CircleQuestionMark;

export type NavSectionId = 'next-30-days' | 'next-90-days' | 'history' | 'bottom';

type RouteSectionDefinition = {
	id: Exclude<NavSectionId, 'bottom'>;
	heading: string;
	desktopSectionClass?: string;
	mobileSectionClass?: string;
	showCollapsedDivider?: boolean;
};

export type AppRouteDefinition = {
	sectionId: RouteSectionDefinition['id'];
	href: `/${string}`;
	navLabel: string;
	title: string;
	icon: NavIcon;
	prompt: PromptCanvasContent;
	trainer: PromptCanvasTrainer;
};

const DEFAULT_PROMPT_HEADING = 'What question can I help with?';
const DEFAULT_PROMPT_PLACEHOLDER = 'Ask a question...';
const DEFAULT_PROMPT_ACTIONS = [
	{
		id: 'image',
		label: 'Learn about this insurance',
		suggestions: [
			'Explain how this type of insurance works',
			'What risks does this insurance usually cover?',
			'Who typically buys this type of insurance and why?',
			'What are the main exclusions or limitations to know about?'
		]
	},
	{
		id: 'edit',
		label: 'What to ask the client',
		suggestions: [
			'What questions should I ask the client first?',
			'What details do we need to underwrite this properly?',
			'What follow-up questions would clarify the client’s risks?',
			'What information is usually missing in early client conversations?'
		]
	}
] as const satisfies readonly PromptCanvasAction[];

function createPrompt(
	initialValue: string,
	options?: {
		placeholder?: string;
	}
): PromptCanvasContent {
	return {
		heading: DEFAULT_PROMPT_HEADING,
		initialValue,
		placeholder: options?.placeholder ?? DEFAULT_PROMPT_PLACEHOLDER,
		actions: DEFAULT_PROMPT_ACTIONS
	};
}

export const ROUTE_SECTION_DEFINITIONS: readonly RouteSectionDefinition[] = [
	{
		id: 'next-30-days',
		heading: 'Veolia',
		desktopSectionClass: 'pt-2'
	},
	{
		id: 'next-90-days',
		heading: 'Cirque du Soleil',
		desktopSectionClass: 'pt-6',
		mobileSectionClass: 'pt-4',
		showCollapsedDivider: true
	},
	{
		id: 'history',
		heading: 'Exterra',
		desktopSectionClass: 'pt-6',
		mobileSectionClass: 'pt-4',
		showCollapsedDivider: true
	}
] as const;

export const ROUTE_REGISTRY = {
	'veolia-trade-credit': {
		sectionId: 'next-30-days',
		href: '/veolia-trade-credit',
		navLabel: 'Trade credit',
		title: 'Trade credit for Veolia',
		icon: HandCoins,
		prompt: createPrompt(
			'How does trade credit insurance work? How does it work in this specific industry? And why would Veolia need it?',
			{
				placeholder: 'Dig into trade credit insurance or ask about Veolia specifically'
			}
		),
		trainer: {
			name: 'Adam Bunz',
			title: 'Affinity Groups Leader-Western Region',
			avatar: '/avatars/bunz.webp'
		}
	},
	'cirque-cyber': {
		sectionId: 'next-90-days',
		href: '/cirque-cyber',
		navLabel: 'Cyber',
		title: 'Cyber for Cirque du Soleil',
		icon: Shield,
		prompt: createPrompt(
			'How does cyber insurance work? How does it work in this specific industry? And why would Cirque du Soleil need it?',
			{
				placeholder: 'Dig into cyber insurance or ask about Cirque du Soleil specifically'
			}
		),
		trainer: {
			name: 'Aaron Weinstock',
			title: 'National Practice Leader-Environmental Risk',
			avatar: '/avatars/weinstock.webp'
		}
	},
	'cirque-global-services': {
		sectionId: 'next-90-days',
		href: '/cirque-global-services',
		navLabel: 'Global services',
		title: 'Global services for Cirque du Soleil',
		icon: Globe,
		prompt: createPrompt(
			'How does international business insurance work? How does it work in this specific industry? And why would Cirque du Soleil need it?',
			{
				placeholder:
					'Dig into international business insurance or ask about Cirque du Soleil specifically'
			}
		),
		trainer: {
			name: 'Andrew Torr',
			title: 'Senior Vice-President - Risk Management',
			avatar: '/avatars/torr.webp'
		}
	},
	'exterra-environmental-risk': {
		sectionId: 'history',
		href: '/exterra-environmental-risk',
		navLabel: 'Environmental risk',
		title: 'Environmental risk for Exterra',
		icon: Leaf,
		prompt: createPrompt(
			'How does environmental risk insurance work? How does it work in this specific industry? And why would Exterra need it?',
			{
				placeholder: 'Dig into environmental risk insurance or ask about Exterra specifically'
			}
		),
		trainer: {
			name: 'Leanne Thompson',
			title: 'Senior Vice-President, Real Estate Leader',
			avatar: '/avatars/thompson.webp'
		}
	},
	'exterra-surety': {
		sectionId: 'history',
		href: '/exterra-surety',
		navLabel: 'Surety',
		title: 'Surety for Exterra',
		icon: BadgeDollarSign,
		prompt: createPrompt(
			'How do surety bonds work? How does it work in this specific industry? And why would Exterra need them?',
			{
				placeholder: 'Dig into surety bonds or ask about Exterra specifically'
			}
		),
		trainer: {
			name: 'Brad Cox',
			title: 'National Practice Leader, Transportation',
			avatar: '/avatars/cox.webp'
		}
	}
} as const satisfies Record<string, AppRouteDefinition>;

export type NavRouteId = keyof typeof ROUTE_REGISTRY;
export type NavPath = (typeof ROUTE_REGISTRY)[NavRouteId]['href'];

export const DEFAULT_ROUTE_ID: NavRouteId = 'exterra-environmental-risk';

export const ROUTE_IDS = Object.keys(ROUTE_REGISTRY) as NavRouteId[];
