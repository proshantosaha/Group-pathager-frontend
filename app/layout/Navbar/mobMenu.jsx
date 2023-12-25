import { Key } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import Styles from "./NavbarStyles.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/" },
  { id: 3, name: "Shop", url: "/" },
  { id: 4, name: "Category", subMenu: true },
  { id: 5, name: "Contact", url: "/" },
];

// const subMenuData = [
//   { id: 1, name: "uponash" },
//   { id: 2, name: "golp" },
//   { id: 3, name: "kobita" },
//   { id: 4, name: "Category" },
//   { id: 5, name: "Contact" },
// ];

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  categories,
  setMobileMenu,
}) => {
  return (
    <div>
      <ul className={Styles.mobMenu}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              {!!item?.subMenu ? (
                <li
                  className={Styles.mobMenuLi}
                  onMouseEnter={() => setShowCatMenu(!showCatMenu)}
                >
                  <div>
                    {item.name}
                    <ArrowDropDownIcon />
                  </div>

                  {showCatMenu && (
                    <ul className={Styles.subMenuUl}>
                      {categories?.map(({ attributes: c, id }) => {
                        return (
                          <Link
                            key={id}
                            href={`/category/${c.slug}`}
                            onClick={() => {
                              setShowCatMenu(false);
                              setMobileMenu(false);
                            }}
                          >
                            <li className={Styles.subcatmenu}>
                              {c.name}
                              <span>{`(${c?.products?.data?.length})`}</span>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <Link href={item.url}>
                  <li
                    className={Styles.mobNavigationMenuLi}
                    onClick={() => setMobileMenu(false)}
                  >
                    {item.name}
                  </li>
                </Link>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuMobile;
