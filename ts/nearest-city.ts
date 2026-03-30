interface City {
  name: string;
  x: number;
  y: number;
}

function extractCitiesArray(cityName: string[], x: number[], y: number[]) {
  const cities: City[] = [];

  const xMap = new Map<number, City[]>();
  const yMap = new Map<number, City[]>();

  for (let i = 0; i < cityName.length; i++) {
    const city: City = {name: cityName[i], x: x[i], y: y[i]};
    cities.push(city);

    if (!xMap.has(city.x)) {
      xMap.set(city.x, []);
    }
    if (!yMap.has(city.y)) {
      yMap.set(city.y, []);
    }

    xMap.get(city.x)!.push(city);
    yMap.get(city.y)!.push(city);
  }
  return {cities, xMap, yMap};
}

function findNearestCity(
  currCity: City,
  candidateCities: City[],
  result: { minDist: number; nearestCity: string }
): void {
  for (const c of candidateCities) {
    if (c.name === currCity.name) {
      continue;
    }
    const dist = Math.abs(currCity.x - c.x) + Math.abs(currCity.y - c.y); // manhatan method
    if (dist < result.minDist || (dist === result.minDist && c.name < result.nearestCity)) { // only alphabetic
      result.minDist = dist;
      result.nearestCity = c.name;
    }
  }
}

export function closestStraightCity(
    cityName: string[],
    x: number[],
    y: number[],
    q: string[]
): string[] {

  const {cities,  xMap, yMap} = extractCitiesArray(cityName, x, y);

  const result: string[] = [];

  for (const query of q) {
    const currCity = cities.find(c => c.name === query);
    if (!currCity) {
      result.push("NONE");
      continue;
    }

    let nearestCity: string = "NONE";
    let minDist = Infinity;

    const searchResult = { minDist, nearestCity };

    //x
    findNearestCity(currCity, xMap.get(currCity.x) || [], searchResult);

    //y
    findNearestCity(currCity, yMap.get(currCity.y) || [], searchResult);

    result.push(searchResult.nearestCity);
  }

  return result;
}

