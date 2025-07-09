export const linksMap = [
	{
		id: 'home',
		label: 'Start',
		href: '/',
		hidden: false,
	},
	{
		id: 'about',
		label: 'About',
		href: '/#about',
		hidden: false,
	},
	{
		id: 'services',
		label: 'Services',
		href: '/services',
		hidden: false,
		children: [
			{
				id: 'websites',
				label: 'Websites',
				href: '/services/websites',
				hidden: false,
			},
			{
				id: 'seo',
				label: 'SEO',
				href: '/services/seo',
				hidden: false,
			},
		],
	},
	{
		id: 'contact',
		label: 'Contact Us',
		href: '/kontakt',
		hidden: false,
	},
	{
		id: 'policy',
		label: 'Polityka Prywatności',
		href: '/polityka-prywatnosci',
		hidden: true,
	},
] as const satisfies readonly NavLink[];
