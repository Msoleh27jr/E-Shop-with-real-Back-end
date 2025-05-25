import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useDispatch, useSelector } from "react-redux";
import {
  Category,
  getBrand,
  GetPraducData,
} from "../../features/getProducts/GetProduct";

const Filter = () => {
  const category = useSelector((state) => state.todolist.categories);
  const brand = useSelector((state) => state.todolist.brand);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [min, setMin] = useState(170);
  const [max, setMax] = useState(220000);

  const minLimit = 170;
  const maxLimit = 220000;

  useEffect(() => {
    dispatch(Category());
    dispatch(getBrand());
  }, [dispatch]);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), max);
    setMin(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), min);
    setMax(value);
  };

  const handleMinInput = (e) => {
    const value = Number(e.target.value);
    if (value <= max && value >= minLimit) setMin(value);
  };

  const handleMaxInput = (e) => {
    const value = Number(e.target.value);
    if (value >= min && value <= maxLimit) setMax(value);
  };

  const applyFilter = () => {
    dispatch(
      GetPraducData({
        MinPrice: min,
        MaxPrice: max,
        CategoryId: selectedCategory,
        BrandId: selectedBrand,
      })
    );
  };

  return (
    <div className="space-y-3">
      <div className="md:block hidden">
        <Accordion type="single" defaultValue={"item-1"} collapsible>
          <AccordionItem asChild value="item-1">
            <div>
              <AccordionTrigger>
                <h6 className="text-[18px] font-semibold">Category</h6>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`text-[#DB4444] text-[18px] font-medium cursor-pointer ${
                    selectedCategory === null ? "underline" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedBrand(null);
                    setMax(220000);
                    setMin(170);
                  }}
                >
                  All Products
                </div>
              </AccordionContent>
              {category.map((e) => (
                <AccordionContent key={e.id}>
                  <label className="flex items-center cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === e.id}
                      onChange={() => setSelectedCategory(e.id)}
                    />
                    <span className="text-[#505050] text-[16px] font-medium">
                      {e.categoryName}
                    </span>
                  </label>
                </AccordionContent>
              ))}
            </div>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem asChild value="item-1">
            <div>
              <AccordionTrigger>
                <h6 className="text-[18px] font-semibold">Brand</h6>
              </AccordionTrigger>
              {brand.map((e) => (
                <AccordionContent key={e.id}>
                  <label className="flex gap-3 items-center cursor-pointer">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === e.id}
                      onChange={() => setSelectedBrand(e.id)}
                    />
                    <p className="text-[#505050] text-[16px] font-medium">
                      {e.brandName}
                    </p>
                  </label>
                </AccordionContent>
              ))}
            </div>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem asChild value="item-1">
            <div>
              <AccordionTrigger>
                <h6 className="text-[18px] font-semibold">Features</h6>
              </AccordionTrigger>

              <AccordionContent>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="features" />
                  <p className="text-[#505050] text-[16px] font-medium">
                    Metallitc
                  </p>
                </div>
              </AccordionContent>

              <AccordionContent>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="features" />
                  <p className="text-[#505050] text-[16px] font-medium">
                    Plastic cover
                  </p>
                </div>
              </AccordionContent>

              <AccordionContent>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="features" />
                  <p className="text-[#505050] text-[16px] font-medium">
                    8GB Ram
                  </p>
                </div>
              </AccordionContent>

              <AccordionContent>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="features" />
                  <p className="text-[#505050] text-[16px] font-medium">
                    Super power
                  </p>
                </div>
              </AccordionContent>

              <AccordionContent>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="features" />
                  <p className="text-[#505050] text-[16px] font-medium">
                    Large Memory
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">Price range</h3>
            <span className="text-gray-400">▾</span>
          </div>

          <div className="relative h-6 mb-4">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-100 rounded transform -translate-y-1/2" />
            <div
              className="absolute top-1/2 h-1 bg-red-400 rounded transform -translate-y-1/2"
              style={{
                left: `${(min / maxLimit) * 100}%`,
                right: `${100 - (max / maxLimit) * 100}%`,
              }}
            />
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={min}
              onChange={handleMinChange}
              className="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-red-400"
            />
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={max}
              onChange={handleMaxChange}
              className="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-red-400"
            />
          </div>

          <div className="flex gap-2 mb-4">
            <div className="w-1/2">
              <label className="text-xs text-gray-500 mb-1 block">Min</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                value={min}
                min={minLimit}
                max={max}
                onChange={handleMinInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-xs text-gray-500 mb-1 block">Max</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                value={max}
                min={min}
                max={maxLimit}
                onChange={handleMaxInput}
              />
            </div>
          </div>

          <button
            onClick={applyFilter}
            className="w-full border border-red-500 text-red-500 py-2 rounded-md text-sm font-medium hover:bg-red-50 transition"
          >
            Apply
          </button>
        </div>
      </div>
      <div className="md:hidden block">
        <Accordion type="single" defaultValue={"item-0"} collapsible>
          <AccordionItem asChild value="item-1">
            <div>
              <AccordionTrigger>
                <h6 className="text-[18px] font-semibold">Category</h6>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`text-[#DB4444] text-[18px] font-medium cursor-pointer ${
                    selectedCategory === null ? "underline" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedBrand(null);
                    setMax(220000);
                    setMin(170);
                  }}
                >
                  All Products
                </div>
              </AccordionContent>
              {category.map((e) => (
                <AccordionContent key={e.id}>
                  <label className="flex items-center cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === e.id}
                      onChange={() => setSelectedCategory(e.id)}
                    />
                    <span className="text-[#505050] text-[16px] font-medium">
                      {e.categoryName}
                    </span>
                  </label>
                </AccordionContent>
              ))}
            </div>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" defaultValue="item-0" collapsible>
          <AccordionItem asChild value="item-1">
            <div>
              <AccordionTrigger>
                <h6 className="text-[18px] font-semibold">Brand</h6>
              </AccordionTrigger>
              {brand.map((e) => (
                <AccordionContent key={e.id}>
                  <label className="flex gap-3 items-center cursor-pointer">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === e.id}
                      onChange={() => setSelectedBrand(e.id)}
                    />
                    <p className="text-[#505050] text-[16px] font-medium">
                      {e.brandName}
                    </p>
                  </label>
                </AccordionContent>
              ))}
            </div>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" defaultValue="item-0" collapsible>
          <AccordionItem asChild value="item-1">
            <div>
              <AccordionTrigger>
                <h6 className="text-[18px] font-semibold">Features</h6>
              </AccordionTrigger>

              <AccordionContent>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="features" />
                  <p className="text-[#505050] text-[16px] font-medium">
                    Metallitc
                  </p>
                </div>
              </AccordionContent>

              <AccordionContent>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="features" />
                  <p className="text-[#505050] text-[16px] font-medium">
                    Plastic cover
                  </p>
                </div>
              </AccordionContent>

              <AccordionContent>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="features" />
                  <p className="text-[#505050] text-[16px] font-medium">
                    8GB Ram
                  </p>
                </div>
              </AccordionContent>

              <AccordionContent>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="features" />
                  <p className="text-[#505050] text-[16px] font-medium">
                    Super power
                  </p>
                </div>
              </AccordionContent>

              <AccordionContent>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="features" />
                  <p className="text-[#505050] text-[16px] font-medium">
                    Large Memory
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">Price range</h3>
            <span className="text-gray-400">▾</span>
          </div>

          <div className="relative h-6 mb-4">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-100 rounded transform -translate-y-1/2" />
            <div
              className="absolute top-1/2 h-1 bg-red-400 rounded transform -translate-y-1/2"
              style={{
                left: `${(min / maxLimit) * 100}%`,
                right: `${100 - (max / maxLimit) * 100}%`,
              }}
            />
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={min}
              onChange={handleMinChange}
              className="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-red-400"
            />
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={max}
              onChange={handleMaxChange}
              className="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-red-400"
            />
          </div>

          <div className="flex gap-2 mb-4">
            <div className="w-1/2">
              <label className="text-xs text-gray-500 mb-1 block">Min</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                value={min}
                min={minLimit}
                max={max}
                onChange={handleMinInput}
              />
            </div>
            <div className="w-1/2">
              <label className="text-xs text-gray-500 mb-1 block">Max</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                value={max}
                min={min}
                max={maxLimit}
                onChange={handleMaxInput}
              />
            </div>
          </div>

          <button
            onClick={applyFilter}
            className="w-full border border-red-500 text-red-500 py-2 rounded-md text-sm font-medium hover:bg-red-50 transition"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
