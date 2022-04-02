import { Component, OnInit } from '@angular/core';
import {VideoService} from "../video.service";
import {Video} from "../model/video";

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})
export class VideoFormComponent implements OnInit {
  video: Video;
  constructor(private videoService:VideoService) { }



    ngOnInit(): void {
      this.video= new Video();
    }
    save(){
      //
      this.video.nbrShared=0;
      this.videoService.addVideo(this.video).subscribe();
      //notify

    }


}


