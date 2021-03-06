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
			insert: false,
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
			
			if(this.get("type")) {
				desc = desc + ' Type: ' + this.get("type");
			}

			if (this.get("headerParam")) {
				desc = desc + ' (HEADER PARAM)';
			}
			
			if(this.get("insert")) {
				if (this.get("required")) {
					desc = desc + ' (INSERT - REQUIRED)';
				} else {
					desc = desc + ' (INSERT)';
				}
			}
			
			if (this.get("modifiable")) {
				desc = desc + ' (MODIFIABLE)';
			}
			
			desc = desc + '.';
			
			return desc;
		}

	});

	return ParamModel;

});