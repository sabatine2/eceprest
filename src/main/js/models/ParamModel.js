define(function(){	

	var ParamModel = Backbone.Model.extend({

		defaults: {
			label: null,
			name: null,
			value: null,
			description: null,
			visible: true,
			globalParam: false,
			urlParam: false,
			multiValue: false,
			multipart: false,
			required: false,
			modifiable: false,
			type: null,
			headerParam: false,
			className: null
		},

		getLabel: function() {

			if ( !this.get("label") ) {
				return this.get("name");
			}

			return this.get("label");
		},

		getDescription: function () {

			var desc = this.get("description");
			
			desc = desc + ' TYPE: ' + this.get("type");

			if (this.get("headerParam")) {
				desc = desc + ' (HEADER PARAM)';
				
			}

			if (this.get("required")) {
				desc = desc + ' (REQUIRED)';
			}
			
			if (this.get("modifiable")) {
				desc = desc + ' (MODIFIABLE)';
			}
			
			return desc;
		}

	});

	return ParamModel;

});