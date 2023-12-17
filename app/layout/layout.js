// import Footer from "./Footer/page";
// import Navbar from "./Navbar/page";

export default function Layout({ children }) {
  return (
    <div>
      <body className={inter.className}>{children}</body>
    </div>
  );
}
