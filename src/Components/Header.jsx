import logo from "../assets/logo.png"


const Header = () => {
    return (
        <div className="flex items-center flex-col">
            <img src={logo} alt="" />
            <h3>Journalism Without Fear or Favour</h3>
        </div>
    );
};

export default Header;