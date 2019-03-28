import { Component, ElementRef, ViewChild } from "@angular/core";
import { NavController, NavParams, Platform } from "ionic-angular";
import { NotificationsPage } from "../notifications/notifications";

@Component({
  selector: "page-track",
  templateUrl: "track.html"
})
export class TrackPage {
  @ViewChild("mapCanvas") mapElement: ElementRef;
  map: any;
  googleMap: any;
  marker: any;
  mapData: any[] = [
    {
      name: "Monona Terrace Convention Center",
      lat: 43.071584,
      lng: -89.38012,
      center: true,
      time: "9:30"
    },
    {
      name: "Ionic HQ",
      lat: 42.074395,
      lng: -88.381056,
      center: true,
      time: "10:30"
    },
    {
      name: "Afterparty - Brocach Irish Pub",
      lat: 41.07336,
      lng: -87.38335,
      center: true,
      time: "11:15"
    },
    {
      name: "Rixos The Palm Dubai",
      lat: 24.1212,
      lng: 55.1535,
      center: true,
      time: "12:05"
    },
    {
      name: "Shangri-La Hotel",
      lat: 23.2084,
      lng: 58.2719,
      center: true,
      time: "16:30"
    },
    {
      name: "Grand Hyatt",
      lat: 24.2285,
      lng: 53.3273,
      center: true,
      time: "17:30"
    }
  ];
  selectedMarker: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform
  ) {}

  async ngAfterViewInit() {
    this.selectedMarker = this.mapData[0];
    const googleMaps = await getGoogleMaps(
      "AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw"
    );
    // this.confData.getMap().subscribe((mapData: any) => {
    const mapEle = this.mapElement.nativeElement;
    const map = new googleMaps.Map(mapEle, {
      mapTypeControl: false,
      scaleControl: true,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControl: false,
      center: this.mapData[0],
      zoom: 12
    });
    this.googleMap = googleMaps;

    googleMaps.event.addListenerOnce(map, "idle", () => {
      mapEle.classList.add("show-map");
    });
    this.map = map;
    this.setMarker(googleMaps, map, this.mapData[0]);
    // this.mapData.forEach((markerData: any) => {
    //   const infoWindow = new googleMaps.InfoWindow({
    //     content: `<h5>${markerData.name}</h5>`
    //   });

    //   const marker = new googleMaps.Marker({
    //     position: markerData,
    //     map,
    //     title: markerData.name,
    //     icon:'assets/imgs/location-pin.png'
    //   });

    //   marker.addListener("click", () => {
    //     infoWindow.open(map, marker);
    //   });
    // });

    // });
  }

  setMarker(googleMaps, map, markerData) {
    const infoWindow = new googleMaps.InfoWindow({
      content: `<h5>${markerData.name}</h5>`
    });

    this.marker = new googleMaps.Marker({
      position: markerData,
      map,
      title: markerData.name,
      icon: "assets/imgs/location-pin.png"
    });

    this.marker.addListener("click", () => {
      infoWindow.open(map, this.marker);
    });
  }

  moveMap(data) {
    this.marker.setMap(null);
    setTimeout(() => {
      this.marker = null;
      this.setMarker(this.googleMap, this.map, data);
      // this.map.setCenter(data); // set map center to marker position
      this.map.panTo(data);
      this.map.setZoom(5);
    }, 100);
  }

  openNotificationPage() {
    this.navCtrl.push(NotificationsPage);
  }
}

function getGoogleMaps(apiKey: string): Promise<any> {
  const win = window as any;
  const googleModule = win.google;
  if (googleModule && googleModule.maps) {
    return Promise.resolve(googleModule.maps);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject("google maps not available");
      }
    };
  });
}
