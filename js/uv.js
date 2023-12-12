let records=null;


fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0002-001?Authorization="+CWA_API_KEY).then((response)=>{
	return response.json();
}).then((result)=>{
    let station_list = result.records.Station;
    fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0005-001?Authorization="+CWA_API_KEY).then((response)=>{
        return response.json();
        }).then((data)=>{
            records = data.records.weatherElement.location;
            for( i = 0 ; i < records.length ; i++){
                let StationData = station_list.find(station => station.StationId == records[i].StationID);
                records[i].StationName = StationData.StationName;
            }
            console.log(records);

            add_data(0, 5, "#B2");
            add_data(5, 10, "#B3");
            add_data(10, 15, "#B4");
            add_data(16, 20, "#C2");
            add_data(20, 24, "#C3");
            add_data(24, 28, "#C4");
        })
    });

function add_data(begin, end, grid){
    for( j = begin ; j < end ; j++){
        if (records[j]) {
            let div = document.querySelector(grid);
            let divh3 = document.createElement("h3");
            let divlocation = document.createTextNode(records[j].StationName);
            divh3.appendChild(divlocation);
            div.appendChild(divh3);
            let divh2 = document.createElement("h2");
            let divvalue = document.createTextNode(records[j].UVIndex);
            let p = document.createElement("p");
            divh2.appendChild(divvalue);
            div.appendChild(divh2);
            div.appendChild(p);
        }
    }
}

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