"use client";
// app/menu.page.tsx
import React, { useEffect, useState } from 'react';

type MenuItem = {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
};

const createTweetContent = (selectedItems: MenuItem[], url: string): string => {
  const menuText = selectedItems.map(item => `${item.name} (${item.price}円)`).join(', ');
  const totalPrice = selectedItems.reduce((total, item) => total + item.price, 0);
  const tweetText = `私が選んだメニュー: ${menuText}。合計: ${totalPrice}円 ${url}`;
  const encodedTweetText = encodeURIComponent(tweetText);
  return `https://twitter.com/intent/tweet?text=${encodedTweetText}`;
}

const Page = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [requiredItems, setRequiredItems] = useState<string[]>([]); // 必須商品のIDを追跡するステート
  const [showRequiredItems, setShowRequiredItems] = useState(false); // 必須メニューの表示状態
  const pageUrl = "roru.dev/fu-dining";

  useEffect(() => {
    // メニューデータをフェッチする関数
    const fetchMenuItems = async () => {
      try {
        // ファイルからデータをフェッチ
        const response = await fetch('/menu.txt');
        const data = await response.text();
        // ファイルを行ごとに分割し、各行をタブで分割してオブジェクトに変換
        const items: MenuItem[] = data.trim().split('\n').map((line) => {
          const [id, price, name, imageUrl] = line.split('\t');
          return { id, price: parseInt(price, 10), name, imageUrl: imageUrl.trim() };
        });
        // ステートにセット
        setMenuItems(items);
      } catch (error) {
        console.error('メニューデータの取得に失敗しました', error);
      }
    };

    // データをフェッチする
    fetchMenuItems();
  }, []);

  const handlePriceInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseInt(event.target.value, 10));
  };
  const handleRequiredItemChange = (itemId: string, isChecked: boolean) => {
    setRequiredItems(prev => {
      if (isChecked) {
        // アイテムを追加
        return [...prev, itemId];
      } else {
        // アイテムを削除
        return prev.filter(id => id !== itemId);
      }
    });
  };

  let tweetLink = ''; // Declare the tweetLink variable here

  const handleSelectItems = () => {
    let currentTotal = requiredItems.reduce((total, itemId) => {
      const item = menuItems.find(item => item.id === itemId);
      return item ? total + item.price : total;
    }, 0);

    const selected = menuItems.filter(item => requiredItems.includes(item.id));
    const availableItems = menuItems.filter(item => !requiredItems.includes(item.id) && item.price <= maxPrice);

    while (currentTotal < maxPrice && availableItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableItems.length);
      const item = availableItems[randomIndex];

      if (currentTotal + item.price <= maxPrice) {
        selected.push(item);
        currentTotal += item.price;
      }

      // 選択されたアイテムを利用可能なアイテムから削除
      availableItems.splice(randomIndex, 1);
    }

    setSelectedItems(selected);
    
  };

  return (
    <div className="container mx-auto p-4 justify-center text-center ">
      <h1 className="text-2xl font-bold mb-4 ">fu・dining ガチャ</h1>
      <div className="mb-4">
        <input
          type="number"
          placeholder="上限価格を入力"
          
          value={maxPrice || ''}
          onChange={handlePriceInput}
          className="border-2 border-gray-200 rounded p-2 mr-2 "
        />
        <button onClick={handleSelectItems} className="mt-4  bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          メニューを表示
        </button>
      </div>
      <div className="m-4 justify-center text-center ">
        <button
          onClick={() => setShowRequiredItems(!showRequiredItems)}
          className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center mb-2"
        >
          {showRequiredItems ? '必須メニューを隠す' : '必須メニューを表示'}
        </button>
        {showRequiredItems && (
          <div>
            <h2 className="text-xl font-semibold mb-2 ">必須商品を選択</h2>
            <ul className="list-disc pl-5 ">
              {menuItems.map((item) => (
                <li key={item.id} className="mb-2 list-none flex">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={requiredItems.includes(item.id)}
                      onChange={(e) => handleRequiredItemChange(item.id, e.target.checked)}
                      className="mr-2"
                    />
                    {item.name} <span className="text-gray-600">({item.price}円)</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {selectedItems.length > 0 && (
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold mb-2">選ばれたメニュー</h2>
          <ul className="list-none">
            {selectedItems.map((item) => (
              <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-8">
                <li key={item.id} className="mb-2">
                  <img src={item.imageUrl} alt={item.name} width="auto" className="mt-2 mx-auto" />
                  <p className="text-lg font-medium">
                    {item.name} <div className="text-gray-600">({item.price}円)</div>
                  </p>
                </li>
              </div>
            ))}
          </ul>
          <p className="font-bold mt-4">合計  <span className="text-green-500 m-8">{selectedItems.reduce((total, item) => total + item.price, 0)}円</span></p>
        </div>
      )}
      <div className="my-8">
      <a
        href={createTweetContent(selectedItems, pageUrl)}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-700 hover:bg-gray-500 transition text-white font-bold py-2 px-4 rounded "
      >
        結果をツイートする
      </a>
      </div>
    </div>
  );
};

export default Page;