import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true
})

export class HomeComponent {
    constructor() { }
    onSale: boolean = true
    toggleSale() {
        this.onSale = !this.onSale
    }
    welcome() {
        alert("hello")
    }
    getData(T: any) {
        console.log(T.target.value);
    }
    userName: string = "Abdallah";
    age: number = 21;
    imgSrc: string = 'assets/Images/TheDeep.jpg'
    myLink: string = "https://characterprofile.fandom.com/wiki/The_Deep"
}