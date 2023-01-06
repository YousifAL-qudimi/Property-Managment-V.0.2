# Copyright (c) 2023, m@gmail.com and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class ResponsiblePerson(Document):
	def validate(self):
		self.full_name = self.first_name + " " + self.last_name

	pass
