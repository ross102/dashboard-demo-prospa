import logo from "../assets/logo.svg";
import savings from "../assets/savings.png";

const Sidebar = ({name}) => {
    return (
        <div className={name} >
            <img src={logo} alt="prospa logo" />
            <div className="progress-lines-container">
            <div className="progress-lines active" /> 
            <div className="progress-lines " /> 
            <div className="progress-lines " /> 
            <div className="progress-lines " /> 
            <div className="progress-lines " />
            </div>
            <div>
              <h2 className="sidebar-heading">Create multiple <br />
                  sub-accounts
              </h2>
              <p className="sidebar-text">Organize your business finances easily<br /> with multiple accounts.
                  No limits
              </p>
            </div>
            <img src={savings} className="savings" alt="savings " />
            <p className="sidebar-text">&copy; 2020 Prospa inc.</p>
        </div>

    )
}

export default Sidebar