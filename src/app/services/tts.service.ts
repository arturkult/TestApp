import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  constructor(private tts: TextToSpeech) {
  }

  public speakSelectedOption(option){
    return this.tts.speak({
      text: option,
      locale: 'pl-PL',
      rate: 0.9
    });
  }
}
