# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Тестовое задание Reactjs

Критерии оценивания: работоспособность приложения (со стороны пользователя), UI/UX, качество кода (гибкость, возможность быстро вносить изменения, переиспользуемость)

Задание: Необходимо создать приложение с одной страницей, на которой будет выводиться список стран в виде карточек. Дать возможность через поле поиска (Input) искать страну по коду (UZ, RU и тд)

Каждый элемент списка должен отображать информацию о стране, такую как:

* Название страны
* Столица
* Языки
* Флаг (эмоджи)
* Код телефона
* Валюта и т.д.

Список стран необходимо запрашивать из этого API https://countries.trevorblades.com/graphql 
используя этот запрос https://codeshare.io/X8J3A8 
Пример запроса к API (получаем только необходимые поля)
Пример структуры приложения - по умолчанию выводить все карточки стран.

Приложение должно быть создано с помощью create-react-app и написано на typescript (функциональные компоненты).

Для карточек рекомендуем использовать следующий компонент: https://mui.com/material-ui/react-card/

Npm модули/библиотеки необходимые для работы: 
GraphQL apollo клиент https://www.apollographql.com/docs/react/get-started
Компоненты MUI https://mui.com/material-ui/react-card/
Можете использовать свои, не ограничиваем.

Во время выполнения задания необходимо код разместить в нескольких компонентах. Код опубликовать на GitHub, с понятными коммитами и с количеством больше 1 (то есть не заливать все сразу, а push по мере выполнения)

Ссылку на репозиторий необходимо отправить в ТГ

Сообщение:  
Тестовое задание 
- Имя, Фамилия 
- Ссылка на репозиторий

Удачи!

