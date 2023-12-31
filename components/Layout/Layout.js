import Navigationbar from './Navbar';
import classes from './Layout.module.css';


function Layout(props) {
  return (
    <div>
      <Navigationbar/>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;