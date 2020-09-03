import { TtsService } from './../services/tts.service';
import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, MapOptions, Map, map } from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { RecognitionService } from '../services/recognition.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  map: Map;
  options: MapOptions;
  availableLocations = ["Magazyn", "Akademik", "Stołówka", "Wydział lotnictwa kurwa jego mać"];
  constructor(private ttsService: TtsService,
    private recognitionService: RecognitionService) {

  }

  ngOnInit(): void {
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 18
    };
  }
  onMapReady(event: Map) {
    event.setView(
      latLng(54.356362, 18.640381),
      18);
    setTimeout(() => event.invalidateSize());
  }

  navigate() {
    this.ttsService.speakSelectedOption("Wybrałeś nawigację. Dokąd chcesz dotrzeć?")
      .then(() => {
        this.recognizePlace();
      });
  }

  informate() {

  }

  recognizePlace() {
    this.recognitionService.recognize()
      .subscribe(results => {
        const place = this.availableLocations
          .find(location => results
            .some(sequence => sequence.toLowerCase().includes(location.toLowerCase())));
        if (place) {
          this.goToPlace(place);
        }
      });
  }

  goToPlace(place: string) {
    this.ttsService.speakSelectedOption(`Wybrałeś ${place}. Budujemy trasę.`).then(() => {
    });
  }

}
