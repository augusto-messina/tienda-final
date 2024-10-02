import { useState } from "react"
import { doc, writeBatch } from "firebase/firestore";


import { db } from "../../config/firebase.config";

import items from '../../data/items.json';
import Spinner from "../../components/Spinner";

const Update = () => {
    let [ loading, setLoading] = useState(false);

    const bulkInsert = async (dataArray) => {
        const batch = writeBatch(db);

        dataArray.forEach((element, index) => {
            const docRef = doc(db, 'items', `item-0${index}`)

            batch.set(docRef, element);
        });

        try{
            setLoading(true);
            await batch.commit();
        } catch (error) {
            console.error('Error writing batch: ', error);
        } finally {
            setLoading(false);
        }
    }


    return(
        <main>
            <h2>Haz Click para añadir los items a la coleccion</h2>
            <button onClick={() => bulkInsert(items)}>Añadir Items</button>
    
            { loading &&(
                <div>
                    <h3>Insertando nuevo registro</h3>
                    <Spinner />
                </div>
            )}
        </main>
    )
}
export default Update;