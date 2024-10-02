import Item from "../Item";

const ItemList = ({items}) => {
console.log(items);


  return(
    <section className="items__container container">
    {items.map((item, i) => <Item key={`item-${i}`} {...item} tag="NUEVO"/>)}
    </section>
  );

}

export default ItemList;