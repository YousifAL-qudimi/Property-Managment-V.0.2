frappe.ui.form.on("Territory", {
    refresh: function(frm) {
        console.log("1234567890");

    },
    territory_type: function(frm){
        if(frm.doc.territory_type=="Country" 
        || frm.doc.territory_type=="City" || 
        frm.doc.territory_type=="Town"
        ){
            frm.set_value("is_group", 1);
        }
        else{
            frm.set_value("is_group", 0);

        }
    }

});