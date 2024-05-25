"use client";
// app/menu.page.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
type foodItem = {
  id: string;
  Name: string;
  en: string;
  price: number;
  imgURL: string;
  Detail: string;
  Pathphp: string;
  cal: string;
  Protein: string;
  Fat: string;
  Carbohydrates: string;
  Salt: string;
  Calcium: string;
  Veg: string;
  Iron: string;
  VitaminA: string;
  VitaminB1: string;
  VitaminB2: string;
  VitaminC: string;
  PlaceOfOrigin: string;
}

const createTweetContent = (selectedItems: foodItem[], url: string): string => {
  const menuText = selectedItems.map(item => `${item.Name} (${item.price}円)`).join(', ');
  const totalPrice = selectedItems.reduce((total, item) => total + item.price, 0);
  const tweetText = `私が選んだメニュー: ${menuText}。合計: ${totalPrice}円 ${url}`;
  const encodedTweetText = encodeURIComponent(tweetText);
  return `https://twitter.com/intent/tweet?text=${encodedTweetText}`;
}

const Page = () => {
  const [foodItems, setfoodItems] = useState<foodItem[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [selectedItems, setSelectedItems] = useState<foodItem[]>([]);
  const [requiredItems, setRequiredItems] = useState<string[]>([]); // 必須商品のIDを追跡するステート
  const [showRequiredItems, setShowRequiredItems] = useState(false); // 必須メニューの表示状態
  const [showDetail, setShowDetail] = useState(false); // 詳細の表示状態
  const pageUrl = "roru.dev/fu-dining";
  const pageTitle = "fu・dining ガチャ (var.2.0.0)";
  async function fetchfoodItems() {
    try {
      const res = await fetch("https://api.sssapi.app/g8UtfvezpMp9yhgI5OSjj");
      const data = await res.json();

      const items: foodItem[] = data.map((item: foodItem) => {
        if (item.id) {

          return { id: item.id, Name: item.Name, en: item.en, price: Number(item.price), imgURL: item.imgURL, Detail: item.Detail, Pathphp: item.Pathphp, cal: item.cal, Protein: item.Protein, Fat: item.Fat, Carbohydrates: item.Carbohydrates, Salt: item.Salt, Calcium: item.Calcium, Veg: item.Veg, Iron: item.Iron, VitaminA: item.VitaminA, VitaminB1: item.VitaminB1, VitaminB2: item.VitaminB2, VitaminC: item.VitaminC, PlaceOfOrigin: item.PlaceOfOrigin };
        }
      });
      setfoodItems(items);

    } catch (error) {
      alert('メニューデータの取得に失敗しました');
    }
  }
  useEffect(() => {
    fetchfoodItems();
  }
    , []);

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



  const handleSelectItems = () => {
    let currentTotal = requiredItems.reduce((total, itemId) => {
      const item = foodItems.find(item => item.id === itemId);
      return item ? total + item.price : total;
    }, 0);

    const selected = foodItems.filter(item => requiredItems.includes(item.id));
    const availableItems = foodItems.filter(item => !requiredItems.includes(item.id) && item.price <= maxPrice);

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
      <title>{pageTitle}</title>
      <h1 className="text-2xl font-bold mb-4 ">{pageTitle}</h1>
      
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
          className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center mb-2 hover:bg-gray-300 transition duration-300"
        >
          {showRequiredItems ? '必須メニューを隠す' : '必須メニューを表示'}
        </button>
        <button onClick={() => setShowDetail(!showDetail)} className="m-2 bg-indigo-400 text-white font-semibold py-2 px-4 rounded inline-flex items-center mb-2 hover:bg-indigo-500 transition duration-300">
          {showDetail ? '詳細を隠す' : '詳細を表示'}
        </button>

        {showRequiredItems && (
          <div>
            <h2 className="text-xl font-semibold mb-2 ">必須商品を選択</h2>

            <ul className="list-disc pl-5 ">
              {foodItems.map((item) => (
                <li key={item.id} className="mb-2 list-none flex">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={requiredItems.includes(item.id)}
                      onChange={(e) => handleRequiredItemChange(item.id, e.target.checked)}
                      className="mr-2"
                    />
                    {item.Name} <span className="text-gray-600">({item.price}円)</span>
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
              // keyプロップを最外層のdivに追加

             
                <div key={item.id} className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow m-8">
                  <li className="mb-2">

                    <img src={item.imgURL} alt={item.Name} width="auto" className="mt-2 mx-auto" />
                    <p className="text-lg font-medium">
                      {item.Name} <p className="text-sm text-gray-600">{item.en}</p>
                      <div className="text-gray-600">{item.price}円 </div>
                      <div className="text-gray-800 text-sm">
                        原産地: {item.PlaceOfOrigin}
                      </div>
                      {showDetail && (
                      <div className="relative text-center ">
                       
                        <ul className="text-sm text-gray-800 ">
                          <li>エネルギー: {item.cal}</li>
                          <li>たんぱく質: {item.Protein}</li>
                          <li>脂質: {item.Fat}</li>
                          <li>炭水化物: {item.Carbohydrates}</li>
                          <li>食塩相当量: {item.Salt}</li>
                          <li>カルシウム: {item.Calcium}</li>
                          <li>野菜: {item.Veg}</li>
                          <li>鉄分: {item.Iron}</li>
                          <li>ビタミンA: {item.VitaminA}</li>
                          <li>ビタミンB1: {item.VitaminB1}</li>
                          <li>ビタミンB2: {item.VitaminB2}</li>
                          <li>ビタミンC: {item.VitaminC}</li>
                        </ul>
                      
                      
                      </div>
                      )}


                               <Link href={item.Detail}><p className="text-md text-blue-600 hover:text-blue-800 ">クリックして詳細を見る</p></Link>
                            </p>

                          </li>
                      </div>
                    
            ))}
                  </ul>
                  <p className="font-bold mt-4">合計  <span className="text-emerald-500 m-8">{selectedItems.reduce((total, item) => total + item.price, 0)}円</span></p>
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