# Copyright (c) 2024, obaid and contributors
# For license information, please see license.txt

# import frappe


def execute(filters=None):
	columns=[{
		"fieldname":"name",
		"label": "Name",
		"fieldtype":"Data",
		"width":100
	}]

	data = [{"name":"Kiranmai"},{"name":"Chinuu"},{"name":"Jhanu"}]
	return columns, data
