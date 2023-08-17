"use client"
import { useRouter } from 'next/navigation'; // Importa el hook useRouter para la redirección
import { useState } from 'react'; // Importa useState
import { Form } from '@/components/forms';

export default function LoginForm() {
	const router = useRouter();

	// Usa useState para manejar los valores de los campos de entrada
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const config = [
		{
			componentType: 'input',
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			value: formData.email,
			required: true,
		},
		{
			componentType: 'input',
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: formData.password,
			link: {
				linkText: 'Forgot password?',
				linkUrl: '/password-reset',
			},
			required: true,
		},
	];

	// Función para manejar los cambios en los campos de entrada
	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		router.push('/dashboard');
	};

	return (
		<Form
			config={config}
			isLoading={false}
			btnText='Sign in'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}


/** Parte del codigo programada para comunicarse con el backend
 * 
 * import { useLogin } from '@/hooks';
import { Form } from '@/components/forms';

export default function LoginForm() {
	
	const { email, password, isLoading, onChange, onSubmit } = useLogin();

	const config = [
		{
			componentType: 'input',
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		},
		{
			componentType: 'input',
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: password,
			link: {
				linkText: 'Forgot password?',
				linkUrl: '/password-reset',
			},
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Sign in'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
} */