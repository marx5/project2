"use strict";

function TemplateProcessor(template) {
  this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
  const propertyRegex = /{{(.*?)}}/g;

  const filledTemplate = this.template.replace(
    propertyRegex,
    (match, property) => {
      if (dictionary.hasOwnProperty(property)) {
        return dictionary[property];
      } else {
        return "";
      }
    }
  );

  return filledTemplate;
};
