### Version 2.0.2 - July 7, 2015

- **Dropdown** - Fixed regression in `2.0.1` causing search dropdown not to clear values correctly [#2533](https://github.com/Semantic-Org/Semantic-UI/issues/2533)
- **Dropdown** - Dropdown icon will now always toggle menu visibility [#2510](https://github.com/Semantic-Org/Semantic-UI/issues/2510)
- **Dropdown** -  Pressing same key on dropdown with multiple choices with same first letter will now cycle selections. For example "California" then "Colorado" when pressing C [#2516](https://github.com/Semantic-Org/Semantic-UI/issues/2516)
- **Dropdown** - Dropdown now changes text before calling `onChange` callback so that callback reflects new dropdown conditions [#2539](https://github.com/Semantic-Org/Semantic-UI/issues/2539)
- **Dropdown** - Clicking on label, or deleting a label will no longer trigger dropdown menu toggling
- **Dropdown** - Multiselect that do use text labels (e.g. "5 selected") will now remove filters on selection and scroll to last selected value

### Version 2.0.1 - July 6, 2015

- **Dropdown** - Fixed transparent tap color not being set correctly. Removed toggle behavior from touch events on multiple dropdown. [#2524](https://github.com/Semantic-Org/Semantic-UI/issues/2524)
- **Dropdown** - `restore defaults` in dropdown when used with multiple will now correctly clear other values selected that were not there on page load.
- **Dropdown** - Removes accidental console.log statement in dropdown
- **Dropdown** - Dropdown no longer closes after max selections reached and enter key used for selection.
- **Dropdown** - Dropdown will now show correctly when menu only includes a message with no other items

### Version 2.0.0 - June 30, 2015

- **Dropdown** - Dropdowns will now change opening directions automatically based on available screen space. If you need  to force a dropdown direction use `dropdown({ direction: 'upward'})`
- **Dropdown** - Dropdown item `description` now are floated in default theme and should be included before other `item` content
- **Multiselect** - New `multiple` dropdown types have been added. Many new dropdown improvements have been added including tagging/tokenizing features and loading data through API requests.
- **Dropdown** - Added remote API integration with dropdown, to allow `search selection` to query against a remote dataset.
- **Dropdown** - Dropdowns now automatically observe changes in `menu` and will update selector cache with new additions
- **Dropdowns** - Added ability to add custom choices to all search selection dropdowns (multi/single) using `allowAdditions: true` setting. Search now displays error messages on no results in all cases.
- **Dropdown** - Keyboard shortcuts have been added for selecting dropdown choices, for example "N" will scroll to "New York" in a state selection list, similar to native `<select>` behavior.
- **Dropdown** - Added new dropdown variation `scrolling dropdown` and `scrolling menu`, this can be used to include a scrollable section inside a dropdown menu.
- **Dropdown** - Dropdown will automatically animate upward if there is not enough space to appear below.
- **Dropdown** - Using `page up` and `page down` keys will now scroll menus by a page at a time
- **Transition** - Fallback javascript animations have been removed from UI components like dropdown and popup to increase performance. This removes need for expensive pseudo selectors like `:visible`, `:animated` and `:hidden` and reduces filesize.
- **Dropdown** - Nested `scrolling` menus now support keyboard selection, e.g. pressing "A" for apple, and keyboard scrolling.
- **Dropdown** - Dropdowns now have `match` setting to specify whether to match on `text`, `value` or `both`
- **Dropdown** - Multi select dropdowns now have new settings for specifying maximum selection count
- **Dropdown** - Dropdown has new `placeholder` setting for setting placeholder text in javascript
- **Dropdown** - Added `showOnFocus` option that lets you specify whether dropdown menu should show on focus
- **Dropdown** - `fullTextSearch: true` now uses fuzzy search (same as `ui search`)
- **Dropdown** - Page down and page up now works with dropdown menus
- **Dropdown** - Dropdown initialized with `disabled` prop on an `option` will now correctly appear disabled
- **Dropdown** - Added `disabled item` state, disabled items will automatically be skipped with keyboard selection
- **Form** - Fix `errored field` dropdown keyboard selection color
- **Input** - Action input now supports multiple buttons, and dropdown
- **Menu** - Fixed several inheritance issues for `dropdown item` inside `menu` appearing as `menu item`.
- **Menu** - The hover/active state of `dropdown item` have been adjusted to match `item`. Dropdown styles can be themed specifically inside `menu`.
- **Menu** - Vertical dropdown menus are no longer 100% `min-width`
- **Checkbox** - Fixes nested `dropdown` inside `checkbox` causing issues
- **Dropdown** - `focus` after changing tabs will no longer cause menu to re-open **Thanks @trevorharwell**
- **Dropdown** - Fix issue with search dropdown refocusing on self the first time after "tabbing" away in Chrome
- **Dropdown** - Fixes issue with headers disappearing inside of `ui dropdown` when nested in `ui menu`
- **Dropdown** - Fixes `onChange` to fire when input value changes, not just when menu UI changes
- **Dropdown** - Dropdowns with `transition: none` now work correctly.
- **Dropdown** - Fixed issue where `sortSelect` was relying on object key enumeration order which is browser dependent and unreliable. It now uses a sort function which functions the same in all browsers
- **Dropdown** - Fixed issue with `search selection` not changing text when reselecting same value from list
- **Dropdown** - Fixed `min-width` issues causing background to not appear behind unwrapped text with `white-space: nowrap`
- **Dropdown** - Dropdown `menu` now use same font size as dropdown
- **Dropdown** - Fixed dropdown `metadata` attribute caching causing issues with React integration
- **Dropdown** - Fixed border radius on `sub menu` when aligned `left`
- **Dropdown** - Fixed `inline dropdown` icon not aligning with content
- **Dropdown** - Fixed behaviors called on `<select>` after initialization not being correctly applied to `ui dropdown`
- **Dropdown** - Fixed issue with matching boolean values, and using `set selected` with `true` or `false`
- **Dropdown** - Fixed `search dropdown` submitting parent form when enter shortcut pressed
- **Dropdown** - Fixed dropdown menu items should not center inside of a center aligned container.
- **Dropdown** - Fixed some cases where onChange would not occur for values matching equality against '', for example `0`
- **Form** - Fixed autocompleted `ui selection dropdown` having dropdown icon z-index issues
- **Menu** - `dropdown menu` in a `secondary pointing menu` or `tabular menu` now receive distinct active styling from other `active item`
- **Menu** - Fix issue with `pointing` arrow having too high a `z-index` and appearing above `ui dropdown menu`
- **Dropdown** - Dropdown padding values now resolve to exact pixel values from em
- **Dropdown** - `item` `description` is now floated by default

### Version 1.12.2 - May 4, 2015

- **Dropdown** - Fixed `left` and `right` arrow does not move input cursor with `visible selection dropdown`. Event accidentally prevented by `sub menu` shortcut keys.

### Version 1.12.1 - April 26, 2015

- **Dropdown** - Fixes issue with chained dropdown methods used on a `<select>` not applying to the generated `ui dropdown` **Backport from 2.0**

### Version 1.11.6 - March 27, 2015

- **Menu/Dropdown** - Fix dropdown headers disappearing inside menus
- **Dropdown** - Fix unescaped character in css property causing css validation errors

### Version 1.11.5 - March 23, 2015

- **Dropdown** - `onChange` no longer fires when reselecting same value
- **Dropdown** - Fix bug where element will not blur on tab key when search selection and no selection made
- **Dropdown** - Dropdown init on `select` now returns `ui dropdown` created for chaining
- **Dropdown** - Dropdown `focus` color has been adjusted to match forms more closely
- **Dropdown** - Fixes IE10 scrollbar width in menu (calc was being precompiled in LESS) **Thanks @gabormeszoly**

### Version 1.11.2 - March 6, 2015

- **Dropdown** - Fix issue in `setup reference` (added in `1.11.1`) where chaining would not return `ui dropdown` immediately after initialization

### Version 1.11.1 - March 5, 2015

- **Dropdown** - Calling behaviors on a dropdown `select` will now automatically route them to the appropriate parent `ui dropdown`
- **Dropdown** - Added select styles for elements before they are initialized instead of FOIC (Flash of invisible content)

### Version 1.11.0 - March 3, 2015

- **Dropdown** - Fixes issue where dropdown would not open after restoring previus value on failed `search dropdown` search
- **Dropdown** - Fixes issue where dropdown would not open after restoring previous value on failed `search dropdown` search

### Version 1.10.3 - February 27, 2015

- **Menu** - Fixes dropdown menu item not having a hover state inside inverted menu

### Version 1.10.0 - February 23, 2015

- **Menu** - Fixes pointing menu displaying under dropdown menu

### UI Changes

- **Input** - Input with dropdowns is now much easier, see docs. `action input` and `labeled input` now use `display: flex`. `ui action input` now supports `<button>` tag usage (!) which support `flex` but not `table-cell`
- **Dropdown** - `search selection dropdown` will now close the menu when a `dropdown icon` is clicked
- **Dropdown** - Added new dropdown setting, `forceSelection` which forces `search selection` to a selected value on blur. Defaults to `true`.
- **Form Validation** - Dropdown and checkbox will now validate after interaction with `on: 'blur'`
- **Form** - Lightened error dropdown hover text color to be more legible
- **Dropdown** - Upward dropdown now has upward arrow icon

### Version 1.8.1 - January 26, 2015

- **Input** - `ui labeled input` now uses  `flex` added example in ui docs with dropdown

### Version 1.8.0 - January 23, 2015

- **Dropdown** - Dropdown now stores `placeholder text` (prompt text) as separate from `default text` (text set on page load). You can now reset placeholder conditions using `$('.ui.dropdown').dropdown('clear');``
- **Dropdown** - Keyboard navigation will now allow opening of sub menus with right/left arrow. Enter will open sub-menus on an unselectable category (`allowCategorySelection: false`) as well.
- **Dropdown** - Mutation observers will now observe changed in `<select>` values after initialization, and will automatically update dropdown menu when changed
- **Dropdown** - Dropdown behavior `set selected` will now also call `set value` automatically, so you do not have to invoke two behaviors to update a `selection dropdown` **Thanks @mktm**
- **Dropdown** - Dropdown no longer will not show menu when no `item` are present in menu. Dropdown will now only filter results for `ui search dropdown` #1632 **Thanks PSyton**.
- **Dropdown** - Dropdown will now produce an error if behaviors on an initialized `<select>` are not invoked on `ui dropdown`
- **Dropdown** - Fixed bug where link items would not open in sub-menus due to `event.preventDefault`
- **Label** - Fixed `ui corner label` appearing on-top of `ui dropdown` menu due to issue in z-index hierarchy

### Version 1.7.0 - January 14, 2015

- **Dropdown** - Javascript Dropdown can now be disabled by adding ``disabled` class. No need to call `destroy`. **Thanks Psyton**
- **Dropdown** - Search dropdown input can now have backgrounds. Fixes issues with autocompleted search dropdowns which have forced yellow "autocompleted" bg.
- **Dropdown** - Fix issue with search selection not correctly matching when values are not strings
- **Dropdown** - New `upward dropdown` variation, which opens its menu upward. Default animation now uses ``settings.transition = 'auto'` and determines direction of animation based on menu direction
- **Dropdown** - Dropdown matching fields without values now trims whitespace by default
- **Dropdown** - `restore defaults` will now set placeholder styling and remove active element. Added example in docs.
- **Dropdown** - Fixed bug where sub menus may sometimes have dropdown icon overlap text
- **Dropdown** - Fixes dropdown search input from filtering text values when input is inside menu, i.e "In-Menu Search"
- **Dropdown** - Fix issue with search selection not correctly creating RegExp when select values are not strings **Thanks @alufers**
- **Dropdown** - Fix issue with `left floated` and `right floated` content sometimes not applying correctly

### Version 1.6.0 - January 05, 2015

- **Form** - ``ui search dropdown`` inside a form has incorrect focus style

### Version 1.5.0 - December 30, 2014

- **Dropdown** - New setting ``allowCategorySelection`` lets menu items with sub menus be selected. Added example in docs.
- **Dropdown/Search** - Fixed issues with ``ui search`` and ``ui search dropdown`` using ``RegExp test`` which [advances pointer on match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) causing results to display incorrectly

### Version 1.4.1 - December 23, 2014

- **Dropdown** - ``<select>`` elements will now preserve original ``<option>`` order by default. Added ``sortSelect`` setting (disabled by default) to automatically sort ``<option>`` on initialization
- **Button** - Fixes issue with ``will-change`` property added to ``ui button`` causing layout z-indexing issues (dropdown button)

### Version 1.4.0 - December 22, 2014

- **Menu** - Fix border radius of dropdown menu inside `ui vertical menu`
- **Menu** - Fix formatting of ``ui selection dropdown`` inside ``menu``

### Version 1.3.0 - December 17, 2014

- **Dropdown** - Dropdown can now specify which direction a menu should appear left/right, dropdown icons can also appear on the left
- **Dropdown** - Full text search now defaults to ``false``, meaning search terms will return only results beginning with letters
- **Dropdown** - Search Dropdown is now much more responsive, js improvements and input throttling added.Throttling defaults to `50ms` and can be modified with settings ``delay.search``
- **Dropdown** - Search Dropdown now correctly replaces placeholder text when backspacing to empty value
- **Dropdown** - Search Dropdown now has a callback when all results filtered ``onNoResults``
- **Dropdown** - Search dropdown will now strip html before searching values when searching html
- **Dropdown** - Search now has keyboard shortcut to open dropdown on arrow down
- **Dropdown** - Dropdown now always scrolls to active element on menu open, calculates position with new ``loading`` class
- **Dropdown** - Fix bug in position of sub menus with ``floating dropdown``
- **All UI** - Adds error message when triggering an invalid module behavior i.e. typos ``$('.dropdown').dropdown('hid');``

### Version 1.2.0 - December 08, 2014

- **Dropdown** - Fixes bug with dropdown converted from ``select`` that use ``<option`` values with capital letters not being selectable
- Fixed documentation on dropdown actions, form field widths, form validation types, and many odds & ends

### Version 1.1.0 - December 02, 2014

- **Dropdown** - Dropdown ``onChange`` callback now fires when calling ``setSelected`` programatically.
- **Dropdown** - Fix ``action input`` used inside ``ui dropdown`` to appear correctly **Thanks ordepdev**

### Version 1.0.0 - November 24, 2014

- **Dropdown** - Sub menus inside dropdowns now need a wrapping div **text** around sub-menu descriptions
- **Dropdown** - New dropdown type, searchable selection for large lists of choices
- **Dropdown** - Dropdowns can now be initialized directly on a ``<select>`` element without any html
- **Dropdown** - New action combo will change text of adjacent button, select will select element but not change text
- **Dropdown** - Many new content types now work inside dropdowns, headers, dividers, images, inputs, labels and more
- **Form** - Inputs now use 1em font size and correctly match selection dropdown height

### Version 0.18.0 - June 6, 2014

- **Dropdown** - Fixes dropdown 'is animating' with dropdowns when CSS animations were not included **Thanks nathankot**

### Version 0.17.0 - May 9, 2014

- **Dropdown** - Dropdowns can now receive focus and be navigated with a keyboard **Thanks Musatov**

### Version 0.15.1 - Mar 14, 2014

- **Dropdown** - Typo in dropdown css was causing selection dropdowns not to appear

### Version 0.15.0 - Mar 14, 2014

- **Form** - Forms, Dropdowns, and Inputs now have matching padding size, and use 1em font size to appear same size as surrounding text
- **Form Validation** - Form validation now automatically revalidates a selection dropdown on change when invalid
- **Dropdown** - Element's with numeric ``data-text`` values were erroring when selected
- **Dropdown** - Default selection text was not appearing when a dropdown had a value that was ``false`` or ``0``

### Version 0.14.0 - Mar 03, 2014

- **Dropdown** - Dropdown now has error state **Thanks Musatov**
- **Form** - Form fields with errors will now properly style dropdown elements **Thanks Musatov**

### Version 0.13.0 - Feb 20, 2014

- **Menu** - Fixes dropdown formatting when used **inside* a menu item

### Version 0.12.0 - Jan 06, 2014

- **Dropdown** - Fixes dropdowns links not working on touch devices
- **Dropdown** - Default value is now stored on init, and can be restored using 'restore defaults' behavior
- **Dropdown** - Fixes touchmove event not clearing on touch devices causing unnecessary overhead
- **Dropdown** - Fixes issue where last match was returned, not prioritizing value over text

### Version 0.10.3 - Dec 22, 2013

- **Dropdown** - Fixes issue where dropdown animation does not occur sometimes (Thanks MohammadYounes)

### Version 0.10.2 - Dec 13, 2013

- **Dropdown** - Fixes missing easing equations for dropdown javascript animations. Would cause an error when no css transitions were included and jquery easing was not available.

### Version 0.10.0 - Dec 05, 2013

- **Dropdown** - Value can be retrieved even in instances where forms arent used

### Version 0.9.4 - Nov 24, 2013

- **Dropdown** - Fixes issue where falsey value (i.e. 0) could not be selected

### Version 0.9.3 - Nov 17, 2013

- **Dropdown** - Fixes "falsey" values (like 0) not being processed correctly
- **Button** - Fixes improper active/visible state due to :not specificity (most noticeable in mousedown on a dropdown button)

### Version 0.9.0 - Nov 5, 2013

- **Dropdown** - Dropdown now always receives pointer cursor in all types
- **Menu** - Dropdown position inside secondary menus should be more precise
- **Menu** - Floating dropdown menus now work inside menus

### Version 0.8.2 - Oct 28, 2013

- **Menu** - Fixes arrow direction on vertical menu dropdown

### Version 0.8.0 - Oct 25, 2013

- **Dropdown** - Fixes border radius on non-selection dropdowns from changing on activation

### Version 0.7.1 - Oct 23, 2013

- **Dropdown** - Fixes issue with dropdown icon position in chrome

### Version 0.7.0 - Oct 22, 2013

- **Dropdown** - Dropdown cannot display inside item image
- **Dropdown** - Dropdown links were being prevented by event.preventDefault used for touch devices
- **Dropdown** - Fixes issue with borders on selection dropdown
- **Dropdown** - Fixes pointing dropdown to appear correctly in menu
- **Popup** - Popup no-longer receives class name 'visible' on show, this allows popups to be used on dropdowns and other elements with a visible state

### Version 0.6.5 - Oct 18, 2013

- Fixes issue where browser default action, like link clicking, was prevented on dropdown item click

### Version 0.6.4 - Oct 16, 2013

- Fixes issue where browser default action, like link clicking, was prevented on dropdown item click

### Version 0.6.3 - Oct 15, 2013

- Dropdown changeText and updateForm have been deprecated and will be removed in 1.0
- Dropdown hide no longer selects current item as active (useful for menus)
- Simplified possible dropdown actions changeText and updateForm are now consolidated into activate which is the new default

### Version 0.6.2 - Oct 15, 2013

- Fixes touch+mouse like touchscreen laptops to work with dropdowns
- Dropdown vastly improved for touch, now can scroll with touch without closing dropdown
- Dropdown active style now slightly more noticable

### Version 0.6.1 - Oct 15, 2013

- Dropdowns in vertical menu automatically receive proper triangle pointer direction
- Fixed shadow overlap on dropdown in menus

### Version 0.4.3 - Oct 10, 2013

- Updates dropdown to include proper invoke

### Version 0.4.2 - Oct 9, 2013

- Fixes issue with event bubbling being cancelled on dropdown item click

### Version 0.3.6 - Oct 7, 2013

- Dropdown action default is now automatically determined based on type of dropdown, select dropdowns now will update form fields with default options

### Version 0.3.2 - Oct 2, 2013

- Dropdown now formats top and right arrow icons automatically with icon coupling with sub menus
- Fixes position of menu dropdowns in some cases

### Version 0.2.5 - Sep 28, 2013

- Fixes dropdown to now set active item to whatever hidden input field is when using action updateForm

### Version 0.2.2 - Sep 28, 2013

- Fixes invoke returning found function instead of results of found function in dropdown, modal

### Version 0.2.0 - Sep 28, 2013

- Swaps modal and dropdown to use same variable naming pattern as rest of modules

### Version 0.1.0 - Sep 25, 2013

- Adds dropdown icon sexiness to accordions, now with rotating pointing arrows