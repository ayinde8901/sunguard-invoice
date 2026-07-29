import "./Header.css";
import logo from "../Assets/sunguardlogo.jpeg";

function Header() {
  return (
    <header className="header">

      <div className="brand">
        <img 
          src={logo} 
          alt="Sunguard Logo" 
          className="logo"
        />

        <div>
          <h1>SUNGUARD</h1>
          <p>Solar Installation | CCTV Security Systems</p>
          <p>WhatsApp: 09030959063</p>
        </div>

      </div>

    </header>
  );
}

export default Header;