Why does commenting out:

```
import {Landing} from "/client/modules/landing"
```

in client/modules/core/components/home.jsx make this app work?

If I'm incorrectly exporting `Landing` and it is undefined, why does it matter since it is never used? Shouldn't it fail at point of use and, as such, not fail?

If there is an error in `Landing` itself, then why not explicitly report that error?

Further, why does the presence or absence of the above import prevent home.jsx from loading? Shouldn't it *always* load and throw an error, instead of silently failing to load if this import is present?

This is under Firefox 44. Perhaps other browsers behave differently, but Firefox is the only browser available to me.

Thanks.
