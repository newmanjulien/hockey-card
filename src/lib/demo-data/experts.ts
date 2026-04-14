export const EXPERT_IDS = [
	'leanne-thompson',
	'general-liability-specialist',
	'professional-liability-specialist',
	'environmental-liability-specialist'
] as const;

export type ExpertId = (typeof EXPERT_IDS)[number];

export type ExpertRecord = {
	id: ExpertId;
	name: string;
	title: string;
	avatar: string;
};

export const EXPERTS = {
	'leanne-thompson': {
		id: 'leanne-thompson',
		name: 'Leanne Thompson',
		title: 'Senior Vice-President, Real Estate Leader',
		avatar: '/avatars/thompson.webp'
	},
	'general-liability-specialist': {
		id: 'general-liability-specialist',
		name: 'Brad Cox',
		title: 'National Practice Leader, General Liability',
		avatar: '/avatars/cox.webp'
	},
	'professional-liability-specialist': {
		id: 'professional-liability-specialist',
		name: 'Andrew Torr',
		title: 'Senior Vice-President, Professional Liability',
		avatar: '/avatars/torr.webp'
	},
	'environmental-liability-specialist': {
		id: 'environmental-liability-specialist',
		name: 'Aaron Weinstock',
		title: 'National Practice Leader, Environmental Liability',
		avatar: '/avatars/weinstock.webp'
	}
} as const satisfies Record<ExpertId, ExpertRecord>;

export function getExpert(expertId: ExpertId) {
	return EXPERTS[expertId];
}
