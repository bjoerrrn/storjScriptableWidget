[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://stand-with-ukraine.pp.ua)

# storjScriptableWidget

![stars](https://img.shields.io/github/stars/dusselmann/storjScriptableWidget) ![last_commit](https://img.shields.io/github/last-commit/dusselmann/storjScriptableWidget)

<img src="https://github.com/dusselmann/storjScriptableWidget/blob/main/screenshot.jpeg?raw=true" alt="" width=340 align="right"/> 

This is a fork of [StorjWidget](https://github.com/striker43/storjWidget) with minor optical modifications. 

StorjScriptableWidget is a <a href="https://scriptable.app">Scriptable</a> Widget that show aggregated stats of your [storage node(s)](https://www.storj.io/node). It shows the `daily ingress` as `in`, `daily egress` as `out`, `today's earnings` as `today`, `this month's earnings` as `month`, `space used` and the timestamp of the data shown as `time` . 

The widget pulls data from the [storjWidget-Exporter](https://github.com/striker43/storjWidget-exporter) every 4-7 minutes. This is triggered by iOS and can not be changed. 

Tested with storj node version `1.67.3`.

## usage

1. Setup and run [storjScriptableWidgetExporter](https://github.com/bjoerrrn/storjScriptableWidgetExporter).
2. Install <a href="https://scriptable.app">Scriptable</a> on your iPhone from the App Store.
3. Download storjWidget.js from this repository.
4. Import storjWidget.js in Scriptable.
5. Adjust lines 5 + 6 `widget.url` and `let url=`. Set `url` to the URL of your storjWidget-Exporter. Setting `widget.url` is optional. If you set it, you can configure Scriptable that it opens the specified `widget.url` in case you click on the widget on your home screen.

## contributing

[issues](https://github.com/dusselmann/storjScriptableWidget/issues) and [pull requests](https://github.com/dusselmann/storjScriptableWidget/pulls) are welcome. for major changes, please open an [issue](https://github.com/dusselmann/storjScriptableWidget/issues) first to discuss what you would like to change.

if you want to contact me directly, feel free to do so via discord: https://discordapp.com/users/371404709262786561

## license

[Apache-2.0](https://github.com/dusselmann/storjScriptableWidget/blob/main/LICENSE)
