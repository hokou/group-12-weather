let records=null;
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0005-001?Authorization="+CWB_API_KEY).then((response)=>{
	return response.json();
}).then((data)=>{
	records=data.records.weatherElement.location;

    let i = 0;
    for( i ; i < records.length ; i++){

        if (records[i].locationCode == 467480) {
            records[i].locationCode = "嘉義";
        }

        if (records[i].locationCode == 467490) {
            records[i].locationCode = "臺中";
        }

        if (records[i].locationCode == 467350) {
            records[i].locationCode = "澎湖";
        }

        if (records[i].locationCode == 467270) {
            records[i].locationCode = "田中 (彰化)";
        }

        if (records[i].locationCode == 467110) {
            records[i].locationCode = "金門";
        }

        if (records[i].locationCode == 467650) {
            records[i].locationCode = "日月潭 (南投)";
        }

        if (records[i].locationCode == 467660) {
            records[i].locationCode = "臺東";
        }

        if (records[i].locationCode == 467080) {
            records[i].locationCode = "宜蘭";
        }

        if (records[i].locationCode == 467620) {
            records[i].locationCode = "蘭嶼";
        }

        if (records[i].locationCode == 467480) {
            records[i].locationCode = "嘉義";
        }

        if (records[i].locationCode == 467480) {
            records[i].locationCode = "嘉義";
        }

        if (records[i].locationCode == 467050) {
            records[i].locationCode = "新屋 (桃園)";
        }

        if (records[i].locationCode == 466940) {
            records[i].locationCode = "基隆";
        }

        if (records[i].locationCode == 467610) {
            records[i].locationCode = "成功 (臺東)";
        }

        if (records[i].locationCode == 466920) {
            records[i].locationCode = "臺北";
        }

        if (records[i].locationCode == 467590) {
            records[i].locationCode = "恆春";
        }

        if (records[i].locationCode == 466910) {
            records[i].locationCode = "鞍部 (臺北)";
        }

        if (records[i].locationCode == 467570) {
            records[i].locationCode = "新竹";
        }

        if (records[i].locationCode == 467410) {
            records[i].locationCode = "臺南";
        }

        if (records[i].locationCode == 467550) {
            records[i].locationCode = "玉山 (南投)";
        }

        if (records[i].locationCode == 467440) {
            records[i].locationCode = "高雄";
        }

        if (records[i].locationCode == 467990) {
            records[i].locationCode = "馬祖";
        }

        if (records[i].locationCode == 466990) {
            records[i].locationCode = "花蓮";
        }

        console.log(records[i].locationCode, records[i].value);
    }
    

    for( j = 0 ; j < 3 ; j++){
        let B2 = document.querySelector("#B2");
        let B2h3 = document.createElement("h3");
        let B2location = document.createTextNode(records[j].locationCode);
        B2h3.appendChild(B2location);
        B2.appendChild(B2h3);
        let B2h2 = document.createElement("h2");
        let B2value = document.createTextNode(records[j].value);
        B2h2.appendChild(B2value);
        B2.appendChild(B2h2);
    }
    let B2p = document.createElement("p");
    B2p.setAttribute("class","bodyText");
    B2.appendChild(B2p);


    for( j = 3 ; j < 6 ; j++){
        let B3 = document.querySelector("#B3");
        let B3h3 = document.createElement("h3");
        let B3location = document.createTextNode(records[j].locationCode);
        B3h3.appendChild(B3location);
        B3.appendChild(B3h3);
        let B3h2 = document.createElement("h2");
        let B3value = document.createTextNode(records[j].value);
        B3h2.appendChild(B3value);
        B3.appendChild(B3h2);
    }
    let B3p = document.createElement("p");
    B3p.setAttribute("class","bodyText");
    B3.appendChild(B3p);


    for( j = 6 ; j < 9 ; j++){
        let B4 = document.querySelector("#B4");
        let B4h3 = document.createElement("h3");
        let B4location = document.createTextNode(records[j].locationCode);
        B4h3.appendChild(B4location);
        B4.appendChild(B4h3);
        let B4h2 = document.createElement("h2");
        let B4value = document.createTextNode(records[j].value);
        B4h2.appendChild(B4value);
        B4.appendChild(B4h2);
    }
    let B4p = document.createElement("p");
    B4p.setAttribute("class","bodyText");
    B4.appendChild(B4p);

    for( j = 9 ; j < 12 ; j++){
        let C2 = document.querySelector("#C2");
        let C2h3 = document.createElement("h3");
        let C2location = document.createTextNode(records[j].locationCode);
        C2h3.appendChild(C2location);
        C2.appendChild(C2h3);
        let C2h2 = document.createElement("h2");
        let C2value = document.createTextNode(records[j].value);
        C2h2.appendChild(C2value);
        C2.appendChild(C2h2);
    }
    let C2p = document.createElement("p");
    C2p.setAttribute("class","bodyText");
    C2.appendChild(C2p);

    for( j = 12 ; j < 15 ; j++){
        let C3 = document.querySelector("#C3");
        let C3h3 = document.createElement("h3");
        let C3location = document.createTextNode(records[j].locationCode);
        C3h3.appendChild(C3location);
        C3.appendChild(C3h3);
        let C3h2 = document.createElement("h2");
        let C3value = document.createTextNode(records[j].value);
        C3h2.appendChild(C3value);
        C3.appendChild(C3h2);
    }
    let C3p = document.createElement("p");
    C3p.setAttribute("class","bodyText");
    C3.appendChild(C3p);

    for( j = 15 ; j < 18 ; j++){
        let C4 = document.querySelector("#C4");
        let C4h3 = document.createElement("h3");
        let C4location = document.createTextNode(records[j].locationCode);
        C4h3.appendChild(C4location);
        C4.appendChild(C4h3);
        let C4h2 = document.createElement("h2");
        let C4value = document.createTextNode(records[j].value);
        C4h2.appendChild(C4value);
        C4.appendChild(C4h2);
    }
    let C4p = document.createElement("p");
    C4p.setAttribute("class","bodyText");
    C4.appendChild(C4p);


});


// locationCode 對照表
// 467480 嘉義
// 467490 臺中
// 467350 澎湖
// 467270 田中 (彰化)
// 467110 金門
// 467650 日月潭 (南投)
// 467660 臺東
// 467080 宜蘭
// 467620 蘭嶼
// 467050 新屋 (桃園)
// 466940 基隆
// 467610 成功 (臺東)
// 466920 臺北
// 467590 恆春
// 466910 鞍部 (臺北)
// 467570 新竹
// 467410 臺南
// 467550 玉山 (南投)
// 467440 高雄
// 467990 馬祖
// 466990 花蓮