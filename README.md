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
 [GET]: /global
```
```javascript
   {
         "updated":1627533622433,"country":"Afghanistan",
         "countryInfo": {
               "_id":4,"iso2":"AF","iso3":"AFG","lat":33,"long":65,
               "flag":"https://disease.sh/assets/img/flags/af.png"
         },
         "cases":145996,"todayCases":0,"deaths":6615,
         "todayDeaths":0,"recovered":95726,"todayRecovered":0,
         "active":43655,"critical":1124,"casesPerOneMillion":3662,"deathsPerOneMillion":166,
         "tests":699172,"testsPerOneMillion":17539,"population":39864282,
         "continent":"Asia","oneCasePerPeople":273,"oneDeathPerPeople":6026,"oneTestPerPeople":57,
         "activePerOneMillion":1095.09,"recoveredPerOneMillion":2401.3,"criticalPerOneMillion":28.2
   }
```

```
 [GET]: /vn
```
```javascript
   {
         "lastUpdated": "7/29/2021, 4:53:30 AM",
         "author": "To Vinh Khang",
         "portfolio": "https://tovinhkhang.netlify.app/",
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
             "1": {...},
             ...
         }
   }
      
```
 [GET]: /vn/daily/covid
```
```
 [GET]: /vn/daily/vaccines
```
```
 [GET]: /vn/vaccines/distribution
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
