'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { Spinner } from '@/components/common';
import { toast } from 'react-toastify';

interface Props {
	children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
	const router = useRouter();
	const { isLoading, isAuthenticated } = useAppSelector(state => state.auth);

	if (isLoading) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

	if (!isAuthenticated) {
		toast.error('Must be logged in')
		router.push('/auth/login');
	}

	return <>{children}</>;
}