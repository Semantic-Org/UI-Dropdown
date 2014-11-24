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
- **Button** - Fixes improper active/visible state due to :not specificity (most noticiable in mousedown on a dropdown button)

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