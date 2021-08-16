# Covid-19 Tracker
<details>
   <summary> Release</summary>
   <p align="center">Click Icon</p>
   <p align="center">
      <a href="https://covid19-kent.netlify.app/">
         <img alt="GuidePWA1" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/Covid19_128.png">
      </a>
   </p>
   <p align="center">Version: 2.2.1</p>
</details>

<details>
   <summary> Some Illustrations</summary>
   <p align="left">
      <h1 align="center">WORLD TRACKER</h1>
      <img alt="WorldTracker" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/Pic0.png" width="100%">
   </p>
   
   <h1 align="center">VIETNAM TRACKER</h1>
   <img align="left" alt="VietnamTracker" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/Pic00.png" width="100%">
   
   <p align="center">&nbsp;</p>
   
   <h1 align="center">CORONAVIRUS VARIANT</h1>
   <img align="left" alt="Variant" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/VariantEN1.png" width="100%">
   <img alt="Variant" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/VariantEN2.png" width="100%">
   
   <h1 align="center">MAP</h1>
   <p align="center">
      <img alt="VietnamMap" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/mapVN.png" width="50%">
   </p>
   
   <p align="center">&nbsp;</p>
   
   <h1 align="center">SOFTWARE INFO</h1>
   <img alt="SoftwareInfo" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/SoftwareInfo.png" width="100%">
   
   <h1 align="center">BARS</h1>
   <p align="center">
      <img alt="Bar01" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/Bar01.png" width="210">
      <img alt="Bar02" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/Bar02.png" width="200">
   </p>

   <p align="center">
      <img alt="ReadmoreList" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/ReadMore.png" width="209">
      <img alt="VNTracker" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/iconVN.png" width="52">
      <img alt="DarkLight" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/DarkLight.png" width="50.5">
      <img alt="SwitchLangs" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/SwitchLangs.png" width="88.5">
   </p>
   <p align="center">&nbsp;</p>
</details>

<details>
   <summary> Add to Mobile Device</summary>
   
   <h2 align="left"> • IOS</h2>
   <p>1/Launch "Safari" app. Enter "https://covid19-kent.netlify.app" and Tap "Go".
   <p>2/Tap the icon featuring an up-arrow of the Safari window to open a drop-down menu.</p>
   <p>3/Tap "Add to Home Screen" The Add to Home dialog box will appear.</p>
   <p>4/Enter the name for the shortcut using the on-screen keyboard and tap "Add". Safari will close automatically.</p>
   <p>5/Check your icon on the desktop.</p>
   
   <img alt="GuidePWA1" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/GuidePWA1.PNG" width="24%">
   <img alt="GuidePWA1" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/GuidePWA2.PNG" width="24%">
   <img alt="GuidePWA1" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/GuidePWA3.PNG" width="24%">
   <img alt="GuidePWA1" src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/GuidePWA4.PNG" width="24%">
   
   <p align="center">&nbsp;</p>
   <h2 align="left"> • Android</h2>
   <p>1/Launch "Chrome" app. Enter "https://covid19-kent.netlify.app" and Tap "Go".
   <p>2/Tap the menu icon (3 dots in upper right-hand corner).</p>
   <p>3/Tap "Add to homescreen". Then do the same few steps as IOS above.</p>
</details>
<br>

## INTRODUCTION
_The Covid19 Tracker project is developed to contribute to the community. This system makes it possible for users everywhere to tracking the World Coronavirus Disease Data Situation and Vietnam Country Details. Besides, it also provides some information about vaccine technologies, coronavirus variants, treatment medicines, etc. In addition, users on mobile devices can also add this app to the phone home screen for ease of use._
<br>
<br>

## FUNCTIONS
| Name | Descriptions |
|-|-|
| World Tracker | Global Data / Country Data / Continent Data|
| | _(Display Total-Today Data)_ |
| Vietnam Tracker | Vietnam Data / City-Province Data / Vaccines Data |
| | _(Display Total-Daily Data, Map, Rate and Chart)_ |
| Languages | Switching English / Vietnamese |
| | _(Display English At First and Set Language in LocalStorage)_ |
| Read More | About The Data / Vaccine Details and Technology / Coronavirus Variant / Treatment Medicine |
| | _(Display Info by Popup Modal)_ |
| Auxiliary | Filter-Sort Table / Dark-Light Mode |
| | _(Filter Countries, Sort Increase Decrease and Set Theme in LocalStorage)_ |
<br>

## NON-FUNCTIONS
| Name | Descriptions |
|-|-|
| Performance | Responsive |
| | _(All Devices)_ |
| Portability | Browsers Support |
| | _(Best recommended Chrome, Edge and Safari)_ |
| Reliability | Availability |
| | _(The system runs stably 24/7)_ |
| Other | Progressive Web Apps |
| | _(Windows, MacOS, iOS, Android)_ |

<br>
<br>

## API
```
https://api-kent.netlify.app/.netlify/functions/api
```

#### • [GET] /global/all

```javascript
   Example:
   {
      "cases":202511726,
      "todayCases":151936,
      "deaths":4292240,
      "todayDeaths":2525,
      "recovered":181997230,
      "todayRecovered":128958,
      "active":16222256,
      "population":7842060121,
      "affectedCountries":222
   }
```

#### • [GET] /global/countries

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
               "population":39864282,
               "continent":"Asia"
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
#### [1] World Health Organization: [Link](https://www.who.int/)
#### [2] Our World in Data: [Link](https://ourworldindata.org/covid-vaccinations)
#### [3] Vietnam Ministry of Health: [Link](https://ncov.moh.gov.vn/)
#### [4] Vietnam Covid Vaccination Portal: [Link](https://tiemchungcovid19.gov.vn/portal)
#### [5] Centers for Disease Control and Prevention: [Link](https://www.cdc.gov/coronavirus/2019-ncov/variants/variant-info.html)
<br>

<details>
   <summary>Readmore</summary>
   <h5> | 
      Pfizer: <a href="https://www.pfizer.com/">Link</a> | 
      Moderna: <a href="https://www.modernatx.com/">Link</a> | 
      Jassen: <a href="https://www.janssen.com/">Link</a> | 
      AstraZeneca: <a href="https://www.astrazeneca.com/">Link</a> | 
      Sputnik-V: <a href="https://sputnikvaccine.com/">Link</a> | 
      Sinovac: <a href="http://www.sinovac.com/index.php?lang=en">Link</a> | 
      Sinopharm: <a href="http://www.sinopharm.com/en/1156.html">Link</a> | 
      Novavax: <a href="https://www.novavax.com/">Link</a> | 
      NanoCovax: <a href="https://nanogenpharma.com/products/nanocovax-141.html">Link</a> | 
      mARN Techonology: <a href="https://en.wikipedia.org/wiki/RNA_vaccine">Link</a> | 
      Viral Vector Techonology: <a href="https://en.wikipedia.org/wiki/Viral_vector">Link</a> | 
      Inactivated Virus Techonology: <a href="https://en.wikipedia.org/wiki/Inactivated_vaccine">Link</a> | 
      Protein Subunit Techonology: <a href="https://en.wikipedia.org/wiki/Protein_subunit">Link</a> | 
      Remdesivir: <a href="https://en.wikipedia.org/wiki/Remdesivir">Link</a> | 
      Sotrovimab: <a href="https://en.wikipedia.org/wiki/Sotrovimab">Link</a> | 
      Molnupiravir: <a href="https://en.wikipedia.org/wiki/Molnupiravir">Link</a> | 
      Favipiravir: <a href="https://en.wikipedia.org/wiki/Favipiravir">Link</a> | 
   </h5>
</details>

<br>
<br>
