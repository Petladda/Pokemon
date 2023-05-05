import { Link } from "react-router-dom"

export const Home = () =>{
    return (
        <div>
            <div>
            Home สวัสยินดีรับต้อน

            </div>
             <button>
                <Link to="/form"> input Something</Link>
            </button>
        </div>
    )
}
