
import { useNavigate } from "react-router-dom";


export default function Hub() {
    const navigate = useNavigate();

    return (
        <section className="hub">
            <h2>Hub</h2>
            <div className="button-container">
                <button className="hub-button" onClick={() => { navigate("/notes"); }}>Noutes</button>
                <button className="hub-button">Shewf</button>
            </div>

        </section>
    )
}
