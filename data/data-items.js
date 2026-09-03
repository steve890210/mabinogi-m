// data-items.js — 道具與標籤資料
// 這個檔只放資料，不放函式。要改道具與標籤資料就改這裡。
// 由 index.html 的 <script src> 自動載入。

/* 瑪奇M的所有道具清單。 */
const ITEMS = {
  wheat: {
    name: "小麥", 
    tags: ["canALLStore","canSell"],
    desc: "結滿堅硬小顆粒的穀物。<br>可磨粉製作麵包或熬煮食用。<br>可在村莊的稻田中取得。"  },
  corn: {
    name: "玉米",
    tags: ["canALLStore","canSell"],
    desc: "飽滿金黃顆粒整齊排列的玉米。<br>可進行各種料理食用。<br>可在村莊的稻田中取得。"  },
};

 /* 瑪奇M的所有道具的物品標籤。
   ── 代號對照表（加道具時 tags 就填左邊的代號）──
     noTrade      = 無法交易
     canALLStore  = 可使用公用保管箱
     canSell      = 可販售
     material     = 材料                              */

const TAGS = {
  noTrade: { name:"無法交易"},
  canALLStore: { name:"可使用公用保管箱"},
  canSell: { name:"可販售"},
  material: { name:"材料"},
};

/* 道具的分類屬性標籤 */
const ITEMCATEGORIES = {
  材
