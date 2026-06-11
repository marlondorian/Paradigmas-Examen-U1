import { useState } from "react";
import { GameCard } from "../../components/games/GameCard";

export const CatalogPage = () => {

    const [cartCount, setCartCount] = useState(0);
    const [totalSpent, setTotalSpent] = useState(0);
    const [showCart, setShowCart] = useState(false);

    return(
        <div className="p-4">
            <h1 className="text-3xl text-blue-400 font-bold mb-4">
                Catalogo de Juegos
            </h1>
            {/* DashboardCards de estadisticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <GameCard title="Assassins Creed Laufey" genre="Action" price={59.99} available={false} icon={<span className="text-2xl">🗡️</span>} />
                <GameCard title="Persona 4 Revival" genre="Rpg" price={49.99} available={false} icon={<span className="text-2xl">🎮</span>} />
                <GameCard title="The Witcher 3 Wild Hunt" genre="Rpg" price={39.99} available={true} icon={<span className="text-2xl">🧙</span>} />
                <GameCard title="God of War" genre="Action" price={49.99} available={true} icon={<span className="text-2xl">⚔️</span>} />
            </div>
            <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={()=> {
                    setCartCount(cartCount + 1); 
                    setTotalSpent(totalSpent + 59.99);}}
                >
                    Agregar al carrito {"(+$59.99)"}
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                onClick={()=> {
                    setCartCount(0);
                    setTotalSpent(0);
                }}
                >
                    Vaciar carrito
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
                onClick={()=> {
                    setShowCart(!showCart);
                }}
                >
                    {showCart ? 'Ocultar Resumen' : 'Mostrar Resumen'}
                </button>
                
            </div>
            <div className={`bg-gray-100 mt-4 ${showCart ? 'block' : 'hidden'} border p-4 rounded flex flex-col`}>
                <span className="text-blue-500 font-bold">Resumen del Carrito</span>
                <span className="text-gray-600">Items en carrito: {cartCount}</span>
                <span className="text-gray-600">Total gastado: ${totalSpent.toFixed(2)}</span>
            </div>
        </div>
    )
}