import { Key } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import Styles from "./NavbarStyles.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRouter } from "next/navigation";

// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/" },
  { id: 3, name: "Shop", url: "/ui/shop" },
  { id: 4, name: "Category", subMenu: true },
  { id: 5, name: "Contact", url: "/ui/contact" },
];

// const subMenuData = [
//   { id: 1, name: "uponash" },
//   { id: 2, name: "golp" },
//   { id: 3, name: "kobita" },
//   { id: 4, name: "Category" },
//   { id: 5, name: "Contact" },
// ];

const MenuBar = ({ showCatMenu, setShowCatMenu, categories }) => {
  const router = useRouter();

  {
    console.log(categories);
  }
  return (
    <div>
      <ul className={Styles.navigationMenu}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              {!!item?.subMenu ? (
                <li
                  onMouseEnter={() => setShowCatMenu(true)}
                  onMouseLeave={() => setShowCatMenu(false)}
                >
                  {item.name}
                  <ArrowDropDownIcon />
                  {showCatMenu && (
                    <ul className={Styles.subMenuUl}>
                      {categories?.map(({ attributes: c, id }) => {
                        return (
                          <div
                            onClick={() =>
                              router.push(`/components/category/${id}`)
                            }
                          >
                            {/* <Link> */}
                            <li className={Styles.subcatmenu}>
                              {c.name}
                              <span>{`(${c?.products?.data?.length})`}</span>
                            </li>
                            {/* </Link> */}
                          </div>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <Link href={item.url}>
                  <li className={Styles.navigationMenuLi}>{item.name}</li>
                </Link>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuBar;
