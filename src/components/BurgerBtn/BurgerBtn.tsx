import React from 'react';

interface Props {
	className?: string;
	mobileMenuShown: boolean;
	toggleMenu: (val: boolean) => void;
}

export const BurgerBtn = ({
	className,
	mobileMenuShown,
	toggleMenu,
}: Props) => {
	const burgerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const menuState = mobileMenuShown;
		toggleMenu(!menuState);
	};

	return (
		<button
			className={`hamburger hamburger--spring ${className} ${
				mobileMenuShown && 'is-active'
			}`}
			type='button'
			onClick={burgerHandler}>
			<span className='hamburger-box'>
				<span className='hamburger-inner'></span>
			</span>
		</button>
	);
};
