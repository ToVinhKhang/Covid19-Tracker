# Covid-19 Tracker
https://covid19-kent.netlify.app/

<br>

### The situation of the Coronavirus Epidemic data around The World and Detail Vietnam Country. Includes the following functions:
<br>

|Name Functions|Descriptions|
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

### API
```
https://api-kent.netlify.app/.netlify/functions/api
```
#### [GET] /global

```javascript
   Example:
   [
         {
               "updated":1627533622433,
               "country":"Afghanistan",
               "countryInfo": {
                     "_id":4,"iso2":"AF","iso3":"AFG","lat":33,"long":65,
                     "flag":"https://disease.sh/assets/img/flags/af.png"
               },
               "cases":145996,"todayCases":0,
               "deaths":6615,"todayDeaths":0,
               "recovered":95726,"todayRecovered":0,
               "active":43655,"critical":1124,
               "casesPerOneMillion":3662,"deathsPerOneMillion":166,
               "tests":699172,"testsPerOneMillion":17539,
               "population":39864282,"continent":"Asia",
               "oneCasePerPeople":273,
               "oneDeathPerPeople":6026,
               "oneTestPerPeople":57,
               "activePerOneMillion":1095.09,
               "recoveredPerOneMillion":2401.3,
               "criticalPerOneMillion":28.2
         },{
               ...
         },
         ...
   ]
```

#### [GET] /vn
```javascript
   Example:
   {
         "lastUpdated": "7/29/2021, 4:53:30 AM",
         "author": "To Vinh Khang","portfolio": "https://tovinhkhang.netlify.app/",
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

#### [GET] /vn/daily/covid
```javascript
   Example:
   {
         "status":200,"type":"stack",
         "data":{
               "2021-07-29":{
                     "total_cases":101173,
                     "deaths":524,
                     "recovered":19342,
                     "critical":0,
                     "tested":11890084,
                     "death_ratio":0.005179247427673391,
                     "recovery_ratio":0.19117748806499757
               },
               "2021-07-28":{
                     ...
               },
               ...
         }
   }
```

#### [GET] /vn/daily/vaccines
```javascript
   Example:
   {
         "country":"Vietnam","iso_code":"VNM",
         "data":[{
                     "date":"2021-03-07",
                     "total_vaccinations":0,
                     "people_vaccinated":0,
                     "total_vaccinations_per_hundred":0,
                     "people_vaccinated_per_hundred":0
                },{     
                     ...
                },
                ...
         ]
   }
```

#### [GET] /vn/vaccines/distribution
```javascript
   Example:
   {
        "lastUpdated":"7/28/2021, 4:57:51 PM",
        "author":"To Vinh Khang","portfolio":"https://tovinhkhang.netlify.app/",
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
