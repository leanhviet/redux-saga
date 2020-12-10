# React Training Plan

- Practice two - Youtube.

## Timeline

- 12 days (3th Jun 2019 - 19th Jun 2019) + 7 days.

## Team size

- 1 developer.

## Targets

- Apply React [here](https://reactjs.org/).
- Apply Redux:
  - Basic and Advanced [here](https://redux.js.org/).
  - Understand and apply Reduxsause [here](https://github.com/infinitered/reduxsauce/).
  - Understand and apply Redux-saga [here](https://redux-saga.js.org/).
  - Understand and apply Youtube API [here](https://developers.google.com/youtube/).

## Technologies

- HTML5.
- CSS3.
- Javascript.
- Bootstrap 3.
- ReactJS.
- Redux.

## Libs

- Axios [here](https://github.com/axios/axios).
- Bootstrap [here](https://getbootstrap.com/docs/3.3/).
- Moment [here](https://momentjs.com/).
- React-google-login [here](https://www.npmjs.com/package/react-google-login).
- React-redux [here](https://redux.js.org/).
- React-router [here](https://reacttraining.com/react-router/web/guides/quick-start).
- React-router-dom [here](https://reacttraining.com/react-router/web/guides/quick-start).
- Redux-saga [here](https://redux-saga.js.org/).
- Reduxsauce [here](https://github.com/infinitered/reduxsauce/).
- Seamless-immutable [here](https://github.com/rtfeldman/seamless-immutable/).

## Estimation details

- Read more detail estimation in [here](https://docs.google.com/document/d/1-yH9i_uXLWavblD38S8oAT-0fHgEmY_DVdsCyWcQIxE/edit?usp=sharing).

## Mock UI and Dataflow

- The same design youtube page almostly.

## Editor

- [Visual Studio Code](https://code.visualstudio.com/).

## Directory structure

## Guideline

- Clone project: `git@gitlab.asoft-python.com:g-vietle/react-training.git`.
- Run: `cd react-training`.
- Checkout to feature/redux-pratice-two branch: `git checkout feature/redux-pratice-two`.
- Run: `cd redux-pratice-two`.
- Install npm: `yarn install`.

### How to run app

- `yarn start`

### How to run storybook

- `yarn storybook`

### Test app with Jest, Enzyme and snapshot

- `yarn test` or `yarn test:coverage`

## Feature

- As a User, you can login.
- Getting list video:
  - Image.
  - Title.
  - Channel name.
  - Number of views.
  - Published time.
- Click on item:
  - Display detail video:
    - Video.
    - Title.
    - Number of views.
    - Description.
  - Display list video related.
    - Image.
    - Title.
    - Channel name.
    - Number of views.
  - Comments:
    - Display list comments about that video.
    - User name.
    - Content comment.
    - Number of like.
- Search:
  - Display list videos by keyword.

## Limitations exist

- Having error with post comment feature.
- Testing sagas with jest and enzyme.
- Video isn't play instant.
- Search feature isn't redirect to Search page while search in Detail page.

## Learns through the practice

- Learned about Generator function.
- Learned about redux-saga.
- Learned about API.

## Questions

## Author

Viet Le
