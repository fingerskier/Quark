Template.editor.helpers({
	editable: function () {
	}
});

Template.editor.rendered = function () {
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/tomorrow-night");
	editor.getSession().setMode("ace/mode/javascript");
};

Template.editor.destroyed = function () {
};