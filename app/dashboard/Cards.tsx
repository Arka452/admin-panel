import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PeopleOutlineSharpIcon from "@mui/icons-material/PeopleOutlineSharp";
import RightBar from "./RightBar";
import Transactions from "./Transactions";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <>
    <div className="flex flex-wrap -mt-10 justify-between gap-4 sm:justify-start">
      <Card
        sx={{ minWidth: 275 }}
        className="flex-shrink-0 xl:w-3/12 rounded-xl shadow-md sm:w-[48%] md:w-[32%] h-48 bg-[#1A2236] text-white hover:bg-slate-700 transition"
      >
        <CardContent>
          <div className="flex px-4 py-4">
            <PeopleOutlineSharpIcon className="text-3xl" />
            <h3 className="ml-5 text-xl">Total Users</h3>
          </div>
          <div className="ml-16">
            <h3 className="text-3xl mt-2">10.928</h3>
          </div>
          <div className="flex space-x-2 mt-6 ml-16">
            <h3 className="text-green-600">12%</h3>
            <p>more than previous week</p>
          </div>
        </CardContent>
      </Card>
      <Card
        sx={{ minWidth: 275 }}
        className="flex-shrink-0 xl:w-3/12 rounded-xl shadow-md sm:w-[48%] md:w-[32%] h-48 bg-[#1A2236] text-white hover:bg-slate-700 transition"
      >
        <CardContent>
          <div className="flex px-4 py-4 ">
            <PeopleOutlineSharpIcon className="text-3xl" />
            <h3 className="ml-5 text-xl">Total Users</h3>
          </div>
          <div className="ml-16">
            <h3 className="text-3xl mt-2">10.928</h3>
          </div>
          <div className="flex space-x-2 mt-6 ml-16">
            <h3 className="text-green-600">12%</h3>
            <p>more than previous week</p>
          </div>
        </CardContent>
      </Card>
      <Card
        sx={{ minWidth: 275 }}
        className="flex-shrink-0 xl:w-3/12  rounded-xl shadow-md sm:w-[48%] md:w-[32%] h-48 bg-[#1A2236] text-white hover:bg-slate-700 transition"
      >
        <CardContent>
          <div className="flex px-4 py-4">
            <PeopleOutlineSharpIcon className="text-3xl" />
            <h3 className="ml-5 text-xl">Total Users</h3>
          </div>
          <div className="ml-16">
            <h3 className="text-3xl mt-2">10.928</h3>
          </div>
          <div className="flex space-x-2 mt-6 ml-16">
            <h3 className="text-green-600">12%</h3>
            <p>more than previous week</p>
          </div>
        </CardContent>
      </Card>
      <RightBar/>
    </div>
    </>
    
  );
}
