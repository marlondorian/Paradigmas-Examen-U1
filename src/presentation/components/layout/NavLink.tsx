import { Link } from "react-router";

interface Props {
    icon?: React.ReactNode;
    text?: string;
    active?: boolean;
    to: string;
}

export const NavLink = ({icon, text, active, to}: Props) => {
    return (
       <Link to={to} className={`px-3 py-2 rounded-md flex gap-1 items-center ${active ? 'bg-blue-800' : 'hover:bg-blue-700'}}`}>
            {icon}
            {text}
        </Link>
    );
}