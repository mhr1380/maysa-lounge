import React, { useState } from "react";

const CartPopup = ({ cartItems, setCartItems, onClose, show }) => {
  const increaseItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].count += 1;
    setCartItems(updatedCartItems);
  };

  const decreaseItem = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].count > 1) {
      updatedCartItems[index].count -= 1;
    } else {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    return totalPrice;
  };

  return (
    <div
      className={`fixed bottom-0 left-0 p-4 pt-12 bg-[#2d2d2d] h-screen shadow-lg w-[80%] lg:w-[400px] text-white z-30 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out`}
    >
      <button
        className="absolute top-4 right-4 text-white font-bold text-xl"
        onClick={() => {
          onClose();
        }}
      >
        X
      </button>
      <h2 className="text-xl font-bold mb-4 text-white">لیست سفارشات</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <div>
                <span className="font-bold text-white">{item.name}</span> -{" "}
                {item.price * item.count} تومان
              </div>
              <div>
                <div className="flex gap-x-1 items-center">
                  <button
                    className="bg-[#a29378] rounded-full w-5 h-5"
                    onClick={() => decreaseItem(index)}
                  >
                    -
                  </button>
                  <div>{item.count}</div>
                  <button
                    className="bg-[#a29378] rounded-full w-5 h-5"
                    onClick={() => increaseItem(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <span className="font-bold">مجموع قیمت: </span>
            {calculateTotalPrice()} تومان
          </div>
        </div>
      ) : (
        <p className="text-white">سبد شما خالیست.</p>
      )}
    </div>
  );
};

export default CartPopup;
