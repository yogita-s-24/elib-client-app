import Banner from "@/app/(home)/components/Banner";
import Image from "next/image";
import BookList from "./components/BookList";

export default async function Home() {
  // data fetching
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`
  );

  if (!response.ok) {
    throw new Error("An error occurred while fetching the books");
  }

  const books = await response.json();
  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
