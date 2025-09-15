'use client';

import { useRouter } from 'next/navigation';

interface ButtonProps {
  text: string;
  variant: 'white' | 'glass' | 'black' | 'simple';
  route: string;
}

export default function Button({ text, variant, route }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  const baseStyles = 'font-mono text-md px-3 py-2 rounded-sm tracking-tighter cursor-pointer transition-all duration-200 h-fit w-fit font-medium';

  const variantStyles = {
    white: 'bg-white text-ablack hover:bg-gray-100',
    black: 'bg-ablack text-white hover:bg-gray-900',
    simple: ' text-black hover:underline transition-all 200',
    glass: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {text}
    </button>
  );
}