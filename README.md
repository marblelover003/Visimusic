# Visimusic

[Check it out!](https://marblelover003.github.io/Visimusic/)

There are 200 songs to choose from.

Select one from the dropdown under "Select a song" and watch it get visualized!

It might take a second for the visualizer to gather the needed data, especially on mobile devices, but it will definitely be worth it in the end.

You can also customize how the visualization looks with different settings:

- FFT Size: This is used by the `AnalyserNode` itself, and defaults to 4096. You can also choose 2048, 8192, 16384, and 32768. The higher the number, the wider the visualization - but you also lose precision.
- Number of Bars: Defaults to 300, but you can also choose 500, 450, 400, 350, 250, 200, 150, 125, 100, 80, 60, and 50. Decrease this value for better performance; increase it for more detail. This is the number of "bars" to be used in the visualization. Each "bar" is a `<div>` element.
- Smoothing: This is used by the `AnalyserNode` itself, and defaults to 0. You can also choose 0.05, 0.1, 0.2, 0.35, 0.5, and 0.75.
- Max Height: Defaults to 1x, but you can also choose 0.9x, 0.8x, 0.7x, 0.6x, and 0.5x. This is the maximum bar height of the visualization, relative to the height of your browser window.
- Curve Power: Defaults to 5x, but you can also choose 3x, 4x, 6x, and 8x. This is how sharp the curve from minimum dB to maximum dB should be.
- Max dB: This is used by the `AnalyserNode` itself, and defaults to -10. You can also choose 0, -5, -15, -20, -25, and -30.
- Min dB: This is used by the `AnalyserNode` itself, and defaults to -90. You can also choose -100, -95, -85, -80, -75, -70, -65, -60, -55, and -50.
- Tag Version: Currently disabled.
-----
Each song has a different color scheme.

For example, take the album "Caps On, Hats Off" (by Bossfight), album art below:

<img src="https://marblelover003.github.io/Visimusic/Music-Albums/Caps%20On,%20Hats%20Off.JPG" width="240" height="240">

A song from this album would have a red/white color scheme, since the album art contains mainly those two colors.
