1. Clone this repository.
2. Execute the following:

```
npm install
meteor
```

3. In Firefox, visit http://localhost:3000. Notice the minimal page.
4. Edit client/modules/core/components/home.jsx, uncommenting:

```
//import {Landing} from "/client/modules/landing"
```

5. The app now crashes with:

```
Error: Curry function of composeAll needs an input.
```

Also, there is a `console.log` call atop home.jsx that is never executed.

## Questions

1. The `Landing` module is never used. Why does uncommenting its import cause the app to crash?
2. If there is an error in the Landing module itself, why is that error never reported?
3. Why does uncommenting the import cause home.jsx to not load at all? (Or, at least, why does it cause the `console.log` call to not trigger?) If I have an error in a submodule or a use of same, I would expect a stacktrace of that error to originate from the callsite in home.jsx, and would definitely expect home.jsx to load.
