import type { CategoryId } from './categories';
import type { ExpertId } from './experts';

export const POLICY_IDS = [
	'general-liability-damage-to-rented-premises',
	'general-liability-products-completed-operations',
	'general-liability-contractual-liability',
	'general-liability-personal-advertising-injury',
	'professional-liability-negligent-misrepresentation',
	'professional-liability-rectification-re-performance-costs',
	'environmental-liability-cleanup-remediation-costs',
	'environmental-liability-sudden-gradual-pollution',
	'environmental-liability-natural-resource-damages'
] as const;

export type PolicyId = (typeof POLICY_IDS)[number];

export type PolicyIconId =
	| 'house'
	| 'package'
	| 'signature'
	| 'megaphone'
	| 'badge-alert'
	| 'wrench'
	| 'droplets'
	| 'cloud-rain-wind'
	| 'tree-pine';

export type PolicyRecord = {
	id: PolicyId;
	categoryId: CategoryId;
	iconId: PolicyIconId;
	title: string;
	expertId?: ExpertId;
};

export const POLICIES = {
	'general-liability-damage-to-rented-premises': {
		id: 'general-liability-damage-to-rented-premises',
		categoryId: 'general-liability',
		iconId: 'house',
		title: 'Damage to Rented Premises',
		expertId: 'leanne-thompson'
	},
	'general-liability-products-completed-operations': {
		id: 'general-liability-products-completed-operations',
		categoryId: 'general-liability',
		iconId: 'package',
		title: 'Products/Completed Operations',
		expertId: 'leanne-thompson'
	},
	'general-liability-contractual-liability': {
		id: 'general-liability-contractual-liability',
		categoryId: 'general-liability',
		iconId: 'signature',
		title: 'Contractual Liability'
	},
	'general-liability-personal-advertising-injury': {
		id: 'general-liability-personal-advertising-injury',
		categoryId: 'general-liability',
		iconId: 'megaphone',
		title: 'Personal & Advertising Injury'
	},
	'professional-liability-negligent-misrepresentation': {
		id: 'professional-liability-negligent-misrepresentation',
		categoryId: 'professional-liability',
		iconId: 'badge-alert',
		title: 'Negligent Misrepresentation'
	},
	'professional-liability-rectification-re-performance-costs': {
		id: 'professional-liability-rectification-re-performance-costs',
		categoryId: 'professional-liability',
		iconId: 'wrench',
		title: 'Rectification / Re-Performance Costs'
	},
	'environmental-liability-cleanup-remediation-costs': {
		id: 'environmental-liability-cleanup-remediation-costs',
		categoryId: 'environmental-liability',
		iconId: 'droplets',
		title: 'Cleanup / Remediation Costs'
	},
	'environmental-liability-sudden-gradual-pollution': {
		id: 'environmental-liability-sudden-gradual-pollution',
		categoryId: 'environmental-liability',
		iconId: 'cloud-rain-wind',
		title: 'Sudden & Gradual Pollution'
	},
	'environmental-liability-natural-resource-damages': {
		id: 'environmental-liability-natural-resource-damages',
		categoryId: 'environmental-liability',
		iconId: 'tree-pine',
		title: 'Natural Resource Damages'
	}
} as const satisfies Record<PolicyId, PolicyRecord>;

export const DEFAULT_POLICY_ID: PolicyId = 'general-liability-damage-to-rented-premises';

export function getPolicy(policyId: PolicyId): PolicyRecord {
	return POLICIES[policyId];
}
