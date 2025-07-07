'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

export interface ContactFormData {
	name: string;
	email: string;
	phone?: string;
	message: string;
	privacyPolicy: boolean;
}

export const useContactForm = (onSubmit: SubmitHandler<ContactFormData>) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>();

	const submitHandler = handleSubmit(onSubmit);

	return { register, submitHandler, errors, reset };
};
