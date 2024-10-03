import { useContext } from "react";
import { CartContext } from "../../context/cartContext"; 

const Carrito = () => {
const { cart } = useContext(CartContext); 

return (
<main className="container">
    <h2>Carrito de mierda</h2>
    {cart.length === 0 ? (
    <p>El carrito está vacío</p> 
    ) : (
    <ul>
        {cart.map((item) => (
        <li key={item.id}>
            <img src={item.img.front} alt={item.name} width="50" />
            <div>{item.title}</div>
            <div>Precio: ${item.price}</div>
            <div>Cantidad: {item.quantity}</div>
            <div>Subtotal: ${item.price * item.quantity}</div>
        </li>
        ))}
    </ul>
    )}
</main>
);
};

export default Carrito;