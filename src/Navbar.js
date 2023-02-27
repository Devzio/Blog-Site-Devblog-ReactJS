import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>The Dev Blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				{/* inline css */}
				<Link to="/create" style={{ 
					color: "white",
					backgroundColor: '#42a7ff',
					borderRadius: '8px'
				}}>New Blog</Link>
			</div>
		</nav>
	);
}

export default Navbar;