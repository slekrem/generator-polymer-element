'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Generate a new Polymer element!'
    ));

    var prompts = [{
      type: 'input',
      name: 'elementName',
      message: 'Your element name',
      default: this.appname.replace(" ", "-")
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var elementName = this.props.elementName;
    this.fs.copyTpl(
      this.templatePath('element.html'),
      this.destinationPath(elementName + '.html'), {
        elementName: elementName
      });
  },
});
