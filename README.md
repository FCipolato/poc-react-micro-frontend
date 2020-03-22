# poc-react-micro-frontend
### This is a project to integrate react with external applications.

It contains 3 projects:  

1) `counter-app` - a simulation of an isolated stand-alone "mini app" or a widget.
2) `main-app` - a simulation of an external react application to the react mini-app / widget. 
3) `js-app` - a simulation of an external JS/HTML application to the react mini-app / widget.

## running the projects 

### `counter-app`

```bash
cd counter-app
yarn
yarn build
copy files inside build directory of this project to "/main-app/public/counter"
copy files inside build directory of this project to "/js-app/counter"
```

### `main-app`

```bash
cd main-app
yarn
yarn start
```

### `js-app`

```bash
cd js-app
copy the path of "index.html" and paste on browser 
```