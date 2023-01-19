import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, showProduct } from "../slices/basketSlice";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import react, { useState } from "react";
import { addGrade } from "../slices/basketSlice";

function PhonesProducts({ title, id, price, category, image }) {
  const dispatch = useDispatch();

  const router = useRouter();

  const [age, setAge] = useState("");

  const gradeChangeA = () => {
    dispatch(addGrade({ grade: "A" }));
  };
  const gradeChangeB = () => {
    dispatch(addGrade({ grade: "B" }));
  };
  const gradeChangeC = () => {
    dispatch(addGrade({ grade: "C" }));
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // const addItems = () => {
  //   dispatch(
  //     addToBasket({
  //       title: title,
  //       id: id,
  //       price: price,
  //       category: category,
  //       image: image,
  //     })
  //   );
  // };

  const openPhone = () => {
    router.push("/openPhone");
    dispatch(
      showProduct({
        title: title,
        id: id,
        price: price,
        category: category,
        image: image,
      })
    );
    if (!age) {
      alert("Please Select grade");
      router.push("./phones");
    }
  };

  return (
    <div className=" flex-col items-center  bg-white md:p-8 rounded-lg mx-auto shadow-md hover:shadow-2xl cursor-pointer px-24 py-8 mt-8">
      <p className="text-gray-600 italic absolute top-2 right-2">{category}</p>
      <img
        onClick={openPhone}
        objectFit="contain"
        src={image}
        className="  w-56 object-cover rounded-md mt-6"
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select grade</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem onClick={gradeChangeA} value={1}>
            Grade A
          </MenuItem>
          <MenuItem onClick={gradeChangeB} value={2}>
            Grade B
          </MenuItem>
          <MenuItem onClick={gradeChangeC} value={3}>
            Grade C
          </MenuItem>
        </Select>
      </FormControl>
      <h1 className="font-bold mt-4">{title}</h1>

      <div className="font-semibold mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {/* 
      <button onClick={addItems} className="mt-auto button px-4">
        Add to Basket
      </button> */}
    </div>
  );
}

export default PhonesProducts;
