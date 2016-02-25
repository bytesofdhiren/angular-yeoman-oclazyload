# hello-world

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Usage

I converted AngularJS yeoman project to lazy load files on demand using ocLazyLoad. 
Things I have done
A. Added a reference of ocLayzLoad & updated JS files’ reference to load on demand from app.js or .html file of their views.
B. Updated Gruntfile to uglyfy, renamed file name & update references in the final .html or .js file.
# angular-yeoman-oclazyload

[Explanation of the implementation.](https://routerabbit.com/blog/convert-angularjs-yeoman-spa-lazyload/)