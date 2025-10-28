# 🎨 Design Token Typings

Проект для управления дизайн-токенами с автоматической генераций типизации и стилей. В рамках доклада на AAA Conf 2025: Рецепты здорового UI kit: как готовить компоненты без боли

## 🚀 Технологии

React 19 • TypeScript 5.7 • Vite 6 • Sass • Style Dictionary • ESLint

## 📂 Структура

```
design-token-typings/
├── src/              # Исходный код и React компоненты
├── tokens/           # Дизайн-токены (colors.json)
├── dist/             # Production сборка
└── config files      # Конфигурации Vite, ESLint, TS
```

## ⚡ Команды

```bash
yarn install   # Установка зависимостей
yarn dev       # Разработка (localhost:5173)
yarn build     # Production сборка
yarn lint      # Проверка кода
yarn preview   # Предпросмотр сборки
yarn build:tokens   # Собирает CSS переменные из токенов
yarn generate:colors   # Собирает Типы и глобальные классы для цветов

```

## 🎨 Работа с токенами

Токены из `tokens/colors.json` автоматически компилируются в SCSS переменные через Style Dictionary. Изменения применяются автоматически в режиме разработки.

```json
{
  "color": {
    "primary": { "value": "#3B82F6", "type": "color" }
  }
}
```

```tsx
import '../styles/colors.scss';

<div style={{ color: 'var(--color-primary)' }}>Text</div>
```

---

## Остались вопросы?
Напиши в тг: https://t.me/koval4ik
Новости фронтенда: Frontend pulse - https://t.me/kovalev_frontend
