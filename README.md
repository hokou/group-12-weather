# group-12-weather
A simple  project for cooperation  
https://motestw64631.github.io/group-12-weather/weather

第十二小組
陳希聖 Shaun Chen、蕭輔廣 Hokou、蘇信華 Denny Su、廖浩宇 Hao-yu, Liao  

陳希聖為 Host

以下為分工  
廖浩宇 Hao-yu, Liao
專案基礎架構
common.css

蕭輔廣 Hokou
雨量預測
raining.html
raining.js

陳希聖 Shaun Chen
氣象預報
weather.html
weather.js
code review

蘇信華 Denny Su
紫外線預測
uv.html
uv.js  

# 開發流程

## 1.討論分工模式  
**首先確定大家可以花在此project上的時數**  最後總結大家付出5至6小時的時間 =>  選擇天氣專案
因為希望大家都能夠同時進行這個project  
所以將Project分為三個大功能  
並由一個人寫css來同時對應這三個功能
  
## 2.尋找開發功能
在氣象局API中尋找適合此次開發的api => (天氣概況.雨量預測.紫外線預測)  
https://opendata.cwb.gov.tw/dist/opendata-swagger.html

## 3.決定基礎骨架  
參考為  
![參考](images/螢幕快照%202021-06-07%20下午10.46.23.png)  
由**廖浩宇**負責html的基本版型以及最初的CSS   
![基礎](/images/螢幕快照%202021-06-08%20上午12.25.44.png)
由**陳希聖**開設專案(Host) 其餘三人(**蕭輔廣**,**蘇信華**,**廖浩宇**)Fork過去

## 4.分配功能=>開發  
其餘三人(**蕭輔廣**,**陳希聖**,**蘇信華**)各自從三個功能中選取一個,並且進行API的串接  
階段性pull request至Host中  
再由Host進行code review後merge

## 5.最終CSS修改
最後大家再提出需求以修改統整並修改全部的HTML以及CSS以符合版面  

# 心得
**蕭輔廣**  
一開始在討論合作的內容與方向比較麻煩
後來有逐漸收斂，並找到一個很好的版型，以及各自開發一組HTML和JS的模式
也讓 Hoster 與前端在一開始辛苦了，先把共用的HTML和規範用出來，讓後續比較好進行
之後我研究 API了一陣，因為一開始不知道值代表什麼，又是什麼單位
這時你們已經有提供了，所以就從你們那邊得到靈感，挑出6個測站當內容來改寫
(新北沒有測站，就改成新竹
之後就是再麻煩 Hoster 與前端將版型做調整了
整體覺得很棒  
**陳希聖**  
這次當Host是一個很特別的經驗  
光是在分配工作時就很頭痛  
終於了解前公司PM的辛苦了


