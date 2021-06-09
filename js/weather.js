let records = null;
let data;

locationCode = {
    "新竹縣": 0,
    "金門縣": 1,
    "苗栗縣": 2,
    "新北市": 3,
    "宜蘭縣": 4,
    "雲林縣": 5,
    "臺南市": 6,
    "高雄市": 7,
    "彰化縣": 8,
    "臺北市": 9,
    "南投縣": 10,
    "澎湖縣": 11,
    "基隆市": 12,
    "桃園市": 13,
    "花蓮縣": 14,
    "連江縣": 15,
    "臺東縣": 16,
    "嘉義市": 17,
    "嘉義縣": 18,
    "屏東縣": 19,
    "臺中市": 20,
    "新竹市": 21,
}

weekCode = {
    0: '星期天',
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六'
}

function weatherImage(num) {
    switch (true) {
        case (num == 1):
            return 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png'
        case (num < 4):
            return 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png'
        case (num == 4):
            return 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_1-512.png'
        case (num < 42):
            return 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_6-512.png'
    }
}

function getWeather(locationName) {
    return fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=" + CWB_API_KEY + '&' + 'locationName=' + locationName).then((response) => {
        return response.json();
    }).then((jsonData) => {
        data = jsonData
    });
}


function pasrsingData(time) {
    let startTime = data['records']['locations'][0]['location'][0]['weatherElement'][10]['time'][time]['startTime'];
    let weatherDescribe = data['records']['locations'][0]['location'][0]['weatherElement'][10]['time'][time]['elementValue'][0]['value'];
    let weather = data['records']['locations'][0]['location'][0]['weatherElement'][6]['time'][time]['elementValue'][0]['value'];
    let weatherCode = data['records']['locations'][0]['location'][0]['weatherElement'][6]['time'][time]['elementValue'][1]['value'];
    let rainingRating = data['records']['locations'][0]['location'][0]['weatherElement'][0]['time'][time]['elementValue'][0]['value'];
    let lowT = data['records']['locations'][0]['location'][0]['weatherElement'][8]['time'][time]['elementValue'][0]['value'];
    let highT = data['records']['locations'][0]['location'][0]['weatherElement'][12]['time'][time]['elementValue'][0]['value'];
    let wet = data['records']['locations'][0]['location'][0]['weatherElement'][2]['time'][time]['elementValue'][0]['value'];
    let date = startTime.split(' ')[0];
    let t = startTime.split(' ')[1];
    let week = new Date(date).getDay();
    return {
        "weather": weather,
        "weatherImage": weatherImage(weatherCode),
        "rainingRating": rainingRating,
        "lowT": lowT,
        "highT": highT,
        "wet": wet,
        "date": startTime,
        "time": t,
        "week": (weekCode[week])
    }
}

function insertBlock(bDiv, weatherData) {
    console.log(weatherData)
    const wk = document.createElement('h2');
    const wDescribe = document.createElement('h3');
    const temp = document.createElement('h3');
    const rainRating = document.createElement('h3');
    const wet = document.createElement('h3');
    const date = document.createElement('p');
    const wImg = document.createElement('img');
    date.className = 'bodyText'
    wk.textContent = `${weatherData['week']} ${weatherData['time']}`;
    wDescribe.textContent = weatherData['weather'];
    rainRating.textContent = `降雨機率${weatherData['rainingRating']}%`
    temp.textContent = `溫度攝氏${weatherData['lowT']}度至${weatherData['highT']}度`
    wet.textContent = `平均濕度${weatherData['wet']}%`;
    date.textContent = weatherData['date'];
    wImg.classList = 'w-img';
    wImg.src = weatherData['weatherImage'];
    wImg.width = '150';
    bDiv.appendChild(wk);
    bDiv.appendChild(wDescribe);
    bDiv.appendChild(temp);
    bDiv.appendChild(rainRating);
    bDiv.appendChild(wet);
    bDiv.appendChild(wImg);
    bDiv.appendChild(date);
}

function weatherView() {
    const B2 = document.querySelector('.B2');
    const B3 = document.querySelector('.B3');
    const B4 = document.querySelector('.B4');
    const C1 = document.querySelector('.C1');
    const C2 = document.querySelector('.C2');
    const C3 = document.querySelector('.C3');
    const C4 = document.querySelector('.C4');
    insertBlock(B2, pasrsingData(0));
    insertBlock(B3, pasrsingData(1));
    insertBlock(B4, pasrsingData(2));
    insertBlock(C1, pasrsingData(3));
    insertBlock(C2, pasrsingData(4));
    insertBlock(C3, pasrsingData(5));
    insertBlock(C4, pasrsingData(6));
}

getWeather('臺北市').then(() => weatherView());

document.getElementById('country').style.border = '0';
document.getElementById('country').style.outline = '0';
document.getElementById('country').style.fontSize = '50px';
document.getElementById('country').style.fontWeight = 'bold';


document.getElementById('country').addEventListener('change', function (e) {
    let country = e.target.value;
    Array.from(document.querySelectorAll('body > div')).slice(4).forEach(function (node) {
        node.innerHTML = '';
    })
    getWeather(country).then(() => weatherView());
})
