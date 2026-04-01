export default function CalculatorBtn({ label, onClick, wide, variant }) {
    const base = 'flex items-center justify-center rounded-xl text-xl font-semibold h-16 cursor-pointer transition-transform active:scale-95';

    const variants = {
        number: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
        operator: 'bg-indigo-500 hover:bg-indigo-600 text-white',
        action: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
        equals: 'bg-green-500 hover:bg-green-600 text-white',
    };

    return <button onClick={() => onClick(label)} className={`${base} ${variants[variant]} ${wide ? 'col-span-2' : ''}`}>{label}</button>;
}