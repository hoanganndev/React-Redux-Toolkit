import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";
function App() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);
    return (
        <div className="App">
            <header className="App-header">
                <h1>Init project redux toolkit</h1>
                <div className="btn-actions">
                    <button onClick={() => dispatch(increment())}>
                        Increase
                    </button>
                    <button onClick={() => dispatch(decrement())}>
                        Decrease
                    </button>
                </div>
                <br />
                <div>Count : {count}</div>
            </header>
        </div>
    );
}

export default App;
