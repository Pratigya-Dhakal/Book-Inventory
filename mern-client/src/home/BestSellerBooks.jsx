import React, { useState, useEffect } from "react";
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/get-books")
            .then(res => res.json())
            .then(data => setBooks(data.slice(0,10)))
            .catch(error => console.error("Error fetching books:", error)); 
    }, []);

    return (
        <div>
            <BookCards books={books} headline="Best Seller Books" />
        </div>
    );
}

export default BestSellerBooks;
