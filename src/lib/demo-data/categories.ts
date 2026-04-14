import type { ExpertId } from './experts';
import type { PolicyId } from './policies';

export const CATEGORY_IDS = [
	'general-liability',
	'professional-liability',
	'environmental-liability'
] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];

export type CategoryRecord = {
	id: CategoryId;
	title: string;
	expertId: ExpertId;
	policyIds: readonly PolicyId[];
};

export const CATEGORIES = {
	'general-liability': {
		id: 'general-liability',
		title: 'General Liability',
		expertId: 'general-liability-specialist',
		policyIds: [
			'general-liability-damage-to-rented-premises',
			'general-liability-products-completed-operations',
			'general-liability-contractual-liability',
			'general-liability-personal-advertising-injury'
		]
	},
	'professional-liability': {
		id: 'professional-liability',
		title: 'Professional Liability',
		expertId: 'professional-liability-specialist',
		policyIds: [
			'professional-liability-negligent-misrepresentation',
			'professional-liability-rectification-re-performance-costs'
		]
	},
	'environmental-liability': {
		id: 'environmental-liability',
		title: 'Environmental Liability',
		expertId: 'environmental-liability-specialist',
		policyIds: [
			'environmental-liability-cleanup-remediation-costs',
			'environmental-liability-sudden-gradual-pollution',
			'environmental-liability-natural-resource-damages'
		]
	}
} as const satisfies Record<CategoryId, CategoryRecord>;

export function getCategory(categoryId: CategoryId) {
	return CATEGORIES[categoryId];
}
