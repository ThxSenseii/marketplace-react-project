import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './Nav.css'

const Nav = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1">
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem>
            <Link to="/signup">Sign Up</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">Log In</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/logout">Log Out</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/productos">Productos</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/carrito">Carrito</Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      {/* <h1>WELCOME TO QUICKPAY</h1> */}
    </div>
  );
};

export default Nav;