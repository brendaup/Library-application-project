import { LoadingService } from './../../services/loading/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit{

  public showLoading: boolean = false;
  
  constructor(private loadingService:LoadingService){}

  ngOnInit(): void {
    this.loadingService.showloading$.subscribe((isLoading)=>{
      this.showLoading = isLoading;
    })
  }
}
