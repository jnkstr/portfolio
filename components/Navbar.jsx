import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className={style.navbar}>
      <ul>
        <Link href="/" passHref>
          <li className={router.pathname == "/" ? `${style.active}` : ""}>
            _start
          </li>
        </Link>
        <Link href="/about" passHref>
          <li className={router.pathname == "/about" ? `${style.active}` : ""}>
            _über mich
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
