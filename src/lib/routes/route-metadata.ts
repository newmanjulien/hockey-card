import { getCategory, type PolicyRecord } from '$lib/demo-data';

export function getPolicyDisplayName(policy: PolicyRecord) {
	return policy.title.trim();
}

export function getRouteNavLabel(policy: PolicyRecord) {
	return getPolicyDisplayName(policy);
}

export function getRouteTitle(policy: PolicyRecord) {
	const category = getCategory(policy.categoryId);

	return `${category.title}: ${getRouteNavLabel(policy)}`;
}
