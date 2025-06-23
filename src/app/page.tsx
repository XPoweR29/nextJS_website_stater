import { Wrapper } from '@/components/Wrapper/Wrapper';
import styles from './page.module.scss';
import { HomeStart } from '@/sections/HomeStart/HomeStart';
import { HomoeAbout } from '@/sections/HomeAbout/HomoeAbout';

export default function Home() {

	return (
		<>
			<HomeStart/>
			<HomoeAbout/>
		</>
	);
}
