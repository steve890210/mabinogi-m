// data-npcs.js — NPC 與地區資料
// 這個檔只放資料，不放函式。要改NPC 與地區資料就改這裡。
// 由 index.html 的 <script src> 自動載入。

/* NPC 資料之後也會用同一套做法放在這裡，先留空示範。 */
const REGIONS = ["提爾克那", "杜加德走廊", "杜巴頓","希德斯特雪原","庫漢"]; 

 const NPCS = [
  {
    name:"特蕾西",
    region:"杜加德走廊",
    img:"img/特蕾西.png",
    desc:"",
    sells:[
      { item:"繃帶", price:"50", currency:"金幣" },
      { item:"神秘藥水", price:"1", currency:"紅寶石" },
      { item:"小麥", price:"1", currency:"金幣" },
    ],
    barter:[
      { item:"", price:"", currency:"" },
    ],
  },
  {
    name:"艾爾文",
    region:"杜加德走廊",
    img:"",
    desc:"",
    sells:[
      { item:"", price:"", currency:"" },
    ],
     barter:[
      { item:"", price:"", currency:"" },
    ],
   
  },
];
