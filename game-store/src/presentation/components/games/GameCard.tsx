interface Props {
  title: string;
  genre: string;
  price: number;
  available: boolean;
  icon?: React.ReactNode;
}

export const GameCard = ({title, genre, price, available, icon}: Props) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div>
              {icon && <span className="mt-2">{icon}</span>}  
            </div>
            <div>
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <div className="flex flex-col">
                    <span className="text-gray-400">{genre}</span>
                    <span className="text-gray-600">${price.toFixed(2)}</span>
                    <span className={`text-white ${available ? 'bg-green-500' : 'bg-red-500'} rounded-4xl p-1 flex justify-center w-25`}>
                        {available ? 'Disponible' : 'Agotado'}
                    </span>
                </div>
                
            </div>
        </div>
    );
}