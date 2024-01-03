import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_BOOKS = [
  { id: "p1", price: 12, title: "The Book Thief", author: "Markus Zusak" },
  { id: "p2", price: 20, title: "Absolvo Te", author: "Georgi Bardarov" },
  { id: "p3", price: 25, title: "Shantaram", author: "Gregory Roberts" },
  { id: "p4", price: 17, title: "Harry Potter", author: "J.K.Rowling" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_BOOKS.map((book) => (
          <ProductItem
            key={book.id}
            id={book.id}
            title={book.title}
            price={book.price}
            author={book.author}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
