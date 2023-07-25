import "./styles.css";
import { useReducer } from "react";
const initialState = {
  name: "mybtn",
  value: 0
};
export default function App() {
  const reducerfnc = (state, action) => {
    switch (action.type) {
      case "Increment":
        return {
          ...state,
          value: state.value + 1
        };
      case "change-text":
        return {
          ...state,
          name: action.name
        };
      default: {
      }
    }
  };
  const [state, dispatch] = useReducer(reducerfnc, initialState);
  return (
    <div className="App">
      <h1>
        {state.name} {state.value}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: "Increment"
          })
        }
      >
        Update
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "change-text",
            name: "Kuch Bhi"
          })
        }
      >
        Change NAme
      </button>
    </div>
  );
}
