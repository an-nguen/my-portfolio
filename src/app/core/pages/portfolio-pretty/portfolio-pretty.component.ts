import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio-pretty',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './portfolio-pretty.component.html',
  styleUrl: './portfolio-pretty.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioPrettyComponent {

  public readonly faEnvelope = faEnvelope;

  public avatarImg: string = 'avatar.jpg';
  public name = 'An Nguyen';
  public birthDate = '21.12.1999';
  public email = 'an-1258@outlook.com';
  public livingPlace: string = 'Russia, Ulyanovsk';

  public repos = [
    {
      label: 'Github',
      icon: 'github-mark-white.svg',
      link: 'https://github.com/an-nguen'
    },
    {
      label: 'Self-hosted GitLab',
      icon: 'gitlab-logo-700.svg',
      link: 'https://gitlab.an1258.keenetic.link/'
    }
  ];

  public langs = [
    { name: "Русский", level: "native" },
    { name: "Английский", level: "~A2" },
    { name: "Вьетнамский", level: "<basic" }
  ];

  public interests: string[] = [
    "программирование микроконтроллеров",
    "программирование компьютерной графики (Vulkan, OpenGL)",
    "компьютерные игры"
  ];

  public works = [{
    companyName: `АО "Доминанта-сервис"`,
    occupation: "Разработчик ПО",
    start: "сентябрь 2019",
    end: "сентябрь 2022",
  }];

  public education = {
    institutionName: 'Ульяновский Государственный Технический Университет',
    graduationDate: 'июнь 2024'
  };

}
