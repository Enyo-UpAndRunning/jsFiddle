enyo.ready(function() {
	enyo.kind({
		name: 'View',
		classes: 'moon',
		components: [
			{ kind: 'moon.Button', content: 'Hello', ontap: 'tapped' },
			{ kind: 'moon.CheckboxItem', checked: true, content: 'Check me',
				onchange: 'changed' },
			{ kind: 'moon.InputDecorator', components: [
				{ kind: 'moon.Input', placeholder: 'Enter something',
					onchange: 'changed' }
			] },
			{ kind: 'moon.InputDecorator', components: [
				{ kind: 'moon.RichText', value: '<i>Italics</i>',
					onchange: 'changed' }
			] }
		],
		tapped: function(sender, event) {
			// React to taps
		},
		changed: function(sender, event) {
			// React to changes
		}
	});

	new enyo.Application({ name: 'app', view: 'View' });
});
