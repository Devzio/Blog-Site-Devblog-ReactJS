import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Sorry, Page Not Found</h2>
      <br />
      <Link class="button" to="/">Back Home</Link>
    </div>
   );
}
 
export default NotFound;