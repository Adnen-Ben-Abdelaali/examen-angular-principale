import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Video} from "./model/video";

@Injectable({
  providedIn: 'root'
})
export class VideoService {


  url: string = environment.url;
  constructor(private http: HttpClient) { }
  //get Books
  getList(){
    return this.http.get<Video[]>(this.url)
  }
  //add a new Book
  addVideo(video:Video){
    return this.http.post(this.url,video)
  }
  //delete a book
  deleteBook(id: number){
    return this.http.delete(this.url+id)
  }
  //update a book
  updateBook(video: Video){
    return this.http.put(this.url+video.id, video)
  }

}
