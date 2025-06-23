import { Wrapper } from '@/components/Wrapper/Wrapper';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../assets/images/not-found-image.png';

const NotFound = () => {
	return (
		<>
			<Head>
				<meta name='robots' content='noindex' />
			</Head>
			<div className='notFoundPage'>
				<Wrapper className='wrapper'>
					<Image
						src={img}
						className='image'
						alt=''
						aria-hidden={true}
						draggable={false}
					/>
					<h1 className='heading'>Strona nie znaleziona</h1>
					<p className='text'>
						Przepraszamy, ale nie mogliśmy znaleźć strony, której szukasz.
					</p>
					<Link href='/'>Wróć do strony głównej</Link>
				</Wrapper>
			</div>
		</>
	);
};

export default NotFound;
