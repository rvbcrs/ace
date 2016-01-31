﻿//
// Defines column-specific properties that apply to Grid elements.
//
function ColumnDefinition() {
  ace.UIElement.call(this, "Windows.UI.Xaml.Controls.ColumnDefinition");
};

// Inheritance
ColumnDefinition.prototype = Object.create(ace.NativeObject.prototype);

ColumnDefinition.prototype.getWidth = function () { return this.get("ColumnDefinition.Width"); };
ColumnDefinition.prototype.setWidth = function (gridLength) { this.set("ColumnDefinition.Width", gridLength); };

module.exports = ColumnDefinition;
