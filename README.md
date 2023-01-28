# react-three-fiber-guestroom

## Tools:

- React
- React Three Fiber - a React renderer for three.js https://docs.pmnd.rs/react-three-fiber/
- TypeScript
- Volta - JavaScript Tool Manager
  https://volta.sh/

## How we import GLTF models

Import GLTF models as jsx React Components created by the gltfjsx tool. Run a command like this to create a component:

```sh
npx gltfjsx walls.gltf 
```

 Note: this creates a JavaScript file hence allowJs is set to true in tsconfig.json.
