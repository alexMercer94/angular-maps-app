import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Marker } from '../../classes/marker.class';
import { MapEditComponent } from './map-edit/map-edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers: Marker[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {}

  addMarker(event): void {
    const coords: { lat: number; lng: number } = event.coords;
    console.log(event);
    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
    this.saveStorage();
    this.snackBar.open('Marker Added', 'Close', { duration: 3000 });
  }

  saveStorage(): void {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  deleteMarker(i: number) {
    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marker deleted', 'Close', { duration: 3000 });
  }

  editMarker(marker: Marker) {
    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: { title: marker.title, desc: marker.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (!result) {
        return;
      }

      marker.title = result.title;
      marker.desc = result.desc;
      this.saveStorage();
      this.snackBar.open('Marker updated', 'Close', { duration: 3000 });
    });
  }
}
