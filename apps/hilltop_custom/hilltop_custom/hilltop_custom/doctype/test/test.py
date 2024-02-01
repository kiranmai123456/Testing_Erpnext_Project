# Copyright (c) 2024, obaid and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class test(Document):
	
	def validate(self):
		# self.branch=self.fname + "" + self.lname
		self.branch=f'{self.fname} {self.lname}'

	