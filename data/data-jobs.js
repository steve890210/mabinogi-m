// data-jobs.js — 職業資料
// 這個檔只放資料，不放函式。要改職業資料就改這裡。
// 由 index.html 的 <script src> 自動載入。

/*----以下為職業介紹與職業技能說明內容-------*/

const CATEGORIES = ["見習戰士", "見習弓手", "見習魔法師", "見習治癒師", "見習盜賊", "見習吟遊詩人"]; // 六大分類，換成真名

const JOBS = [
  {
    name:"戰士", category:"見習戰士", desc:"",
    skills:[
      { name:"A", type:"active",  desc:"", variants:[ {rune:"A+符文", effect:""}, {rune:"B+符文", effect:""} ] },
      { name:"1", type:"passive", desc:"" },
    ],
  },
  { name:"大劍戰士", category:"見習戰士",   desc:"", skills:[] },
  { name:"劍術士",   category:"見習戰士",   desc:"", skills:[] },
  { name:"弓手",     category:"見習弓手",   desc:"", skills:[] },
  { name:"長弓兵",   category:"見習弓手",   desc:"", skills:[] },
  { name:"弩手",     category:"見習弓手",   desc:"", skills:[] },
  { name:"魔法師",   category:"見習魔法師", desc:"", skills:[] },
  { name:"冰霜術士", category:"見習魔法師", desc:"", skills:[] },
  { name:"火焰術士", category:"見習魔法師", desc:"", skills:[] },
  { name:"治癒師",   category:"見習治癒師", desc:"", skills:[] },
  { name:"祭司",     category:"見習治癒師", desc:"", skills:[] },
  { name:"修道士",   category:"見習治癒師", desc:"", skills:[] },
  { name:"盜賊",     category:"見習盜賊",   desc:"", skills:[] },
  { name:"格鬥家",   category:"見習盜賊",   desc:"", skills:[] },
  { name:"雙刀客",   category:"見習盜賊",   desc:"", skills:[] },
  { name:"吟遊詩人", category:"見習吟遊詩人", desc:"", skills:[] },
  { name:"樂師",     category:"見習吟遊詩人", desc:"", skills:[] },
  { name:"舞者",     category:"見習吟遊詩人", desc:"", skills:[] },
];

// 之後多的職業，照這樣一筆一筆加，標好它屬於哪個分類

const JOBTAGS = {
  元素: { name:"元素"},
  強擊: { name:"強擊"},
  連擊: { name:"連擊"},
  移動: { name:"移動"},
  干擾: { name:"干擾"},
  輔助: { name:"輔助"},
  生存: { name:"生存"},
  召喚: { name:"召喚"},
};
