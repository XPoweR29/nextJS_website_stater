export const linksMap = [
	{
		id: 'home',
		label: 'Start',
		href: '/',
	},
	{
		id: 'about',
		label: 'About',
		href: '/#about',
	},
	{
		id: 'services',
		label: 'Services',
		href: '/services',
		children: [
			{
				id: 'websites',
				label: 'Websites',
				href: '/services/websites',
			},
			{
				id: 'seo',
				label: 'SEO',
				href: '/services/seo',
			},
		],
	},
	{
		id: 'contact',
		label: 'Contact Us',
		href: '/contact',
	},
] as const satisfies readonly NavLink[];
