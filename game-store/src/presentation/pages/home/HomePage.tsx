import { Link } from "react-router";
import { NameBadge } from "../../components/games/HomeCard";

export const HomePage = () => {

    // const [cartCount, setCartCount] = useState(0);
    // const [totalSpent, setTotalSpent] = useState(0);
    // const [showCart, setShowCart] = useState(false);

    return(
        <div className="p-4 gap-2">
            <h1 className="text-3xl text-blue-400 font-bold mb-4">
                Catalogo de Juegos
            </h1>
            {/* DashboardCards de estadisticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <NameBadge label="Juegos disponibles" count={4} color="text-blue-500" />
                <NameBadge label="Ofertas disponibles" count={2} color="text-green-500" />
            </div>
            <Link to="/catalog" className="bg-blue-500 rounded   p-3    text-white">Ver Catalogo</Link>
        </div>
    )
}