import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes:Heroe[]=[]
  mostrarListaHeroes: boolean = false;
  
  constructor(private _heroesService:HeroesService, private router:Router){
    
  }

  ngOnInit():void{
    this.mostrarHeroes();
    console.log(this.heroes)
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx])
    console.log(idx);

  }

  mostrarHeroes(){
    this.heroes=this._heroesService.getHeroes();
    this.mostrarListaHeroes = true;
  }

  limpiar(){
    this.mostrarListaHeroes = false;  
  }

  heroeEspecifico(letra: string){
    this.heroes= this._heroesService.getHeroeEspecifico(letra);
    this.mostrarListaHeroes = false;  
    this.mostrarListaHeroes = true;
  }
  
}



