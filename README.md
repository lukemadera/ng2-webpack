# Customer Portal

Playing with Angular 2 on the new customer portal while testing out some decision points:

- build tool - webpack vs grunt vs gulp vs broccoli vs angular-cli
- ngrx/store vs redux
- web sockets
- icons
- testing (cypress vs protractor / karma)
- (component) upgrades / transition for existing (patterns) Angular 1 components


## Setup / Running

- `npm install`
- `npm start`
- open browser to `http://localhost:8081`
- sockets: open new terminal and run `node node-server.js`


## First Features

1. auth (login, logout)
    2. get customer (not provider) logins [backend blocked]
2. student list [backend blocked]


## Angular 2 Learning

Several new concepts and syntax
- typescript
- reactive (e.g. redux, stores)
- observables (instead of promises)
- angular 2 itself (routing, components, services updates, etc.)


## Notes

- `npm link` with angular components (e.g. `pl-components-ng2`) does not always work (webpack error).
https://github.com/npm/npm/issues/13972


### Resources

- https://angular.io/docs/ts/latest/guide/upgrade.html#!/%23using-angular-2-components-from-angular-1-code
- http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/
- https://angular.io/docs/ts/latest/guide/webpack.html
- http://www.syntaxsuccess.com/viewarticle/socket.io-with-rxjs-in-angular-2.0

