export const CLIENT_IDS = ['veolia', 'cirque', 'exterra'] as const;
export type DemoClientId = (typeof CLIENT_IDS)[number];

export const ROUTE_IDS = [
	'veolia-trade-credit',
	'cirque-cyber',
	'cirque-global-services',
	'exterra-environmental-risk',
	'exterra-surety'
] as const;
export type DemoRouteId = (typeof ROUTE_IDS)[number];

export type DemoRouteIconId =
	| 'badge-dollar-sign'
	| 'globe'
	| 'hand-coins'
	| 'leaf'
	| 'shield';

export type DemoDocumentRecord = {
	id: string;
	title: string;
	href?: string;
};

export type DemoClientRecord = {
	id: DemoClientId;
	fullName: string;
	shortName: string;
};

export type DemoExpertRecord = {
	firstName: string;
	lastName: string;
	title: string;
	avatar: string;
};

export type DemoInsuranceRecord = {
	name: string;
	label: string;
};

export type DemoRouteRecord = {
	id: DemoRouteId;
	clientId: DemoClientId;
	iconId: DemoRouteIconId;
	expert: DemoExpertRecord;
	insurance: DemoInsuranceRecord;
	documents: readonly DemoDocumentRecord[];
};

export const DEMO_CLIENTS = {
	veolia: {
		id: 'veolia',
		fullName: 'Veolia',
		shortName: 'Veolia'
	},
	cirque: {
		id: 'cirque',
		fullName: 'Cirque du Soleil',
		shortName: 'Cirque'
	},
	exterra: {
		id: 'exterra',
		fullName: 'Exterra',
		shortName: 'Exterra'
	}
} as const satisfies Record<DemoClientId, DemoClientRecord>;

export const DEMO_ROUTES = {
	'veolia-trade-credit': {
		id: 'veolia-trade-credit',
		clientId: 'veolia',
		iconId: 'hand-coins',
		expert: {
			firstName: 'Adam',
			lastName: 'Bunz',
			title: 'Affinity Groups Leader-Western Region',
			avatar: '/avatars/bunz.webp'
		},
		insurance: {
			name: 'trade credit',
			label: 'insurance'
		},
		documents: [
			{
				id: 'trade-credit-overview',
				title: 'Trade Credit Insurance Overview'
			},
			{
				id: 'veolia-receivables-brief',
				title: 'Veolia Receivables Risk Brief'
			}
		]
	},
	'cirque-cyber': {
		id: 'cirque-cyber',
		clientId: 'cirque',
		iconId: 'shield',
		expert: {
			firstName: 'Brad',
			lastName: 'Cox',
			title: 'National Practice Leader, Transportation',
			avatar: '/avatars/cox.webp'
		},
		insurance: {
			name: 'cyber',
			label: 'insurance'
		},
		documents: [
			{
				id: 'cyber-coverage-overview',
				title: 'Cyber Coverage Overview'
			},
			{
				id: 'incident-response-checklist',
				title: 'Incident Response Readiness Checklist'
			}
		]
	},
	'cirque-global-services': {
		id: 'cirque-global-services',
		clientId: 'cirque',
		iconId: 'globe',
		expert: {
			firstName: 'Andrew',
			lastName: 'Torr',
			title: 'Senior Vice-President - Risk Management',
			avatar: '/avatars/torr.webp'
		},
		insurance: {
			name: 'global services',
			label: 'insurance'
		},
		documents: [
			{
				id: 'global-services-overview',
				title: 'Global Services Coverage Overview'
			},
			{
				id: 'international-exposure-guide',
				title: 'International Exposure Intake Guide'
			}
		]
	},
	'exterra-environmental-risk': {
		id: 'exterra-environmental-risk',
		clientId: 'exterra',
		iconId: 'leaf',
		expert: {
			firstName: 'Aaron',
			lastName: 'Weinstock',
			title: 'National Practice Leader-Environmental Risk',
			avatar: '/avatars/weinstock.webp'
		},
		insurance: {
			name: 'environmental risk',
			label: 'insurance'
		},
		documents: [
			{
				id: 'environmental-risk-overview',
				title: 'Environmental Risk Coverage Overview'
			},
			{
				id: 'pollution-liability-guide',
				title: 'Pollution Liability Intake Guide'
			}
		]
	},
	'exterra-surety': {
		id: 'exterra-surety',
		clientId: 'exterra',
		iconId: 'badge-dollar-sign',
		expert: {
			firstName: 'Leanne',
			lastName: 'Thompson',
			title: 'Senior Vice-President, Real Estate Leader',
			avatar: '/avatars/thompson.webp'
		},
		insurance: {
			name: 'surety',
			label: 'bonds'
		},
		documents: [
			{
				id: 'surety-bonding-overview',
				title: 'Surety Bonding Overview'
			},
			{
				id: 'submission-checklist',
				title: 'Contract Surety Submission Checklist'
			}
		]
	}
} as const satisfies Record<DemoRouteId, DemoRouteRecord>;

export const DEFAULT_DEMO_ROUTE_ID: DemoRouteId = 'exterra-environmental-risk';

export function getDemoClient(clientId: DemoClientId) {
	return DEMO_CLIENTS[clientId];
}

export function getDemoRoute(routeId: DemoRouteId) {
	return DEMO_ROUTES[routeId];
}
