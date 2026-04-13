import { getDemoClient, type DemoRouteRecord } from '$lib/demo-data/dashboard';

function toTitleCase(value: string) {
	return value.replace(/(^|[\s-])([a-z])/g, (_match, separator: string, letter: string) => {
		return `${separator}${letter.toUpperCase()}`;
	});
}

export function getExpertFullName(route: DemoRouteRecord) {
	return `${route.expert.firstName} ${route.expert.lastName}`;
}

export function getInsuranceDisplayName(route: DemoRouteRecord) {
	const insuranceName = route.insurance.name.trim();
	const insuranceLabel = route.insurance.label.trim();

	return insuranceLabel ? `${insuranceName} ${insuranceLabel}` : insuranceName;
}

export function getRouteNavLabel(route: DemoRouteRecord) {
	return toTitleCase(route.insurance.name);
}

export function getRouteTitle(route: DemoRouteRecord) {
	const client = getDemoClient(route.clientId);

	return `${getRouteNavLabel(route)} for ${client.fullName}`;
}

export function getRouteSectionHeading(route: DemoRouteRecord) {
	return getDemoClient(route.clientId).fullName;
}
