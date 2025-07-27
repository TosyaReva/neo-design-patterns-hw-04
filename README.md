# Домашнє завдання до Теми 4: Породжувальні патерни

### Патерни, що реалізовані

- **Singleton (Одинак)** — гарантує існування лише одного екземпляра класу та надає глобальну точку доступу до нього.
- **Builder (Будівельник)** — дає змогу поетапно створювати складні об'єкти.
- **Prototype (Прототип)** — створює нові об'єкти шляхом клонування існуючих.

## Структура проєкту

```
src/
├── builder/          # Builder pattern implementation
│   ├── DocumentBuilder.ts
│   └── main.ts
├── prototype/        # Prototype pattern implementation
│   ├── UserProfile.ts
│   └── main.ts
└── singleton/        # Singleton pattern implementation
    ├── AppConfig.ts
    └── main.ts
```

## Інструкція запуску

> ```bash
> npm install -g ts-node typescript
> ```

### Запуск окремих прикладів

```bash
npx ts-node src/singleton/main.ts
npx ts-node src/builder/main.ts
npx ts-node src/prototype/main.ts
```
