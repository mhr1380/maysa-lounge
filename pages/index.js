import Header from "../components/home/Header";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { MenuItem } from "@/components/home/MenuItem";
import { CategoryItem } from "@/components/home/CategoryItem";
import { SingleItemPopup } from "@/components/home/SingleItemPopup";
import CartPopup from "@/components/home/CartPopup";
import maysa from "@/assets/images/maysa.jpg";

import Image from "next/image";
let priority = []; //add priority categories here by order {name:"cat name"}
const Home = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(false);
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSingleItemPopup, setShowSingleItemPopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(
          "https://fancymenu.ir/wp-json/wp/v2/restaurant/10?_fields=menu_items,menu_category,meta,title"
        );
        // set categires and foods in the categories
        setRestaurantDetails(response.data);
        const categories = response.data.menu_category;
        categories.forEach((cat) => {
          cat.menuItems = response.data.menu_items.filter(
            (item) => item.category == cat.term_id
          );
        });
        if (priority.length > 0) {
          const sortedCategories = [];
          priority.forEach((p) => {
            const cat = categories.find((c) => c.name === p.name);
            if (cat) {
              sortedCategories.push(cat);
            }
          });
          const remainingCategories = categories.filter(
            (c) => !priority.find((p) => p.name === c.name)
          );
          setCategories([...sortedCategories, ...remainingCategories]);
        } else {
          setCategories(categories);
        }
        setMenuItems(response.data.menu_items);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurantDetails();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <CartPopup
        cartItems={cart}
        setCartItems={setCart}
        onClose={() => setShowCartPopup(false)}
        show={showCartPopup}
      />
      <SingleItemPopup
        name={selectedItem?.name}
        description={selectedItem?.description}
        image={selectedItem?.image_url}
        price={selectedItem?.price}
        show={showSingleItemPopup}
        onAddToCart={() => {
          // add to cart , if already exists increase the count
          const item = cart.find((i) => i.name === selectedItem.name);
          if (item) {
            item.count++;
            setCart([...cart]);
          }
          if (!item) {
            setCart([...cart, { ...selectedItem, count: 1 }]);
          }

          setShowSingleItemPopup(false);
          setTimeout(() => {
            setSelectedItem(null);
          }, 400);
        }}
        onCancel={() => {
          setShowSingleItemPopup(false);
          setTimeout(() => {
            setSelectedItem(null);
          }, 400);
        }}
      />
      <div className="w-full flex flex-col items-center bg-[#a29378]">
        <Header
          logo={restaurantDetails?.meta?.icon}
          title={restaurantDetails?.title?.rendered}
          description={restaurantDetails?.meta?.description}
          cart={cart}
          onCart={() => setShowCartPopup(true)}
        />
      </div>
      <div className="flex flex-col w-full bg-[#a29378]">
        <span className="w-full h-[.5px] bg-[#0002] mb-2.5"></span>
        <div className="bg-[hsla(0,0%,100%,.12157)] font-medium text-[13px] px-8 rounded-full py-1 mb-2.5 w-max mx-auto">
          {" "}
          همه دسته بندی ها در یک نگاه
        </div>
        <div className="w-[90%] mx-auto overflow-x-auto whitespace-nowrap">
          {categories
            .filter((cat) => cat.menuItems.length > 0)
            .map((cat) => (
              <CategoryItem name={cat.name} image={cat.image} key={cat.name} />
            ))}
        </div>
      </div>
      <div className="bg-[#2d2d2d] flex flex-col pt-2">
        {categories
          .filter((cat) => cat.menuItems.length > 0)
          .map((cat) => (
            <Fragment key={cat.name}>
              <span className="flex justify-center px-2 items-center gap-x-1 mb-4">
                <span className="w-[22%] h-[2px] bg-gray-400"></span>
                <span
                  className="text-[#a29378] font-bold text-[20px]"
                  id={cat.name}
                >{`« ${cat.name} »`}</span>
                <span className="w-[22%] h-[2px] bg-gray-400"></span>
              </span>{" "}
              <div className="grid grid-cols-1 w-[90%] mx-auto gap-y-4 pb-4 h-full lg:grid-cols-2 lg:gap-x-4">
                {cat.menuItems.map((item) => (
                  <MenuItem
                    name={item.name}
                    description={item.description}
                    image={item.image_url}
                    price={item.price}
                    key={item.name}
                    onClick={() => {
                      setSelectedItem(item);
                      setShowSingleItemPopup(true);
                    }}
                  />
                ))}
              </div>
            </Fragment>
          ))}
        {categories.filter((cat) => cat.menuItems.length > 0).length === 0 ? (
          <>
            <span className="flex justify-center px-2 items-center gap-x-1 mb-4">
              <span className="w-[22%] h-[2px] bg-gray-400"></span>
              <span className="text-[#a29378] font-bold text-[20px]">{`« همه موارد »`}</span>
              <span className="w-[22%] h-[2px] bg-gray-400"></span>
            </span>{" "}
            <div className="grid grid-cols-1 w-[90%] mx-auto gap-y-4 pb-4 h-full lg:grid-cols-2 lg:gap-x-4">
              {menuItems.map((item) => (
                <MenuItem
                  name={item.name}
                  description={item.description}
                  image={item.image_url}
                  price={item.price}
                  key={item.name}
                />
              ))}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
