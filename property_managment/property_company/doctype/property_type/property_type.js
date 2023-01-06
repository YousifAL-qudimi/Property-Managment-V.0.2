// Copyright (c) 2023, m@gmail.com and contributors
// For license information, please see license.txt

frappe.ui.form.on('Property Type', {
	refresh: function(frm) {
		frm.set_query("parent_property_type", function() {
			return {
				"filters": {
					"is_group": 1
				}
			};
		});

	}
});
