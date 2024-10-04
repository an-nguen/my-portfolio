import { CommonModule } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, EnvironmentInjector, NgZone, OnInit, runInInjectionContext, viewChild } from '@angular/core';
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

function enumProps<T>(obj: T) {
  let index = 0;
  const props = [];
  for (const key in obj) {
    props.push({ key, value: obj[key], index });
    index += 1;
  }
  return props;
}

function printObject<T>(obj: T, spaceSize: number = 2) {
  let print = "";
  let indentStr = "";
  for (let i = 0; i < spaceSize; i++) {
    indentStr += " ";
  }
  const objectProps = enumProps(obj);
  for (const { key, value, index } of objectProps) {
    let dispValue: any = value;
    if (typeof value === 'string') {
      if (!value.includes('\n') && !value.includes('"')) {
        dispValue = `"${value}"`;
      } else {
        dispValue = `\`${value}\``
      }
    }
    print += `${indentStr}${key}: ${dispValue}`
    if (index !== objectProps.length - 1) {
      print += ',\n';
    }
  }
  return print;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    Highlight,
  ],
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {

  public readonly LC_AIRHORN_SND_LINK = "AirHorn1.wav";

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

  public audioCtx!: AudioContext;

  public code = `
/* My portfolio as a code in Angular + TypeScript */

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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

  public audioElRef = viewChild<ElementRef<HTMLAudioElement>>("audio");

  public personalInfo: PersonalInfo = {
${printObject(this.personalInfo, 4)}
  };

  public contactEmail: string = '${this.contactEmail}';

  public langs: Language[] = [${this.langs.map((lang) => `\n    { name: "${lang.name}", level: "${lang.level}" }`)}
  ];

  public progLangs: string[] = [\
    ${this.progLangs.map((lang) => `\n    "${lang}"`)}
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
      const track = this.audioCtx.createMediaElementSource(audioEl);
      track.connect(this.audioCtx.destination);
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
  }

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
