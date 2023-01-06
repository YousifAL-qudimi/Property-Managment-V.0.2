frappe.provide("frappe.treeview_settings");

frappe.treeview_settings['Property Type'] = {
	get_tree_nodes: "property_managment.property_company.doctype.property_type.property_type.get_children",
	// add_tree_node: "property_managment.property_company.doctype.property_type.property_type.add_node",
	filters: [
		{
			fieldname: "parent_property_type",
			fieldtype:"Link",
			options: "Property Type",
			label: __("Property Type"),
			get_query: function() {
				var args = [["Property Type", 'is_group', '=', 1]];
				return {
					filters: args
				};
			}
		}
	],
	breadcrumb: "Property Types",
	get_tree_root: false,
	root_label: "All Property Types",
	ignore_fields: ["parent_property_type"],
	onload: function(me) {
		frappe.treeview_settings['Property Type'].page = {};
		$.extend(frappe.treeview_settings['Property Type'].page, me.page);
		me.make_tree();
	},
	toolbar: [
		// {
		// 	label:__("Add Multiple"),
		// 	condition: function(node) {
		// 		return node.expandable;
		// 	},
		// 	click: function(node) {
		// 		this.data = [];
		// 		const dialog = new frappe.ui.Dialog({
		// 			title: __("Add Multiple Property Types"),
		// 			fields: [
		// 				{
		// 					fieldname: "multiple_Property Types", fieldtype: "Table",
		// 					in_place_edit: true, data: this.data,
		// 					get_data: () => {
		// 						return this.data;
		// 					},
		// 					fields: [{
		// 						fieldtype:'Data',
		// 						fieldname:"subject",
		// 						in_list_view: 1,
		// 						reqd: 1,
		// 						label: __("Subject")
		// 					}]
		// 				},
		// 			],
		// 			primary_action: function() {
		// 				dialog.hide();
		// 				return frappe.call({
		// 					method: "erpnext.projects.doctype.property_type.property_type.add_multiple_property_types",
		// 					args: {
		// 						data: dialog.get_values()["multiple_tasks"],
		// 						parent: node.data.value
		// 					},
		// 					callback: function() { }
		// 				});
		// 			},
		// 			primary_action_label: __('Create')
		// 		});
		// 		dialog.show();
		// 	}
		// }
	],
	extend_toolbar: true
};
