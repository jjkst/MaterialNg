import {MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, 
    MatToolbarModule, MatCardModule, MatGridListModule } from '@angular/material';
import {NgModule} from '@angular/core'

@NgModule({
imports: [MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, 
    MatListModule, MatToolbarModule, MatCardModule,MatGridListModule],
exports: [MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, 
    MatListModule, MatToolbarModule, MatCardModule,MatGridListModule]
})
export class MaterialModule{}