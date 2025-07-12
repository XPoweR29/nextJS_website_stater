import React from 'react';
import styles from './Switch.module.scss';

interface Props {
	onChange: (val: boolean) => void;
	checked?: boolean;
	disabled?: boolean;
	className?: string;
}
export const Switch = ({ checked, disabled, onChange, className }: Props) => {
	return (
		<label className={`${styles.switch} ${className} ${disabled ? styles.disabled : ''}`}>
			<input 
                type='checkbox'
                checked={checked}
                onChange={(e)=>onChange(e.target.checked)}
                disabled={disabled}
            />
            <span className={styles.slider}/>
		</label>
	);
};
