import { ChangeEvent } from 'react';
import Link from 'next/link';

interface Option {
    value: string;
    label: string;
}

interface Props {
    labelId: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    options: Option[];
    children: React.ReactNode;
    link?: {
        linkText: string;
        linkUrl: string;
    };
    required?: boolean;
}

export default function Select({
    labelId,
    onChange,
    value,
    options,
    children,
    link,
    required = false,
}: Props) {
    return (
        <div>
            <div className='flex justify-between align-center'>
                <label
                    htmlFor={labelId}
                    className='block text-sm font-medium leading-6 text-gray-900'
                >
                    {children}
                </label>
                {link && (
                    <div className='text-sm'>
                        <Link
                            className='font-semibold text-[#00A1FF] hover:text-blue-500'
                            href={link.linkUrl}
                        >
                            {link.linkText}
                        </Link>
                    </div>
                )}
            </div>
            <div className='mt-2'>
                <select
                    id={labelId}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00A1FF] sm:text-sm sm:leading-6'
                    name={labelId}
                    onChange={onChange}
                    value={value}
                    required={required}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
