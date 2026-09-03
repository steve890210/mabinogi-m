// data-items.js — 道具與標籤資料
// 這個檔只放資料，不放函式。要改道具與標籤資料就改這裡。
// 由 index.html 的 <script src> 自動載入。
/*----以下是非裝備類別，包含時裝和活動道具的標籤分類，可在往下延伸---
    材料: { name:"材料"},
    貨幣: { name:"貨幣"},
    消耗品: { name:"消耗品"},
    生活工具: { name:"生活工具"},
    背包: { name:"背包"},
    樂器: { name:"樂器"},
    樂譜: { name:"樂譜"},
    遊戲: { name:"遊戲"},
    其他: { name:"其他"},
    食物: { name:"食物"},
    快捷鍵: { name:"快捷鍵"},
    任務: { name:"任務"},
    染色劑: { name:"染色劑"},
    服飾: { name:"服飾"},
    時裝武器: { name:"時裝武器"},
    裝飾: { name:"裝飾"},
    坐騎: { name:"坐騎"},
    寵物: { name:"寵物"}, */

/*---------------------------*
  代號: {                          // 英文代號，全站唯一，之後用它互相連結
    name: "顯示名稱",
    category: "材料",              // 要跟 ITEM_CATEGORIES 的 key 一字不差
    tags: ["canSell"],             // 多選，代號查 TAGS；沒有就寫 []
    img: "",                       // 先留空
    price: 5,                      // 賣店價；沒有就整行不寫
    desc: "說明…<br>可換行。",
    recipe: [                      // 只有「成品」才寫；純材料整行不用寫
      { item: "corn", qty: 2 },    // item 填「材料的代號」，不是中文名
/

/* 瑪奇M的所有道具清單。 */
const ITEMS = {
  小麥: {
    name: "小麥", 
    category: "材料", 
    tags: ["canALLStore","canSell"],
    price: 1,
    desc: "結滿堅硬小顆粒的穀物。<br>可磨粉製作麵包或熬煮食用。<br>可在村莊的稻田中取得。"  },
  玉米: {
    name: "玉米",
    category: "材料", 
    tags: ["canALLStore","canSell"],
    price: 1,
    desc: "飽滿金黃顆粒整齊排列的玉米。<br>可進行各種料理食用。<br>可在村莊的稻田中取得。"  },
  起司玉米: {
    name: "起司玉米",
    category: "食物", 
    tags: ["canALLStore","canSell"],
    img: "",                       // 先留空    
    price: 5,                      // 賣店價；沒有就整行不寫
    effect: "智力+25<br>幸運+25<br>持續時間:20分鐘",
    desc: "說明…<br>可換行。",
    recipe: [                      // 只有「成品」才寫；純材料整行不用寫
      { item: "玉米", qty: 10},
      {item: "起司", qty: 2},
      {item: "藥草", qty: 2},
      {item: "糖", qty: 3},
      ],    // item 填「材料的代號」，不是中文名
    },
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



