import Link from "next/link";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";


const BookCard = ({id,title, author, coverUrl, coverColor, description, genre, rating, totalCopies, availableCopies, isLoanedBook = "false"}: Books) => {
  return (
    <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
      <Link
        href={`/book/${id}`}
        className={cn(isLoanedBook && "w-full flex flex-col items-center")}
      >
        <BookCover
          coverImage={coverUrl}
          coverColor={coverColor}
        />

        <div>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>
      </Link>
    </li>
  );
}

export default BookCard
