
import { useNavigate } from "react-router-dom";


export default function Hub() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Hub</h1>
            <button onClick={() => { navigate("/notes"); }}>Noutes</button>
            <button>Shewf</button>
        </>
    )
}
