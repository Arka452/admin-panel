import React from 'react';

const Transactions = () => {
  return (
    <div className="w-[77%] -mt-32 rounded-xl text-white bg-[#1A2236] shadow-xl">
      <div>
        <h3 className="pl-5 pt-6 text-2xl font-extralight">Latest Transactions</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-5 mx-auto">
        <h3 className="text-center">Name</h3>
        <h3 className="text-center">Status</h3>
        <h3 className="text-center">Date</h3>
        <h3 className="text-center">Amount</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-5 items-center mx-auto">
        <div className="flex items-center space-x-2 col-span-1 justify-center">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">JD</div>
          <h3 className="text-center">John Doe</h3>
        </div>
        <h3 className="text-center col-span-1 bg-yellow-600 rounded-full py-2 w-auto sm:w-[50%] ml-0 sm:ml-20">Pending</h3>
        <h3 className="text-center col-span-1">14.02.2023</h3>
        <h3 className="text-center col-span-1">$3.200</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-5 items-center mx-auto">
        <div className="flex items-center space-x-2 col-span-1 justify-center">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">JD</div>
          <h3 className="text-center">John Doe</h3>
        </div>
        <h3 className="text-center col-span-1 bg-green-600 rounded-full py-2 w-auto sm:w-[50%] ml-0 sm:ml-20">Done</h3>
        <h3 className="text-center col-span-1">14.02.2023</h3>
        <h3 className="text-center col-span-1">$3.200</h3>
      </div> <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-5 items-center mx-auto">
        <div className="flex items-center space-x-2 col-span-1 justify-center">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">JD</div>
          <h3 className="text-center">John Doe</h3>
        </div>
        <h3 className="text-center col-span-1 bg-red-600 rounded-full py-2 w-auto sm:w-[50%] ml-0 sm:ml-20">Cancelled</h3>
        <h3 className="text-center col-span-1">14.02.2023</h3>
        <h3 className="text-center col-span-1">$3.200</h3>
      </div> <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-5 items-center mx-auto">
        <div className="flex items-center space-x-2 col-span-1 justify-center">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">JD</div>
          <h3 className="text-center">John Doe</h3>
        </div>
        <h3 className="text-center col-span-1 bg-yellow-600 rounded-full py-2 w-auto sm:w-[50%] ml-0 sm:ml-20">Pending</h3>
        <h3 className="text-center col-span-1">14.02.2023</h3>
        <h3 className="text-center col-span-1">$3.200</h3>
      </div> <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-5 items-center mx-auto">
        <div className="flex items-center space-x-2 col-span-1 justify-center">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">JD</div>
          <h3 className="text-center">John Doe</h3>
        </div>
        <h3 className="text-center col-span-1 bg-green-600 rounded-full py-2 w-auto sm:w-[50%] ml-0 sm:ml-20">Done</h3>
        <h3 className="text-center col-span-1">14.02.2023</h3>
        <h3 className="text-center col-span-1">$3.200</h3>
      </div>
    </div>
  );
};

export default Transactions;