# Visimusic

[Check it out!](https://marblelover003.github.io/Visimusic/)

There are 122 songs to choose from.

Select one from the dropdown under "Select a song" and watch it get visualized!

It might take a second for the visualizer to gather the needed data, especially on mobile devices, but it will definitely be worth it in the end.

You can also customize how the visualization looks with different settings:

- FFT Size: This is used by the `AnalyserNode` itself, and defaults to 4096. You can also choose 1024, 2048, 8192, 16384, and 32768. The higher the number, the wider the visualization - but you also lose precision.
- Number of Bars: Defaults to 250, but you can also choose 200, 150, 125, 100, 80, and 60. This is the number of "bars" to be used in the visualization. Each "bar" is a `<div>` element.
- Max Height: Defaults to 1x, but you can also choose 0.9x, 0.8x, 0.7x, 0.6x, and 0.5x. This is the maximum bar height of the visualization, relative to the height of your browser window.
- Curve Power: Defaults to 5x, but you can also choose 3x, 4x, 6x, and 8x. This is how sharp the curve from minimum dB to maximum dB should be.
- Max dB: This is used by the `AnalyserNode` itself, and defaults to -10. You can also choose 0, -5, -15, and -20.
- Min dB: This is used by the `AnalyserNode` itself, and defaults to -90. You can also choose -100, -95, -85, -80, -75, -70, -65, -60, -55, and -50.
- Tag Version: This cannot be changed yet, but as soon as the 5th version of Song Tags are up, you'll be able to choose between 4th and 5th version song tags!

Each song has a different color scheme based on what album it is from.

For example, the song "Commando Steve" by Bossfight would have a red/white color scheme, since the album art contains those colors, but the song "Spectra" by Chipzel would have a rainbow color scheme, since "Spectra", the name of the album, looks like the word "spectrum", which means a band of colors as seen in a rainbow.
