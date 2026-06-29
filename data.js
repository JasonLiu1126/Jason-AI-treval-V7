const img=q=>"https://tse1.mm.bing.net/th?q="+encodeURIComponent(q)+"&w=900&h=700&c=7";
const gmap=q=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
const amap=q=>"https://maps.apple.com/?q="+encodeURIComponent(q);
const gdir=(from,to)=>"https://www.google.com/maps/dir/?api=1&origin="+encodeURIComponent(from)+"&destination="+encodeURIComponent(to)+"&travelmode=transit";

const DATA={
areas:[
{name:"梅田",lat:34.7047,lng:135.4968},
{name:"心齋橋",lat:34.6737,lng:135.501},
{name:"KIX",lat:34.434,lng:135.2329},
{name:"臨空城",lat:34.4087,lng:135.2978},
{name:"弁天町",lat:34.6708,lng:135.4607},
{name:"USJ",lat:34.6654,lng:135.4323},
{name:"萬博公園",lat:34.8104,lng:135.532},
{name:"新大阪",lat:34.7335,lng:135.5001},
{name:"橫濱關內",lat:35.4412,lng:139.6365},
{name:"港未來",lat:35.4579,lng:139.6328},
{name:"八景島",lat:35.3375,lng:139.6466},
{name:"錦糸町",lat:35.6961,lng:139.8157},
{name:"淺草",lat:35.7148,lng:139.7967},
{name:"台場",lat:35.6252,lng:139.7757},
{name:"銀座",lat:35.6697,lng:139.7647},
{name:"麻布台",lat:35.6602,lng:139.7407},
{name:"豐洲",lat:35.6447,lng:139.7838},
{name:"成田",lat:35.773,lng:140.3929}
],
days:[
{day:1,date:"2026-07-01",label:"7/1（三）",city:"大阪",area:"KIX・臨空城・弁天町",photo:img("Rinku Premium Outlets Osaka"),hotel:{name:"ART 大阪灣酒店",q:"Art Hotel Osaka Bay Tower",lat:34.6708,lng:135.4607},plan:["抵達 KIX","臨空城 Premium Outlets","Check in ART 大阪灣酒店"],next:"臨空城先買鞋與外套",center:"Rinku Premium Outlets",keys:["鞋","外套","Outlet"],mapLinks:[{label:"KIX 關西機場",q:"Kansai International Airport Terminal 1",lat:34.434,lng:135.2329},{label:"臨空城 Outlet",q:"Rinku Premium Outlets",lat:34.4087,lng:135.2978},{label:"ART 大阪灣酒店",q:"Art Hotel Osaka Bay Tower",lat:34.6708,lng:135.4607}]},
{day:2,date:"2026-07-02",label:"7/2（四）",city:"大阪",area:"USJ",photo:img("Universal Studios Japan Super Nintendo World"),hotel:{name:"ART 大阪灣酒店",q:"Art Hotel Osaka Bay Tower",lat:34.6708,lng:135.4607},plan:["大阪環球影城","早點出門搶任天堂整理券"],next:"任天堂區優先，紀念品預算先講好。",center:"Universal Studios Japan",keys:["USJ限定","Nintendo","小孩"],mapLinks:[{label:"USJ 大阪環球影城",q:"Universal Studios Japan",lat:34.6654,lng:135.4323}]},
{day:3,date:"2026-07-03",label:"7/3（五）",city:"大阪",area:"梅田・難波・心齋橋",photo:img("Umeda Osaka LUCUA Grand Front shopping"),hotel:{name:"阪急大阪龍仕柏酒店",q:"Hotel Hankyu Respire Osaka",lat:34.7047,lng:135.4968},plan:["Check in 阪急大阪龍仕柏酒店","ORIHICA / LUCUA / Loft","心齋橋","17:00 / 19:00 LaBless 頭髮"],next:"ORIHICA → LUCUA → Grand Front → LaBless ONE＆LaLaBless。",center:"Hotel Hankyu Respire Osaka",keys:["ORIHICA","SUQQU","DECORTÉ","IPSA","LaBless"],mapLinks:[{label:"ORIHICA DIAMOR大阪店",q:"ORIHICA DIAMOR大阪店",lat:34.6997,lng:135.4975},{label:"LUCUA Osaka",q:"LUCUA Osaka",lat:34.7046,lng:135.4956},{label:"LaBless ONE＆LaLaBless",q:"LaBless ONE LaLaBless グランフロント大阪北館 B1F",lat:34.7064,lng:135.4949}]},
{day:4,date:"2026-07-04",label:"7/4（六）",city:"大阪",area:"梅田・萬博公園",photo:img("Expo 70 Commemorative Park Osaka Tower of the Sun"),hotel:{name:"阪急大阪龍仕柏酒店",q:"Hotel Hankyu Respire Osaka",lat:34.7047,lng:135.4968},plan:["10:00 頭髮","早上補梅田","萬博公園"],next:"早上補梅田；下午萬博。",center:"Expo 70 Commemorative Park Osaka",keys:["GLOBAL WORK","WORKMAN","防曬"],mapLinks:[{label:"LaBless ONE＆LaLaBless",q:"LaBless ONE LaLaBless グランフロント大阪北館 B1F",lat:34.7064,lng:135.4949},{label:"萬博公園",q:"Expo '70 Commemorative Park Osaka",lat:34.8104,lng:135.532}]},
{day:5,date:"2026-07-05",label:"7/5（日）",city:"橫濱",area:"大阪 → 橫濱",photo:img("Shinkansen Osaka to Yokohama"),hotel:{name:"Hotel Comento Yokohama Kannai",q:"Hotel Comento Yokohama Kannai",lat:35.4412,lng:139.6365},plan:["Check out","17:00 新幹線","Check in Hotel Comento"],next:"移動日，不買重物。",center:"Hotel Comento Yokohama Kannai",keys:["行李","便利商店","移動"],mapLinks:[{label:"新大阪站",q:"Shin-Osaka Station",lat:34.7335,lng:135.5001},{label:"新橫濱站",q:"Shin-Yokohama Station",lat:35.5075,lng:139.6175}]},
{day:6,date:"2026-07-06",label:"7/6（一）",city:"橫濱",area:"港未來",photo:img("Yokohama Minato Mirai Red Brick Warehouse night"),hotel:{name:"Hotel Comento Yokohama Kannai",q:"Hotel Comento Yokohama Kannai",lat:35.4412,lng:139.6365},plan:["杯麵博物館","紅磚倉庫","橫濱空中纜車","港未來夜景"],next:"MARK IS 補買，晚上拍照。",center:"MARK IS Minato Mirai",keys:["MARK IS","Loft","紅磚倉庫"],mapLinks:[{label:"杯麵博物館",q:"Cup Noodles Museum Yokohama",lat:35.4557,lng:139.6389},{label:"MARK IS 港未來",q:"MARK IS Minato Mirai",lat:35.4579,lng:139.6328}]},
{day:7,date:"2026-07-07",label:"7/7（二）",city:"橫濱",area:"八景島・中華街",photo:img("Yokohama Hakkeijima Sea Paradise Chinatown"),hotel:{name:"Hotel Comento Yokohama Kannai",q:"Hotel Comento Yokohama Kannai",lat:35.4412,lng:139.6365},plan:["飯店早餐","八景島","中華街晚餐"],next:"景點日，不排重購物。",center:"Yokohama Chinatown",keys:["八景島","中華街"],mapLinks:[{label:"八景島",q:"Yokohama Hakkeijima Sea Paradise",lat:35.3375,lng:139.6466},{label:"橫濱中華街",q:"Yokohama Chinatown",lat:35.4437,lng:139.6451}]},
{day:8,date:"2026-07-08",label:"7/8（三）",city:"東京",area:"錦糸町",photo:img("Kinshicho Tokyo PARCO shopping"),hotel:{name:"MIMARU Tokyo Kinshicho",q:"MIMARU Tokyo Kinshicho",lat:35.6961,lng:139.8157},plan:["飯店早餐","Check out","Check in 放行李","錦糸町補貨"],next:"東京補貨日。",center:"MIMARU Tokyo Kinshicho",keys:["PARCO","藥妝","UNIQLO"],mapLinks:[{label:"MIMARU Tokyo Kinshicho",q:"MIMARU Tokyo Kinshicho",lat:35.6961,lng:139.8157},{label:"錦糸町 PARCO",q:"Kinshicho PARCO",lat:35.6965,lng:139.8138}]},
{day:9,date:"2026-07-09",label:"7/9（四）",city:"東京",area:"淺草・台場",photo:img("Asakusa Sensoji Odaiba DiverCity Gundam"),hotel:{name:"MIMARU Tokyo Kinshicho",q:"MIMARU Tokyo Kinshicho",lat:35.6961,lng:139.8157},plan:["淺草寺","10:40 前到淺草碼頭","Tokyo Cruise Emeraldas 11:00","台場","DiverCity / 鋼彈"],next:"台場輕鬆逛。",center:"DiverCity Tokyo Plaza",keys:["DiverCity","鋼彈","台場"],mapLinks:[{label:"淺草寺",q:"Senso-ji Temple",lat:35.7148,lng:139.7967},{label:"DiverCity Tokyo Plaza",q:"DiverCity Tokyo Plaza",lat:35.6252,lng:139.7757}]},
{day:10,date:"2026-07-10",label:"7/10（五）",city:"東京",area:"麻布台・豐洲・銀座",photo:img("Ginza Six Uniqlo Ginza Tokyo shopping"),hotel:{name:"MIMARU Tokyo Kinshicho",q:"MIMARU Tokyo Kinshicho",lat:35.6961,lng:139.8157},plan:["teamLab 麻布台","豐洲千客萬來","mont-bell 東京京橋店","UNIQLO 銀座"],next:"銀座收尾。",center:"UNIQLO Ginza",keys:["UNIQLO","GINZA SIX","SHIRO","THREE","POLA"],mapLinks:[{label:"teamLab Borderless 麻布台",q:"teamLab Borderless Azabudai Hills",lat:35.6602,lng:139.7407},{label:"UNIQLO 銀座",q:"UNIQLO Ginza",lat:35.6697,lng:139.7647}]},
{day:11,date:"2026-07-11",label:"7/11（六）",city:"東京",area:"成田返台",photo:img("Narita Airport Terminal 2 duty free"),hotel:{name:"返台",q:"Narita Airport Terminal 2",lat:35.773,lng:140.3929},plan:["成田機場 T2 → 桃園機場 T2"],next:"只補免稅與伴手禮。",center:"Narita Airport Terminal 2",keys:["免稅","伴手禮"],mapLinks:[{label:"成田機場 T2",q:"Narita Airport Terminal 2",lat:35.773,lng:140.3929}]}
],
destinations:[
{name:"LaBless ONE＆LaLaBless",area:"梅田",q:"LaBless ONE LaLaBless グランフロント大阪北館 B1F",lat:34.7064,lng:135.4949,type:"剪頭髮",day:[3,4],note:"大阪府大阪市北区大深町3-1 グランフロント大阪北館 B1F"},
{name:"ORIHICA DIAMOR大阪店",area:"梅田",q:"ORIHICA DIAMOR大阪店",lat:34.6997,lng:135.4975,type:"購物",day:[3]},
{name:"LUCUA Osaka",area:"梅田",q:"LUCUA Osaka",lat:34.7046,lng:135.4956,type:"購物",day:[3,4]},
{name:"HARBS 梅田",area:"梅田",q:"HARBS Umeda Osaka",lat:34.7046,lng:135.4956,type:"美食",day:[3,4]},
{name:"Universal Studios Japan",area:"USJ",q:"Universal Studios Japan",lat:34.6654,lng:135.4323,type:"景點",day:[2]},
{name:"萬博公園",area:"萬博公園",q:"Expo '70 Commemorative Park Osaka",lat:34.8104,lng:135.532,type:"景點",day:[4]},
{name:"Hotel Comento Yokohama Kannai",area:"橫濱關內",q:"Hotel Comento Yokohama Kannai",lat:35.4412,lng:139.6365,type:"飯店",day:[5,6,7]},
{name:"MARK IS 港未來",area:"港未來",q:"MARK IS Minato Mirai",lat:35.4579,lng:139.6328,type:"購物",day:[6]},
{name:"八景島",area:"八景島",q:"Yokohama Hakkeijima Sea Paradise",lat:35.3375,lng:139.6466,type:"景點",day:[7]},
{name:"DiverCity Tokyo Plaza",area:"台場",q:"DiverCity Tokyo Plaza",lat:35.6252,lng:139.7757,type:"購物",day:[9]},
{name:"UNIQLO 銀座",area:"銀座",q:"UNIQLO Ginza",lat:35.6697,lng:139.7647,type:"購物",day:[10]},
{name:"成田機場 T2",area:"成田",q:"Narita Airport Terminal 2",lat:35.773,lng:140.3929,type:"機場",day:[11]}
],
routes:[
{from:"心齋橋",to:"梅田",title:"心齋橋 / 難波 → 梅田 / LaBless",options:[{label:"御堂筋線最快",best:true,mode:"🚇 Osaka Metro",time:"約15～22分鐘",fare:"約 ¥240",stops:"3站",transfer:"0次",steps:["步行到 Osaka Metro 心齋橋站","御堂筋線往梅田 / 新大阪方向","梅田站下車","步行約8～10分鐘到 Grand Front Osaka 北館 B1F"]},{label:"Taxi",mode:"🚕",time:"約15～30分鐘",fare:"約 ¥2,000～¥3,500",stops:"直達",transfer:"0次",steps:["適合買很多或晚上回飯店"]}]},
{from:"梅田",to:"心齋橋",title:"梅田 → 心齋橋 / 難波",options:[{label:"御堂筋線最快",best:true,mode:"🚇 Osaka Metro",time:"約12～18分鐘",fare:"約 ¥240",stops:"3站",transfer:"0次",steps:["Osaka Metro 梅田站上車","御堂筋線往天王寺 / なかもず方向","心齋橋站下車"]}]},
{from:"梅田",to:"USJ",title:"梅田 / 大阪站 → USJ",options:[{label:"JR 少轉乘",best:true,mode:"🚆 JR",time:"約15～25分鐘",fare:"約 ¥190～¥230",stops:"約5站",transfer:"0～1次",steps:["JR 大阪站上車","大阪環狀線往西九条方向","西九条轉 JR 夢咲線（若非直通）","Universal City站下車"]}]},
{from:"USJ",to:"梅田",title:"USJ → 梅田 / LaBless",options:[{label:"JR 回大阪站",best:true,mode:"🚆 JR",time:"約20～30分鐘",fare:"約 ¥190～¥230",stops:"約5站",transfer:"0～1次",steps:["Universal City站上車","JR 夢咲線到西九条","轉大阪環狀線到大阪站","步行到 LUCUA / Grand Front / LaBless"]}]},
{from:"梅田",to:"萬博公園",title:"梅田 → 萬博公園",options:[{label:"Metro＋大阪單軌",best:true,mode:"🚇＋Monorail",time:"約45～55分鐘",fare:"約 ¥650～¥800",stops:"約10站以上",transfer:"1次",steps:["梅田站搭御堂筋線 / 北大阪急行往千里中央","千里中央轉大阪單軌","万博記念公園站下車"]}]},
{from:"梅田",to:"新大阪",title:"梅田 / 大阪站 → 新大阪",options:[{label:"JR 京都線",best:true,mode:"🚆 JR",time:"約4～6分鐘",fare:"約 ¥170",stops:"1站",transfer:"0次",steps:["JR 大阪站上車","JR 京都線往京都方向","新大阪站下車"]},{label:"御堂筋線",mode:"🚇 Metro",time:"約6～8分鐘",fare:"約 ¥240",stops:"3站",transfer:"0次",steps:["梅田站搭御堂筋線","新大阪站下車"]}]},
{from:"橫濱關內",to:"港未來",title:"關內飯店 → 港未來",options:[{label:"步行散策",best:true,mode:"🚶",time:"約20～30分鐘",fare:"¥0",stops:"沿路走",transfer:"0次",steps:["從關內飯店出發","步行往櫻木町 / 港未來方向"]},{label:"JR 1站",mode:"🚆 JR",time:"約15～22分鐘",fare:"約 ¥150",stops:"1站",transfer:"0次",steps:["關內站搭 JR 根岸線","櫻木町站下車"]}]},
{from:"橫濱關內",to:"八景島",title:"關內 → 八景島",options:[{label:"JR＋Seaside Line",best:true,mode:"🚆",time:"約40～55分鐘",fare:"約 ¥600～¥750",stops:"約10～15站",transfer:"1次",steps:["JR 關內站到新杉田站","轉 Yokohama Seaside Line","八景島站下車"]}]},
{from:"錦糸町",to:"淺草",title:"錦糸町 → 淺草",options:[{label:"半藏門線＋都營淺草線",best:true,mode:"🚇",time:"約20～30分鐘",fare:"約 ¥220～¥300",stops:"約3～5站",transfer:"1次",steps:["錦糸町搭半藏門線到押上","押上轉都營淺草線","淺草站下車"]}]},
{from:"淺草",to:"台場",title:"淺草 → 台場",options:[{label:"Tokyo Cruise",best:true,mode:"🚢",time:"船約40～60分鐘",fare:"約 ¥1,500～¥2,200",stops:"水路",transfer:"0次",steps:["前往 Asakusa Pier","搭 Tokyo Cruise / Emeraldas 到台場","步行到 DiverCity"]},{label:"電車備案",mode:"🚇",time:"約45～60分鐘",fare:"約 ¥500～¥700",stops:"多站",transfer:"1～2次",steps:["淺草搭地鐵","轉百合海鷗線或臨海線到台場"]}]},
{from:"台場",to:"錦糸町",title:"台場 → 錦糸町",options:[{label:"臨海線＋JR/Metro",best:true,mode:"🚆",time:"約40～55分鐘",fare:"約 ¥500～¥700",stops:"多站",transfer:"1～2次",steps:["東京テレポート站出發","搭臨海線","轉 JR 或 Metro 回錦糸町"]}]},
{from:"錦糸町",to:"銀座",title:"錦糸町 → 銀座",options:[{label:"JR＋步行/Metro",best:true,mode:"🚆/🚇",time:"約20～30分鐘",fare:"約 ¥220～¥300",stops:"約4～7站",transfer:"0～1次",steps:["錦糸町站出發","JR 到東京 / 有樂町周邊","步行或轉 Metro 到銀座"]}]},
{from:"銀座",to:"麻布台",title:"銀座 → teamLab 麻布台",options:[{label:"Metro",best:true,mode:"🚇",time:"約20～30分鐘",fare:"約 ¥180～¥250",stops:"約3～5站",transfer:"0～1次",steps:["銀座站或周邊地鐵站出發","到神谷町 / 六本木一丁目附近","步行到 Azabudai Hills"]}]},
{from:"錦糸町",to:"成田",title:"錦糸町 → 成田機場 T2",options:[{label:"JR 總武快速",best:true,mode:"🚆 JR",time:"約75～95分鐘",fare:"約 ¥1,500～¥1,700",stops:"多站",transfer:"0～1次",steps:["錦糸町站出發","JR 總武快速 / 成田方向","成田空港第2ビル站下車"]},{label:"東京站轉 NEX",mode:"🚆 NEX",time:"約75～95分鐘",fare:"約 ¥3,000～¥3,500",stops:"較少",transfer:"1次",steps:["錦糸町到東京站","轉 Narita Express","成田機場 T2 下車"]}]}
],
recommendations:[
{name:"ORIHICA Easy Care 襯衫 / Smart Slacks",role:["Jason"],area:["梅田"],cat:"男裝",score:98,limited:false,price:"約 ¥3,990～¥7,990",save:"日本買選擇多，商務休閒好搭",why:"抗皺、可洗，適合上班與客戶拜訪。",place:"ORIHICA DIAMOR大阪店",q:"ORIHICA DIAMOR大阪店",lat:34.6997,lng:135.4975,img:img("ORIHICA easy care shirt smart slacks men")},
{name:"OCEAN TRICO Powder Wax",role:["Jason"],area:["梅田","銀座","錦糸町"],cat:"髮品",score:96,limited:false,price:"約 ¥1,500",save:"台灣較難買，適合取代猩猩粉",why:"霧面、自然蓬鬆、不黏膩。",place:"Loft / Hands / 藥妝",q:"OCEAN TRICO Powder Wax Loft Osaka",lat:34.704,lng:135.497,img:img("OCEAN TRICO Powder Wax")},
{name:"UNO BB Cream / Face Color Creator",role:["Jason"],area:["梅田","銀座","錦糸町"],cat:"男士美容",score:95,limited:false,price:"約 ¥900～¥1,500",save:"男生氣色改善CP值高",why:"自然修飾暗沉，適合旅行與上班。",place:"Loft / 藥妝 / @cosme",q:"UNO BB Cream Japan",lat:34.704,lng:135.497,img:img("UNO BB Cream Face Color Creator")},
{name:"WORKMAN DotAir / SOLOTEX 外套",role:["Jason"],area:["梅田","心齋橋"],cat:"機能衣",score:97,limited:true,price:"約 ¥2,900～¥5,800",save:"日本CP值高，台灣不好買",why:"透氣、防潑水、輕量，台灣濕熱也能穿。",place:"Workman / Workman Colors",q:"Workman Colors Osaka",lat:34.704,lng:135.497,img:img("WORKMAN DotAir Solotex jacket")},
{name:"mont-bell 輕量外套",role:["Jason"],area:["銀座"],cat:"機能衣",score:94,limited:false,price:"約 ¥8,000～¥18,000",save:"日本戶外品牌，尺寸與款式齊",why:"旅行、通勤、台灣雨天都實用。",place:"mont-bell 東京京橋店",q:"mont-bell Tokyo Kyobashi",lat:35.6761,lng:139.7702,img:img("mont-bell lightweight jacket Japan")},
{name:"SUQQU / DECORTÉ / IPSA",role:["太太"],area:["梅田","銀座"],cat:"美妝",score:98,limited:false,price:"約 ¥5,000～¥18,000",save:"日本櫃點齊，色號選擇多",why:"上班與日常妝都適合，阪急梅田/銀座最順。",place:"阪急梅田 / 銀座百貨",q:"SUQQU DECORTE IPSA Hankyu Umeda",lat:34.7035,lng:135.4987,img:img("SUQQU DECORTE IPSA cosmetics Japan")},
{name:"LULULUN / Quality 1st 面膜",role:["太太","Jason"],area:["梅田","銀座","錦糸町","港未來"],cat:"保養",score:95,limited:false,price:"約 ¥1,500～¥2,500",save:"日本買常有組合價",why:"回飯店敷很實用，也適合帶回台灣。",place:"藥妝 / Loft / @cosme",q:"LULULUN Quality 1st mask Japan",lat:34.704,lng:135.497,img:img("LULULUN Quality 1st face mask Japan")},
{name:"ete / STAR JEWELRY",role:["太太"],area:["梅田","銀座"],cat:"飾品",score:94,limited:false,price:"約 ¥8,000～¥30,000",save:"日本設計感，紀念性高",why:"耳環、項鍊、戒指都適合當旅行紀念。",place:"LUCUA / Grand Front / GINZA SIX",q:"ete jewelry LUCUA Osaka",lat:34.7046,lng:135.4956,img:img("ete STAR JEWELRY Japan")},
{name:"green label relaxing / NATURAL BEAUTY BASIC",role:["太太"],area:["梅田","銀座"],cat:"上班休閒",score:93,limited:false,price:"約 ¥6,000～¥18,000",save:"日本OL風格完整",why:"上班與週末都能穿，比單買觀光服更實用。",place:"LUCUA / Grand Front / 銀座",q:"green label relaxing women office Japan",lat:34.7046,lng:135.4956,img:img("green label relaxing women office Japan")},
{name:"Pokemon Center 限定商品",role:["小孩"],area:["梅田","台場","錦糸町"],cat:"玩具",score:99,limited:true,price:"約 ¥1,000～¥8,000",save:"日本限定與地區限定最值得",why:"小孩最有感，當行程獎勵很有效。",place:"Pokemon Center / 台場 / 梅田",q:"Pokemon Center Osaka DX",lat:34.7032,lng:135.4958,img:img("Pokemon Center Japan limited goods")},
{name:"Nintendo / USJ 任天堂限定",role:["小孩","Jason"],area:["USJ","台場"],cat:"玩具",score:99,limited:true,price:"約 ¥1,500～¥10,000",save:"限定商品回台難買",why:"USJ/台場最適合買，先設定預算。",place:"USJ / DiverCity / Nintendo Store",q:"Super Nintendo World Universal Studios Japan shop",lat:34.6654,lng:135.4323,img:img("Super Nintendo World merchandise Japan")},
{name:"Tomica / Gashapon",role:["小孩"],area:["梅田","台場","錦糸町"],cat:"玩具",score:92,limited:true,price:"約 ¥300～¥3,000",save:"小東西好帶，不占太多行李",why:"適合當每天小獎勵。",place:"Yodobashi / DiverCity / PARCO",q:"Tomica Gashapon Japan",lat:35.6252,lng:139.7757,img:img("Tomica Gashapon Japan")}
],
foods:[
{name:"HARBS 梅田",area:["梅田"],cat:"甜點",score:93,queue:"🟡 10～30分鐘",bestTime:"14:00後較順",price:"約 ¥1,500～¥2,500",why:"購物中場休息，蛋糕很適合太太與小孩。",q:"HARBS Umeda Osaka",lat:34.7046,lng:135.4956,img:img("HARBS Umeda Osaka cake")},
{name:"但馬屋 イーマ 梅田",area:["梅田"],cat:"燒肉",score:96,queue:"🟡 建議預約",bestTime:"晚餐先訂位",price:"約 ¥8,000～¥15,000",why:"想吃好一點燒肉可排。",q:"但馬屋 イーマ 梅田",lat:34.7011,lng:135.4994,img:img("Tajimaya Iima Umeda yakiniku")},
{name:"DiverCity Food Court",area:["台場"],cat:"親子快吃",score:95,queue:"🟢 流動快",bestTime:"避開12:00～13:00",price:"約 ¥1,000～¥2,000",why:"台場親子行程最方便。",q:"DiverCity Tokyo Plaza food court",lat:35.6252,lng:139.7757,img:img("DiverCity Tokyo Plaza food court")},
{name:"資生堂 Parlour 銀座",area:["銀座"],cat:"甜點",score:90,queue:"🟡 熱門時段易排",bestTime:"15:00前後",price:"約 ¥2,000～¥4,000",why:"銀座休息甜點，太太與孩子都適合。",q:"Shiseido Parlour Ginza",lat:35.6685,lng:139.7625,img:img("Shiseido Parlour Ginza dessert")}
]
};
