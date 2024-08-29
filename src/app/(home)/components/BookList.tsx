import { Book } from "@/types";
import React from "react";
import BookCard from "./BookCard";

const BookList = async () => {
  // data fetching
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("An error occurred while fetching the books");
  }

  const books = await response.json();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-7">
      {books.map((book: Book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
