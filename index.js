
function findNearestLinkStationFor(pointX, pointY, linkStations) {

  var distance
  , linkStationPointX
  , linkStationPointY
  , reach
  , highestPower = 0
  , bestLinkStation;

  linkStations.forEach(function(linkStation) {
    var linkStationPower;

    linkStationPointX = linkStation[0];
    linkStationPointY = linkStation[1];
    reach = linkStation[2];

    distance = Math.sqrt(Math.pow((pointX - linkStationPointX), 2) + Math.pow((pointY - linkStationPointY), 2));

    if (distance > reach) {
      linkStationPower = 0;
    } else {
      linkStationPower = Math.pow((reach - distance), 2);
    }

    if (linkStationPower > highestPower) {
      bestLinkStation = linkStation;
      highestPower = linkStationPower;
    }

  });

  if (highestPower === 0) {
    console.log('No linkstation found for device');
  } else {
    console.log('Best link station for point ' + String(pointX) + ' ' + String(pointY) + ' is ' + String(bestLinkStation[0]) + ' ' +  String(bestLinkStation[1]) + ' with the power of ' + highestPower);
  }

}

var linkStations = [[0,0,10], [20,20,5], [10,0,12]];

findNearestLinkStationFor(0,0, linkStations)
findNearestLinkStationFor(100,100, linkStations)
findNearestLinkStationFor(15,10, linkStations)
findNearestLinkStationFor(18,18, linkStations)
