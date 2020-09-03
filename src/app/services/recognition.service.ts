import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Injectable({
  providedIn: 'root'
})
export class RecognitionService {

  constructor(private speechRecognition: SpeechRecognition) {
    speechRecognition.hasPermission().then(granted => {
      if (!granted) {
        speechRecognition.requestPermission().then(() => {
        });
      }
    });
  }

  recognize(){
    return this.speechRecognition.startListening();
  }
}
