import { useContext } from "react";
import { CartContext } from "../../context/cartContext"; 
const Carrito = () => {
    const { cart, setCart } = useContext(CartContext); 

    // Calcular el total gastado
    const totalGastado = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Función para manejar el pago
    const handlePagar = () => {
        // Aquí puedes agregar la lógica para procesar el pago
        alert('¡Gracias por tu compra!'); // Mensaje de agradecimiento

        // Limpiar el carrito
        setCart([]); // Limpia el carrito
    };

    return (
        <main className="container">
            <h2>Carrito de compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p> 
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <img src={item.img.front} alt={item.name} width="50" />
                                <div>{item.title}</div>
                                <div>Precio: ${item.price}</div>
                                <div>Cantidad: {item.quantity}</div>
                                <div>Subtotal: ${item.price * item.quantity}</div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <h3>Total Gastado: ${totalGastado}</h3>
                    </div>
                    <button onClick={handlePagar}>Pagar</button>
                </>
            )}
        </main>
    );
};

export default Carrito;