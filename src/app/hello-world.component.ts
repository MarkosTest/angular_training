import { Component, OnInit , OnDestroy} from '@angular/core';

@Component({
    selector: 'app-hello-world',
    template: '<h1>{{title}}</h1>',
    styles: [`
    h1 {
        color: blue;
    }
    `]
})
export class HelloWorldComponent implements OnInit, OnDestroy {
    intervalSub: any;
    title = 'hey';

    ngOnInit(): void {
        this.intervalSub = setInterval(() => {
            console.log('Hello from ngOnInit');
        }, 1000);
    }

    ngOnDestroy(): void {
        if(this.intervalSub) {
            clearInterval(this.intervalSub);
        }
    }
}