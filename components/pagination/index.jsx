import Link from "next/link";

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
    <ul>
      {pageNumber.map((number) => (
        <li key={number}>
          <Link href="#!" onClick={() => handlePageChange(number)}>
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
}
