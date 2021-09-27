import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(addNumber(1))}>Adicionar</button>
      <button onClick={() => dispatch(subNumber(1))}>Subitrair</button>
    </>
  );
};

export default Counter;
