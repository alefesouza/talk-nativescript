import { Component, OnInit } from "@angular/core";
import { LanguagesService } from "../languages.service";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    languages = [];

    constructor(private languagesService: LanguagesService, private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.languagesService.getLanguages().subscribe((languages: any[]) => {
            this.languages = languages;
        });
    }

    navigate(language) {
        console.log(language)
        this.router.navigate(['/details'], {
            state: {
                language,
            },
        });
    }
}
