# charasort
A web based character sorter. Allows users to run through a manual merge sort of their favorite
characters from a set.

**Features**
 * Entirely client side, no backend server required.
 * Filtering out characters based on JSON based filters.
 * Shareable links of sorter results.
 * Versioning of sorter data - you may want to add characters and resources over time. Versioning keeps shareable links valid even if the base character data is changed.

This sorter is for characters from the game [Zenless Zone Zero](https://en.wikipedia.org/wiki/Zenless_Zone_Zero) made by Hoyoverse. The sorter features characters from various factions and NPCs. 
 
The sorter is based on [Touhou Project Sorter](https://github.com/execfera/charasort), check out the page to view original sorter or make your own.

## Credits

 * [html2canvas](https://github.com/niklasvh/html2canvas/) for image generation.
 * [seedrandom](https://github.com/davidbau/seedrandom) for PRNG used in character array shuffling.
 * [lz-string](https://github.com/pieroxy/lz-string) for shareable link compression.
 * [SpinKit](http://tobiasahlin.com/spinkit/) for loading animation.
 * [thsort](http://mainyan.sakura.ne.jp/thsort.html) for the original inspiration.

## Known Issues

 * Does not work with CloudFlare's Rocket Loader.
 * Breaks on older versions of IE and mobile Safari, due to various incompatibilities.
