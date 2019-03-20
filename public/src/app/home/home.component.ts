import { Component, OnInit } from '@angular/core';
import { Condo } from '../condo/condo';
import { CondoService } from '../condo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  condo: Condo;
  id = '5c7a04021e4ae916c97af8a2';

  constructor(private condoService: CondoService) { }

  getCondo(id: string): void {
    this.condoService.getCondo(id)
                    .subscribe((condo) => {
                      this.condo = condo;
                    });
  }
  
  ngOnInit(): void {
    this.getCondo(this.id);
  }
}
