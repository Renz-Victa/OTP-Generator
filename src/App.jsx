import React, { useState, useMemo, useEffect } from 'react';
import './index.css'


const items = [
  "Apples",
  "Bananas",
  "Strawberries",
  "Blueberries",
  "Mangoes",
  "Pineapple",
  "Lettuce",
  "Broccoli",
  "Paper Towels",
  "Dish Soap",
];

let prevToggleItem = null;

export default function ShoppingList() {
  const [query, setQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);
}

