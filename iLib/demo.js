enyo.ready(function() {
    enyo.kind({
        name: 'ILibSample',
        components: [
            { name: 'date' },
            { name: 'number' }
        ],
        create: function() {
            this.inherited(arguments);
            var dateFmt = new ilib.DateFmt({ length: 'short' });
            this.$.date.set('content', dateFmt.format(new Date()));
            var numFmt = new ilib.NumFmt({maxFractionDigits: 1});
            this.$.number.set('content', numFmt.format('86753.09'));
        }
    });

    new enyo.Application({ name: 'app', view: 'ILibSample' });
});
