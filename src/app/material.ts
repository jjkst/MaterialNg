import {MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, 
    MatToolbarModule, MatCardModule, MatGridListModule, MatInputModule } from '@angular/material';
import {NgModule} from '@angular/core'

@NgModule({
imports: [MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, 
    MatListModule, MatToolbarModule, MatCardModule,MatGridListModule, MatInputModule],
exports: [MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, 
    MatListModule, MatToolbarModule, MatCardModule,MatGridListModule, MatInputModule]
})
export class MaterialModule{}