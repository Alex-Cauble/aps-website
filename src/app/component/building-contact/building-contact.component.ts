import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildingContacts } from 'src/app/types/building-contacts.type';

@Component({
  selector: 'app-building-contact',
  templateUrl: './building-contact.component.html',
  styleUrls: ['./building-contact.component.scss'],
})
export class BuildingContactComponent implements OnInit {
  @Input() buildingInfo: BuildingContacts | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data) => (this.buildingInfo = data['buildingInfo'] as BuildingContacts)
    );
  }
}
