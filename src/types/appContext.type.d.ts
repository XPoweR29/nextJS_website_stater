import { SetStateAction } from "react";

interface AppContextType {
	breakpoint: Breakpoints;

	mobileMenuShown: boolean;
	setMobileMenuShown: React.Dispatch<React.SetStateAction<boolean>>;
}
