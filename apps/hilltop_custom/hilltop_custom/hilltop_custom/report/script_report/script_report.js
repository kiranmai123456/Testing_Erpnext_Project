// Copyright (c) 2024, obaid and contributors
// For license information, please see license.txt

frappe.query_reports["Script Report"] = {
	"filters": [
		{
			"fieldname": "enable",
			"fieldtype": "Check",
			"label": "Enable",
			"mandatory": 0,
			"wildcard_filter": 0
		   }
	]
};
