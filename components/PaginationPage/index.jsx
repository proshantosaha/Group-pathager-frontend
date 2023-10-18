import Link from "next/link";
import { PaginationUlStyle, PaginationLiStyle } from "../../styles/paginationStyle";

export default function PaginationPage({
  handlePageChange,
  cardsPerPage,
  totalBooks,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalBooks / cardsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <PaginationUlStyle>
        {pageNumber.map((number) => (
          <PaginationLiStyle key={number} onClick={() => handlePageChange(number)}>
            <Link href="#!">
              {number}
            </Link>
            </PaginationLiStyle>
        ))}
    </PaginationUlStyle>
  );
}
