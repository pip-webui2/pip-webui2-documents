import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';
import { each } from 'lodash';
import { PipMediaService, PipSidenavService } from 'pip-webui2-layouts';
import { PipNavService } from 'pip-webui2-nav';
import { PipThemesService, Theme } from 'pip-webui2-themes';

import { AppTranslations } from './app.strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public themes: Theme[];
  public theme: Theme;
  public languages = ['en', 'ru'];
  public language: string;
  public messages: any[] = [
    { image_src: '/assets/girl.png', subject: 'University', from: 'Marta', content: 'Tommorow you should visit university' },
    { image_src: '/assets/boy2.png', subject: 'Party', from: 'Sam', content: 'We are going to have a party' },
    { image_src: '/assets/girl2.png', subject: 'Cats', from: 'April', content: 'look at these kittens!!!' },
    { image_src: '/assets/boy.png', subject: 'Football', from: 'Nick', content: 'Cup is ours' }
  ];

  public constructor(
    public media: PipMediaService,
    private themesService: PipThemesService,
    private matIconRegistry: MatIconRegistry,
    private navService: PipNavService,
    private sidenav: PipSidenavService,
    private translate: TranslateService,
  ) {
    this.themes = this.themesService.themesArray;
    this.theme = this.themesService.currentTheme;
    // Translations init
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang('en');
    this.translate.setTranslation('en', AppTranslations.en, true);
    this.translate.setTranslation('ru', AppTranslations.ru, true);
    const browserLang = translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    this.language = this.translate.currentLang;

    this.navService.showNavIcon({
      fontIcon: 'menu',
      action: () => {
        this.sidenav.start.toggle();
      }
    });

    this.navService.showPrimaryActions({
      actions: [
        {
          icon: {
            fontIcon: 'notifications'
          },
          name: 'notifications',
          click: () => {
            this.sidenav.end.toggle();
          }
        },
        {
          icon: { fontIcon: 'translate' }, name: 'translate', subActions: this.generatePrimaryActionLanguageList()
        },
        {
          icon: { fontIcon: 'format_color_fill' }, name: 'format_color_fill', subActions: this.generatePrimaryActionThemeList()
        }
      ]
    });
    this.navService.showNavMenu({
      sections: [
        {
          name: 'appbar',
          links: [
            {
              icon: 'attachment',
              name: 'document_list',
              title: 'Document list',
              state: 'document_list',
              url: 'document_list'
            },
            {
              icon: 'attachment',
              name: 'document_list_edit',
              title: 'Document list edit',
              state: 'document_list_edit',
              url: 'document_list_edit'
            },
          ]
        }
      ]
    });
    this.navService.showNavHeader({
      title: 'Documents',
      subtitle: ''
    });
  }

  ngOnInit() {
  }

  private generatePrimaryActionLanguageList() {
    const list = [];

    each(this.translate.langs, (language) => {
      this.translate.get(language).subscribe((t: string) => {
        list.push({
          title: t,
          click: () => {
            this.translate.use(language);
          }
        });
      });
    });

    return list;
  }

  private generatePrimaryActionThemeList() {
    return this.themes.map(theme => ({
      title: theme.displayName ?? theme.name,
      name: theme.name,
      click: () => this.changeTheme(theme)
    }));
  }

  public changeLanguage(language: string) {
    this.language = language;
    this.translate.use(language);
  }

  public changeTheme(theme: Theme) {
    this.theme = theme;
    this.themesService.selectTheme(theme.name);
  }
}
