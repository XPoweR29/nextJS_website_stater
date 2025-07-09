type NavLink = {
	id: string;
	label: string;
	href: string;
	children?: readonly NavLink[];
	hidden: boolean;
};
