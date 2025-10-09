

const Nav = ({query, handleInputChange}) => {
  return (
    <nav>
        <div className="nav-container">
            <input 
                type="text" 
                className="search-input"
                onChange= {handleInputChange}
                value= {query}
                placeholder= "Enter package name" 
            />
        </div>
        <div className="profile-container">
            <a href="#">All</a>
            <a href="">Medicine</a>
            <a href="#">Nursing</a>
        </div>
    </nav>
  );
}

export default Nav;