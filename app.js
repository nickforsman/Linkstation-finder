"use strict";
function findNearestLinkStationFor(pointX, pointY, linkStations) {

  let distance
  , linkStationPointX
  , linkStationPointY
  , reach
  , highestPower = 0
  , bestLinkStation;

  linkStations.forEach(linkStation => {
    let linkStationPower;

    linkStationPointX = linkStation[0];
    linkStationPointY = linkStation[1];
    reach = linkStation[2];

    distance = Math.sqrt(Math.pow((pointX - linkStationPointX), 2) + Math.pow((pointY - linkStationPointY), 2));

    linkStationPower = distance > reach ? 0 : Math.pow((reach - distance), 2);

    if (linkStationPower > highestPower) {
      bestLinkStation = linkStation;
      highestPower = linkStationPower;
    }

  });

  if (highestPower === 0) {
    console.log('No linkstation found for device');
  } else {
    console.log(`Best link station for point ${pointX} ${pointY} is ${bestLinkStation[0]} ${bestLinkStation[1]} ${highestPower}`);
  }

}

const linkStations = [[0,0,10], [20,20,5], [10,0,12]];

findNearestLinkStationFor(0,0, linkStations)
findNearestLinkStationFor(100,100, linkStations)
findNearestLinkStationFor(15,10, linkStations)
findNearestLinkStationFor(18,18, linkStations)
