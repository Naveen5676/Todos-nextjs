import classes from './Navbar.module.css';
import Link from 'next/link';

function Navigationbar() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Todo's Next Js</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Todo's</Link>
          </li>
          <li>
            <Link href='/completed-task'>Completed Todo's</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigationbar;