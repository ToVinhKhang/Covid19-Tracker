# Covid-19 Tracker
https://covid19-kent.netlify.app/

<br>

## INTRODUCTION
_The Covid19 Tracker project was developed to contribute to the community. This system makes it possible for users everywhere to monitor the World Coronavirus Epidemic Data Situation and Vietnam Country Details. In addition, the system also provides some information about coronavirus variant, vaccine technologies, ..._
<br>
<br>

## VISUALIZATION
<details>
   <summary>Show</summary>
   <p align="center"><img alt="WorldTracker" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/Pic0.png" width="100%"></p>
   <p align="center"><img alt="VietnamTracker" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/Pic1.png" width="100%"></p>
   <p align="center"><img alt="VietnamTracker" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/Pic2.png" width="100%"></p>
   <p align="center"><img alt="Variant" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/Variant_EN_lang.png" width="100%"></p>
</details>

<details>
   <summary>Show</summary>
   https://covid19-kent.netlify.app/
</details>

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
### World
#### [1] World Health Organization: _https://www.who.int/_
#### [2] Our World in Data: _https://ourworldindata.org/covid-vaccinations_
### Vietnam
#### [3] Vietnam Ministry of Health: _https://ncov.moh.gov.vn/_
#### [4] Vietnam Covid Vaccination Portal: _https://tiemchungcovid19.gov.vn/portal_
<br>
