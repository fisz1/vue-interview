# vue-3-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


I. Implement following view:
- when user lands on application page, on the left side of the screen he/she should see list of all book titles (and only titles) ordered ascending
- at the same time, on the right side of the screen, user should see view that displays details of selected book.
- When no book is selected, book details view should display default message ("select book").
- whenever user clicks on book title on the list, details of selected book should appear in details view
Technical requirements:
- book list and book details should be two separate components, then should not be nested in each other
- it should use promises
- list of all books and book details components can both be visible on screen for whole time (no need for navigation)