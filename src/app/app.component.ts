import { Component } from '@angular/core';
import { IdentifierService } from './common/services';
import { CanonicalService } from './common/services/canonical.service';
import { GoasosTitleService } from './common/services/title.service';
import { MetaService } from './common/services/meta.service';
import { AnalyticsService } from './common/services/analytics.service';
import { UserAnalyticsEvents } from './common/models/analytics';
import { VideoDialogService } from './common/services/video-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [IdentifierService,
    CanonicalService,
    GoasosTitleService,
    MetaService,
    AnalyticsService,
    UserAnalyticsEvents]
})
export class AppComponent {
  title = 'goasos';

  constructor(
    private ser: IdentifierService,
    private link: CanonicalService,
    private video: VideoDialogService
  ) {
    link.AddLink();
  }

  getRouteAnimationData() {
    // return this.contexts.getContext('primary')?.route?.component;
  }
}
