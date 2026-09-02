// data-common.js — 共用對照表（代碼→名稱）
// 這個檔只放資料，不放函式。要改共用對照表（代碼→名稱）就改這裡。
// 由 index.html 的 <script src> 自動載入。

  /* 瑪奇M所有的地方，此部分僅說明物品取得的來源，僅包含地點或是商城等，怪物掉落不再此地方 */
  const PLACE = {

};

/* 瑪奇M所有的地區難度定義。
   一 難度代號對照表 一
     normal = 一般
     hard   = 困難
     Vhard  = 非常困難
     後面可對應相關顏色代碼。  */
  const DIFFICULTY = {
    normal: { name:"一般",     color:"#f2f2f2" },
    hard:   { name:"困難",     color:"#ffff4d"},
    Vhard:  { name:"非常困難", color:"#e60000"},
  };

/*--- 以下是各種稀有度的標籤與顏色內容，可在往下延伸---*/

  const GRADES ={
    一般: { name:"一般", color:"#FFFFFF"},
    高級: { name:"高級", color:"#00DB00", curse:"0%" },
    稀有: { name:"稀有", color:"#2894FF", curse:"40%" },
    菁英: { name:"菁英", color:"#8600FF", curse:"60%" },
    史詩: { name:"史詩", color:"#FF60AF", curse:"75%" },
    傳說: { name:"傳說", color:"#FF8000", curse:"75%" },
    神話: { name:"神話", color:"#FFE66F"},
    獨特: { name:"獨特", color:"#E6E6F2"},
  };

/*----以下是裝備的標籤分類，可在往下延伸---*/

  const EQUIP_CATEGORIES = {
    武器: { name:"武器"},
    防具: { name:"防具"},
    飾品: { name:"飾品"},
    徽章: { name:"徽章"},
    寶石: { name:"寶石"},
  };

/*----以下是非裝備類別，包含時裝和活動道具的標籤分類，可在往下延伸---*/

  const ITEM_CATEGORIES = {
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
    寵物: { name:"寵物"},
  };

/*----以下是符文的標籤分類，可在往下延伸---*/

  const RUNE_CATEGORIES = {
    武器符文: { name:"武器符文"},
    防具符文: { name:"防具符文"},
    飾品符文: { name:"飾品符文"},
    徽章符文: { name:"徽章符文"},
  };
