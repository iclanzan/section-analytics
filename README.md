section-analytics
=================

This is a plugin for [Section, a static site generator](http://section.iclanzan.com), that adds the Google Analytics tracking code to html files.

## Getting Started
This plugin requires the `~0.1.0` version of the [grunt-section](https://github.com/iclanzan/grunt-section) plugin.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. You may install this plugin with this command:

```shell
npm install section-analytics --save
```

## Example usage
Here’s an example `Gruntfile.js` config for Section using `section-analytics`:

```js
grunt.initConfig({
  section: {
    target: {
      options: {
        analytics: {
          trackingID: 'UA-XXXXXXXX-Y'
        }
      },
      src: 'input/directory/',
      dest: 'output/directory/'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
### v0.1.0
Initial version
