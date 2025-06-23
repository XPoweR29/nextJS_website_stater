import { linksMap } from '@/assets/data/linksMap';

type RecursiveNav<T extends readonly NavLink[]> = T[number] extends infer L
	? L extends { id: infer I; children?: infer C }
		? I extends string
			? C extends readonly NavLink[]
				? I | RecursiveNav<C>
				: I
			: never
		: never
	: never;

export type NavLinkId = RecursiveNav<typeof linksMap>;

export function linkHref(id: NavLinkId): string {
	const find = (items: readonly NavLink[]): string | undefined => {
		for (const item of items) {
			if (item.id === id) return item.href;
			if (item.children) {
				const nested = find(item.children);
				if (nested) return nested;
			}
		}
		return undefined;
	};

	const result = find(linksMap);
	if (!result) {
		throw new Error(`linkHref: ${id} does not exist`);
	}
	return result;
}
