// Copyright (c) 2023, m@gmail.com and contributors
// For license information, please see license.txt

frappe.ui.form.on('Responsible Person', {
	first_name: function(frm){
		console.log("first_name");
		frm.doc.full_name = frm.doc.first_name + " " + frm.doc.last_name;
		console.log(frm.doc.full_name);
		frm.refresh_field("full_name");
	}
	// refresh: function(frm) {

	// }
});
