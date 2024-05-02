import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PedalBikeRoundedIcon from '@mui/icons-material/PedalBikeRounded';
import Divider from '@mui/material/Divider';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import './Nav.css'
const logOut = () => {
  if (localStorage.token === null || localStorage.token === undefined){
    alert("No has iniciado sesión aún")
  } else {
    alert("Has finalizado la sesión")
    localStorage.removeItem('token');
    localStorage.removeItem('useremail');
    localStorage.removeItem('user_name');
    localStorage.removeItem('mobil_phone');
    localStorage.removeItem('address');
    localStorage.removeItem('userid');
  }
}

const Nav = () => {
  return (
    <div style={{ display: 'flex', height: '100vh'}}>
      <Sidebar classname="app">
        <Menu>
          <MenuItem className="menu1" icon={<MenuRoundedIcon/>}>
            <h2>Menu</h2>
          </MenuItem>
          <MenuItem icon={<FileUploadRoundedIcon />}>
            <Link to="/signup" >Sign Up</Link>
          </MenuItem>
          <MenuItem icon={<LoginRoundedIcon />}>
            <Link to="/login" >Log In</Link>
          </MenuItem>
          <Divider />
          <MenuItem icon={<PedalBikeRoundedIcon />}>
            <Link to="/productos" >Productos</Link>
          </MenuItem>
          <MenuItem icon={<ShoppingCartRoundedIcon />}>
            <Link to="/shop" >Carrito</Link>
          </MenuItem>
          <Divider/>
          <MenuItem icon={<LogoutRoundedIcon />}>
            <Link to="/LogIn" onClick={logOut} >Log Out</Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      {/* <h1>WELCOME TO QUICKPAY</h1> */}
    </div>
  );
};

export default Nav;
