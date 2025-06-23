import React, { ReactNode } from "react";
import styles from "./Wrapper.module.scss";

interface Props {
	className?: string;
	children: ReactNode;
}

export const Wrapper = ({ children, className }: Props) => {
	return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};
