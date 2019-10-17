# lastpass-demo

This is a demo of a potential memory leak in the LastPass browser extension for Chrome version 4.35.0 when navigating a Vue application that uses VueRouter and contains `<form>` elements. The apparent cause is the retention of `<form>`s in the `FormDetection` `formMap`.

The following instructions assume you have [yarn](https://yarnpkg.com/lang/en/), [serve](https://www.npmjs.com/package/serve), and the [LastPass browser extension](https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd) installed.

1. Clone this repository.
1. `yarn install`
1. `yarn build`
1. `serve -s dist/`
1. Open Chrome.
1. Navigate to http://localhost:5000/#/
1. Open dev tools.
1. Click on the _Memory_ tab.
1. Expand the drawer[1]
1. Set the JavaScript context[2] to LastPass: Free Password Manager
1. Create a live expression[3] for the `FormDetection` service's form map: `window.LPModule.getService('FormDetection').formMap`
1. Click _Go To Form_.
1. Press *Submit*.
1. Observe the `formMap` contains 1 element and the memory usage is ~80MB.
1. Click _Go To Form_.
1. Press *Submit*.
1. Observe `formMap` contains 2 element and the memory usage is ~160MB.
1. Repeat as many times as desired.
1. Observe that both the `formMap` contains one element for each visit to `/form`.
1. Collect garbage and wait.
1. Observe that the memory usage does not decrease by a meaningful amount.
1. Navigate to `chrome://extensions`
1. Disable LastPass by clicking the toggle on its card.
1. Navigate to http://localhost:5000/#/
1. Open dev tools.
1. Click on the _Memory_ tab.
1. Click _Go To Form_.
1. Press *Submit*.
1. Click _Go To Form_.
1. Press *Submit*.
1. Repeat as many times as desired.
1. Collect garbage and wait.
1. Observe that the memory usage drops to ~6MB.

[1] https://developers.google.com/web/tools/chrome-devtools/customize#drawer
[2] https://developers.google.com/web/tools/chrome-devtools/console/reference#context
[3] https://developers.google.com/web/tools/chrome-devtools/console/live-expressions
