import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildingContacts } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() buildingInfo: BuildingContacts | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data) => (this.buildingInfo = data['buildingInfo'] as BuildingContacts)
    );
  }
}
