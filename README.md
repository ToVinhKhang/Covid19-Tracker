# Covid-19 Tracker
<details>
   <summary> Release</summary>
   •  https://covid19-kent.netlify.app/
</details>

<details>
   <summary> Some Illustrations</summary>
   <p align="left">
      <h1 align="center">WORLD TRACKER</h1>
      <img alt="WorldTracker" src="https://raw.githubusercontent.com/ToVinhKhang/API/main/img/Pic0.png?token=ALF7X7XLXRGM3GHK4NVPVIDBB6FAU" width="100%">
   </p>
   
   <h1 align="center">VIETNAM TRACKER</h1>
   <img align="left" alt="VietnamTracker" src="https://raw.githubusercontent.com/ToVinhKhang/API/main/img/Pic1.png?token=ALF7X7T3KBQ6M4UNY7NQU53BB6FAY" width="100%">
   <img align="left" src="https://raw.githubusercontent.com/ToVinhKhang/API/main/img/Pic2.png?token=ALF7X7XE7KW2IDHIWNDAEILBB6FA6" width="100%">
   
   <p align="center">&nbsp;</p>
   
   <h1 align="center">CORONAVIRUS VARIANT</h1>
   <img alt="Variant" src="https://raw.githubusercontent.com/ToVinhKhang/API/main/img/Variant_EN_lang.png?token=ALF7X7V45CGD3ZRWAXJ2LALBB6FEM" width="100%">

   <h1 align="center">TOOLS</h1>
   <p align="center">
      <img alt="Bar01" src="https://raw.githubusercontent.com/ToVinhKhang/API/main/img/Bar01.png?token=ALF7X7UKFPLW5KUY3BFDOI3BB6AM6" width="210">
      <img alt="Bar02" src="https://raw.githubusercontent.com/ToVinhKhang/API/main/img/Bar02.png?token=ALF7X7Q7KOSX26KQ2B3KHILBB6AMC" width="200">
   </p>

   <p align="center">
      <img alt="ReadmoreList" src="https://raw.githubusercontent.com/ToVinhKhang/API/main/img/ReadmoreList.png?token=ALF7X7W7GWTVBXDTWUCTKY3BB6ANW" width="209">
      <img alt="VNTracker" src="https://raw.githubusercontent.com/ToVinhKhang/API/main/img/iconVN.png?token=ALF7X7Q6HADO77D2HZL5UHTBB6DK2" width="52">
      <img alt="DarkLight" src="https://raw.githubusercontent.com/ToVinhKhang/API/main/img/DarkLight.png?token=ALF7X7UAXPAWALW2JOFAUJTBB6AJ4" width="50.5">
      <img alt="SwitchLang" src="https://raw.githubusercontent.com/ToVinhKhang/API/main/img/SwitchLangs.png?token=ALF7X7VYDTHIC4S4GK7P3NDBB6ALI" width="88.5">
   </p>
   <p align="center">&nbsp;</p>
</details>
<br>

## INTRODUCTION
_The Covid19 Tracker project was developed to contribute to the community. This system makes it possible for users everywhere to monitor the World Coronavirus Epidemic Data Situation and Vietnam Country Details. In addition, the system also provides some information about coronavirus variant, vaccine technologies, ..._
<br>
<br>

## FUNCTIONS
| Name | Descriptions |
|-|-|
| World Tracker | Global Data / Country Data |
| | _(Display Total Data and Daily Data)_ |
| Vietnam Tracker | Vietnam Data / City-Province Data / Vaccines Data |
| | _(Display Total Data, Daily Data, Rate Info and Chart)_ |
| Languages | Switching English / Vietnamese |
| | _(Display English At First)_ |
| Read More | About The Data / Vaccine Details / Vaccine Technology / Coronavirus Variant / Software Info |
| | _(Display Info by Popup Modal)_ |
| Others | Filter, Sort, Mode and Devices |
| | _(Filter Name of Countries, Sort Increase Decrease, Dark-Light, Responsive)_ |
<br>
<br>

## API
```
https://api-kent.netlify.app/.netlify/functions/api
```

#### • [GET] /global

```javascript
   Example:
   [
         {
               "country":"Afghanistan",
               "countryInfo": {
                     "lat":33,
                     "long":65,
                     "flag":"https://disease.sh/assets/img/flags/af.png"
               },
               "cases":145996,
               "todayCases":0,
               "deaths":6615,
               "todayDeaths":0,
               "recovered":95726,
               "todayRecovered":0,
               "active":43655,
               "population":39864282
         },{
               ...
         },
         ...
   ]
```

#### • [GET] /vn
```javascript
   Example:
   {
         "total": {
             "totalCases": 127066,
             "totalRecovered": 31242,
             "totalDeaths": 680
         },
         "detail": {
             "0": {
                 "name": "Hồ Chí Minh",
                 "cases": "80951",
                 "recovered": "16613",
                 "deaths": "447"
             },
             "1": {
                 ...
             },
             ...
         }
   }
```

#### • [GET] /vn/daily/covid
```javascript
   Example:
   {
         "data":{
            "0":{
               "date":"2021-07-24",
               "total_cases":94913,
               "new_cases":7956,
               "total_deaths":370,
               "new_deaths":0
            },
            "1":{
               ...
            },
            ...
         }
   }
```

#### • [GET] /vn/daily/vaccines
```javascript
   Example:
   {
         "country":"Vietnam",
         "data":
         [
                {
                     "date":"2021-07-27",
                     "total_vaccinations":5013175,
                     "people_vaccinated":4562339,
                     "people_fully_vaccinated":450836,
                     "daily_vaccinations":96620
                },{     
                     ...
                },
                ...
         ]
   }
```

#### • [GET] /vn/vaccines/distribution
```javascript
   Example:
   {
        "totalDistribution":{
              "totalPlanned":130448510,
              "totalRealistic":17010250,
              "totalDistributedRate":13.04
        },
        "dataDistribution":{
              "0":{
                    "name":"Hà Nội",
                    "Planned":11376541,
                    "Realistic":2371380,
                    "DistributedRate":20.84
              },
              "1":{
                    ...
              },
              ...
        }
   }
```

<br>
<br>



## REFERENCES
#### [1] World Health Organization: _https://www.who.int/_
#### [2] Our World in Data: _https://ourworldindata.org/covid-vaccinations_
#### [3] Vietnam Ministry of Health: _https://ncov.moh.gov.vn/_
#### [4] Vietnam Covid Vaccination Portal: _https://tiemchungcovid19.gov.vn/portal_
#### [5] Axios Variant Tracker: _https://www.axios.com/variants-tracker/_
<br>
<br>
