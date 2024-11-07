Reproduction for this issue: https://github.com/astoilkov/use-local-storage-state/issues/71


## Instructions 

```
npm I
npm test
```

Note a test failure 

```
    /Users/davidjohnston/localstorage-repro/node_modules/use-local-storage-state/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import useLocalStorageState from './src/useLocalStorageState.js';
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      3 |
      4 | import {hri} from "human-readable-ids";
    > 5 | import useLocalStorageState from "use-local-storage-state";
        | ^
```
