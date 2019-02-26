import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tt-feature',
  templateUrl: './feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureComponent {

  @Input() public target: string;
  @Input() public title: string;
  @Input() public description: string;

}
