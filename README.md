# Марсель Мухамеджанов — портфолио

Статический сайт на HTML, CSS и JavaScript. Сборка и установка зависимостей не нужны.

## Запуск

Откройте `index.html` или запустите локальный сервер из этой папки:

```sh
python -m http.server 8080
```

Сайт: http://localhost:8080. Для Docker сохранена исходная конфигурация:

```sh
docker compose up --build -d
```

## Обновление существующего сайта

Замените содержимое проекта файлами из этой папки, сохранив папку `assets`.
Для GitHub Pages разместите файлы в публикуемой ветке: относительные пути поддерживают подпапку репозитория.
В этой версии изменён кеш service worker, чтобы при следующем открытии загрузились актуальные файлы.

## Что изменилось

- Добавлено предоставленное фото `assets/marsel.png`.
- Тёмный дизайн с зелёным акцентом и светлая тема; адаптивные карточки навыков и проектов.
- Языковое меню с читаемым фоном, выбором с клавиатуры, Escape и сохранением языка.
- GitHub: https://github.com/MarselDynamicIndustries.
- Контакты доступны на главной и отдельной странице. Неработающая форма заменена прямыми ссылками.
- Убраны автопрокрутка проектов и скрытие больших секций при прокрутке.
- Карточки проектов открываются с клавиатуры, диалоги закрываются Escape и возвращают фокус.

Дополнительные страницы сохранены на русском, как в исходном проекте.


## Обновление CV и проектов

Текст CV расширен: профессиональный профиль и четыре направления практического опыта. Публичная версия содержит обобщённые обязанности, без названий работодателя, внутренних систем, адресов, конкретных находок и финансовых расчётов.

Проекты выбраны по открытым README и структуре репозиториев. Alpha-статус и продолжающаяся разработка отражены в описаниях. Эти описания не означают независимую проверку работоспособности всех заявленных функций.

- https://github.com/MarselDynamicIndustries/MarsFlow
- https://github.com/MarselDynamicIndustries/marsflowbrowser
- https://github.com/MarselDynamicIndustries/MarsFlowHomeAssistant
- https://github.com/MarselDynamicIndustries/FinanceCalculator

Обновлены восемь языков главной страницы и страницы проектов. Дополнительные страницы навыков и контактов остаются на русском.

## Анимации

Плавное появление карточек при прокрутке, вступительная анимация, мягкий световой фон, подсветка кнопок, наклон обложек под курсором, переходы диалогов и индикатор прокрутки. Кнопка рядом с переключателем темы отключает движение и запоминает выбор. При `prefers-reduced-motion: reduce` анимации отключены. Без JavaScript или IntersectionObserver текст и карточки остаются видимыми.

## Иллюстрации

Четыре отдельные обложки созданы встроенным imagegen и находятся в `assets/projects/`. Это концептуальные иллюстрации, а не скриншоты приложений. В проект встроены исходные PNG; они загружаются лениво.

Общий бриф: landscape 3:2, premium editorial 3D, dark charcoal teal background, frosted glass and brushed metal, soft studio lighting, no text/logos/watermarks.

- `marsflow-cover.png`: floating frosted-glass notes and folder, sage and amber lighting, local workspace metaphor.
- `browser-cover.png`: glass orbital globe and curved browser frame with vertical tabs, blue/violet lighting.
- `home-cover.png`: isometric glass-walled smart-home maquette, warm rooms, central hub and subtle device connections.
- `finance-cover.png`: frosted-glass cylinders, metallic coins and translucent calculator, mint/lavender reflections.
