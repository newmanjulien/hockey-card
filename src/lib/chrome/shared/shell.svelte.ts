import { getContext, setContext } from 'svelte';

const SHELL_STATE_KEY = Symbol('chrome-shell-state');

export type ChromeShellState = {
	isSidebarExpanded: boolean;
	isMobileDrawerOpen: boolean;
};

export function provideChromeShellState(shellState: ChromeShellState) {
	return setContext(SHELL_STATE_KEY, shellState);
}

export function useChromeShellState() {
	return getContext<ChromeShellState>(SHELL_STATE_KEY);
}
