import Link from 'next/link';
import { LoginForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Proplayas | Login',
	description: 'Proplayas Login page',
};

export default function Page() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-36 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<img
					className="mx-auto h-[150px] w-auto my-4"
					src="../assets/logo.png"
					alt='Full Auth'
				/>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
        Inicio de sesion
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<LoginForm />

				<p className='mt-10 text-center text-sm text-gray-500'>
					No tienes cuenta?{' '}
					<Link
						href='/auth/register'
						className='font-semibold leading-6 text-[#00A1FF] hover:text-blue-500'
					>
						¡Registrate ahora!
					</Link>
				</p>
			</div>
		</div>
	);
}