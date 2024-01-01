import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TemplateRef,
  inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatRipple, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {
  MatActionList,
  MatListItem,
  MatListModule,
  MatNavList,
} from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DependencyManagerService } from '../../data-access/dependency-manager.service';
import { NgxMatShellGroupDividerDirective } from '../../data-access/directives/group-divider.directive';
import { NgxMatShellGroupListItemIconDirective } from '../../data-access/directives/group-list-item-icon.directive';
import { NgxMatShellGroupListItemTextFieldDirective } from '../../data-access/directives/group-list-item-text-field.directive';
import { NgxMatShellGroupListItemDirective } from '../../data-access/directives/group-list-item.directive';
import { NgxMatShellSidenavService } from '../../data-access/ngx-mat-sidenav.service';
import {
  NgxMatShellConfig,
  NgxMatShellSidenavGroupView,
} from '../../data-access/shell.model';
import { mapSidenavGroupResolver } from '../../utils/routeGroupsResolver';
import { asStringObservable } from '../../utils/stringResolver';

@Component({
  selector: 'ngx-mat-shell-sidenav-content',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    MatRippleModule,
    NgxMatShellGroupListItemTextFieldDirective,
    NgxMatShellGroupListItemIconDirective,
    NgxMatShellGroupListItemDirective,
    NgxMatShellGroupDividerDirective,
  ],
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    MatExpansionPanel,
    MatListItem,
    MatActionList,
    MatNavList,
    MatRipple,
  ],
})
export class NgxMatShellSidenavContentComponent implements OnInit {
  dependencyManager = inject(DependencyManagerService);
  ngxMatShellSidenavService = inject(NgxMatShellSidenavService);

  @Input()
  shellConfig!: NgxMatShellConfig;

  @Input()
  customDividerTemplate!: TemplateRef<unknown>;

  @Input()
  customListItemTitleTemplate!: TemplateRef<unknown>;

  @Input()
  customGroupListItemIconTemplate!: TemplateRef<unknown>;

  @Input()
  customGroupListItemTemplate!: TemplateRef<unknown>;

  @Input()
  customGroupTabBackButtonTemplate!: TemplateRef<unknown>;

  asStringObservable = asStringObservable;
  tabs = ['root'];
  selectedLevel = new FormControl(0);
  tabGroupLevels = new Map<string, undefined | NgxMatShellSidenavGroupView>([
    ['root', undefined],
  ]);

  routeGroups: NgxMatShellSidenavGroupView[] = [];

  ngOnInit(): void {
    this.routeGroups = (this.shellConfig?.sidenavGroups || []).map((group) => {
      const maped = mapSidenavGroupResolver(
        group,
        this.shellConfig.routes,
        this.dependencyManager
      );
      return maped;
    });
  }

  switchTab(group: NgxMatShellSidenavGroupView) {
    this.tabs.push('level' + this.tabs.length);
    this.tabGroupLevels.set(this.tabs[this.tabs.length - 1], group);
    this.selectedLevel.setValue(this.tabs.length - 1);
  }

  async goLevelBack() {
    this.selectedLevel.setValue((this.selectedLevel.value || 1) - 1);
    await new Promise((resolve) =>
      setTimeout(() => {
        this.tabGroupLevels.delete(
          this.tabs[(this.selectedLevel.value || 0) + 1]
        );
        this.tabs.pop();
        return resolve;
      }, 300)
    );
  }
}
