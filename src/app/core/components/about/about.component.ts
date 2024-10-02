import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    Highlight,
  ],
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {

  private readonly BIRTH_DATE = new Date(1999, 12, 21)

  public readonly NAME = "Ан";

  public readonly EDUCATION = "Бакалавр по специальности 'Информационные системы и технологии' (УлГТУ)";

  public readonly LANGS = [
    { name: "Русский", level: "native" },
    { name: "Английский", level: "~A2" },
    { name: "Вьетнамский", level: "basic" }
  ];

  public readonly PROG_LANGS = [
    { name: 'C/C++' },
    { name: 'Go' },
    { name: 'Python' },
    { name: 'Java' },
    { name: "C# (.NET Core)" },
    { name: 'Kotlin' },
    { name: 'Javascript/Typescript' },
    { name: 'Rust' },
  ]

  public readonly CONTACT_EMAIL = 'an-1258@yandex.ru';

  public readonly RULES = [
    `
      Писать простой код с понятными названии переменных, методов, функции в
      соответствии с общепринятыми стилем используемый ЯП (принцип KISS)
    `,
    `
      Сложные участки кода комментировать либо переносить в отдельный
      метод/функцию. Также если есть повторения в коде использую шаблоны ООП
      либо вывожу в отдельный класс/метод/функцию (Рефакторинг)
    `
  ];

  public readonly WORKPLACES = [{
    companyName: `АО "Доминанта-сервис"`,
    start: "сентябрь 2019",
    end: "сентябрь 2022"
  }];

  public readonly REPOS = [
    {
      name: 'Github',
      icon: 'github-mark-white.svg',
      link: 'https://github.com/an-nguen'
    },
    {
      name: 'Self-hosted GitLab',
      icon: 'gitlab-logo-700.svg',
      link: 'https://gitlab.an1258.keenetic.link/'
    }
  ];
  public readonly SHORT_DESC = `
  Программированием и компьютерами начал интересоваться в 16-17 лет.
  Первым языком программирования (ЯП) был C.
  В дальнейшем ознакомился с другими ЯП - Java, C#, JavaScript, TypeScript, x86 asm, Python, Rust.
  Изучал их по обучающим статьям/официальным руководствам/книгам преимущественно на английском языке.
`;

  public code = `/* My portfolio as a code in TypeScript */

const name = "${this.NAME}";
let age = ${this.getAge()};
const education = "${this.EDUCATION}";
const shortDesc = \`${this.SHORT_DESC}\`;
const langs = [${this.LANGS.map((lang) => `\n  { name: "${lang.name}", level: "${lang.level}" }`)}
];
const progLangs = [\
  ${this.PROG_LANGS.map((lang) => `\n  "${lang.name}"`)}
];`;

  public contactMeCode = `
function contactMe(): void {
  window.location.href = \`mailto:${this.CONTACT_EMAIL}\`;
}
  `;

  public getAge(): number {
    let now = new Date();
    return now.getFullYear() - this.BIRTH_DATE.getFullYear()
  }

  public contactMe(): void {
    window.location.href = `mailto:${this.CONTACT_EMAIL}`;
  }

}
