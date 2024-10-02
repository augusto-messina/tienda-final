import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase.config";


import ItemDetail from "../../components/ItemDetail";
import Spinner from "../../components/Spinner";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); 

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
  

  return item ? <ItemDetail {...item} /> : <div>No item found.</div>; 
};

export default Detail;