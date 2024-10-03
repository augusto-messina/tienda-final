import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase.config";

import ItemDetail from "../../components/ItemDetail";
import Spinner from "../../components/Spinner";
import { CartContext } from "../../context/cartContext"; 

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); 

  // Acceso al contexto del carrito
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const docRef = doc(db, 'items', id);

    getDoc(docRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        } else {
          setItem(null);
        }
      })
      .catch(error => {
        console.error("Error fetching document: ", error);
        setItem(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  // Función para agregar el producto al carrito
  const handleAddToCart = () => {
    if (item) {
      addItem(item); 
    }
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <div><Spinner/></div>
      </div>
    );
  }

  return item ? (
    <div>
      <ItemDetail {...item} />
      {/* Botón para agregar al carrito */}
    </div>
  ) : (
    <div>No item found.</div>
  );
};

export default Detail;