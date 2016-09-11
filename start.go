package main

import (
  "fmt"
  "math"
)

// functions in the main package should probably not be uppercased
func FindNearestLinkStationFor(pointX int, pointY int, linkStations[][3]int) {

  // Declare helper variables
  var (
    distance float64
    linkStationPointX int
    linkStationPointY int
    reach int
    highestPower float64
    bestLinkStation [3]int
  )

  // loop through all link stations and find most suitable link station for cordinates pointX and pointY
  for i := 0; i < len(linkStations); i++ {
    // this is locally scoped since we need to know to power of the current link station in the loop
    var linkStationPower float64
    // save array elements to more readable variables
    linkStationPointX = linkStations[i][0] //these could also be locally scoped but golang is garbage collected, so not that big of an issue :)
    linkStationPointY = linkStations[i][1]
    reach = linkStations[i][2]

    // we calculate the distance between the linkstation and the device with the help of pythagorean theorem:
    // a^2 + b^2 = c^2
    // we also need to convert the integers to float64s since math.Pow expects two float64s and one integer
    distance = math.Sqrt(math.Pow((float64(pointX) - float64(linkStationPointX)), 2) + math.Pow((float64(pointY) - float64(linkStationPointY)), 2))

    // if the distance is higher than the reach it means that the current link station's power is 0
    if distance > float64(reach) {
      linkStationPower = 0
    } else {
      // the formula for the link station's power is: P = (R - D)^2
      linkStationPower = math.Pow((float64(reach) - distance), 2)
    }

    // we check to see if the current link station's power is stronger than the current strongest link station
    // if it is stronger we overwrite to strongest link station with the current link station
    if linkStationPower > highestPower {
      bestLinkStation = linkStations[i]
      highestPower = linkStationPower
    }

  }

  if highestPower == 0 {
    fmt.Println("no link station found")
  } else {
    fmt.Println("best link station for point", pointX, pointY, "is", bestLinkStation[0], bestLinkStation[1],  "with the power of", highestPower)
  }

}

func main() {
  linkStations := [][3]int{{0,0,10}, {20,20,5}, {10,0,12}}

  FindNearestLinkStationFor(0,0, linkStations)
  FindNearestLinkStationFor(100,100, linkStations)
  FindNearestLinkStationFor(15,10, linkStations)
  FindNearestLinkStationFor(18,18, linkStations)
}
