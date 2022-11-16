import { Routes } from "@angular/router";
import { MainMessageComponent } from "../content/main-message/main-message.component";
import { GameContainerComponent } from "../game/game-container/game-container.component";

export const routes: Routes = [
    {
        path: 'game',
        component: GameContainerComponent,
        data: { animation: 'startGame' }
    },
    {
        path: '',
        component: MainMessageComponent,
        data: { animation: 'endGame' }
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];