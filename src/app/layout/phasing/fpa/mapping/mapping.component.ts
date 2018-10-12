import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentServices } from '../../../../data-services/component.services';
import { routerTransition } from '../../../../router.animations';
import { MappingServices } from '../../../../data-services/mapping.services'
import { UserStoryServices } from '../../../../data-services/userStory.services'
import { TechnologyItem } from '../../../../model/TechnolonogyItem.model';
import * as _ from "lodash"
@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss'],
  animations: [routerTransition()]
})
export class MappingComponent implements OnInit {
  searchString: string;
  mappings = [];
  userStory = [];
  component = [];

  constructor(private mapping: MappingServices, 
    private componentService: ComponentServices, 
    private user: UserStoryServices) {
  }

  ngOnInit() {
    this.userStory = this.user.getUserStory();
    this.component = this.componentService.getComponents();
    this.mappings = this.mapping.getMapping();
  }

  addFT(id: any) {
    let ct = $("#cTSelect-" + id + " option:selected");
    if (ct.is(":enabled")) {
      this.userStory.forEach(i => {
        if (i.id == id) {
          i.component.push(ct.text());
        }
      })
      this.sortTechItemArr(this.component);
      ct.val('');
    }
  }

  sortTechItemArr(techArr: TechnologyItem[]) {
    techArr.sort(function (a, b) {
      var x = a.description;
      var y = b.description;
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  removeBT(component: any, id: any) {
    component.component.splice(id)
  }
}