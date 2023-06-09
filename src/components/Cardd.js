/** @format */

import React from 'react';
import card from '../assets/Screenshot 2023-04-09 090611.png';
export default function Cardd() {
  return (
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg"
      style={{ borderRadius: '30px' }}>
      <img
        class="w-full"
        src={card}
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Ettarra Gold Membership NFT</div>
        <div class="text-gray-700 text-base">Free access to all events</div>
        <div class="text-gray-700 text-base">
          Flat 30% off for All the Products
        </div>
        <div class="text-gray-700 text-base">
          Get any Cold Coffee (450ml) for free (worth upto ₹450/-),
        </div>
        <div class="text-gray-700 text-base">Official member t-shirt</div>
      </div>
      <div class="px-6 pt-4 pb-2">
        {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span> */}
      </div>
    </div>
  );
}
