stilar
==========

WIP

## Example
```js
const Stilar = require('stilar')

const theme = Stilar()

theme.component('Playlist', {
  Playlist: {
    margin: '2px',
    display: 'flex',
    justifyContent: 'space-between',

    '@media screen and (max-width: 600px)': {
      fontFamily: '"Helvetica"',
    },
  },

  base: {
    backgroundColor: '3px',
    margin: 0,
    padding: '5px',
    display: 'inline-block',

    ':hover': {
      color: 'blue',
      backgroundColor: 'green',
    },

    '@media screen and (max-width: 600px)': {
      color: 'red',
      opacity: '0.5',
    },
  },
})

theme.keyframes('stretchdelay', {
  '0%': {
    transform: 'scaleY(0.4)',
  },

  '40%': {
    transform: 'scaleY(0.4)',
  },

  '100%': {
    transform: 'scaleY(0.4)',
  },

  '20%': {
    transform: 'scaleY(1.0)',
  },
})

console.log(theme.toStyleString())
```

Output:

```css
@-webkit-keyframes stretchdelay {0%{-webkit-transform:scaleY(0.4);transform:scaleY(0.4);}40%{-webkit-transform:scaleY(0.4);transform:scaleY(0.4);}100%{-webkit-transform:scaleY(0.4);transform:scaleY(0.4);}20%{-webkit-transform:scaleY(1.0);transform:scaleY(1.0);}}@keyframes stretchdelay {0%{-webkit-transform:scaleY(0.4);transform:scaleY(0.4);}40%{-webkit-transform:scaleY(0.4);transform:scaleY(0.4);}100%{-webkit-transform:scaleY(0.4);transform:scaleY(0.4);}20%{-webkit-transform:scaleY(1.0);transform:scaleY(1.0);}}.Playlist{margin:2px;display:-webkit-flex;display:-ms-flex;display:flex;-webkit-justify-content:space-between;-ms-justify-content:space-between;justify-content:space-between;}@media screen and (max-width: 600px){.Playlist{font-family:"Helvetica";}}.Playlist-base{background-color:3px;margin:0;padding:5px;display:inline-block;}.Playlist-base:hover{color:blue;background-color:green;}@media screen and (max-width: 600px){.Playlist-base{color:red;opacity:0.5;}}
```
