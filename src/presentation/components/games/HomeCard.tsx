interface Props{
    label: string;
    count: number;
    color?: string;
}

export const NameBadge = ({label, color = 'bg-gray-200', count}: Props) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2">

        
            <span className={`inline-block px-2 py-1 rounded-full text-sm font-semibold `}>
                {label}
            </span>
            <span className={`font-bold ${color} text-3xl`}>
                {count}
            </span>
        </div>
        
    );
}