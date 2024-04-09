// import { Link } from "react-router-dom";
import  Link from "../Link";
export default function CategoryList({ arrCategory }) {
    const total = arrCategory.length
    return (
      <span>
       
        {arrCategory.map((item, index) => (
          <Link to={`/blog${item.uri}`} key={index} className="cs-post_avatar" reloadDocument>
            {item.name}{total > index + 1 ? ', ' : ''}
          </Link>
          
        ))}
     </span>
    );
  }