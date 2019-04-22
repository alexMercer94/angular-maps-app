/* export class Marker {
  constructor(public lat: number, public lng: number) {
  }
}
 */

export class Marker {
  public lat: number;
  public lng: number;
  public title = 'No title';
  public desc = 'No desc';

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
