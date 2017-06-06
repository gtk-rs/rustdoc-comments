(function() {var implementors = {};
implementors["cairo"] = [];
implementors["gdk"] = [];
implementors["gdk_pixbuf"] = [];
implementors["gio"] = [];
implementors["glib"] = [];
implementors["gtk"] = [];
implementors["libc"] = [];
implementors["pango"] = [];
implementors["sourceview"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
