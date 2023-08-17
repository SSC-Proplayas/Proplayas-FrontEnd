import { ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/forms';
import { Spinner } from '@/components/common';
import { Select } from '@/components/forms';

interface Option {
    value: string;
    label: string;
}

interface Config {
    componentType: 'input' | 'select';
    labelText: string;
    labelId: string;
    type?: string;
    value: string;
    options?: Option[];
    link?: {
        linkText: string;
        linkUrl: string;
    };
    required?: boolean;
}

interface Props {
    config: Config[];
    isLoading: boolean;
    btnText: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({
    config,
    isLoading,
    btnText,
    onChange,
    onSubmit,
}: Props) {
    return (
        <form className='space-y-6' onSubmit={onSubmit}>
            {config.map(item => {
                if (item.componentType === 'input') {
                    return (
                        <Input
                            key={item.labelId}
                            labelId={item.labelId}
                            type={item.type!}
                            onChange={onChange as any}
                            value={item.value}
                            link={item.link}
                            required={item.required}
                        >
                            {item.labelText}
                        </Input>
                    );
                } else if (item.componentType === 'select') {
                    return (
                        <Select
                            key={item.labelId}
                            labelId={item.labelId}
                            onChange={onChange as any}
                            value={item.value}
                            options={item.options!}
                        >
                            {item.labelText}
                        </Select>
                    );
                }
            })}

            <div>
                <button
                    type='submit'
                    className='flex w-full justify-center rounded-md bg-[#00A1FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner sm /> : `${btnText}`}
                </button>
            </div>
        </form>
    );
}