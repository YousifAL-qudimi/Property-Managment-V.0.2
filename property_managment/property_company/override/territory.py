import frappe
from erpnext.setup.doctype.territory.territory import Territory


class CustomTerritory(Territory):

    def save(self, *args, **kwargs):
        print("8888888888*100")
        # do_something()
        super().save(*args, **kwargs) # call the base save method
        # do_something_else()

    def validate(self):
        if self.territory_type=="Country" and self.is_group==0:
            frappe.throw("Country can not be is group 1")

        super().validate()




    