import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

export type AccordionItem = {
	id: string;
	title: string;
	content: React.ReactNode;
};

interface Props {
	items: AccordionItem[];
	allowMultiopen?: boolean;
}

export const Accordion = ({ items, allowMultiopen }: Props) => {
	const [openItems, setOpenItems] = useState<string[]>([]);

	const toggleItem = (id: string) => {
		setOpenItems((prev) => {
			if (prev.includes(id)) {
				return prev.filter((itemId) => itemId !== id);
			} else {
				return allowMultiopen ? [...prev, id] : [id];
			}
		});
	};

	return (
		<div className={styles.accordion}>
			{items.map(({ id, title, content }) => (
				<div key={id} className={styles.item}>
					<button
						className={`${styles.header} ${openItems.includes(id) ? styles.active : ''}`}
						onClick={() => toggleItem(id)}>
						{title}
						<Icon className={styles.icon} icon='ri:arrow-down-s-line' />
					</button>

                    {openItems.includes(id) && <div className={styles.content}>{content}</div>}
				</div>
			))}
		</div>
	);
};
