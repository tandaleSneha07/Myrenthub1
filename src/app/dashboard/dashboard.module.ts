import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { LandlordComponent } from './landlord/landlord.component';
import { TenantComponent } from './tenant/tenant.component';
import { MapComponent } from './map/map.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandlordComponent,
    TenantComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'IzaSyCL80tkOIL9_3WIMYoauGYDN8vqf1O4Sx8',
    }),
  ],
  exports: [
    LandlordComponent,
    TenantComponent,
    MapComponent,
  ],
})
export class DashboardModule {}
