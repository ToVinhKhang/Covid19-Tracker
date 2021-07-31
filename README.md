# Covid-19 Tracker
https://covid19-kent.netlify.app/

<br>

## Introduction
#### The Covid19 Tracker project was developed to contribute to the community. This system makes it possible for users everywhere to monitor the World Coronavirus Epidemic Data Situation and Vietnam Country Details. In addition, the system also provides some information about coronavirus variant, vaccine technologies, ...
<br>

## Functions
|Name|Descriptions|
|-|-|
|World Tracker|Global Data / Country Data|
| |(Display Total Data and Daily Data)|
|Vietnam Tracker|Vietnam Data / City-Province Data / Vaccines Data|
| |(Display Total Data, Daily Data, Rate Info and Chart)|
|Languages|Switching English / Vietnamese|
| |(Display English At First)|
|Read More|About The Data / Vaccine Details and Technology / Software Info|
| |(Display Info by Popup Modal)|
|Others|Filter, Sort, Mode and Devices|
| |(Filter Name of Countries, Sort Increase Decrease, Dark-Light, Responsive)|
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

## References
### World
#### [1] World Health Organization: _https://www.who.int/_
#### [2] Our World in Data: _https://ourworldindata.org/covid-vaccinations_
### Vietnam
#### [3] Vietnam Ministry of Health: _https://ncov.moh.gov.vn/_
#### [4] Vietnam Covid Vaccination Portal: _https://tiemchungcovid19.gov.vn/portal_
<br>
