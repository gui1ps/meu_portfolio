import { IoIosArrowDown } from "react-icons/io";

function Buttons(props) {
  return (
    <>
      <button
        onClick={props.event}
        className="bg-transparent text-white border-0"
      >
        {props.text}
        <IoIosArrowDown />
      </button>
    </>
  );
}
export default Buttons;
