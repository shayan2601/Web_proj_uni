import { useDispatch, useSelector } from "react-redux";
import { addToRepairBasket } from "../slices/repairBasketSlice";
import { selectMobile } from "../slices/repairSlice";

function MobileBoxes({ title, Icon, price, id, screen_replacement, battery_replacement, liquid_damage, camera_damage }) {
  const dispatch = useDispatch();

  const mobileName = useSelector(selectMobile);

  const repairCart = () => {
    if(title == "Screen Replacement"){
      dispatch(
        addToRepairBasket({
          mobileName: mobileName.name,
          title: title,
          price: screen_replacement,
          icon: Icon,
          id: id,
        })
      );
    }else if(title == "Battery Replacement"){
      dispatch(
        addToRepairBasket({
          mobileName: mobileName.name,
          title: title,
          price: battery_replacement,
          icon: Icon,
          id: id,
        })
      );
    }else if(title == "Liquid damage"){
      dispatch(
        addToRepairBasket({
          mobileName: mobileName.name,
          title: title,
          price: liquid_damage,
          icon: Icon,
          id: id,
        })
      );
    }else{
      dispatch(
        addToRepairBasket({
          mobileName: mobileName.name,
          title: title,
          price: camera_damage,
          icon: Icon,
          id: id,
        })
      );
    }
    
  };

  return (
    <div className=" mt-4">
      {/* <p className="font-bold text-yellow-500 bg-gray-700 p-2 rounded-md text-center mt-10 text-xl">
        {mobileName?.name}
      </p> */}
      <div
        onClick={repairCart}
        className="bg-white rounded-lg shadow-xl hover:shadow-2xl p-10 mt-5 m-5 grid place-items-center space-y-5"
      >
        <Icon className="text-8xl" />
        <h1>{title}</h1>
        <h1>£{title == "Screen Replacement" ? screen_replacement : title == "Battery Replacement" ? battery_replacement : title == "Liquid damage" ? liquid_damage : title == "Camera damage" ? camera_damage : null}
       </h1>
        <button className="border-4 border-yellow-300 rounded-full shadow-lg hover:shadow-2xl px-4 font-semibold hover:bg-black hover:text-white">
          Select
        </button>
      </div>
    </div>
  );
}

export default MobileBoxes;
