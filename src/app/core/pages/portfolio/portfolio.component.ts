import { HttpClient } from '@angular/common/http';
import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, Inject, signal, viewChild } from '@angular/core';
import { printArray, printObject } from '@core/print';
import { Highlight } from 'ngx-highlightjs';

interface PersonalInfo {
  name: string,
  age: number;
  education: string;
  contactEmail: string;
  shortDesc: string;
}

interface Language {
  name: string;
  level: string;
}

interface Repository {
  label: string;
  icon: string;
  link: string;
}

interface WorkPlace {
  companyName: string;
  start: string;
  end: string;
}

@Component({
  standalone: true,
  imports: [
    Highlight,
  ],
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {

  public readonly LC_AIRHORN_SND_LINK = "AirHorn1.wav";

  public readonly FAVORITE_PL = "Rust";

  public audioElRef = viewChild<ElementRef<HTMLAudioElement>>("audio");

  public personalInfo: PersonalInfo = {
    name: "Ан",
    age: 24,
    contactEmail: 'an-1258@yandex.ru',
    education: "Бакалавр по специальности 'Информационные системы и технологии' (УлГТУ)",
    shortDesc: `
      Программированием и компьютерами начал интересоваться в 16-17 лет.
      Первым языком программирования (ЯП) был C.
      В дальнейшем ознакомился с другими ЯП - Java, C#, JavaScript, TypeScript, x86 asm, Python, Rust.
      Изучал их по обучающим статьям/официальным руководствам/книгам преимущественно на английском языке.
    `
  };

  public contactEmail: string = 'an-1258@yandex.ru';

  public langs: Language[] = [
    { name: "Русский", level: "native" },
    { name: "Английский", level: "~A2" },
    { name: "Вьетнамский", level: "basic" }
  ];

  public progLangs: string[] = [
    'C/C++',
    'Go',
    'Python',
    'Java',
    "C# (.NET Core)",
    'Kotlin',
    'Javascript/Typescript',
    'Rust',
  ]

  public workPlaces: WorkPlace[] = [{
    companyName: `АО "Доминанта-сервис"`,
    start: "сентябрь 2019",
    end: "сентябрь 2022"
  }];

  public repos: Repository[] = [
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

  public interests: string[] = [
    "программирование микроконтроллеров",
    "программирование компьютерной графики (Vulkan, OpenGL)",
    "компьютерные игры"
  ];

  public phoneNumberContent = signal<string>('');

  public audioCtx!: AudioContext;

  public code = `
/* My portfolio as a code in Angular + TypeScript */

import { CommonModule } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

interface PersonalInfo {
  name: string,
  age: number;
  education: string;
  shortDesc: string;
}

interface Language {
  name: string;
  level: string;
}

interface Repository {
  label: string;
  link: string;
}

interface WorkPlace {
  companyName: string;
  start: string;
  end: string;
}

@Component(
  standalone: true,
  imports: [
    CommonModule,
    Highlight,
  ],
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
)
export class PortfolioComponent {

  public readonly LC_AIRHORN_SND_LINK = "AirHorn1.wav";

  public readonly FAVORITE_PL = "${this.FAVORITE_PL}";

  public audioElRef = viewChild<ElementRef<HTMLAudioElement>>("audio");

  public personalInfo: PersonalInfo = {
${printObject(this.personalInfo, 4)}
  };

  public interests: string[] = [
${printArray(this.interests, 4)}
  ];

  public contactEmail: string = '${this.contactEmail}';

  public langs: Language[] = [${this.langs.map((lang) => `\n    { name: "${lang.name}", level: "${lang.level}" }`)}
  ];

  public progLangs: string[] = [
${printArray(this.progLangs, 4)}
  ];

  public workPlaces: WorkPlace[] = [{
${this.workPlaces.map((workPlace) => printObject(workPlace, 4))}
  }];

  public audioCtx!: AudioContext;
`;

  public constructorCode = `
  constructor() {
    afterNextRender(() => {
      const audioRef = this.audioElRef();
      if (!audioRef || !audioRef.nativeElement) {
        return;
      }
      const audioEl = audioRef.nativeElement;
      this.audioCtx = new AudioContext();
      const gainNode = this.audioCtx.createGain();
      const track = this.audioCtx.createMediaElementSource(audioEl);
      gainNode.gain.value = 2;
      track.connect(gainNode)
        .connect(this.audioCtx.destination);
    });
  }`;

  public infiniteLoopCode = `
  public runInfiniteLoop(): void {
    while (true) { }
  }
  `;
  public contactMeCode = `
  public contactMe(): void {
    window.location.href = \`mailto:\${this.contactEmail}\`;
  }`;

  public playLCHornCode = `
  public playLCHorn(): void {
    const audioRef = this.audioElRef();
    if (!audioRef || !audioRef.nativeElement) {
      return;
    }
    const audioEl = audioRef.nativeElement;

    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }

    audioEl.play();
  }`;

  public printPhoneNumberCode = `
  public printPhoneNumber(): void {
    this._httpClient.get('PhoneNumber.txt', { responseType: 'text' })
      .subscribe((phoneNumberBase64) => {
        this.phoneNumberContent.set(atob(phoneNumberBase64));
      });
  }
  `;

  constructor(
    @Inject(HttpClient) private readonly _httpClient: HttpClient,
  ) {
    afterNextRender(() => {
      const audioRef = this.audioElRef();
      if (!audioRef || !audioRef.nativeElement) {
        return;
      }
      const audioEl = audioRef.nativeElement;
      this.audioCtx = new AudioContext();
      const gainNode = this.audioCtx.createGain();
      const track = this.audioCtx.createMediaElementSource(audioEl);
      gainNode.gain.value = 2;
      track.connect(gainNode)
        .connect(this.audioCtx.destination);
    });
  }

  public printPhoneNumber(): void {
    this._httpClient.get('PhoneNumber.txt', { responseType: 'text' })
      .subscribe((phoneNumberBase64) => {
        this.phoneNumberContent.set(atob(phoneNumberBase64));
      });
  }

  public playLCHorn(): void {
    const audioRef = this.audioElRef();
    if (!audioRef || !audioRef.nativeElement) {
      return;
    }
    const audioEl = audioRef.nativeElement;

    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }

    audioEl.play();
  }

  public runInfiniteLoop(): void {
    while (true) { }
  }

  public contactMe(): void {
    window.location.href = `mailto:${this.contactEmail}`;
  }

}
