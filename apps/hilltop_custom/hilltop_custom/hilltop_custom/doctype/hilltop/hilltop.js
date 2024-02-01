// Copyright (c) 2024, obaid and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Hilltop", {
// 	refresh(frm) {

// 	},
// });




// adding different actions in one group

frappe.ui.form.on('Hilltop', {
	refresh(frm) {
		frm.add_custom_button(__("Action 1"), function(){
            frappe.prompt([
                {'fieldname': 'fname', 'fieldtype': 'Data', 'label': 'Enter f name'}
            ], function(values){
                frm.set_value('fname', values.fname);
            }, 'Enter Value', 'OK');
        }, __("Button Actions"));
        
        frm.add_custom_button(__("Action 2"), function(){
            frappe.prompt([
                {'fieldname': 'lname', 'fieldtype': 'Data', 'label': 'Enter l name'}
            ], function(values){
                frm.set_value('lname', values.lname);
            }, 'Enter Value', 'OK');
        }, __("Button Actions"));
        
        frm.add_custom_button(__("Get FullName"), function(){
            var full_name = frm.doc.fname + ' ' + frm.doc.lname;
            frm.set_value('fullname', full_name);
        }, __("Button Actions"));
	}
})

// int field validation

frappe.ui.form.on('Hilltop', {
    validate: function(frm) {
        var intValue = frm.doc.integer;
        if (intValue < 500) {
            frappe.msgprint(__("You can add more than 500 only."));
            frappe.validated = false;  // Prevent form submission
        }
    }
});

// date validation

frappe.ui.form.on('Hilltop', {
    validate: function(frm) {
        var selectedDate = frm.doc.add_date;

        // Get today's date
        var today = frappe.datetime.nowdate();

        // Check if the selected date is today or a future date
        if (selectedDate<today) {
            frappe.msgprint(__("Please select today's date or a future date."));
            frappe.validated = false;  // Prevent form submission
        }
    }
});

// autofill after clicking on button

frappe.ui.form.on('Hilltop', {
    refresh: function(frm) {
        frm.add_custom_button(__('Get lName'), function() {
            var field1_value = frm.doc.fname;
            frm.set_value('lname', field1_value);
        });
    }
});