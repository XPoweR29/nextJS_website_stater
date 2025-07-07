import { Wrapper } from '@/components/Wrapper/Wrapper';
import styles from './page.module.scss';
import { HomeStart } from '@/sections/HomeStart/HomeStart';
import { HomeAbout } from '@/sections/HomeAbout/HomeAbout';

export default function Home() {

	return (
		<>
			<HomeStart/>
			<HomeAbout/>
		</>
	);
}
