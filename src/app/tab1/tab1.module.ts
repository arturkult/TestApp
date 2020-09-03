import { TtsService } from './../services/tts.service';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { RecognitionService } from '../services/recognition.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    LeafletModule
  ],
  providers: [
    TtsService,
    TextToSpeech,
    SpeechRecognition,
    RecognitionService,
    Geolocation
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
