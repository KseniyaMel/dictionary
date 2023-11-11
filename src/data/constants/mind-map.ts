const data = {
  nodes: [
    {
      id: '-8',
      value: {
        title: 'React Query',
      },
    },
    {
      id: '-7',
      value: {
        title: 'React Input Mask',
      },
    },
    {
      id: '-6',
      value: {
        title: 'React Helmet',
      },
    },
    {
      id: '-5',
      value: {
        title: 'Правила рендеринга',
      },
    },
    {
      id: '-4',
      value: {
        title: 'Использование состояния и свойств',
      },
    },
    {
      id: '-3',
      value: {
        title: 'Виртуализация DOM',
      },
    },
    {
      id: '-2',
      value: {
        title: 'Санитизация данных с использованием JSX"',
      },
    },
    {
      id: '-1',
      value: {
        title: 'Механизмы защиты',
      },
    },
    {
      id: '0',
      value: {
        title: 'Информационная безопасность',
      },
    },
    {
      id: '1',
      value: {
        title: 'Видов уязвимостей ',
      },
    },
    {
      id: '2',
      value: {
        title: 'Межсайтовый скриптинг',
        items: [
          {
            text: 'CWE-79',
          },
        ],
      },
    },
    {
      id: '3',
      value: {
        title: 'SQL-инъекции',
        items: [
          {
            text: 'CWE-89',
          },
        ],
      },
    },
    {
      id: '4',
      value: {
        title: 'Out-of-bounds Write',
        items: [
          {
            text: 'CWE-787',
          },
        ],
      },
    },
    {
      id: '5',
      value: {
        title: 'CSRF',
        items: [
          {
            text: 'CWE-352',
          },
        ],
      },
    },
    {
      id: '6',
      value: {
        title: 'Out-of-bounds Read',
        items: [
          {
            text: 'CWE-125',
          },
        ],
      },
    },
    {
      id: '6',
      value: {
        title: 'Некорректная авторизация',
        items: [
          {
            text: 'CWE-862',
          },
        ],
      },
    },
    {
      id: '7',
      value: {
        title: 'Атаки внедрения команд',
        items: [
          {
            text: 'CWE-77',
          },
        ],
      },
    },
    {
      id: '8',
      value: {
        title: 'Use After Free',
        items: [
          {
            text: 'CWE-416',
          },
        ],
      },
    },
    {
      id: '9',
      value: {
        title: 'Неконтролируемая загрузка файла с опасным типом',
        items: [
          {
            text: 'CWE-434',
          },
        ],
      },
    },
    {
      id: '10',
      value: {
        title: 'Неправильная проверка ввода',
        items: [
          {
            text: 'CWE-20',
          },
        ],
      },
    },
  ],
  edges: [
    {
      source: '-8',
      target: '-1',
      value: 'библиотека'
    },
    {
      source: '-7',
      target: '-1',
      value: 'библиотека'
    },
    {
      source: '-6',
      target: '-1',
      value: 'библиотека'
    },
    {
      source: '-5',
      target: '-1',
      value: 'встроено в React'
    },
    {
      source: '-4',
      target: '-1',
      value: 'встроено в React'
    },
    {
      source: '-3',
      target: '-1',
      value: 'встроено в React'
    },
    {
      source: '-2',
      target: '-1',
      value: 'встроено в React'
    },
    {
      source: '-1',
      target: '0'
    },
    {
      source: '0',
      target: '1',
    },
    {
      source: '1',
      target: '2',
    },
    {
      source: '1',
      target: '3',
    },
    {
      source: '1',
      target: '4',
    },
    {
      source: '1',
      target: '5',
    },
    {
      source: '1',
      target: '6',
    },
    {
      source: '1',
      target: '7',
    },
    {
      source: '1',
      target: '8',
    },
    {
      source: '1',
      target: '9',
    },
    {
      source: '1',
      target: '10',
    },
  ],
};

export default data;