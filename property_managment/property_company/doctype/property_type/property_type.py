# Copyright (c) 2023, m@gmail.com and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class PropertyType(Document):
	pass



@frappe.whitelist()
def get_children(doctype, parent,is_root=False, parent_property_type=None):
	print(parent_property_type)

	filters = []

	# if task:
	# 	filters.append(["parent_property_type", "=", task])
	if parent and not is_root:
		# via expand child
		filters.append(["parent_property_type", "=", parent])
	else:
		filters.append(['ifnull(`parent_property_type`, "")', "=", ""])

	if parent_property_type:
		filters.append(["parent_property_type", "=", parent_property_type])

	property_type = frappe.get_list(
		doctype,
		fields=["name as value", "subject as title", "is_group as expandable"],
		filters=filters,
		order_by="name",
	)

	# return tasks
	return property_type



# @frappe.whitelist()
# def add_node():
# 	from frappe.desk.treeview import make_tree_args

# 	args = frappe.form_dict
# 	args.update({"name_field": "subject"})
# 	args = make_tree_args(**args)

# 	# if args.parent_task == "All Tasks" or args.parent_task == args.project:
# 	# 	args.parent_task = None

# 	frappe.get_doc(args).insert()

