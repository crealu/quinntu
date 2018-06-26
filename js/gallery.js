// gallery javascript

function loopPhotos(cycle) {
  let imgHere = document.getElementById('new-here');
  let currPho = document.getElementById('curr-pho');
  let phoNum = parseInt(currPho.alt);
  let photos = [
    'profileview.jpg',
    'hairquinn.jpg',
    'gal1.jpg',
    'gal2.jpg',
    'gal3.jpg'
  ];

  if (cycle == 'next') {
      phoNum += 1;
      clearFields(imgHere);
      imgHere.innerHTML = '<img class="bw-photo" src="img/' + photos[phoNum] + '"id="curr-pho" alt="'+ phoNum + '"/>';
  } else if (cycle == 'prev' && phoNum != 0) {
      phoNum -= 1;
      clearFields(imgHere);
      imgHere.innerHTML = '<img class="bw-photo" src="img/' + photos[phoNum] + '"id="curr-pho" alt="'+ phoNum + '"/>';
  }
}

function loopPhotos1(cycle) {
  let imgHere = document.getElementById('new-here1');
  let currPho = document.getElementById('curr-pho1');
  let phoNum = parseInt(currPho.alt);
  let photos = [
    'quinnbush.jpg',
    'quinnbag.jpg',
    'quinndesert.jpg',
    'quinntree.jpg',
    'quinntrail.jpg',
    'fieldquinn.jpg'
  ];

  if (cycle == 'next') {
      phoNum += 1;
      clearFields(imgHere);
      imgHere.innerHTML = '<img class="bw-photo" src="img/' + photos[phoNum] + '" id="curr-pho1" alt="' + phoNum + '"/>';
  } else if (cycle == 'prev' && phoNum != 0) {
      phoNum -= 1;
      clearFields(imgHere);
      imgHere.innerHTML = '<img class="bw-photo" src="img/' + photos[phoNum] + '" id="curr-pho1" alt="' + phoNum + '"/>';
  }
}

function clearFields(field) {
  while(field.firstChild) {
    field.removeChild(field.firstChild);
  }
}


/*function weatherEffects(direction) {
  showButtons(3);
  let weatherEffects = [
    {
      title: 'Density Altitude',
      details: [
        'Def: the altitude in the standart atmosphere corresponding to a' +
        ' particular value of air density',
        'As air density increases, aircraft performance increases (density altitude lowers)',
        'As air density decreases, aircraft performance decreases (density altitude raises)',
        'High density altitude = thin air',
        'Low density altitude = dense air'
      ]
    },
    {
      title: 'Effects of Pressure',
      details: [
        'Density is directly proportional to pressure',
        'If pressure is doubled, density is doubled, lower density altitude',
        'If pressure is lowered, density is lowered, higher density altitude'
      ]
    },
    {
      title: 'Effects of Temperature',
      details: [
        'Density of air varies inversely with temperature at constant pressure',
        'Increasing the temperature decreases the density'
      ]
    },
    {
      title: 'Effects of Moisture',
      details: [
        'Moist air is lighter than dry air',
        'As the water content of the air increases, air becomes less dense',
        'Thinner air increases the density altitude',
        'Relative humidity is the amount of water vapor contained in the' +
        ' atmosphere'
      ]
    },
    {
      title: 'Performance',
      details: [
        'Def: the ability of an aircraft to accomplish certain tasks in flight',
        'Primary factors affected by performance: takeoff and landing distance,'
        + ' rate of climb, ceiling, payload, speed, range, maneuverability'
      ]
    },
    {
      title: 'Climb Performance Factors',
      details: [
        'Climb performance is directly dependent upon the ability to produce' +
        ' excess thrust or excess power',
        'The greater the weight of an aircraft, the higher the angle of attack'+
        ' (AOA) required for flight',
        'Increased drag results form increased weight',
        'Increased drag means more thrust is needed for climbing',
        'Increased altitude means there is increased power required to fly'
      ]
    }
  ];
  let infoContainer = document.getElementById('info-container');
  let titleHere = document.getElementById('title-here');
  let detailsHere = document.getElementById('details-here');
  clearFields(titleHere);
  clearFields(detailsHere);
  let newSlideNumber;
  if (direction == 'start') {
    newSlideNumber = parseInt(test.dataset.sn);
    titleHere.innerHTML = weatherEffects[newSlideNumber].title;
    for (let i = 0; i < weatherEffects[newSlideNumber].details.length; i++) {
      detailsHere.innerHTML += '<li>' + weatherEffects[newSlideNumber].details[i] + '</li>';
    }
    test.dataset.sn = nextSlide(newSlideNumber);
    test.innerHTML += test.dataset.sn;
  }
  switch (direction) {
    case 0:
      newSlideNumber = parseInt(test.dataset.sn);
      test.dataset.sn = prevSlide(newSlideNumber);
      titleHere.innerHTML = weatherEffects[newSlideNumber - 1].title;
      for (let i = 0; i < weatherEffects[newSlideNumber - 1].details.length; i++) {
        detailsHere.innerHTML += '<li>' + weatherEffects[newSlideNumber - 1].details[i] + '</li>';
      }
      test.innerHTML += test.dataset.sn;
      break;
    case 1:
      newSlideNumber = parseInt(test.dataset.sn);
      test.dataset.sn = nextSlide(newSlideNumber);
      titleHere.innerHTML = weatherEffects[newSlideNumber].title;
      for (let i = 0; i < weatherEffects[newSlideNumber].details.length; i++) {
        detailsHere.innerHTML += '<li>' + weatherEffects[newSlideNumber].details[i] + '</li>';
      }
      test.innerHTML += test.dataset.sn;
      break;
  }
}

function reset() {
  let infoContainer = document.getElementById('info-container');
  let titleHere = document.getElementById('title-here');
  let detailsHere = document.getElementById('details-here');
  let test = document.getElementById('test');
  clearFields(titleHere);
  clearFields(detailsHere);
  test.dataset.sn = "0";
}

function displayAbreviations() {
  let abreviations = [
    {title: 'Federal Aviation Administration', abv: 'FAA'},
    {title: 'Air Traffic Control', abv: 'ATC'},
    {title: 'Mean Sea Level', abv: 'MSL'},
    {title: 'Above Ground Level', abv: 'AGL'},
    {
      title: 'Notice to Airmen',
      abv: 'NOTAM'
    },
    {
      title: 'Flight Data Center',
      abv: 'FDC'
    },
    {
      title: 'Military Training Routes',
      abv: 'MTR'
    },
    {
      title: 'Temporary Flight Restrictions',
      abv: 'TFR'
    },
    {
      title: 'Terminal Radar Service Areas',
      abv: 'TRSA'
    },
    {
      title: 'National Security Area',
      abv: 'NSA'
    },
    {
      title: 'Instrument Flight Rules',
      abv: 'IFR'
    },
    {
      title: 'Visual Flight Rules',
      abv: 'VFR'
    },
    {
      title: 'Flight Restricted Zones',
      abv: 'FRZ'
    },
    {
      title: 'Terminal Aerodrome Forecast',
      abv: 'TAF'
    },
    {
      title: 'Aviation Routine Weather Report',
      abv: 'METAR'
    },
    {
      title: 'International Civil Aviation Organization',
      abv: 'ICAO'
    },
    {
      title: 'Runway Visual Range',
      abv: 'RVR'
    },
    {
      title: 'Convective Significant Meteorological Information',
      abv: 'Convective SIGMET'
    }
  ];
}

let aviationWeather = [
  {
    type: 'Surface Weather Observations',
    details: [
      'A network of weather information gathering facilities',
      'Surface observations provide local weather conditions for specific airports',
    ],
    contain: [
      'type of report',
      'station identifier',
      'date and time',
      'modifier',
      'wind',
      'visibility',
      'runway visual range (RVR)',
      'weather phenomena',
      'sky condition',
      'temp/dew point',
      'altimeter reading',
      'applicable remarks'
    ]
  },
  {
    type: 'Aviation Routine Weather Report (METAR)',
    details: [
      'METARs are issued on a regular basis'
    ],
    contain: [
      'type of report',
      'station identifier',
      'date and time',
      'modifier',
      'wind',
      'visibility',
      'runway visual range (RVR)',
      'weather phenomena',
      'sky condition',
      'temp/dew point',
      'altimeter reading',
      'applicable remarks'
    ]
  }
];*/
