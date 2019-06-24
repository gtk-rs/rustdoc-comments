<!-- file * -->
<!-- struct AppLaunchContext -->
`AppLaunchContext` is an implementation of `gio::AppLaunchContext` that
handles launching an application in a graphical context. It provides
startup notification and allows to launch applications on a specific
screen or workspace.

## Launching an application


```C
GdkAppLaunchContext *context;

context = gdk_display_get_app_launch_context (display);

gdk_app_launch_context_set_screen (screen);
gdk_app_launch_context_set_timestamp (event->time);

if (!g_app_info_launch_default_for_uri ("http://www.gtk.org", context, &error))
  g_warning ("Launching failed: %s\n", error->message);

g_object_unref (context);
```

# Implements

[`gio::AppLaunchContextExt`](../gio/trait.AppLaunchContextExt.html)
<!-- impl AppLaunchContext::fn set_desktop -->
Sets the workspace on which applications will be launched when
using this context when running under a window manager that
supports multiple workspaces, as described in the
[Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).

When the workspace is not specified or `desktop` is set to -1,
it is up to the window manager to pick one, typically it will
be the current workspace.
## `desktop`
the number of a workspace, or -1
<!-- impl AppLaunchContext::fn set_icon -->
Sets the icon for applications that are launched with this
context.

Window Managers can use this information when displaying startup
notification.

See also `AppLaunchContext::set_icon_name`.
## `icon`
a `gio::Icon`, or `None`
<!-- impl AppLaunchContext::fn set_icon_name -->
Sets the icon for applications that are launched with this context.
The `icon_name` will be interpreted in the same way as the Icon field
in desktop files. See also `AppLaunchContext::set_icon`.

If both `icon` and `icon_name` are set, the `icon_name` takes priority.
If neither `icon` or `icon_name` is set, the icon is taken from either
the file that is passed to launched application or from the `gio::AppInfo`
for the launched application itself.
## `icon_name`
an icon name, or `None`
<!-- impl AppLaunchContext::fn set_screen -->
Sets the screen on which applications will be launched when
using this context. See also `AppLaunchContext::set_display`.

If both `screen` and `display` are set, the `screen` takes priority.
If neither `screen` or `display` are set, the default screen and
display are used.
## `screen`
a `Screen`
<!-- impl AppLaunchContext::fn set_timestamp -->
Sets the timestamp of `self`. The timestamp should ideally
be taken from the event that triggered the launch.

Window managers can use this information to avoid moving the
focus to the newly launched application when the user is busy
typing in another window. This is also known as 'focus stealing
prevention'.
## `timestamp`
a timestamp
<!-- struct Atom -->
An opaque type representing a string as an index into a table
of strings on the X server.
<!-- impl Atom::fn name -->
Determines the string corresponding to an atom.

# Returns

a newly-allocated string containing the string
 corresponding to `self`. When you are done with the
 return value, you should free it using `g_free`.
<!-- impl Atom::fn intern -->
Finds or creates an atom corresponding to a given string.
## `atom_name`
a string.
## `only_if_exists`
if `true`, GDK is allowed to not create a new atom, but
 just return `GDK_NONE` if the requested atom doesn’t already
 exists. Currently, the flag is ignored, since checking the
 existance of an atom is as expensive as creating it.

# Returns

the atom corresponding to `atom_name`.
<!-- impl Atom::fn intern_static_string -->
Finds or creates an atom corresponding to a given string.

Note that this function is identical to `Atom::intern` except
that if a new `Atom` is created the string itself is used rather
than a copy. This saves memory, but can only be used if the string
will always exist. It can be used with statically
allocated strings in the main program, but not with statically
allocated memory in dynamically loaded modules, if you expect to
ever unload the module again (e.g. do not use this function in
GTK+ theme engines).
## `atom_name`
a static string

# Returns

the atom corresponding to `atom_name`
<!-- enum AxisUse -->
An enumeration describing the way in which a device
axis (valuator) maps onto the predefined valuator
types that GTK+ understands.

Note that the X and Y axes are not really needed; pointer devices
report their location via the x/y members of events regardless. Whether
X and Y are present as axes depends on the GDK backend.
<!-- enum AxisUse::variant Ignore -->
the axis is ignored.
<!-- enum AxisUse::variant X -->
the axis is used as the x axis.
<!-- enum AxisUse::variant Y -->
the axis is used as the y axis.
<!-- enum AxisUse::variant Pressure -->
the axis is used for pressure information.
<!-- enum AxisUse::variant Xtilt -->
the axis is used for x tilt information.
<!-- enum AxisUse::variant Ytilt -->
the axis is used for y tilt information.
<!-- enum AxisUse::variant Wheel -->
the axis is used for wheel information.
<!-- enum AxisUse::variant Distance -->
the axis is used for pen/tablet distance information. (Since: 3.22)
<!-- enum AxisUse::variant Rotation -->
the axis is used for pen rotation information. (Since: 3.22)
<!-- enum AxisUse::variant Slider -->
the axis is used for pen slider information. (Since: 3.22)
<!-- enum AxisUse::variant Last -->
a constant equal to the numerically highest axis value.
<!-- enum ByteOrder -->
A set of values describing the possible byte-orders
for storing pixel values in memory.
<!-- enum ByteOrder::variant LsbFirst -->
The values are stored with the least-significant byte
 first. For instance, the 32-bit value 0xffeecc would be stored
 in memory as 0xcc, 0xee, 0xff, 0x00.
<!-- enum ByteOrder::variant MsbFirst -->
The values are stored with the most-significant byte
 first. For instance, the 32-bit value 0xffeecc would be stored
 in memory as 0x00, 0xff, 0xee, 0xcc.
<!-- enum CrossingMode -->
Specifies the crossing mode for `EventCrossing`.
<!-- enum CrossingMode::variant Normal -->
crossing because of pointer motion.
<!-- enum CrossingMode::variant Grab -->
crossing because a grab is activated.
<!-- enum CrossingMode::variant Ungrab -->
crossing because a grab is deactivated.
<!-- enum CrossingMode::variant GtkGrab -->
crossing because a GTK+ grab is activated.
<!-- enum CrossingMode::variant GtkUngrab -->
crossing because a GTK+ grab is deactivated.
<!-- enum CrossingMode::variant StateChanged -->
crossing because a GTK+ widget changed
 state (e.g. sensitivity).
<!-- enum CrossingMode::variant TouchBegin -->
crossing because a touch sequence has begun,
 this event is synthetic as the pointer might have not left the window.
<!-- enum CrossingMode::variant TouchEnd -->
crossing because a touch sequence has ended,
 this event is synthetic as the pointer might have not left the window.
<!-- enum CrossingMode::variant DeviceSwitch -->
crossing because of a device switch (i.e.
 a mouse taking control of the pointer after a touch device), this event
 is synthetic as the pointer didn’t leave the window.
<!-- struct Cursor -->
A `Cursor` represents a cursor. Its contents are private.
<!-- impl Cursor::fn new -->
Creates a new cursor from the set of builtin cursors for the default display.
See `Cursor::new_for_display`.

To make the cursor invisible, use `CursorType::BlankCursor`.

# Deprecated since 3.16

Use `Cursor::new_for_display` instead.
## `cursor_type`
cursor to create

# Returns

a new `Cursor`
<!-- impl Cursor::fn new_for_display -->
Creates a new cursor from the set of builtin cursors.
## `display`
the `Display` for which the cursor will be created
## `cursor_type`
cursor to create

# Returns

a new `Cursor`
<!-- impl Cursor::fn new_from_name -->
Creates a new cursor by looking up `name` in the current cursor
theme.

A recommended set of cursor names that will work across different
platforms can be found in the CSS specification:
- "none"
- ![](default_cursor.png) "default"
- ![](help_cursor.png) "help"
- ![](pointer_cursor.png) "pointer"
- ![](context_menu_cursor.png) "context-menu"
- ![](progress_cursor.png) "progress"
- ![](wait_cursor.png) "wait"
- ![](cell_cursor.png) "cell"
- ![](crosshair_cursor.png) "crosshair"
- ![](text_cursor.png) "text"
- ![](vertical_text_cursor.png) "vertical-text"
- ![](alias_cursor.png) "alias"
- ![](copy_cursor.png) "copy"
- ![](no_drop_cursor.png) "no-drop"
- ![](move_cursor.png) "move"
- ![](not_allowed_cursor.png) "not-allowed"
- ![](grab_cursor.png) "grab"
- ![](grabbing_cursor.png) "grabbing"
- ![](all_scroll_cursor.png) "all-scroll"
- ![](col_resize_cursor.png) "col-resize"
- ![](row_resize_cursor.png) "row-resize"
- ![](n_resize_cursor.png) "n-resize"
- ![](e_resize_cursor.png) "e-resize"
- ![](s_resize_cursor.png) "s-resize"
- ![](w_resize_cursor.png) "w-resize"
- ![](ne_resize_cursor.png) "ne-resize"
- ![](nw_resize_cursor.png) "nw-resize"
- ![](sw_resize_cursor.png) "sw-resize"
- ![](se_resize_cursor.png) "se-resize"
- ![](ew_resize_cursor.png) "ew-resize"
- ![](ns_resize_cursor.png) "ns-resize"
- ![](nesw_resize_cursor.png) "nesw-resize"
- ![](nwse_resize_cursor.png) "nwse-resize"
- ![](zoom_in_cursor.png) "zoom-in"
- ![](zoom_out_cursor.png) "zoom-out"
## `display`
the `Display` for which the cursor will be created
## `name`
the name of the cursor

# Returns

a new `Cursor`, or `None` if there is no
 cursor with the given name
<!-- impl Cursor::fn new_from_pixbuf -->
Creates a new cursor from a pixbuf.

Not all GDK backends support RGBA cursors. If they are not
supported, a monochrome approximation will be displayed.
The functions `Display::supports_cursor_alpha` and
`Display::supports_cursor_color` can be used to determine
whether RGBA cursors are supported;
`Display::get_default_cursor_size` and
`Display::get_maximal_cursor_size` give information about
cursor sizes.

If `x` or `y` are `-1`, the pixbuf must have
options named “x_hot” and “y_hot”, resp., containing
integer values between `0` and the width resp. height of
the pixbuf. (Since: 3.0)

On the X backend, support for RGBA cursors requires a
sufficently new version of the X Render extension.
## `display`
the `Display` for which the cursor will be created
## `pixbuf`
the `gdk_pixbuf::Pixbuf` containing the cursor image
## `x`
the horizontal offset of the “hotspot” of the cursor.
## `y`
the vertical offset of the “hotspot” of the cursor.

# Returns

a new `Cursor`.
<!-- impl Cursor::fn new_from_surface -->
Creates a new cursor from a cairo image surface.

Not all GDK backends support RGBA cursors. If they are not
supported, a monochrome approximation will be displayed.
The functions `Display::supports_cursor_alpha` and
`Display::supports_cursor_color` can be used to determine
whether RGBA cursors are supported;
`Display::get_default_cursor_size` and
`Display::get_maximal_cursor_size` give information about
cursor sizes.

On the X backend, support for RGBA cursors requires a
sufficently new version of the X Render extension.
## `display`
the `Display` for which the cursor will be created
## `surface`
the cairo image surface containing the cursor pixel data
## `x`
the horizontal offset of the “hotspot” of the cursor
## `y`
the vertical offset of the “hotspot” of the cursor

# Returns

a new `Cursor`.
<!-- impl Cursor::fn get_cursor_type -->
Returns the cursor type for this cursor.

# Returns

a `CursorType`
<!-- impl Cursor::fn get_display -->
Returns the display on which the `Cursor` is defined.

# Returns

the `Display` associated to `self`
<!-- impl Cursor::fn get_image -->
Returns a `gdk_pixbuf::Pixbuf` with the image used to display the cursor.

Note that depending on the capabilities of the windowing system and
on the cursor, GDK may not be able to obtain the image data. In this
case, `None` is returned.

# Returns

a `gdk_pixbuf::Pixbuf` representing
 `self`, or `None`
<!-- impl Cursor::fn get_surface -->
Returns a cairo image surface with the image used to display the cursor.

Note that depending on the capabilities of the windowing system and
on the cursor, GDK may not be able to obtain the image data. In this
case, `None` is returned.
## `x_hot`
Location to store the hotspot x position,
 or `None`
## `y_hot`
Location to store the hotspot y position,
 or `None`

# Returns

a `cairo::Surface`
 representing `self`, or `None`
<!-- enum CursorType -->
Predefined cursors.

Note that these IDs are directly taken from the X cursor font, and many
of these cursors are either not useful, or are not available on other platforms.

The recommended way to create cursors is to use `Cursor::new_from_name`.
<!-- enum CursorType::variant XCursor -->
![](X_cursor.png)
<!-- enum CursorType::variant Arrow -->
![](arrow.png)
<!-- enum CursorType::variant BasedArrowDown -->
![](based_arrow_down.png)
<!-- enum CursorType::variant BasedArrowUp -->
![](based_arrow_up.png)
<!-- enum CursorType::variant Boat -->
![](boat.png)
<!-- enum CursorType::variant Bogosity -->
![](bogosity.png)
<!-- enum CursorType::variant BottomLeftCorner -->
![](bottom_left_corner.png)
<!-- enum CursorType::variant BottomRightCorner -->
![](bottom_right_corner.png)
<!-- enum CursorType::variant BottomSide -->
![](bottom_side.png)
<!-- enum CursorType::variant BottomTee -->
![](bottom_tee.png)
<!-- enum CursorType::variant BoxSpiral -->
![](box_spiral.png)
<!-- enum CursorType::variant CenterPtr -->
![](center_ptr.png)
<!-- enum CursorType::variant Circle -->
![](circle.png)
<!-- enum CursorType::variant Clock -->
![](clock.png)
<!-- enum CursorType::variant CoffeeMug -->
![](coffee_mug.png)
<!-- enum CursorType::variant Cross -->
![](cross.png)
<!-- enum CursorType::variant CrossReverse -->
![](cross_reverse.png)
<!-- enum CursorType::variant Crosshair -->
![](crosshair.png)
<!-- enum CursorType::variant DiamondCross -->
![](diamond_cross.png)
<!-- enum CursorType::variant Dot -->
![](dot.png)
<!-- enum CursorType::variant Dotbox -->
![](dotbox.png)
<!-- enum CursorType::variant DoubleArrow -->
![](double_arrow.png)
<!-- enum CursorType::variant DraftLarge -->
![](draft_large.png)
<!-- enum CursorType::variant DraftSmall -->
![](draft_small.png)
<!-- enum CursorType::variant DrapedBox -->
![](draped_box.png)
<!-- enum CursorType::variant Exchange -->
![](exchange.png)
<!-- enum CursorType::variant Fleur -->
![](fleur.png)
<!-- enum CursorType::variant Gobbler -->
![](gobbler.png)
<!-- enum CursorType::variant Gumby -->
![](gumby.png)
<!-- enum CursorType::variant Hand1 -->
![](hand1.png)
<!-- enum CursorType::variant Hand2 -->
![](hand2.png)
<!-- enum CursorType::variant Heart -->
![](heart.png)
<!-- enum CursorType::variant Icon -->
![](icon.png)
<!-- enum CursorType::variant IronCross -->
![](iron_cross.png)
<!-- enum CursorType::variant LeftPtr -->
![](left_ptr.png)
<!-- enum CursorType::variant LeftSide -->
![](left_side.png)
<!-- enum CursorType::variant LeftTee -->
![](left_tee.png)
<!-- enum CursorType::variant Leftbutton -->
![](leftbutton.png)
<!-- enum CursorType::variant LlAngle -->
![](ll_angle.png)
<!-- enum CursorType::variant LrAngle -->
![](lr_angle.png)
<!-- enum CursorType::variant Man -->
![](man.png)
<!-- enum CursorType::variant Middlebutton -->
![](middlebutton.png)
<!-- enum CursorType::variant Mouse -->
![](mouse.png)
<!-- enum CursorType::variant Pencil -->
![](pencil.png)
<!-- enum CursorType::variant Pirate -->
![](pirate.png)
<!-- enum CursorType::variant Plus -->
![](plus.png)
<!-- enum CursorType::variant QuestionArrow -->
![](question_arrow.png)
<!-- enum CursorType::variant RightPtr -->
![](right_ptr.png)
<!-- enum CursorType::variant RightSide -->
![](right_side.png)
<!-- enum CursorType::variant RightTee -->
![](right_tee.png)
<!-- enum CursorType::variant Rightbutton -->
![](rightbutton.png)
<!-- enum CursorType::variant RtlLogo -->
![](rtl_logo.png)
<!-- enum CursorType::variant Sailboat -->
![](sailboat.png)
<!-- enum CursorType::variant SbDownArrow -->
![](sb_down_arrow.png)
<!-- enum CursorType::variant SbHDoubleArrow -->
![](sb_h_double_arrow.png)
<!-- enum CursorType::variant SbLeftArrow -->
![](sb_left_arrow.png)
<!-- enum CursorType::variant SbRightArrow -->
![](sb_right_arrow.png)
<!-- enum CursorType::variant SbUpArrow -->
![](sb_up_arrow.png)
<!-- enum CursorType::variant SbVDoubleArrow -->
![](sb_v_double_arrow.png)
<!-- enum CursorType::variant Shuttle -->
![](shuttle.png)
<!-- enum CursorType::variant Sizing -->
![](sizing.png)
<!-- enum CursorType::variant Spider -->
![](spider.png)
<!-- enum CursorType::variant Spraycan -->
![](spraycan.png)
<!-- enum CursorType::variant Star -->
![](star.png)
<!-- enum CursorType::variant Target -->
![](target.png)
<!-- enum CursorType::variant Tcross -->
![](tcross.png)
<!-- enum CursorType::variant TopLeftArrow -->
![](top_left_arrow.png)
<!-- enum CursorType::variant TopLeftCorner -->
![](top_left_corner.png)
<!-- enum CursorType::variant TopRightCorner -->
![](top_right_corner.png)
<!-- enum CursorType::variant TopSide -->
![](top_side.png)
<!-- enum CursorType::variant TopTee -->
![](top_tee.png)
<!-- enum CursorType::variant Trek -->
![](trek.png)
<!-- enum CursorType::variant UlAngle -->
![](ul_angle.png)
<!-- enum CursorType::variant Umbrella -->
![](umbrella.png)
<!-- enum CursorType::variant UrAngle -->
![](ur_angle.png)
<!-- enum CursorType::variant Watch -->
![](watch.png)
<!-- enum CursorType::variant Xterm -->
![](xterm.png)
<!-- enum CursorType::variant LastCursor -->
last cursor type
<!-- enum CursorType::variant BlankCursor -->
Blank cursor. Since 2.16
<!-- enum CursorType::variant CursorIsPixmap -->
type of cursors constructed with
 `Cursor::new_from_pixbuf`
<!-- struct Device -->
The `Device` object represents a single input device, such
as a keyboard, a mouse, a touchpad, etc.

See the `DeviceManager` documentation for more information
about the various kinds of master and slave devices, and their
relationships.
<!-- impl Device::fn free_history -->
Frees an array of `TimeCoord` that was returned by `Device::get_history`.
## `events`
an array of `TimeCoord`.
## `n_events`
the length of the array.
<!-- impl Device::fn grab_info_libgtk_only -->
Determines information about the current keyboard grab.
This is not public API and must not be used by applications.

# Deprecated since 3.16

The symbol was never meant to be used outside
 of GTK+
## `display`
the display for which to get the grab information
## `device`
device to get the grab information from
## `grab_window`
location to store current grab window
## `owner_events`
location to store boolean indicating whether
 the `owner_events` flag to `gdk_keyboard_grab` or
 `gdk_pointer_grab` was `true`.

# Returns

`true` if this application currently has the
 keyboard grabbed.
<!-- impl Device::fn get_associated_device -->
Returns the associated device to `self`, if `self` is of type
`DeviceType::Master`, it will return the paired pointer or
keyboard.

If `self` is of type `DeviceType::Slave`, it will return
the master device to which `self` is attached to.

If `self` is of type `DeviceType::Floating`, `None` will be
returned, as there is no associated device.

# Returns

The associated device, or
 `None`
<!-- impl Device::fn get_axes -->
Returns the axes currently available on the device.

Feature: `v3_22`

<!-- impl Device::fn get_axis -->
Interprets an array of double as axis values for a given device,
and locates the value in the array for a given axis use.
## `axes`
pointer to an array of axes
## `use_`
the use to look for
## `value`
location to store the found value.

# Returns

`true` if the given axis use was found, otherwise `false`
<!-- impl Device::fn get_axis_use -->
Returns the axis use for `index_`.
## `index_`
the index of the axis.

# Returns

a `AxisUse` specifying how the axis is used.
<!-- impl Device::fn get_axis_value -->
Interprets an array of double as axis values for a given device,
and locates the value in the array for a given axis label, as returned
by `Device::list_axes`
## `axes`
pointer to an array of axes
## `axis_label`
`Atom` with the axis label.
## `value`
location to store the found value.

# Returns

`true` if the given axis use was found, otherwise `false`.
<!-- impl Device::fn get_device_type -->
Returns the device type for `self`.

# Returns

the `DeviceType` for `self`.
<!-- impl Device::fn get_display -->
Returns the `Display` to which `self` pertains.

# Returns

a `Display`. This memory is owned
 by GTK+, and must not be freed or unreffed.
<!-- impl Device::fn get_has_cursor -->
Determines whether the pointer follows device motion.
This is not meaningful for keyboard devices, which don't have a pointer.

# Returns

`true` if the pointer follows device motion
<!-- impl Device::fn get_history -->
Obtains the motion history for a pointer device; given a starting and
ending timestamp, return all events in the motion history for
the device in the given range of time. Some windowing systems
do not support motion history, in which case, `false` will
be returned. (This is not distinguishable from the case where
motion history is supported and no events were found.)

Note that there is also `WindowExt::set_event_compression` to get
more motion events delivered directly, independent of the windowing
system.
## `window`
the window with respect to which which the event coordinates will be reported
## `start`
starting timestamp for range of events to return
## `stop`
ending timestamp for the range of events to return
## `events`

 location to store a newly-allocated array of `TimeCoord`, or
 `None`
## `n_events`
location to store the length of
 `events`, or `None`

# Returns

`true` if the windowing system supports motion history and
 at least one event was found.
<!-- impl Device::fn get_key -->
If `index_` has a valid keyval, this function will return `true`
and fill in `keyval` and `modifiers` with the keyval settings.
## `index_`
the index of the macro button to get.
## `keyval`
return value for the keyval.
## `modifiers`
return value for modifiers.

# Returns

`true` if keyval is set for `index`.
<!-- impl Device::fn get_last_event_window -->
Gets information about which window the given pointer device is in, based on events
that have been received so far from the display server. If another application
has a pointer grab, or this application has a grab with owner_events = `false`,
`None` may be returned even if the pointer is physically over one of this
application's windows.

# Returns

the last window the device
<!-- impl Device::fn get_mode -->
Determines the mode of the device.

# Returns

a `InputSource`
<!-- impl Device::fn get_n_axes -->
Returns the number of axes the device currently has.

# Returns

the number of axes.
<!-- impl Device::fn get_n_keys -->
Returns the number of keys the device currently has.

# Returns

the number of keys.
<!-- impl Device::fn get_name -->
Determines the name of the device.

# Returns

a name
<!-- impl Device::fn get_position -->
Gets the current location of `self`. As a slave device
coordinates are those of its master pointer, This function
may not be called on devices of type `DeviceType::Slave`,
unless there is an ongoing grab on them, see `Device::grab`.
## `screen`
location to store the `Screen`
 the `self` is on, or `None`.
## `x`
location to store root window X coordinate of `self`, or `None`.
## `y`
location to store root window Y coordinate of `self`, or `None`.
<!-- impl Device::fn get_position_double -->
Gets the current location of `self` in double precision. As a slave device's
coordinates are those of its master pointer, this function
may not be called on devices of type `DeviceType::Slave`,
unless there is an ongoing grab on them. See `Device::grab`.
## `screen`
location to store the `Screen`
 the `self` is on, or `None`.
## `x`
location to store root window X coordinate of `self`, or `None`.
## `y`
location to store root window Y coordinate of `self`, or `None`.
<!-- impl Device::fn get_product_id -->
Returns the product ID of this device, or `None` if this information couldn't
be obtained. This ID is retrieved from the device, and is thus constant for
it. See `Device::get_vendor_id` for more information.

Feature: `v3_16`


# Returns

the product ID, or `None`
<!-- impl Device::fn get_seat -->
Returns the `Seat` the device belongs to.

Feature: `v3_20`


# Returns

A `Seat`. This memory is owned by GTK+ and
 must not be freed.
<!-- impl Device::fn get_source -->
Determines the type of the device.

# Returns

a `InputSource`
<!-- impl Device::fn get_state -->
Gets the current state of a pointer device relative to `window`. As a slave
device’s coordinates are those of its master pointer, this
function may not be called on devices of type `DeviceType::Slave`,
unless there is an ongoing grab on them. See `Device::grab`.
## `window`
a `Window`.
## `axes`
an array of doubles to store the values of
the axes of `self` in, or `None`.
## `mask`
location to store the modifiers, or `None`.
<!-- impl Device::fn get_vendor_id -->
Returns the vendor ID of this device, or `None` if this information couldn't
be obtained. This ID is retrieved from the device, and is thus constant for
it.

This function, together with `Device::get_product_id`, can be used to eg.
compose `gio::Settings` paths to store settings for this device.


```C
 static GSettings *
 get_device_settings (GdkDevice *device)
 {
   const gchar *vendor, *product;
   GSettings *settings;
   GdkDevice *device;
   gchar *path;

   vendor = gdk_device_get_vendor_id (device);
   product = gdk_device_get_product_id (device);

   path = g_strdup_printf ("/org/example/app/devices/%s:%s/", vendor, product);
   settings = g_settings_new_with_path (DEVICE_SCHEMA, path);
   g_free (path);

   return settings;
 }
```

Feature: `v3_16`


# Returns

the vendor ID, or `None`
<!-- impl Device::fn get_window_at_position -->
Obtains the window underneath `self`, returning the location of the device in `win_x` and `win_y`. Returns
`None` if the window tree under `self` is not known to GDK (for example, belongs to another application).

As a slave device coordinates are those of its master pointer, This
function may not be called on devices of type `DeviceType::Slave`,
unless there is an ongoing grab on them, see `Device::grab`.
## `win_x`
return location for the X coordinate of the device location,
 relative to the window origin, or `None`.
## `win_y`
return location for the Y coordinate of the device location,
 relative to the window origin, or `None`.

# Returns

the `Window` under the
device position, or `None`.
<!-- impl Device::fn get_window_at_position_double -->
Obtains the window underneath `self`, returning the location of the device in `win_x` and `win_y` in
double precision. Returns `None` if the window tree under `self` is not known to GDK (for example,
belongs to another application).

As a slave device coordinates are those of its master pointer, This
function may not be called on devices of type `DeviceType::Slave`,
unless there is an ongoing grab on them, see `Device::grab`.
## `win_x`
return location for the X coordinate of the device location,
 relative to the window origin, or `None`.
## `win_y`
return location for the Y coordinate of the device location,
 relative to the window origin, or `None`.

# Returns

the `Window` under the
 device position, or `None`.
<!-- impl Device::fn grab -->
Grabs the device so that all events coming from this device are passed to
this application until the device is ungrabbed with `Device::ungrab`,
or the window becomes unviewable. This overrides any previous grab on the device
by this client.

Note that `self` and `window` need to be on the same display.

Device grabs are used for operations which need complete control over the
given device events (either pointer or keyboard). For example in GTK+ this
is used for Drag and Drop operations, popup menus and such.

Note that if the event mask of an X window has selected both button press
and button release events, then a button press event will cause an automatic
pointer grab until the button is released. X does this automatically since
most applications expect to receive button press and release events in pairs.
It is equivalent to a pointer grab on the window with `owner_events` set to
`true`.

If you set up anything at the time you take the grab that needs to be
cleaned up when the grab ends, you should handle the `EventGrabBroken`
events that are emitted when the grab ends unvoluntarily.

# Deprecated since 3.20

Use `Seat::grab` instead.
## `window`
the `Window` which will own the grab (the grab window)
## `grab_ownership`
specifies the grab ownership.
## `owner_events`
if `false` then all device events are reported with respect to
 `window` and are only reported if selected by `event_mask`. If
 `true` then pointer events for this application are reported
 as normal, but pointer events outside this application are
 reported with respect to `window` and only if selected by
 `event_mask`. In either mode, unreported events are discarded.
## `event_mask`
specifies the event mask, which is used in accordance with
 `owner_events`.
## `cursor`
the cursor to display while the grab is active if the device is
 a pointer. If this is `None` then the normal cursors are used for
 `window` and its descendants, and the cursor for `window` is used
 elsewhere.
## `time_`
the timestamp of the event which led to this pointer grab. This
 usually comes from the ``GdkEvent`` struct, though `GDK_CURRENT_TIME`
 can be used if the time isn’t known.

# Returns

`GrabStatus::Success` if the grab was successful.
<!-- impl Device::fn list_axes -->
Returns a `glib::List` of ``GdkAtoms``, containing the labels for
the axes that `self` currently has.

# Returns


 A `glib::List` of ``GdkAtoms``, free with `glib::List::free`.
<!-- impl Device::fn list_slave_devices -->
If the device if of type `DeviceType::Master`, it will return
the list of slave devices attached to it, otherwise it will return
`None`

# Returns


 the list of slave devices, or `None`. The list must be
 freed with `glib::List::free`, the contents of the list are
 owned by GTK+ and should not be freed.
<!-- impl Device::fn set_axis_use -->
Specifies how an axis of a device is used.
## `index_`
the index of the axis
## `use_`
specifies how the axis is used
<!-- impl Device::fn set_key -->
Specifies the X key event to generate when a macro button of a device
is pressed.
## `index_`
the index of the macro button to set
## `keyval`
the keyval to generate
## `modifiers`
the modifiers to set
<!-- impl Device::fn set_mode -->
Sets a the mode of an input device. The mode controls if the
device is active and whether the device’s range is mapped to the
entire screen or to a single window.

Note: This is only meaningful for floating devices, master devices (and
slaves connected to these) drive the pointer cursor, which is not limited
by the input mode.
## `mode`
the input mode.

# Returns

`true` if the mode was successfully changed.
<!-- impl Device::fn ungrab -->
Release any grab on `self`.

# Deprecated since 3.20

Use `Seat::ungrab` instead.
## `time_`
a timestap (e.g. `GDK_CURRENT_TIME`).
<!-- impl Device::fn warp -->
Warps `self` in `display` to the point `x`,`y` on
the screen `screen`, unless the device is confined
to a window by a grab, in which case it will be moved
as far as allowed by the grab. Warping the pointer
creates events as if the user had moved the mouse
instantaneously to the destination.

Note that the pointer should normally be under the
control of the user. This function was added to cover
some rare use cases like keyboard navigation support
for the color picker in the ``GtkColorSelectionDialog``.
## `screen`
the screen to warp `self` to.
## `x`
the X coordinate of the destination.
## `y`
the Y coordinate of the destination.
<!-- trait DeviceExt::fn connect_changed -->
The ::changed signal is emitted either when the `Device`
has changed the number of either axes or keys. For example
In X this will normally happen when the slave device routing
events through the master device changes (for example, user
switches from the USB mouse to a tablet), in that case the
master device will change to reflect the new slave device
axes and keys.
<!-- trait DeviceExt::fn connect_tool_changed -->
The ::tool-changed signal is emitted on pen/eraser
``GdkDevices`` whenever tools enter or leave proximity.

Feature: `v3_22`

## `tool`
The new current tool
<!-- trait DeviceExt::fn get_property_associated-device -->
Associated pointer or keyboard with this device, if any. Devices of type `DeviceType::Master`
always come in keyboard/pointer pairs. Other device types will have a `None` associated device.
<!-- trait DeviceExt::fn get_property_axes -->
The axes currently available for this device.

Feature: `v3_22`

<!-- trait DeviceExt::fn get_property_device-manager -->
The `DeviceManager` the `Device` pertains to.
<!-- trait DeviceExt::fn set_property_device-manager -->
The `DeviceManager` the `Device` pertains to.
<!-- trait DeviceExt::fn get_property_display -->
The `Display` the `Device` pertains to.
<!-- trait DeviceExt::fn set_property_display -->
The `Display` the `Device` pertains to.
<!-- trait DeviceExt::fn get_property_has-cursor -->
Whether the device is represented by a cursor on the screen. Devices of type
`DeviceType::Master` will have `true` here.
<!-- trait DeviceExt::fn set_property_has-cursor -->
Whether the device is represented by a cursor on the screen. Devices of type
`DeviceType::Master` will have `true` here.
<!-- trait DeviceExt::fn get_property_input-source -->
Source type for the device.
<!-- trait DeviceExt::fn set_property_input-source -->
Source type for the device.
<!-- trait DeviceExt::fn get_property_n-axes -->
Number of axes in the device.
<!-- trait DeviceExt::fn get_property_name -->
The device name.
<!-- trait DeviceExt::fn set_property_name -->
The device name.
<!-- trait DeviceExt::fn get_property_num-touches -->
The maximal number of concurrent touches on a touch device.
Will be 0 if the device is not a touch device or if the number
of touches is unknown.

Feature: `v3_20`

<!-- trait DeviceExt::fn set_property_num-touches -->
The maximal number of concurrent touches on a touch device.
Will be 0 if the device is not a touch device or if the number
of touches is unknown.

Feature: `v3_20`

<!-- trait DeviceExt::fn get_property_product-id -->
Product ID of this device, see `Device::get_product_id`.

Feature: `v3_16`

<!-- trait DeviceExt::fn set_property_product-id -->
Product ID of this device, see `Device::get_product_id`.

Feature: `v3_16`

<!-- trait DeviceExt::fn get_property_seat -->
`Seat` of this device.

Feature: `v3_20`

<!-- trait DeviceExt::fn set_property_seat -->
`Seat` of this device.

Feature: `v3_20`

<!-- trait DeviceExt::fn get_property_type -->
Device role in the device manager.
<!-- trait DeviceExt::fn set_property_type -->
Device role in the device manager.
<!-- trait DeviceExt::fn get_property_vendor-id -->
Vendor ID of this device, see `Device::get_vendor_id`.

Feature: `v3_16`

<!-- trait DeviceExt::fn set_property_vendor-id -->
Vendor ID of this device, see `Device::get_vendor_id`.

Feature: `v3_16`

<!-- struct DeviceManager -->
In addition to a single pointer and keyboard for user interface input,
GDK contains support for a variety of input devices, including graphics
tablets, touchscreens and multiple pointers/keyboards interacting
simultaneously with the user interface. Such input devices often have
additional features, such as sub-pixel positioning information and
additional device-dependent information.

In order to query the device hierarchy and be aware of changes in the
device hierarchy (such as virtual devices being created or removed, or
physical devices being plugged or unplugged), GDK provides
`DeviceManager`.

By default, and if the platform supports it, GDK is aware of multiple
keyboard/pointer pairs and multitouch devices. This behavior can be
changed by calling `gdk_disable_multidevice` before `Display::open`.
There should rarely be a need to do that though, since GDK defaults
to a compatibility mode in which it will emit just one enter/leave
event pair for all devices on a window. To enable per-device
enter/leave events and other multi-pointer interaction features,
`WindowExt::set_support_multidevice` must be called on
``GdkWindows`` (or `gtk_widget_set_support_multidevice` on widgets).
window. See the `WindowExt::set_support_multidevice` documentation
for more information.

On X11, multi-device support is implemented through XInput 2.
Unless `gdk_disable_multidevice` is called, the XInput 2
`DeviceManager` implementation will be used as the input source.
Otherwise either the core or XInput 1 implementations will be used.

For simple applications that don’t have any special interest in
input devices, the so-called “client pointer”
provides a reasonable approximation to a simple setup with a single
pointer and keyboard. The device that has been set as the client
pointer can be accessed via `DeviceManager::get_client_pointer`.

Conceptually, in multidevice mode there are 2 device types. Virtual
devices (or master devices) are represented by the pointer cursors
and keyboard foci that are seen on the screen. Physical devices (or
slave devices) represent the hardware that is controlling the virtual
devices, and thus have no visible cursor on the screen.

Virtual devices are always paired, so there is a keyboard device for every
pointer device. Associations between devices may be inspected through
`Device::get_associated_device`.

There may be several virtual devices, and several physical devices could
be controlling each of these virtual devices. Physical devices may also
be “floating”, which means they are not attached to any virtual device.

# Master and slave devices


```text
carlos@sacarino:~$ xinput list
⎡ Virtual core pointer                          id=2    [master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
⎜   ↳ Wacom ISDv4 E6 Pen stylus                 id=10   [slave  pointer  (2)]
⎜   ↳ Wacom ISDv4 E6 Finger touch               id=11   [slave  pointer  (2)]
⎜   ↳ SynPS/2 Synaptics TouchPad                id=13   [slave  pointer  (2)]
⎜   ↳ TPPS/2 IBM TrackPoint                     id=14   [slave  pointer  (2)]
⎜   ↳ Wacom ISDv4 E6 Pen eraser                 id=16   [slave  pointer  (2)]
⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
    ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
    ↳ Power Button                              id=6    [slave  keyboard (3)]
    ↳ Video Bus                                 id=7    [slave  keyboard (3)]
    ↳ Sleep Button                              id=8    [slave  keyboard (3)]
    ↳ Integrated Camera                         id=9    [slave  keyboard (3)]
    ↳ AT Translated Set 2 keyboard              id=12   [slave  keyboard (3)]
    ↳ ThinkPad Extra Buttons                    id=15   [slave  keyboard (3)]
```

By default, GDK will automatically listen for events coming from all
master devices, setting the `Device` for all events coming from input
devices. Events containing device information are `EventType::MotionNotify`,
`EventType::ButtonPress`, `EventType::2buttonPress`, `EventType::3buttonPress`,
`EventType::ButtonRelease`, `EventType::Scroll`, `EventType::KeyPress`, `EventType::KeyRelease`,
`EventType::EnterNotify`, `EventType::LeaveNotify`, `EventType::FocusChange`,
`EventType::ProximityIn`, `EventType::ProximityOut`, `EventType::DragEnter`, `EventType::DragLeave`,
`EventType::DragMotion`, `EventType::DragStatus`, `EventType::DropStart`, `EventType::DropFinished`
and `EventType::GrabBroken`. When dealing with an event on a master device,
it is possible to get the source (slave) device that the event originated
from via `gdk_event_get_source_device`.

On a standard session, all physical devices are connected by default to
the "Virtual Core Pointer/Keyboard" master devices, hence routing all events
through these. This behavior is only modified by device grabs, where the
slave device is temporarily detached for as long as the grab is held, and
more permanently by user modifications to the device hierarchy.

On certain application specific setups, it may make sense
to detach a physical device from its master pointer, and mapping it to
an specific window. This can be achieved by the combination of
`Device::grab` and `Device::set_mode`.

In order to listen for events coming from devices
other than a virtual device, `WindowExt::set_device_events` must be
called. Generally, this function can be used to modify the event mask
for any given device.

Input devices may also provide additional information besides X/Y.
For example, graphics tablets may also provide pressure and X/Y tilt
information. This information is device-dependent, and may be
queried through `Device::get_axis`. In multidevice mode, virtual
devices will change axes in order to always represent the physical
device that is routing events through it. Whenever the physical device
changes, the `Device:n-axes` property will be notified, and
`Device::list_axes` will return the new device axes.

Devices may also have associated “keys” or
macro buttons. Such keys can be globally set to map into normal X
keyboard events. The mapping is set using `Device::set_key`.

In GTK+ 3.20, a new `Seat` object has been introduced that
supersedes `DeviceManager` and should be preferred in newly
written code.
<!-- impl DeviceManager::fn get_client_pointer -->
Returns the client pointer, that is, the master pointer that acts as the core pointer
for this application. In X11, window managers may change this depending on the interaction
pattern under the presence of several pointers.

You should use this function seldomly, only in code that isn’t triggered by a ``GdkEvent``
and there aren’t other means to get a meaningful `Device` to operate on.

# Deprecated since 3.20

Use `Seat::get_pointer` instead.

# Returns

The client pointer. This memory is
 owned by GDK and must not be freed or unreferenced.
<!-- impl DeviceManager::fn get_display -->
Gets the `Display` associated to `self`.

# Returns

the `Display` to which
 `self` is associated to, or `None`. This memory is
 owned by GDK and must not be freed or unreferenced.
<!-- impl DeviceManager::fn list_devices -->
Returns the list of devices of type `type_` currently attached to
`self`.

# Deprecated since 3.20

, use `Seat::get_pointer`, `Seat::get_keyboard`
 and `Seat::get_slaves` instead.
## `type_`
device type to get.

# Returns

a list of
 ``GdkDevices``. The returned list must be
 freed with g_list_free (). The list elements are owned by
 GTK+ and must not be freed or unreffed.
<!-- trait DeviceManagerExt::fn connect_device_added -->
The ::device-added signal is emitted either when a new master
pointer is created, or when a slave (Hardware) input device
is plugged in.
## `device`
the newly added `Device`.
<!-- trait DeviceManagerExt::fn connect_device_changed -->
The ::device-changed signal is emitted whenever a device
has changed in the hierarchy, either slave devices being
disconnected from their master device or connected to
another one, or master devices being added or removed
a slave device.

If a slave device is detached from all master devices
(`Device::get_associated_device` returns `None`), its
`DeviceType` will change to `DeviceType::Floating`,
if it's attached, it will change to `DeviceType::Slave`.
## `device`
the `Device` that changed.
<!-- trait DeviceManagerExt::fn connect_device_removed -->
The ::device-removed signal is emitted either when a master
pointer is removed, or when a slave (Hardware) input device
is unplugged.
## `device`
the just removed `Device`.
<!-- struct DevicePad -->
`DevicePad` is an interface implemented by devices of type
`InputSource::TabletPad`, it allows querying the features provided
by the pad device.

Tablet pads may contain one or more groups, each containing a subset
of the buttons/rings/strips available. `DevicePad::get_n_groups`
can be used to obtain the number of groups, `DevicePad::get_n_features`
and `DevicePad::get_feature_group` can be combined to find out the
number of buttons/rings/strips the device has, and how are they grouped.

Each of those groups have different modes, which may be used to map
each individual pad feature to multiple actions. Only one mode is
effective (current) for each given group, different groups may have
different current modes. The number of available modes in a group can
be found out through `DevicePad::get_group_n_modes`, and the current
mode for a given group will be notified through the `EventPadGroupMode`
event.

Feature: `v3_22`

# Implements

[`DevicePadExt`](trait.DevicePadExt.html), [`DeviceExt`](trait.DeviceExt.html)
<!-- trait DevicePadExt -->
Trait containing all `DevicePad` methods.

Feature: `v3_22`

# Implementors

[`DevicePad`](struct.DevicePad.html)
<!-- trait DevicePadExt::fn get_feature_group -->
Returns the group the given `feature` and `idx` belong to,
or -1 if feature/index do not exist in `self`.

Feature: `v3_22`

## `feature`
the feature type to get the group from
## `feature_idx`
the index of the feature to get the group from

# Returns

The group number of the queried pad feature.
<!-- trait DevicePadExt::fn get_group_n_modes -->
Returns the number of modes that `group` may have.

Feature: `v3_22`

## `group_idx`
group to get the number of available modes from

# Returns

The number of modes available in `group`.
<!-- trait DevicePadExt::fn get_n_features -->
Returns the number of features a tablet pad has.

Feature: `v3_22`

## `feature`
a pad feature

# Returns

The amount of elements of type `feature` that this pad has.
<!-- trait DevicePadExt::fn get_n_groups -->
Returns the number of groups this pad device has. Pads have
at least one group. A pad group is a subcollection of
buttons/strip/rings that is affected collectively by a same
current mode.

Feature: `v3_22`


# Returns

The number of button/ring/strip groups in the pad.
<!-- enum DevicePadFeature -->
A pad feature.
<!-- enum DevicePadFeature::variant Button -->
a button
<!-- enum DevicePadFeature::variant Ring -->
a ring-shaped interactive area
<!-- enum DevicePadFeature::variant Strip -->
a straight interactive area
<!-- struct DeviceTool -->


Feature: `v3_22`
<!-- impl DeviceTool::fn get_hardware_id -->
Gets the hardware ID of this tool, or 0 if it's not known. When
non-zero, the identificator is unique for the given tool model,
meaning that two identical tools will share the same `hardware_id`,
but will have different serial numbers (see `DeviceTool::get_serial`).

This is a more concrete (and device specific) method to identify
a `DeviceTool` than `DeviceTool::get_tool_type`, as a tablet
may support multiple devices with the same `DeviceToolType`,
but having different hardware identificators.

Feature: `v3_22`


# Returns

The hardware identificator of this tool.
<!-- impl DeviceTool::fn get_serial -->
Gets the serial of this tool, this value can be used to identify a
physical tool (eg. a tablet pen) across program executions.

Feature: `v3_22`


# Returns

The serial ID for this tool
<!-- impl DeviceTool::fn get_tool_type -->
Gets the `DeviceToolType` of the tool.

Feature: `v3_22`


# Returns

The physical type for this tool. This can be used to figure out what
sort of pen is being used, such as an airbrush or a pencil.
<!-- enum DeviceToolType -->
Indicates the specific type of tool being used being a tablet. Such as an
airbrush, pencil, etc.
<!-- enum DeviceToolType::variant Unknown -->
Tool is of an unknown type.
<!-- enum DeviceToolType::variant Pen -->
Tool is a standard tablet stylus.
<!-- enum DeviceToolType::variant Eraser -->
Tool is standard tablet eraser.
<!-- enum DeviceToolType::variant Brush -->
Tool is a brush stylus.
<!-- enum DeviceToolType::variant Pencil -->
Tool is a pencil stylus.
<!-- enum DeviceToolType::variant Airbrush -->
Tool is an airbrush stylus.
<!-- enum DeviceToolType::variant Mouse -->
Tool is a mouse.
<!-- enum DeviceToolType::variant Lens -->
Tool is a lens cursor.

Feature: `v3_22`

<!-- enum DeviceType -->
Indicates the device type. See [above][`DeviceManager`.description]
for more information about the meaning of these device types.
<!-- enum DeviceType::variant Master -->
Device is a master (or virtual) device. There will
 be an associated focus indicator on the screen.
<!-- enum DeviceType::variant Slave -->
Device is a slave (or physical) device.
<!-- enum DeviceType::variant Floating -->
Device is a physical device, currently not attached to
 any virtual device.
<!-- struct Display -->
`Display` objects purpose are two fold:

- To manage and provide information about input devices (pointers and keyboards)

- To manage and provide information about the available ``GdkScreens``

`Display` objects are the GDK representation of an X Display,
which can be described as a workstation consisting of
a keyboard, a pointing device (such as a mouse) and one or more
screens.
It is used to open and keep track of various `Screen` objects
currently instantiated by the application. It is also used to
access the keyboard(s) and mouse pointer(s) of the display.

Most of the input device handling has been factored out into
the separate `DeviceManager` object. Every display has a
device manager, which you can obtain using
`Display::get_device_manager`.
<!-- impl Display::fn get_default -->
Gets the default `Display`. This is a convenience
function for:
`gdk_display_manager_get_default_display (gdk_display_manager_get ())`.

# Returns

a `Display`, or `None` if
 there is no default display.
<!-- impl Display::fn open -->
Opens a display.
## `display_name`
the name of the display to open

# Returns

a `Display`, or `None` if the
 display could not be opened
<!-- impl Display::fn open_default_libgtk_only -->
Opens the default display specified by command line arguments or
environment variables, sets it as the default display, and returns
it. `gdk_parse_args` must have been called first. If the default
display has previously been set, simply returns that. An internal
function that should not be used by applications.

# Deprecated since 3.16

This symbol was never meant to be used outside
 of GTK+

# Returns

the default display, if it
 could be opened, otherwise `None`.
<!-- impl Display::fn beep -->
Emits a short beep on `self`
<!-- impl Display::fn close -->
Closes the connection to the windowing system for the given display,
and cleans up associated resources.
<!-- impl Display::fn device_is_grabbed -->
Returns `true` if there is an ongoing grab on `device` for `self`.
## `device`
a `Device`

# Returns

`true` if there is a grab in effect for `device`.
<!-- impl Display::fn flush -->
Flushes any requests queued for the windowing system; this happens automatically
when the main loop blocks waiting for new events, but if your application
is drawing without returning control to the main loop, you may need
to call this function explicitly. A common case where this function
needs to be called is when an application is executing drawing commands
from a thread other than the thread where the main loop is running.

This is most useful for X11. On windowing systems where requests are
handled synchronously, this function will do nothing.
<!-- impl Display::fn get_app_launch_context -->
Returns a `AppLaunchContext` suitable for launching
applications on the given display.

# Returns

a new `AppLaunchContext` for `self`.
 Free with `gobject::Object::unref` when done
<!-- impl Display::fn get_default_cursor_size -->
Returns the default size to use for cursors on `self`.

# Returns

the default cursor size.
<!-- impl Display::fn get_default_group -->
Returns the default group leader window for all toplevel windows
on `self`. This window is implicitly created by GDK.
See `WindowExt::set_group`.

# Returns

The default group leader window
for `self`
<!-- impl Display::fn get_default_screen -->
Get the default `Screen` for `self`.

# Returns

the default `Screen` object for `self`
<!-- impl Display::fn get_default_seat -->
Returns the default `Seat` for this display.

Feature: `v3_20`


# Returns

the default seat.
<!-- impl Display::fn get_device_manager -->
Returns the `DeviceManager` associated to `self`.

# Deprecated since 3.20

Use `Display::get_default_seat` and `Seat` operations.

# Returns

A `DeviceManager`, or
 `None`. This memory is owned by GDK and must not be freed
 or unreferenced.
<!-- impl Display::fn get_event -->
Gets the next ``GdkEvent`` to be processed for `self`, fetching events from the
windowing system if necessary.

# Returns

the next ``GdkEvent`` to be processed, or `None`
if no events are pending. The returned ``GdkEvent`` should be freed
with `gdk_event_free`.
<!-- impl Display::fn get_maximal_cursor_size -->
Gets the maximal size to use for cursors on `self`.
## `width`
the return location for the maximal cursor width
## `height`
the return location for the maximal cursor height
<!-- impl Display::fn get_monitor -->
Gets a monitor associated with this display.

Feature: `v3_22`

## `monitor_num`
number of the monitor

# Returns

the `Monitor`, or `None` if
 `monitor_num` is not a valid monitor number
<!-- impl Display::fn get_monitor_at_point -->
Gets the monitor in which the point (`x`, `y`) is located,
or a nearby monitor if the point is not in any monitor.

Feature: `v3_22`

## `x`
the x coordinate of the point
## `y`
the y coordinate of the point

# Returns

the monitor containing the point
<!-- impl Display::fn get_monitor_at_window -->
Gets the monitor in which the largest area of `window`
resides, or a monitor close to `window` if it is outside
of all monitors.

Feature: `v3_22`

## `window`
a `Window`

# Returns

the monitor with the largest overlap with `window`
<!-- impl Display::fn get_n_monitors -->
Gets the number of monitors that belong to `self`.

The returned number is valid until the next emission of the
`Display::monitor-added` or `Display::monitor-removed` signal.

Feature: `v3_22`


# Returns

the number of monitors
<!-- impl Display::fn get_name -->
Gets the name of the display.

# Returns

a string representing the display name. This string is owned
by GDK and should not be modified or freed.
<!-- impl Display::fn get_primary_monitor -->
Gets the primary monitor for the display.

The primary monitor is considered the monitor where the “main desktop”
lives. While normal application windows typically allow the window
manager to place the windows, specialized desktop applications
such as panels should place themselves on the primary monitor.

Feature: `v3_22`


# Returns

the primary monitor, or `None` if no primary
 monitor is configured by the user
<!-- impl Display::fn get_screen -->
Returns a screen object for one of the screens of the display.

# Deprecated since 3.20

There is only one screen; use `Display::get_default_screen` to get it.
## `screen_num`
the screen number

# Returns

the `Screen` object
<!-- impl Display::fn has_pending -->
Returns whether the display has events that are waiting
to be processed.

# Returns

`true` if there are events ready to be processed.
<!-- impl Display::fn is_closed -->
Finds out if the display has been closed.

# Returns

`true` if the display is closed.
<!-- impl Display::fn list_seats -->
Returns the list of seats known to `self`.

Feature: `v3_20`


# Returns

the
 list of seats known to the `Display`
<!-- impl Display::fn notify_startup_complete -->
Indicates to the GUI environment that the application has
finished loading, using a given identifier.

GTK+ will call this function automatically for ``GtkWindow``
with custom startup-notification identifier unless
`gtk_window_set_auto_startup_notification` is called to
disable that feature.
## `startup_id`
a startup-notification identifier, for which
 notification process should be completed
<!-- impl Display::fn peek_event -->
Gets a copy of the first ``GdkEvent`` in the `self`’s event queue, without
removing the event from the queue. (Note that this function will
not get more events from the windowing system. It only checks the events
that have already been moved to the GDK event queue.)

# Returns

a copy of the first ``GdkEvent`` on the event
queue, or `None` if no events are in the queue. The returned
``GdkEvent`` should be freed with `gdk_event_free`.
<!-- impl Display::fn put_event -->
Appends a copy of the given event onto the front of the event
queue for `self`.
## `event`
a ``GdkEvent``.
<!-- impl Display::fn request_selection_notification -->
Request `EventOwnerChange` events for ownership changes
of the selection named by the given atom.
## `selection`
the `Atom` naming the selection for which
 ownership change notification is requested

# Returns

whether `EventOwnerChange` events will
 be sent.
<!-- impl Display::fn set_double_click_distance -->
Sets the double click distance (two clicks within this distance
count as a double click and result in a `EventType::2buttonPress` event).
See also `Display::set_double_click_time`.
Applications should not set this, it is a global
user-configured setting.
## `distance`
distance in pixels
<!-- impl Display::fn set_double_click_time -->
Sets the double click time (two clicks within this time interval
count as a double click and result in a `EventType::2buttonPress` event).
Applications should not set this, it is a global
user-configured setting.
## `msec`
double click time in milliseconds (thousandths of a second)
<!-- impl Display::fn store_clipboard -->
Issues a request to the clipboard manager to store the
clipboard data. On X11, this is a special program that works
according to the
[FreeDesktop Clipboard Specification](http://www.freedesktop.org/Standards/clipboard-manager-spec).
## `clipboard_window`
a `Window` belonging to the clipboard owner
## `time_`
a timestamp
## `targets`
an array of targets
 that should be saved, or `None`
 if all available targets should be saved.
## `n_targets`
length of the `targets` array
<!-- impl Display::fn supports_clipboard_persistence -->
Returns whether the speicifed display supports clipboard
persistance; i.e. if it’s possible to store the clipboard data after an
application has quit. On X11 this checks if a clipboard daemon is
running.

# Returns

`true` if the display supports clipboard persistance.
<!-- impl Display::fn supports_composite -->
Returns `true` if `WindowExt::set_composited` can be used
to redirect drawing on the window using compositing.

Currently this only works on X11 with XComposite and
XDamage extensions available.

# Deprecated since 3.16

Compositing is an outdated technology that
 only ever worked on X11.

# Returns

`true` if windows may be composited.
<!-- impl Display::fn supports_cursor_alpha -->
Returns `true` if cursors can use an 8bit alpha channel
on `self`. Otherwise, cursors are restricted to bilevel
alpha (i.e. a mask).

# Returns

whether cursors can have alpha channels.
<!-- impl Display::fn supports_cursor_color -->
Returns `true` if multicolored cursors are supported
on `self`. Otherwise, cursors have only a forground
and a background color.

# Returns

whether cursors can have multiple colors.
<!-- impl Display::fn supports_input_shapes -->
Returns `true` if `gdk_window_input_shape_combine_mask` can
be used to modify the input shape of windows on `self`.

# Returns

`true` if windows with modified input shape are supported
<!-- impl Display::fn supports_selection_notification -->
Returns whether `EventOwnerChange` events will be
sent when the owner of a selection changes.

# Returns

whether `EventOwnerChange` events will
 be sent.
<!-- impl Display::fn supports_shapes -->
Returns `true` if `gdk_window_shape_combine_mask` can
be used to create shaped windows on `self`.

# Returns

`true` if shaped windows are supported
<!-- impl Display::fn sync -->
Flushes any requests queued for the windowing system and waits until all
requests have been handled. This is often used for making sure that the
display is synchronized with the current state of the program. Calling
`Display::sync` before `gdk_error_trap_pop` makes sure that any errors
generated from earlier requests are handled before the error trap is
removed.

This is most useful for X11. On windowing systems where requests are
handled synchronously, this function will do nothing.
<!-- trait DisplayExt::fn connect_closed -->
The ::closed signal is emitted when the connection to the windowing
system for `display` is closed.
## `is_error`
`true` if the display was closed due to an error
<!-- trait DisplayExt::fn connect_monitor_added -->
The ::monitor-added signal is emitted whenever a monitor is
added.

Feature: `v3_22`

## `monitor`
the monitor that was just added
<!-- trait DisplayExt::fn connect_monitor_removed -->
The ::monitor-removed signal is emitted whenever a monitor is
removed.

Feature: `v3_22`

## `monitor`
the monitor that was just removed
<!-- trait DisplayExt::fn connect_opened -->
The ::opened signal is emitted when the connection to the windowing
system for `display` is opened.
<!-- trait DisplayExt::fn connect_seat_added -->
The ::seat-added signal is emitted whenever a new seat is made
known to the windowing system.

Feature: `v3_20`

## `seat`
the seat that was just added
<!-- trait DisplayExt::fn connect_seat_removed -->
The ::seat-removed signal is emitted whenever a seat is removed
by the windowing system.

Feature: `v3_20`

## `seat`
the seat that was just removed
<!-- struct DisplayManager -->
The purpose of the `DisplayManager` singleton object is to offer
notification when displays appear or disappear or the default display
changes.

You can use `DisplayManager::get` to obtain the `DisplayManager`
singleton, but that should be rarely necessary. Typically, initializing
GTK+ opens a display that you can work with without ever accessing the
`DisplayManager`.

The GDK library can be built with support for multiple backends.
The `DisplayManager` object determines which backend is used
at runtime.

When writing backend-specific code that is supposed to work with
multiple GDK backends, you have to consider both compile time and
runtime. At compile time, use the `GDK_WINDOWING_X11`, `GDK_WINDOWING_WIN32`
macros, etc. to find out which backends are present in the GDK library
you are building your application against. At runtime, use type-check
macros like GDK_IS_X11_DISPLAY() to find out which backend is in use:

## Backend-specific code ## {`backend`-specific}


```C
#ifdef GDK_WINDOWING_X11
  if (GDK_IS_X11_DISPLAY (display))
    {
      // make X11-specific calls here
    }
  else
#endif
#ifdef GDK_WINDOWING_QUARTZ
  if (GDK_IS_QUARTZ_DISPLAY (display))
    {
      // make Quartz-specific calls here
    }
  else
#endif
  g_error ("Unsupported GDK backend");
```
<!-- impl DisplayManager::fn get -->
Gets the singleton `DisplayManager` object.

When called for the first time, this function consults the
`GDK_BACKEND` environment variable to find out which
of the supported GDK backends to use (in case GDK has been compiled
with multiple backends). Applications can use `gdk_set_allowed_backends`
to limit what backends can be used.

# Returns

The global `DisplayManager` singleton;
 `gdk_parse_args`, `gdk_init`, or `gdk_init_check` must have
 been called first.
<!-- impl DisplayManager::fn get_default_display -->
Gets the default `Display`.

# Returns

a `Display`, or `None` if
 there is no default display.
<!-- impl DisplayManager::fn list_displays -->
List all currently open displays.

# Returns

a newly
 allocated `glib::SList` of `Display` objects. Free with `glib::SList::free`
 when you are done with it.
<!-- impl DisplayManager::fn open_display -->
Opens a display.
## `name`
the name of the display to open

# Returns

a `Display`, or `None` if the
 display could not be opened
<!-- impl DisplayManager::fn set_default_display -->
Sets `display` as the default display.
## `display`
a `Display`
<!-- trait DisplayManagerExt::fn connect_display_opened -->
The ::display-opened signal is emitted when a display is opened.
## `display`
the opened display
<!-- enum DragCancelReason -->
Used in `DragContext` to the reason of a cancelled DND operation.
<!-- enum DragCancelReason::variant NoTarget -->
There is no suitable drop target.
<!-- enum DragCancelReason::variant UserCancelled -->
Drag cancelled by the user
<!-- enum DragCancelReason::variant Error -->
Unspecified error.

Feature: `v3_20`

<!-- struct DragContext -->

<!-- impl DragContext::fn get_actions -->
Determines the bitmask of actions proposed by the source if
`DragContext::get_suggested_action` returns `DragAction::Ask`.

# Returns

the `DragAction` flags
<!-- impl DragContext::fn get_dest_window -->
Returns the destination window for the DND operation.

# Returns

a `Window`
<!-- impl DragContext::fn get_device -->
Returns the `Device` associated to the drag context.

# Returns

The `Device` associated to `self`.
<!-- impl DragContext::fn get_drag_window -->
Returns the window on which the drag icon should be rendered
during the drag operation. Note that the window may not be
available until the drag operation has begun. GDK will move
the window in accordance with the ongoing drag operation.
The window is owned by `self` and will be destroyed when
the drag operation is over.

Feature: `v3_20`


# Returns

the drag window, or `None`
<!-- impl DragContext::fn get_protocol -->
Returns the drag protocol that is used by this context.

# Returns

the drag protocol
<!-- impl DragContext::fn get_selected_action -->
Determines the action chosen by the drag destination.

# Returns

a `DragAction` value
<!-- impl DragContext::fn get_source_window -->
Returns the `Window` where the DND operation started.

# Returns

a `Window`
<!-- impl DragContext::fn get_suggested_action -->
Determines the suggested drag action of the context.

# Returns

a `DragAction` value
<!-- impl DragContext::fn list_targets -->
Retrieves the list of targets of the context.

# Returns

a `glib::List` of targets
<!-- impl DragContext::fn manage_dnd -->
Requests the drag and drop operation to be managed by `self`.
When a drag and drop operation becomes managed, the `DragContext`
will internally handle all input and source-side `EventDND` events
as required by the windowing system.

Once the drag and drop operation is managed, the drag context will
emit the following signals:
- The `DragContext::action-changed` signal whenever the final action
 to be performed by the drag and drop operation changes.
- The `DragContext::drop-performed` signal after the user performs
 the drag and drop gesture (typically by releasing the mouse button).
- The `DragContext::dnd-finished` signal after the drag and drop
 operation concludes (after all ``GdkSelection`` transfers happen).
- The `DragContext::cancel` signal if the drag and drop operation is
 finished but doesn't happen over an accepting destination, or is
 cancelled through other means.

Feature: `v3_20`

## `ipc_window`
Window to use for IPC messaging/events
## `actions`
the actions supported by the drag source

# Returns

`true` if the drag and drop operation is managed.
<!-- impl DragContext::fn set_device -->
Associates a `Device` to `self`, so all Drag and Drop events
for `self` are emitted as if they came from this device.
## `device`
a `Device`
<!-- impl DragContext::fn set_hotspot -->
Sets the position of the drag window that will be kept
under the cursor hotspot. Initially, the hotspot is at the
top left corner of the drag window.

Feature: `v3_20`

## `hot_x`
x coordinate of the drag window hotspot
## `hot_y`
y coordinate of the drag window hotspot
<!-- trait DragContextExt::fn connect_action_changed -->
A new action is being chosen for the drag and drop operation.

This signal will only be emitted if the `DragContext` manages
the drag and drop operation. See `DragContext::manage_dnd`
for more information.

Feature: `v3_20`

## `action`
The action currently chosen
<!-- trait DragContextExt::fn connect_cancel -->
The drag and drop operation was cancelled.

This signal will only be emitted if the `DragContext` manages
the drag and drop operation. See `DragContext::manage_dnd`
for more information.

Feature: `v3_20`

## `reason`
The reason the context was cancelled
<!-- trait DragContextExt::fn connect_dnd_finished -->
The drag and drop operation was finished, the drag destination
finished reading all data. The drag source can now free all
miscellaneous data.

This signal will only be emitted if the `DragContext` manages
the drag and drop operation. See `DragContext::manage_dnd`
for more information.

Feature: `v3_20`

<!-- trait DragContextExt::fn connect_drop_performed -->
The drag and drop operation was performed on an accepting client.

This signal will only be emitted if the `DragContext` manages
the drag and drop operation. See `DragContext::manage_dnd`
for more information.

Feature: `v3_20`

## `time`
the time at which the drop happened.
<!-- enum DragProtocol -->
Used in `DragContext` to indicate the protocol according to
which DND is done.
<!-- enum DragProtocol::variant None -->
no protocol.
<!-- enum DragProtocol::variant Motif -->
The Motif DND protocol. No longer supported
<!-- enum DragProtocol::variant Xdnd -->
The Xdnd protocol.
<!-- enum DragProtocol::variant Rootwin -->
An extension to the Xdnd protocol for
 unclaimed root window drops.
<!-- enum DragProtocol::variant Win32Dropfiles -->
The simple WM_DROPFILES protocol.
<!-- enum DragProtocol::variant Ole2 -->
The complex OLE2 DND protocol (not implemented).
<!-- enum DragProtocol::variant Local -->
Intra-application DND.
<!-- enum DragProtocol::variant Wayland -->
Wayland DND protocol.
<!-- struct DrawingContext -->
`DrawingContext` is an object that represents the current drawing
state of a `Window`.

It's possible to use a `DrawingContext` to draw on a `Window`
via rendering API like Cairo or OpenGL.

A `DrawingContext` can only be created by calling `WindowExt::begin_draw_frame`
and will be valid until a call to `WindowExt::end_draw_frame`.

`DrawingContext` is available since GDK 3.22

Feature: `v3_22`
<!-- impl DrawingContext::fn get_cairo_context -->
Retrieves a Cairo context to be used to draw on the `Window`
that created the `DrawingContext`.

The returned context is guaranteed to be valid as long as the
`DrawingContext` is valid, that is between a call to
`WindowExt::begin_draw_frame` and `WindowExt::end_draw_frame`.

Feature: `v3_22`


# Returns

a Cairo context to be used to draw
 the contents of the `Window`. The context is owned by the
 `DrawingContext` and should not be destroyed
<!-- impl DrawingContext::fn get_clip -->
Retrieves a copy of the clip region used when creating the `self`.

Feature: `v3_22`


# Returns

a Cairo region
<!-- impl DrawingContext::fn get_window -->
Retrieves the window that created the drawing `self`.

Feature: `v3_22`


# Returns

a `Window`
<!-- impl DrawingContext::fn is_valid -->
Checks whether the given `DrawingContext` is valid.

Feature: `v3_22`


# Returns

`true` if the context is valid
<!-- trait DrawingContextExt::fn get_property_clip -->
The clip region applied to the drawing context.

Feature: `v3_22`

<!-- trait DrawingContextExt::fn set_property_clip -->
The clip region applied to the drawing context.

Feature: `v3_22`

<!-- trait DrawingContextExt::fn get_property_window -->
The `Window` that created the drawing context.

Feature: `v3_22`

<!-- trait DrawingContextExt::fn set_property_window -->
The `Window` that created the drawing context.

Feature: `v3_22`

<!-- struct EventAny -->
Contains the fields which are common to all event structs.
Any event pointer can safely be cast to a pointer to a `EventAny` to
access these fields.
<!-- struct EventButton -->
Used for button press and button release events. The
`type` field will be one of `EventType::ButtonPress`,
`EventType::2buttonPress`, `EventType::3buttonPress` or `EventType::ButtonRelease`,

Double and triple-clicks result in a sequence of events being received.
For double-clicks the order of events will be:

- `EventType::ButtonPress`
- `EventType::ButtonRelease`
- `EventType::ButtonPress`
- `EventType::2buttonPress`
- `EventType::ButtonRelease`

Note that the first click is received just like a normal
button press, while the second click results in a `EventType::2buttonPress`
being received just after the `EventType::ButtonPress`.

Triple-clicks are very similar to double-clicks, except that
`EventType::3buttonPress` is inserted after the third click. The order of the
events is:

- `EventType::ButtonPress`
- `EventType::ButtonRelease`
- `EventType::ButtonPress`
- `EventType::2buttonPress`
- `EventType::ButtonRelease`
- `EventType::ButtonPress`
- `EventType::3buttonPress`
- `EventType::ButtonRelease`

For a double click to occur, the second button press must occur within
1/4 of a second of the first. For a triple click to occur, the third
button press must also occur within 1/2 second of the first button press.
<!-- struct EventConfigure -->
Generated when a window size or position has changed.
<!-- struct EventCrossing -->
Generated when the pointer enters or leaves a window.
<!-- struct EventDND -->
Generated during DND operations.
<!-- struct EventExpose -->
Generated when all or part of a window becomes visible and needs to be
redrawn.
<!-- struct EventFocus -->
Describes a change of keyboard focus.
<!-- struct EventGrabBroken -->
Generated when a pointer or keyboard grab is broken. On X11, this happens
when the grab window becomes unviewable (i.e. it or one of its ancestors
is unmapped), or if the same application grabs the pointer or keyboard
again. Note that implicit grabs (which are initiated by button presses)
can also cause `EventGrabBroken` events.
<!-- struct EventKey -->
Describes a key press or key release event.
<!-- struct EventMotion -->
Generated when the pointer moves.
<!-- struct EventOwnerChange -->
Generated when the owner of a selection changes. On X11, this
information is only available if the X server supports the XFIXES
extension.
<!-- struct EventPadAxis -->
Generated during `InputSource::TabletPad` interaction with tactile sensors.

Feature: `v3_22`
<!-- struct EventPadButton -->
Generated during `InputSource::TabletPad` button presses and releases.

Feature: `v3_22`
<!-- struct EventPadGroupMode -->
Generated during `InputSource::TabletPad` mode switches in a group.

Feature: `v3_22`
<!-- struct EventProperty -->
Describes a property change on a window.
<!-- struct EventProximity -->
Proximity events are generated when using GDK’s wrapper for the
XInput extension. The XInput extension is an add-on for standard X
that allows you to use nonstandard devices such as graphics tablets.
A proximity event indicates that the stylus has moved in or out of
contact with the tablet, or perhaps that the user’s finger has moved
in or out of contact with a touch screen.

This event type will be used pretty rarely. It only is important for
XInput aware programs that are drawing their own cursor.
<!-- struct EventScroll -->
Generated from button presses for the buttons 4 to 7. Wheel mice are
usually configured to generate button press events for buttons 4 and 5
when the wheel is turned.

Some GDK backends can also generate “smooth” scroll events, which
can be recognized by the `ScrollDirection::Smooth` scroll direction. For
these, the scroll deltas can be obtained with
`gdk_event_get_scroll_deltas`.
<!-- struct EventSelection -->
Generated when a selection is requested or ownership of a selection
is taken over by another client application.
<!-- struct EventSequence -->
<!-- struct EventSetting -->
Generated when a setting is modified.
<!-- struct EventTouch -->
Used for touch events.
`type` field will be one of `EventType::TouchBegin`, `EventType::TouchUpdate`,
`EventType::TouchEnd` or `EventType::TouchCancel`.

Touch events are grouped into sequences by means of the `sequence`
field, which can also be obtained with `gdk_event_get_event_sequence`.
Each sequence begins with a `EventType::TouchBegin` event, followed by
any number of `EventType::TouchUpdate` events, and ends with a `EventType::TouchEnd`
(or `EventType::TouchCancel`) event. With multitouch devices, there may be
several active sequences at the same time.
<!-- struct EventTouchpadPinch -->
Generated during touchpad swipe gestures.
<!-- struct EventTouchpadSwipe -->
Generated during touchpad swipe gestures.
<!-- enum EventType -->
Specifies the type of the event.

Do not confuse these events with the signals that GTK+ widgets emit.
Although many of these events result in corresponding signals being emitted,
the events are often transformed or filtered along the way.

In some language bindings, the values `EventType::2buttonPress` and
`EventType::3buttonPress` would translate into something syntactically
invalid (eg `Gdk.EventType.2ButtonPress`, where a
symbol is not allowed to start with a number). In that case, the
aliases `EventType::DoubleButtonPress` and `EventType::TripleButtonPress` can
be used instead.
<!-- enum EventType::variant Nothing -->
a special code to indicate a null event.
<!-- enum EventType::variant Delete -->
the window manager has requested that the toplevel window be
 hidden or destroyed, usually when the user clicks on a special icon in the
 title bar.
<!-- enum EventType::variant Destroy -->
the window has been destroyed.
<!-- enum EventType::variant Expose -->
all or part of the window has become visible and needs to be
 redrawn.
<!-- enum EventType::variant MotionNotify -->
the pointer (usually a mouse) has moved.
<!-- enum EventType::variant ButtonPress -->
a mouse button has been pressed.
<!-- enum EventType::variant 2buttonPress -->
a mouse button has been double-clicked (clicked twice
 within a short period of time). Note that each click also generates a
 `EventType::ButtonPress` event.
<!-- enum EventType::variant DoubleButtonPress -->
alias for `EventType::2buttonPress`, added in 3.6.
<!-- enum EventType::variant 3buttonPress -->
a mouse button has been clicked 3 times in a short period
 of time. Note that each click also generates a `EventType::ButtonPress` event.
<!-- enum EventType::variant TripleButtonPress -->
alias for `EventType::3buttonPress`, added in 3.6.
<!-- enum EventType::variant ButtonRelease -->
a mouse button has been released.
<!-- enum EventType::variant KeyPress -->
a key has been pressed.
<!-- enum EventType::variant KeyRelease -->
a key has been released.
<!-- enum EventType::variant EnterNotify -->
the pointer has entered the window.
<!-- enum EventType::variant LeaveNotify -->
the pointer has left the window.
<!-- enum EventType::variant FocusChange -->
the keyboard focus has entered or left the window.
<!-- enum EventType::variant Configure -->
the size, position or stacking order of the window has changed.
 Note that GTK+ discards these events for `WindowType::Child` windows.
<!-- enum EventType::variant Map -->
the window has been mapped.
<!-- enum EventType::variant Unmap -->
the window has been unmapped.
<!-- enum EventType::variant PropertyNotify -->
a property on the window has been changed or deleted.
<!-- enum EventType::variant SelectionClear -->
the application has lost ownership of a selection.
<!-- enum EventType::variant SelectionRequest -->
another application has requested a selection.
<!-- enum EventType::variant SelectionNotify -->
a selection has been received.
<!-- enum EventType::variant ProximityIn -->
an input device has moved into contact with a sensing
 surface (e.g. a touchscreen or graphics tablet).
<!-- enum EventType::variant ProximityOut -->
an input device has moved out of contact with a sensing
 surface.
<!-- enum EventType::variant DragEnter -->
the mouse has entered the window while a drag is in progress.
<!-- enum EventType::variant DragLeave -->
the mouse has left the window while a drag is in progress.
<!-- enum EventType::variant DragMotion -->
the mouse has moved in the window while a drag is in
 progress.
<!-- enum EventType::variant DragStatus -->
the status of the drag operation initiated by the window
 has changed.
<!-- enum EventType::variant DropStart -->
a drop operation onto the window has started.
<!-- enum EventType::variant DropFinished -->
the drop operation initiated by the window has completed.
<!-- enum EventType::variant ClientEvent -->
a message has been received from another application.
<!-- enum EventType::variant VisibilityNotify -->
the window visibility status has changed.
<!-- enum EventType::variant Scroll -->
the scroll wheel was turned
<!-- enum EventType::variant WindowState -->
the state of a window has changed. See `WindowState`
 for the possible window states
<!-- enum EventType::variant Setting -->
a setting has been modified.
<!-- enum EventType::variant OwnerChange -->
the owner of a selection has changed. This event type
 was added in 2.6
<!-- enum EventType::variant GrabBroken -->
a pointer or keyboard grab was broken. This event type
 was added in 2.8.
<!-- enum EventType::variant Damage -->
the content of the window has been changed. This event type
 was added in 2.14.
<!-- enum EventType::variant TouchBegin -->
A new touch event sequence has just started. This event
 type was added in 3.4.
<!-- enum EventType::variant TouchUpdate -->
A touch event sequence has been updated. This event type
 was added in 3.4.
<!-- enum EventType::variant TouchEnd -->
A touch event sequence has finished. This event type
 was added in 3.4.
<!-- enum EventType::variant TouchCancel -->
A touch event sequence has been canceled. This event type
 was added in 3.4.
<!-- enum EventType::variant TouchpadSwipe -->
A touchpad swipe gesture event, the current state
 is determined by its phase field. This event type was added in 3.18.
<!-- enum EventType::variant TouchpadPinch -->
A touchpad pinch gesture event, the current state
 is determined by its phase field. This event type was added in 3.18.
<!-- enum EventType::variant PadButtonPress -->
A tablet pad button press event. This event type
 was added in 3.22.
<!-- enum EventType::variant PadButtonRelease -->
A tablet pad button release event. This event type
 was added in 3.22.
<!-- enum EventType::variant PadRing -->
A tablet pad axis event from a "ring". This event type was
 added in 3.22.
<!-- enum EventType::variant PadStrip -->
A tablet pad axis event from a "strip". This event type was
 added in 3.22.
<!-- enum EventType::variant PadGroupMode -->
A tablet pad group mode change. This event type was
 added in 3.22.
<!-- enum EventType::variant EventLast -->
marks the end of the `EventType` enumeration. Added in 2.18
<!-- struct EventWindowState -->
Generated when the state of a toplevel window changes.
<!-- struct FrameClock -->
A `FrameClock` tells the application when to update and repaint a
window. This may be synced to the vertical refresh rate of the
monitor, for example. Even when the frame clock uses a simple timer
rather than a hardware-based vertical sync, the frame clock helps
because it ensures everything paints at the same time (reducing the
total number of frames). The frame clock can also automatically
stop painting when it knows the frames will not be visible, or
scale back animation framerates.

`FrameClock` is designed to be compatible with an OpenGL-based
implementation or with mozRequestAnimationFrame in Firefox,
for example.

A frame clock is idle until someone requests a frame with
`FrameClock::request_phase`. At some later point that makes
sense for the synchronization being implemented, the clock will
process a frame and emit signals for each phase that has been
requested. (See the signals of the `FrameClock` class for
documentation of the phases. `FrameClockPhase::Update` and the
`FrameClock::update` signal are most interesting for application
writers, and are used to update the animations, using the frame time
given by `FrameClock::get_frame_time`.

The frame time is reported in microseconds and generally in the same
timescale as `g_get_monotonic_time`, however, it is not the same
as `g_get_monotonic_time`. The frame time does not advance during
the time a frame is being painted, and outside of a frame, an attempt
is made so that all calls to `FrameClock::get_frame_time` that
are called at a “similar” time get the same value. This means that
if different animations are timed by looking at the difference in
time between an initial value from `FrameClock::get_frame_time`
and the value inside the `FrameClock::update` signal of the clock,
they will stay exactly synchronized.
<!-- impl FrameClock::fn begin_updating -->
Starts updates for an animation. Until a matching call to
`FrameClock::end_updating` is made, the frame clock will continually
request a new frame with the `FrameClockPhase::Update` phase.
This function may be called multiple times and frames will be
requested until `FrameClock::end_updating` is called the same
number of times.
<!-- impl FrameClock::fn end_updating -->
Stops updates for an animation. See the documentation for
`FrameClock::begin_updating`.
<!-- impl FrameClock::fn get_current_timings -->
Gets the frame timings for the current frame.

# Returns

the `FrameTimings` for the frame currently
 being processed, or even no frame is being processed, for the
 previous frame. Before any frames have been processed, returns
 `None`.
<!-- impl FrameClock::fn get_frame_counter -->
A `FrameClock` maintains a 64-bit counter that increments for
each frame drawn.

# Returns

inside frame processing, the value of the frame counter
 for the current frame. Outside of frame processing, the frame
 counter for the last frame.
<!-- impl FrameClock::fn get_frame_time -->
Gets the time that should currently be used for animations. Inside
the processing of a frame, it’s the time used to compute the
animation position of everything in a frame. Outside of a frame, it's
the time of the conceptual “previous frame,” which may be either
the actual previous frame time, or if that’s too old, an updated
time.

# Returns

a timestamp in microseconds, in the timescale of
 of `g_get_monotonic_time`.
<!-- impl FrameClock::fn get_history_start -->
`FrameClock` internally keeps a history of `FrameTimings`
objects for recent frames that can be retrieved with
`FrameClock::get_timings`. The set of stored frames
is the set from the counter values given by
`FrameClock::get_history_start` and
`FrameClock::get_frame_counter`, inclusive.

# Returns

the frame counter value for the oldest frame
 that is available in the internal frame history of the
 `FrameClock`.
<!-- impl FrameClock::fn get_refresh_info -->
Using the frame history stored in the frame clock, finds the last
known presentation time and refresh interval, and assuming that
presentation times are separated by the refresh interval,
predicts a presentation time that is a multiple of the refresh
interval after the last presentation time, and later than `base_time`.
## `base_time`
base time for determining a presentaton time
## `refresh_interval_return`
a location to store the
determined refresh interval, or `None`. A default refresh interval of
1/60th of a second will be stored if no history is present.
## `presentation_time_return`
a location to store the next
 candidate presentation time after the given base time.
 0 will be will be stored if no history is present.
<!-- impl FrameClock::fn get_timings -->
Retrieves a `FrameTimings` object holding timing information
for the current frame or a recent frame. The `FrameTimings`
object may not yet be complete: see `FrameTimings::get_complete`.
## `frame_counter`
the frame counter value identifying the frame to
 be received.

# Returns

the `FrameTimings` object for the specified
 frame, or `None` if it is not available. See
 `FrameClock::get_history_start`.
<!-- impl FrameClock::fn request_phase -->
Asks the frame clock to run a particular phase. The signal
corresponding the requested phase will be emitted the next
time the frame clock processes. Multiple calls to
`FrameClock::request_phase` will be combined together
and only one frame processed. If you are displaying animated
content and want to continually request the
`FrameClockPhase::Update` phase for a period of time,
you should use `FrameClock::begin_updating` instead, since
this allows GTK+ to adjust system parameters to get maximally
smooth animations.
## `phase`
the phase that is requested
<!-- trait FrameClockExt::fn connect_after_paint -->
This signal ends processing of the frame. Applications
should generally not handle this signal.
<!-- trait FrameClockExt::fn connect_before_paint -->
This signal begins processing of the frame. Applications
should generally not handle this signal.
<!-- trait FrameClockExt::fn connect_flush_events -->
This signal is used to flush pending motion events that
are being batched up and compressed together. Applications
should not handle this signal.
<!-- trait FrameClockExt::fn connect_layout -->
This signal is emitted as the second step of toolkit and
application processing of the frame. Any work to update
sizes and positions of application elements should be
performed. GTK+ normally handles this internally.
<!-- trait FrameClockExt::fn connect_paint -->
This signal is emitted as the third step of toolkit and
application processing of the frame. The frame is
repainted. GDK normally handles this internally and
produces expose events, which are turned into GTK+
``GtkWidget`::draw` signals.
<!-- trait FrameClockExt::fn connect_resume_events -->
This signal is emitted after processing of the frame is
finished, and is handled internally by GTK+ to resume normal
event processing. Applications should not handle this signal.
<!-- trait FrameClockExt::fn connect_update -->
This signal is emitted as the first step of toolkit and
application processing of the frame. Animations should
be updated using `FrameClock::get_frame_time`.
Applications can connect directly to this signal, or
use `gtk_widget_add_tick_callback` as a more convenient
interface.
<!-- struct FrameTimings -->
A `FrameTimings` object holds timing information for a single frame
of the application’s displays. To retrieve `FrameTimings` objects,
use `FrameClock::get_timings` or `FrameClock::get_current_timings`.
The information in `FrameTimings` is useful for precise synchronization
of video with the event or audio streams, and for measuring
quality metrics for the application’s display, such as latency and jitter.
<!-- impl FrameTimings::fn get_complete -->
The timing information in a `FrameTimings` is filled in
incrementally as the frame as drawn and passed off to the
window system for processing and display to the user. The
accessor functions for `FrameTimings` can return 0 to
indicate an unavailable value for two reasons: either because
the information is not yet available, or because it isn't
available at all. Once `FrameTimings::get_complete` returns
`true` for a frame, you can be certain that no further values
will become available and be stored in the `FrameTimings`.

# Returns

`true` if all information that will be available
 for the frame has been filled in.
<!-- impl FrameTimings::fn get_frame_counter -->
Gets the frame counter value of the `FrameClock` when this
this frame was drawn.

# Returns

the frame counter value for this frame
<!-- impl FrameTimings::fn get_frame_time -->
Returns the frame time for the frame. This is the time value
that is typically used to time animations for the frame. See
`FrameClock::get_frame_time`.

# Returns

the frame time for the frame, in the timescale
 of `g_get_monotonic_time`
<!-- impl FrameTimings::fn get_predicted_presentation_time -->
Gets the predicted time at which this frame will be displayed. Although
no predicted time may be available, if one is available, it will
be available while the frame is being generated, in contrast to
`FrameTimings::get_presentation_time`, which is only available
after the frame has been presented. In general, if you are simply
animating, you should use `FrameClock::get_frame_time` rather
than this function, but this function is useful for applications
that want exact control over latency. For example, a movie player
may want this information for Audio/Video synchronization.

# Returns

The predicted time at which the frame will be presented,
 in the timescale of `g_get_monotonic_time`, or 0 if no predicted
 presentation time is available.
<!-- impl FrameTimings::fn get_presentation_time -->
Reurns the presentation time. This is the time at which the frame
became visible to the user.

# Returns

the time the frame was displayed to the user, in the
 timescale of `g_get_monotonic_time`, or 0 if no presentation
 time is available. See `FrameTimings::get_complete`
<!-- impl FrameTimings::fn get_refresh_interval -->
Gets the natural interval between presentation times for
the display that this frame was displayed on. Frame presentation
usually happens during the “vertical blanking interval”.

# Returns

the refresh interval of the display, in microseconds,
 or 0 if the refresh interval is not available.
 See `FrameTimings::get_complete`.
<!-- impl FrameTimings::fn ref -->
Increases the reference count of `self`.

# Returns

`self`
<!-- impl FrameTimings::fn unref -->
Decreases the reference count of `self`. If `self`
is no longer referenced, it will be freed.
<!-- enum FullscreenMode -->
Indicates which monitor (in a multi-head setup) a window should span over
when in fullscreen mode.
<!-- enum FullscreenMode::variant CurrentMonitor -->
Fullscreen on current monitor only.
<!-- enum FullscreenMode::variant AllMonitors -->
Span across all monitors when fullscreen.
<!-- struct GLContext -->
`GLContext` is an object representing the platform-specific
OpenGL drawing context.

``GdkGLContexts`` are created for a `Window` using
`WindowExt::create_gl_context`, and the context will match
the `Visual` of the window.

A `GLContext` is not tied to any particular normal framebuffer.
For instance, it cannot draw to the `Window` back buffer. The GDK
repaint system is in full control of the painting to that. Instead,
you can create render buffers or textures and use `gdk_cairo_draw_from_gl`
in the draw function of your widget to draw them. Then GDK will handle
the integration of your rendering with that of other widgets.

Support for `GLContext` is platform-specific, context creation
can fail, returning `None` context.

A `GLContext` has to be made "current" in order to start using
it, otherwise any OpenGL call will be ignored.

## Creating a new OpenGL context ##

In order to create a new `GLContext` instance you need a
`Window`, which you typically get during the realize call
of a widget.

A `GLContext` is not realized until either `GLContext::make_current`,
or until it is realized using `GLContext::realize`. It is possible to
specify details of the GL context like the OpenGL version to be used, or
whether the GL context should have extra state validation enabled after
calling `WindowExt::create_gl_context` by calling `GLContext::realize`.
If the realization fails you have the option to change the settings of the
`GLContext` and try again.

## Using a `GLContext` ##

You will need to make the `GLContext` the current context
before issuing OpenGL calls; the system sends OpenGL commands to
whichever context is current. It is possible to have multiple
contexts, so you always need to ensure that the one which you
want to draw with is the current one before issuing commands:


```C
  gdk_gl_context_make_current (context);
```

You can now perform your drawing using OpenGL commands.

You can check which `GLContext` is the current one by using
`GLContext::get_current`; you can also unset any `GLContext`
that is currently set by calling `GLContext::clear_current`.

Feature: `v3_16`
<!-- impl GLContext::fn clear_current -->
Clears the current `GLContext`.

Any OpenGL call after this function returns will be ignored
until `GLContext::make_current` is called.

Feature: `v3_16`

<!-- impl GLContext::fn get_current -->
Retrieves the current `GLContext`.

Feature: `v3_16`


# Returns

the current `GLContext`, or `None`
<!-- impl GLContext::fn get_debug_enabled -->
Retrieves the value set using `GLContext::set_debug_enabled`.

Feature: `v3_16`


# Returns

`true` if debugging is enabled
<!-- impl GLContext::fn get_display -->
Retrieves the `Display` the `self` is created for

Feature: `v3_16`


# Returns

a `Display` or `None`
<!-- impl GLContext::fn get_forward_compatible -->
Retrieves the value set using `GLContext::set_forward_compatible`.

Feature: `v3_16`


# Returns

`true` if the context should be forward compatible
<!-- impl GLContext::fn get_required_version -->
Retrieves the major and minor version requested by calling
`GLContext::set_required_version`.

Feature: `v3_16`

## `major`
return location for the major version to request
## `minor`
return location for the minor version to request
<!-- impl GLContext::fn get_shared_context -->
Retrieves the `GLContext` that this `self` share data with.

Feature: `v3_16`


# Returns

a `GLContext` or `None`
<!-- impl GLContext::fn get_use_es -->
Checks whether the `self` is using an OpenGL or OpenGL ES profile.

Feature: `v3_22`


# Returns

`true` if the `GLContext` is using an OpenGL ES profile
<!-- impl GLContext::fn get_version -->
Retrieves the OpenGL version of the `self`.

The `self` must be realized prior to calling this function.

Feature: `v3_16`

## `major`
return location for the major version
## `minor`
return location for the minor version
<!-- impl GLContext::fn get_window -->
Retrieves the `Window` used by the `self`.

Feature: `v3_16`


# Returns

a `Window` or `None`
<!-- impl GLContext::fn is_legacy -->
Whether the `GLContext` is in legacy mode or not.

The `GLContext` must be realized before calling this function.

When realizing a GL context, GDK will try to use the OpenGL 3.2 core
profile; this profile removes all the OpenGL API that was deprecated
prior to the 3.2 version of the specification. If the realization is
successful, this function will return `false`.

If the underlying OpenGL implementation does not support core profiles,
GDK will fall back to a pre-3.2 compatibility profile, and this function
will return `true`.

You can use the value returned by this function to decide which kind
of OpenGL API to use, or whether to do extension discovery, or what
kind of shader programs to load.

Feature: `v3_20`


# Returns

`true` if the GL context is in legacy mode
<!-- impl GLContext::fn make_current -->
Makes the `self` the current one.

Feature: `v3_16`

<!-- impl GLContext::fn realize -->
Realizes the given `GLContext`.

It is safe to call this function on a realized `GLContext`.

Feature: `v3_16`


# Returns

`true` if the context is realized
<!-- impl GLContext::fn set_debug_enabled -->
Sets whether the `GLContext` should perform extra validations and
run time checking. This is useful during development, but has
additional overhead.

The `GLContext` must not be realized or made current prior to
calling this function.

Feature: `v3_16`

## `enabled`
whether to enable debugging in the context
<!-- impl GLContext::fn set_forward_compatible -->
Sets whether the `GLContext` should be forward compatible.

Forward compatibile contexts must not support OpenGL functionality that
has been marked as deprecated in the requested version; non-forward
compatible contexts, on the other hand, must support both deprecated and
non deprecated functionality.

The `GLContext` must not be realized or made current prior to calling
this function.

Feature: `v3_16`

## `compatible`
whether the context should be forward compatible
<!-- impl GLContext::fn set_required_version -->
Sets the major and minor version of OpenGL to request.

Setting `major` and `minor` to zero will use the default values.

The `GLContext` must not be realized or made current prior to calling
this function.

Feature: `v3_16`

## `major`
the major version to request
## `minor`
the minor version to request
<!-- impl GLContext::fn set_use_es -->
Requests that GDK create a OpenGL ES context instead of an OpenGL one,
if the platform and windowing system allows it.

The `self` must not have been realized.

By default, GDK will attempt to automatically detect whether the
underlying GL implementation is OpenGL or OpenGL ES once the `self`
is realized.

You should check the return value of `GLContext::get_use_es` after
calling `GLContext::realize` to decide whether to use the OpenGL or
OpenGL ES API, extensions, or shaders.

Feature: `v3_22`

## `use_es`
whether the context should use OpenGL ES instead of OpenGL,
 or -1 to allow auto-detection
<!-- trait GLContextExt::fn get_property_display -->
The `Display` used to create the `GLContext`.

Feature: `v3_16`

<!-- trait GLContextExt::fn set_property_display -->
The `Display` used to create the `GLContext`.

Feature: `v3_16`

<!-- trait GLContextExt::fn get_property_shared-context -->
The `GLContext` that this context is sharing data with, or `None`

Feature: `v3_16`

<!-- trait GLContextExt::fn set_property_shared-context -->
The `GLContext` that this context is sharing data with, or `None`

Feature: `v3_16`

<!-- trait GLContextExt::fn get_property_window -->
The `Window` the gl context is bound to.

Feature: `v3_16`

<!-- trait GLContextExt::fn set_property_window -->
The `Window` the gl context is bound to.

Feature: `v3_16`

<!-- enum GLError -->
Error enumeration for `GLContext`.
<!-- enum GLError::variant NotAvailable -->
OpenGL support is not available
<!-- enum GLError::variant UnsupportedFormat -->
The requested visual format is not supported
<!-- enum GLError::variant UnsupportedProfile -->
The requested profile is not supported

Feature: `v3_16`

<!-- struct Geometry -->
The `Geometry` struct gives the window manager information about
a window’s geometry constraints. Normally you would set these on
the GTK+ level using `gtk_window_set_geometry_hints`. ``GtkWindow``
then sets the hints on the `Window` it creates.

`WindowExt::set_geometry_hints` expects the hints to be fully valid already
and simply passes them to the window manager; in contrast,
`gtk_window_set_geometry_hints` performs some interpretation. For example,
``GtkWindow`` will apply the hints to the geometry widget instead of the
toplevel window, if you set a geometry widget. Also, the
`min_width`/`min_height`/`max_width`/`max_height` fields may be set to -1, and
``GtkWindow`` will substitute the size request of the window or geometry widget.
If the minimum size hint is not provided, ``GtkWindow`` will use its requisition
as the minimum size. If the minimum size is provided and a geometry widget is
set, ``GtkWindow`` will take the minimum size as the minimum size of the
geometry widget rather than the entire window. The base size is treated
similarly.

The canonical use-case for `gtk_window_set_geometry_hints` is to get a
terminal widget to resize properly. Here, the terminal text area should be
the geometry widget; ``GtkWindow`` will then automatically set the base size to
the size of other widgets in the terminal window, such as the menubar and
scrollbar. Then, the `width_inc` and `height_inc` fields should be set to the
size of one character in the terminal. Finally, the base size should be set
to the size of one character. The net effect is that the minimum size of the
terminal will have a 1x1 character terminal area, and only terminal sizes on
the “character grid” will be allowed.

Here’s an example of how the terminal example would be implemented, assuming
a terminal area widget called “terminal” and a toplevel window “toplevel”:


```C
    GdkGeometry hints;

    hints.base_width = terminal->char_width;
        hints.base_height = terminal->char_height;
        hints.min_width = terminal->char_width;
        hints.min_height = terminal->char_height;
        hints.width_inc = terminal->char_width;
        hints.height_inc = terminal->char_height;

 gtk_window_set_geometry_hints (GTK_WINDOW (toplevel),
                                GTK_WIDGET (terminal),
                                &hints,
                                GDK_HINT_RESIZE_INC |
                                GDK_HINT_MIN_SIZE |
                                GDK_HINT_BASE_SIZE);
```

The other useful fields are the `min_aspect` and `max_aspect` fields; these
contain a width/height ratio as a floating point number. If a geometry widget
is set, the aspect applies to the geometry widget rather than the entire
window. The most common use of these hints is probably to set `min_aspect` and
`max_aspect` to the same value, thus forcing the window to keep a constant
aspect ratio.
<!-- enum GrabOwnership -->
Defines how device grabs interact with other devices.
<!-- enum GrabOwnership::variant None -->
All other devices’ events are allowed.
<!-- enum GrabOwnership::variant Window -->
Other devices’ events are blocked for the grab window.
<!-- enum GrabOwnership::variant Application -->
Other devices’ events are blocked for the whole application.
<!-- enum GrabStatus -->
Returned by `Device::grab`, `gdk_pointer_grab` and `gdk_keyboard_grab` to
indicate success or the reason for the failure of the grab attempt.
<!-- enum GrabStatus::variant Success -->
the resource was successfully grabbed.
<!-- enum GrabStatus::variant AlreadyGrabbed -->
the resource is actively grabbed by another client.
<!-- enum GrabStatus::variant InvalidTime -->
the resource was grabbed more recently than the
 specified time.
<!-- enum GrabStatus::variant NotViewable -->
the grab window or the `confine_to` window are not
 viewable.
<!-- enum GrabStatus::variant Frozen -->
the resource is frozen by an active grab of another client.
<!-- enum GrabStatus::variant Failed -->
the grab failed for some other reason. Since 3.16
<!-- enum Gravity -->
Defines the reference point of a window and the meaning of coordinates
passed to `gtk_window_move`. See `gtk_window_move` and the "implementation
notes" section of the
[Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
specification for more details.
<!-- enum Gravity::variant NorthWest -->
the reference point is at the top left corner.
<!-- enum Gravity::variant North -->
the reference point is in the middle of the top edge.
<!-- enum Gravity::variant NorthEast -->
the reference point is at the top right corner.
<!-- enum Gravity::variant West -->
the reference point is at the middle of the left edge.
<!-- enum Gravity::variant Center -->
the reference point is at the center of the window.
<!-- enum Gravity::variant East -->
the reference point is at the middle of the right edge.
<!-- enum Gravity::variant SouthWest -->
the reference point is at the lower left corner.
<!-- enum Gravity::variant South -->
the reference point is at the middle of the lower edge.
<!-- enum Gravity::variant SouthEast -->
the reference point is at the lower right corner.
<!-- enum Gravity::variant Static -->
the reference point is at the top left corner of the
 window itself, ignoring window manager decorations.
<!-- enum InputMode -->
An enumeration that describes the mode of an input device.
<!-- enum InputMode::variant Disabled -->
the device is disabled and will not report any events.
<!-- enum InputMode::variant Screen -->
the device is enabled. The device’s coordinate space
 maps to the entire screen.
<!-- enum InputMode::variant Window -->
the device is enabled. The device’s coordinate space
 is mapped to a single window. The manner in which this window
 is chosen is undefined, but it will typically be the same
 way in which the focus window for key events is determined.
<!-- enum InputSource -->
An enumeration describing the type of an input device in general terms.
<!-- enum InputSource::variant Mouse -->
the device is a mouse. (This will be reported for the core
 pointer, even if it is something else, such as a trackball.)
<!-- enum InputSource::variant Pen -->
the device is a stylus of a graphics tablet or similar device.
<!-- enum InputSource::variant Eraser -->
the device is an eraser. Typically, this would be the other end
 of a stylus on a graphics tablet.
<!-- enum InputSource::variant Cursor -->
the device is a graphics tablet “puck” or similar device.
<!-- enum InputSource::variant Keyboard -->
the device is a keyboard.
<!-- enum InputSource::variant Touchscreen -->
the device is a direct-input touch device, such
 as a touchscreen or tablet. This device type has been added in 3.4.
<!-- enum InputSource::variant Touchpad -->
the device is an indirect touch device, such
 as a touchpad. This device type has been added in 3.4.
<!-- enum InputSource::variant Trackpoint -->
the device is a trackpoint. This device type has been
 added in 3.22
<!-- enum InputSource::variant TabletPad -->
the device is a "pad", a collection of buttons,
 rings and strips found in drawing tablets. This device type has been
 added in 3.22.
<!-- enum ModifierIntent -->
This enum is used with `Keymap::get_modifier_mask`
in order to determine what modifiers the
currently used windowing system backend uses for particular
purposes. For example, on X11/Windows, the Control key is used for
invoking menu shortcuts (accelerators), whereas on Apple computers
it’s the Command key (which correspond to `ModifierType::ControlMask` and
`ModifierType::Mod2Mask`, respectively).
<!-- enum ModifierIntent::variant PrimaryAccelerator -->
the primary modifier used to invoke
 menu accelerators.
<!-- enum ModifierIntent::variant ContextMenu -->
the modifier used to invoke context menus.
 Note that mouse button 3 always triggers context menus. When this modifier
 is not 0, it additionally triggers context menus when used with mouse button 1.
<!-- enum ModifierIntent::variant ExtendSelection -->
the modifier used to extend selections
 using `modifier`-click or `modifier`-cursor-key
<!-- enum ModifierIntent::variant ModifySelection -->
the modifier used to modify selections,
 which in most cases means toggling the clicked item into or out of the selection.
<!-- enum ModifierIntent::variant NoTextInput -->
when any of these modifiers is pressed, the
 key event cannot produce a symbol directly. This is meant to be used for
 input methods, and for use cases like typeahead search.
<!-- enum ModifierIntent::variant ShiftGroup -->
the modifier that switches between keyboard
 groups (AltGr on X11/Windows and Option/Alt on OS X).
<!-- enum ModifierIntent::variant DefaultModMask -->
The set of modifier masks accepted
as modifiers in accelerators. Needed because Command is mapped to MOD2 on
OSX, which is widely used, but on X11 MOD2 is NumLock and using that for a
mod key is problematic at best.
Ref: https://bugzilla.gnome.org/show_bug.cgi?id=736125.
<!-- struct Monitor -->
`Monitor` objects represent the individual outputs that are
associated with a `Display`. `Display` has APIs to enumerate
monitors with `Display::get_n_monitors` and `Display::get_monitor`, and
to find particular monitors with `Display::get_primary_monitor` or
`Display::get_monitor_at_window`.

`Monitor` was introduced in GTK+ 3.22 and supersedes earlier
APIs in `Screen` to obtain monitor-related information.

Feature: `v3_22`
<!-- impl Monitor::fn get_display -->
Gets the display that this monitor belongs to.

Feature: `v3_22`


# Returns

the display
<!-- impl Monitor::fn get_geometry -->
Retrieves the size and position of an individual monitor within the
display coordinate space. The returned geometry is in ”application pixels”,
not in ”device pixels” (see `Monitor::get_scale_factor`).

Feature: `v3_22`

## `geometry`
a `Rectangle` to be filled with the monitor geometry
<!-- impl Monitor::fn get_height_mm -->
Gets the height in millimeters of the monitor.

Feature: `v3_22`


# Returns

the physical height of the monitor
<!-- impl Monitor::fn get_manufacturer -->
Gets the name of the monitor's manufacturer, if available.

Feature: `v3_22`


# Returns

the name of the manufacturer, or `None`
<!-- impl Monitor::fn get_model -->
Gets the a string identifying the monitor model, if available.

Feature: `v3_22`


# Returns

the monitor model, or `None`
<!-- impl Monitor::fn get_refresh_rate -->
Gets the refresh rate of the monitor, if available.

The value is in milli-Hertz, so a refresh rate of 60Hz
is returned as 60000.

Feature: `v3_22`


# Returns

the refresh rate in milli-Hertz, or 0
<!-- impl Monitor::fn get_scale_factor -->
Gets the internal scale factor that maps from monitor coordinates
to the actual device pixels. On traditional systems this is 1, but
on very high density outputs this can be a higher value (often 2).

This can be used if you want to create pixel based data for a
particular monitor, but most of the time you’re drawing to a window
where it is better to use `WindowExt::get_scale_factor` instead.

Feature: `v3_22`


# Returns

the scale factor
<!-- impl Monitor::fn get_subpixel_layout -->
Gets information about the layout of red, green and blue
primaries for each pixel in this monitor, if available.

Feature: `v3_22`


# Returns

the subpixel layout
<!-- impl Monitor::fn get_width_mm -->
Gets the width in millimeters of the monitor.

Feature: `v3_22`


# Returns

the physical width of the monitor
<!-- impl Monitor::fn get_workarea -->
Retrieves the size and position of the “work area” on a monitor
within the display coordinate space. The returned geometry is in
”application pixels”, not in ”device pixels” (see
`Monitor::get_scale_factor`).

The work area should be considered when positioning menus and
similar popups, to avoid placing them below panels, docks or other
desktop components.

Note that not all backends may have a concept of workarea. This
function will return the monitor geometry if a workarea is not
available, or does not apply.

Feature: `v3_22`

## `workarea`
a `Rectangle` to be filled with
 the monitor workarea
<!-- impl Monitor::fn is_primary -->
Gets whether this monitor should be considered primary
(see `Display::get_primary_monitor`).

Feature: `v3_22`


# Returns

`true` if `self` is primary
<!-- enum NotifyType -->
Specifies the kind of crossing for `EventCrossing`.

See the X11 protocol specification of LeaveNotify for
full details of crossing event generation.
<!-- enum NotifyType::variant Ancestor -->
the window is entered from an ancestor or
 left towards an ancestor.
<!-- enum NotifyType::variant Virtual -->
the pointer moves between an ancestor and an
 inferior of the window.
<!-- enum NotifyType::variant Inferior -->
the window is entered from an inferior or
 left towards an inferior.
<!-- enum NotifyType::variant Nonlinear -->
the window is entered from or left towards
 a window which is neither an ancestor nor an inferior.
<!-- enum NotifyType::variant NonlinearVirtual -->
the pointer moves between two windows
 which are not ancestors of each other and the window is part of
 the ancestor chain between one of these windows and their least
 common ancestor.
<!-- enum NotifyType::variant Unknown -->
an unknown type of enter/leave event occurred.
<!-- enum OwnerChange -->
Specifies why a selection ownership was changed.
<!-- enum OwnerChange::variant NewOwner -->
some other app claimed the ownership
<!-- enum OwnerChange::variant Destroy -->
the window was destroyed
<!-- enum OwnerChange::variant Close -->
the client was closed
<!-- enum PropMode -->
Describes how existing data is combined with new data when
using `gdk_property_change`.
<!-- enum PropMode::variant Replace -->
the new data replaces the existing data.
<!-- enum PropMode::variant Prepend -->
the new data is prepended to the existing data.
<!-- enum PropMode::variant Append -->
the new data is appended to the existing data.
<!-- enum PropertyState -->
Specifies the type of a property change for a `EventProperty`.
<!-- enum PropertyState::variant NewValue -->
the property value was changed.
<!-- enum PropertyState::variant Delete -->
the property was deleted.
<!-- struct RGBA -->
A `RGBA` is used to represent a (possibly translucent)
color, in a way that is compatible with cairo’s notion of color.
<!-- impl RGBA::fn copy -->
Makes a copy of a `RGBA`.

The result must be freed through `RGBA::free`.

# Returns

A newly allocated `RGBA`, with the same contents as `self`
<!-- impl RGBA::fn equal -->
Compares two RGBA colors.
## `p2`
another `RGBA` pointer

# Returns

`true` if the two colors compare equal
<!-- impl RGBA::fn free -->
Frees a `RGBA` created with `RGBA::copy`
<!-- impl RGBA::fn hash -->
A hash function suitable for using for a hash
table that stores ``GdkRGBAs``.

# Returns

The hash value for `self`
<!-- impl RGBA::fn parse -->
Parses a textual representation of a color, filling in
the `red`, `green`, `blue` and `alpha` fields of the `self` `RGBA`.

The string can be either one of:
- A standard name (Taken from the X11 rgb.txt file).
- A hexadecimal value in the form “\#rgb”, “\#rrggbb”,
 “\#rrrgggbbb” or ”\#rrrrggggbbbb”
- A RGB color in the form “rgb(r,g,b)” (In this case the color will
 have full opacity)
- A RGBA color in the form “rgba(r,g,b,a)”

Where “r”, “g”, “b” and “a” are respectively the red, green, blue and
alpha color values. In the last two cases, r g and b are either integers
in the range 0 to 255 or percentage values in the range 0% to 100%, and
a is a floating point value in the range 0 to 1.
## `spec`
the string specifying the color

# Returns

`true` if the parsing succeeded
<!-- impl RGBA::fn to_string -->
Returns a textual specification of `self` in the form
`rgb (r, g, b)` or
`rgba (r, g, b, a)`,
where “r”, “g”, “b” and “a” represent the red, green,
blue and alpha values respectively. r, g, and b are
represented as integers in the range 0 to 255, and a
is represented as floating point value in the range 0 to 1.

These string forms are string forms those supported by
the CSS3 colors module, and can be parsed by `RGBA::parse`.

Note that this string representation may lose some
precision, since r, g and b are represented as 8-bit
integers. If this is a concern, you should use a
different representation.

# Returns

A newly allocated text string
<!-- struct Rectangle -->
Defines the position and size of a rectangle. It is identical to
`cairo::RectangleInt`.
<!-- impl Rectangle::fn equal -->
Checks if the two given rectangles are equal.

Feature: `v3_20`

## `rect2`
a `Rectangle`

# Returns

`true` if the rectangles are equal.
<!-- impl Rectangle::fn intersect -->
Calculates the intersection of two rectangles. It is allowed for
`dest` to be the same as either `self` or `src2`. If the rectangles
do not intersect, `dest`’s width and height is set to 0 and its x
and y values are undefined. If you are only interested in whether
the rectangles intersect, but not in the intersecting area itself,
pass `None` for `dest`.
## `src2`
a `Rectangle`
## `dest`
return location for the
intersection of `self` and `src2`, or `None`

# Returns

`true` if the rectangles intersect.
<!-- impl Rectangle::fn union -->
Calculates the union of two rectangles.
The union of rectangles `self` and `src2` is the smallest rectangle which
includes both `self` and `src2` within it.
It is allowed for `dest` to be the same as either `self` or `src2`.

Note that this function does not ignore 'empty' rectangles (ie. with
zero width or height).
## `src2`
a `Rectangle`
## `dest`
return location for the union of `self` and `src2`
<!-- struct Screen -->
`Screen` objects are the GDK representation of the screen on
which windows can be displayed and on which the pointer moves.
X originally identified screens with physical screens, but
nowadays it is more common to have a single `Screen` which
combines several physical monitors (see `Screen::get_n_monitors`).

`Screen` is used throughout GDK and GTK+ to specify which screen
the top level windows are to be displayed on. it is also used to
query the screen specification and default settings such as
the default visual (`Screen::get_system_visual`), the dimensions
of the physical monitors (`Screen::get_monitor_geometry`), etc.
<!-- impl Screen::fn get_default -->
Gets the default screen for the default display. (See
gdk_display_get_default ()).

# Returns

a `Screen`, or `None` if
 there is no default display.
<!-- impl Screen::fn height -->
Gets the height of the default screen in pixels. The returned
size is in ”application pixels”, not in ”device pixels” (see
`Screen::get_monitor_scale_factor`).

# Deprecated since 3.22

Use per-monitor information

# Returns

the height of the default screen in pixels.
<!-- impl Screen::fn height_mm -->
Returns the height of the default screen in millimeters.
Note that on many X servers this value will not be correct.

# Deprecated since 3.22

Use per-monitor information

# Returns

the height of the default screen in millimeters,
though it is not always correct.
<!-- impl Screen::fn width -->
Gets the width of the default screen in pixels. The returned
size is in ”application pixels”, not in ”device pixels” (see
`Screen::get_monitor_scale_factor`).

# Deprecated since 3.22

Use per-monitor information

# Returns

the width of the default screen in pixels.
<!-- impl Screen::fn width_mm -->
Returns the width of the default screen in millimeters.
Note that on many X servers this value will not be correct.

# Deprecated since 3.22

Use per-monitor information

# Returns

the width of the default screen in millimeters,
though it is not always correct.
<!-- impl Screen::fn get_active_window -->
Returns the screen’s currently active window.

On X11, this is done by inspecting the _NET_ACTIVE_WINDOW property
on the root window, as described in the
[Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
If there is no currently currently active
window, or the window manager does not support the
_NET_ACTIVE_WINDOW hint, this function returns `None`.

On other platforms, this function may return `None`, depending on whether
it is implementable on that platform.

The returned window should be unrefed using `gobject::Object::unref` when
no longer needed.

# Deprecated since 3.22


# Returns

the currently active window,
 or `None`.
<!-- impl Screen::fn get_display -->
Gets the display to which the `self` belongs.

# Returns

the display to which `self` belongs
<!-- impl Screen::fn get_font_options -->
Gets any options previously set with `Screen::set_font_options`.

# Returns

the current font options, or `None` if no
 default font options have been set.
<!-- impl Screen::fn get_height -->
Gets the height of `self` in pixels. The returned size is in
”application pixels”, not in ”device pixels” (see
`Screen::get_monitor_scale_factor`).

# Deprecated since 3.22

Use per-monitor information instead

# Returns

the height of `self` in pixels.
<!-- impl Screen::fn get_height_mm -->
Returns the height of `self` in millimeters.

Note that this value is somewhat ill-defined when the screen
has multiple monitors of different resolution. It is recommended
to use the monitor dimensions instead.

# Deprecated since 3.22

Use per-monitor information instead

# Returns

the heigth of `self` in millimeters.
<!-- impl Screen::fn get_monitor_at_point -->
Returns the monitor number in which the point (`x`,`y`) is located.

# Deprecated since 3.22

Use `Display::get_monitor_at_point` instead
## `x`
the x coordinate in the virtual screen.
## `y`
the y coordinate in the virtual screen.

# Returns

the monitor number in which the point (`x`,`y`) lies, or
 a monitor close to (`x`,`y`) if the point is not in any monitor.
<!-- impl Screen::fn get_monitor_at_window -->
Returns the number of the monitor in which the largest area of the
bounding rectangle of `window` resides.

# Deprecated since 3.22

Use `Display::get_monitor_at_window` instead
## `window`
a `Window`

# Returns

the monitor number in which most of `window` is located,
 or if `window` does not intersect any monitors, a monitor,
 close to `window`.
<!-- impl Screen::fn get_monitor_geometry -->
Retrieves the `Rectangle` representing the size and position of
the individual monitor within the entire screen area. The returned
geometry is in ”application pixels”, not in ”device pixels” (see
`Screen::get_monitor_scale_factor`).

Monitor numbers start at 0. To obtain the number of monitors of
`self`, use `Screen::get_n_monitors`.

Note that the size of the entire screen area can be retrieved via
`Screen::get_width` and `Screen::get_height`.

# Deprecated since 3.22

Use `Monitor::get_geometry` instead
## `monitor_num`
the monitor number
## `dest`
a `Rectangle` to be filled with
 the monitor geometry
<!-- impl Screen::fn get_monitor_height_mm -->
Gets the height in millimeters of the specified monitor.

# Deprecated since 3.22

Use `Monitor::get_height_mm` instead
## `monitor_num`
number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)

# Returns

the height of the monitor, or -1 if not available
<!-- impl Screen::fn get_monitor_plug_name -->
Returns the output name of the specified monitor.
Usually something like VGA, DVI, or TV, not the actual
product name of the display device.

# Deprecated since 3.22

Use `Monitor::get_model` instead
## `monitor_num`
number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)

# Returns

a newly-allocated string containing the name
 of the monitor, or `None` if the name cannot be determined
<!-- impl Screen::fn get_monitor_scale_factor -->
Returns the internal scale factor that maps from monitor coordinates
to the actual device pixels. On traditional systems this is 1, but
on very high density outputs this can be a higher value (often 2).

This can be used if you want to create pixel based data for a
particular monitor, but most of the time you’re drawing to a window
where it is better to use `WindowExt::get_scale_factor` instead.

# Deprecated since 3.22

Use `Monitor::get_scale_factor` instead
## `monitor_num`
number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)

# Returns

the scale factor
<!-- impl Screen::fn get_monitor_width_mm -->
Gets the width in millimeters of the specified monitor, if available.

# Deprecated since 3.22

Use `Monitor::get_width_mm` instead
## `monitor_num`
number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)

# Returns

the width of the monitor, or -1 if not available
<!-- impl Screen::fn get_monitor_workarea -->
Retrieves the `Rectangle` representing the size and position of
the “work area” on a monitor within the entire screen area. The returned
geometry is in ”application pixels”, not in ”device pixels” (see
`Screen::get_monitor_scale_factor`).

The work area should be considered when positioning menus and
similar popups, to avoid placing them below panels, docks or other
desktop components.

Note that not all backends may have a concept of workarea. This
function will return the monitor geometry if a workarea is not
available, or does not apply.

Monitor numbers start at 0. To obtain the number of monitors of
`self`, use `Screen::get_n_monitors`.

# Deprecated since 3.22

Use `Monitor::get_workarea` instead
## `monitor_num`
the monitor number
## `dest`
a `Rectangle` to be filled with
 the monitor workarea
<!-- impl Screen::fn get_n_monitors -->
Returns the number of monitors which `self` consists of.

# Deprecated since 3.22

Use `Display::get_n_monitors` instead

# Returns

number of monitors which `self` consists of
<!-- impl Screen::fn get_number -->
Gets the index of `self` among the screens in the display
to which it belongs. (See `Screen::get_display`)

# Deprecated since 3.22


# Returns

the index
<!-- impl Screen::fn get_primary_monitor -->
Gets the primary monitor for `self`. The primary monitor
is considered the monitor where the “main desktop” lives.
While normal application windows typically allow the window
manager to place the windows, specialized desktop applications
such as panels should place themselves on the primary monitor.

If no primary monitor is configured by the user, the return value
will be 0, defaulting to the first monitor.

# Deprecated since 3.22

Use `Display::get_primary_monitor` instead

# Returns

An integer index for the primary monitor, or 0 if none is configured.
<!-- impl Screen::fn get_resolution -->
Gets the resolution for font handling on the screen; see
`Screen::set_resolution` for full details.

# Returns

the current resolution, or -1 if no resolution
has been set.
<!-- impl Screen::fn get_rgba_visual -->
Gets a visual to use for creating windows with an alpha channel.
The windowing system on which GTK+ is running
may not support this capability, in which case `None` will
be returned. Even if a non-`None` value is returned, its
possible that the window’s alpha channel won’t be honored
when displaying the window on the screen: in particular, for
X an appropriate windowing manager and compositing manager
must be running to provide appropriate display.

This functionality is not implemented in the Windows backend.

For setting an overall opacity for a top-level window, see
`WindowExt::set_opacity`.

# Returns

a visual to use for windows
 with an alpha channel or `None` if the capability is not
 available.
<!-- impl Screen::fn get_root_window -->
Gets the root window of `self`.

# Returns

the root window
<!-- impl Screen::fn get_setting -->
Retrieves a desktop-wide setting such as double-click time
for the `Screen` `self`.

FIXME needs a list of valid settings here, or a link to
more information.
## `name`
the name of the setting
## `value`
location to store the value of the setting

# Returns

`true` if the setting existed and a value was stored
 in `value`, `false` otherwise.
<!-- impl Screen::fn get_system_visual -->
Get the system’s default visual for `self`.
This is the visual for the root window of the display.
The return value should not be freed.

# Returns

the system visual
<!-- impl Screen::fn get_toplevel_windows -->
Obtains a list of all toplevel windows known to GDK on the screen `self`.
A toplevel window is a child of the root window (see
`gdk_get_default_root_window`).

The returned list should be freed with `glib::List::free`, but
its elements need not be freed.

# Returns


 list of toplevel windows, free with `glib::List::free`
<!-- impl Screen::fn get_width -->
Gets the width of `self` in pixels. The returned size is in
”application pixels”, not in ”device pixels” (see
`Screen::get_monitor_scale_factor`).

# Deprecated since 3.22

Use per-monitor information instead

# Returns

the width of `self` in pixels.
<!-- impl Screen::fn get_width_mm -->
Gets the width of `self` in millimeters.

Note that this value is somewhat ill-defined when the screen
has multiple monitors of different resolution. It is recommended
to use the monitor dimensions instead.

# Deprecated since 3.22

Use per-monitor information instead

# Returns

the width of `self` in millimeters.
<!-- impl Screen::fn get_window_stack -->
Returns a `glib::List` of ``GdkWindows`` representing the current
window stack.

On X11, this is done by inspecting the _NET_CLIENT_LIST_STACKING
property on the root window, as described in the
[Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
If the window manager does not support the
_NET_CLIENT_LIST_STACKING hint, this function returns `None`.

On other platforms, this function may return `None`, depending on whether
it is implementable on that platform.

The returned list is newly allocated and owns references to the
windows it contains, so it should be freed using `glib::List::free` and
its windows unrefed using `gobject::Object::unref` when no longer needed.

# Returns

a
 list of ``GdkWindows`` for the current window stack, or `None`.
<!-- impl Screen::fn is_composited -->
Returns whether windows with an RGBA visual can reasonably
be expected to have their alpha channel drawn correctly on
the screen.

On X11 this function returns whether a compositing manager is
compositing `self`.

# Returns

Whether windows with RGBA visuals can reasonably be
expected to have their alpha channels drawn correctly on the screen.
<!-- impl Screen::fn list_visuals -->
Lists the available visuals for the specified `self`.
A visual describes a hardware image data format.
For example, a visual might support 24-bit color, or 8-bit color,
and might expect pixels to be in a certain format.

Call `glib::List::free` on the return value when you’re finished with it.

# Returns


 a list of visuals; the list must be freed, but not its contents
<!-- impl Screen::fn make_display_name -->
Determines the name to pass to `Display::open` to get
a `Display` with this screen as the default screen.

# Deprecated since 3.22


# Returns

a newly allocated string, free with `g_free`
<!-- impl Screen::fn set_font_options -->
Sets the default font options for the screen. These
options will be set on any `pango::Context`’s newly created
with `gdk_pango_context_get_for_screen`. Changing the
default set of font options does not affect contexts that
have already been created.
## `options`
a `cairo::FontOptions`, or `None` to unset any
 previously set default font options.
<!-- impl Screen::fn set_resolution -->
Sets the resolution for font handling on the screen. This is a
scale factor between points specified in a `pango::FontDescription`
and cairo units. The default value is 96, meaning that a 10 point
font will be 13 units high. (10 * 96. / 72. = 13.3).
## `dpi`
the resolution in “dots per inch”. (Physical inches aren’t actually
 involved; the terminology is conventional.)
<!-- trait ScreenExt::fn connect_composited_changed -->
The ::composited-changed signal is emitted when the composited
status of the screen changes
<!-- trait ScreenExt::fn connect_monitors_changed -->
The ::monitors-changed signal is emitted when the number, size
or position of the monitors attached to the screen change.

Only for X11 and OS X for now. A future implementation for Win32
may be a possibility.
<!-- trait ScreenExt::fn connect_size_changed -->
The ::size-changed signal is emitted when the pixel width or
height of a screen changes.
<!-- enum ScrollDirection -->
Specifies the direction for `EventScroll`.
<!-- enum ScrollDirection::variant Up -->
the window is scrolled up.
<!-- enum ScrollDirection::variant Down -->
the window is scrolled down.
<!-- enum ScrollDirection::variant Left -->
the window is scrolled to the left.
<!-- enum ScrollDirection::variant Right -->
the window is scrolled to the right.
<!-- enum ScrollDirection::variant Smooth -->
the scrolling is determined by the delta values
 in `EventScroll`. See `gdk_event_get_scroll_deltas`. Since: 3.4
<!-- struct Seat -->
The `Seat` object represents a collection of input devices
that belong to a user.

Feature: `v3_20`
<!-- impl Seat::fn get_capabilities -->
Returns the capabilities this `Seat` currently has.

Feature: `v3_20`


# Returns

the seat capabilities
<!-- impl Seat::fn get_display -->
Returns the `Display` this seat belongs to.

Feature: `v3_20`


# Returns

a `Display`. This object is owned by GTK+
 and must not be freed.
<!-- impl Seat::fn get_keyboard -->
Returns the master device that routes keyboard events.

Feature: `v3_20`


# Returns

a master `Device` with keyboard
 capabilities. This object is owned by GTK+ and must not be freed.
<!-- impl Seat::fn get_pointer -->
Returns the master device that routes pointer events.

Feature: `v3_20`


# Returns

a master `Device` with pointer
 capabilities. This object is owned by GTK+ and must not be freed.
<!-- impl Seat::fn get_slaves -->
Returns the slave devices that match the given capabilities.

Feature: `v3_20`

## `capabilities`
capabilities to get devices for

# Returns

A list of ``GdkDevices``.
 The list must be freed with `glib::List::free`, the elements are owned
 by GDK and must not be freed.
<!-- impl Seat::fn grab -->
Grabs the seat so that all events corresponding to the given `capabilities`
are passed to this application until the seat is ungrabbed with `Seat::ungrab`,
or the window becomes hidden. This overrides any previous grab on the
seat by this client.

As a rule of thumb, if a grab is desired over `SeatCapabilities::Pointer`,
all other "pointing" capabilities (eg. `SeatCapabilities::Touch`) should
be grabbed too, so the user is able to interact with all of those while
the grab holds, you should thus use `SeatCapabilities::AllPointing` most
commonly.

Grabs are used for operations which need complete control over the
events corresponding to the given capabilities. For example in GTK+ this
is used for Drag and Drop operations, popup menus and such.

Note that if the event mask of a `Window` has selected both button press
and button release events, or touch begin and touch end, then a press event
will cause an automatic grab until the button is released, equivalent to a
grab on the window with `owner_events` set to `true`. This is done because most
applications expect to receive paired press and release events.

If you set up anything at the time you take the grab that needs to be
cleaned up when the grab ends, you should handle the `EventGrabBroken`
events that are emitted when the grab ends unvoluntarily.

Feature: `v3_20`

## `window`
the `Window` which will own the grab
## `capabilities`
capabilities that will be grabbed
## `owner_events`
if `false` then all device events are reported with respect to
 `window` and are only reported if selected by `event_mask`. If
 `true` then pointer events for this application are reported
 as normal, but pointer events outside this application are
 reported with respect to `window` and only if selected by
 `event_mask`. In either mode, unreported events are discarded.
## `cursor`
the cursor to display while the grab is active. If
 this is `None` then the normal cursors are used for
 `window` and its descendants, and the cursor for `window` is used
 elsewhere.
## `event`
the event that is triggering the grab, or `None` if none
 is available.
## `prepare_func`
function to
 prepare the window to be grabbed, it can be `None` if `window` is
 visible before this call.
## `prepare_func_data`
user data to pass to `prepare_func`

# Returns

`GrabStatus::Success` if the grab was successful.
<!-- impl Seat::fn ungrab -->
Releases a grab added through `Seat::grab`.

Feature: `v3_20`

<!-- trait SeatExt::fn connect_device_added -->
The ::device-added signal is emitted when a new input
device is related to this seat.

Feature: `v3_20`

## `device`
the newly added `Device`.
<!-- trait SeatExt::fn connect_device_removed -->
The ::device-removed signal is emitted when an
input device is removed (e.g. unplugged).

Feature: `v3_20`

## `device`
the just removed `Device`.
<!-- trait SeatExt::fn connect_tool_added -->
The ::tool-added signal is emitted whenever a new tool
is made known to the seat. The tool may later be assigned
to a device (i.e. on proximity with a tablet). The device
will emit the `Device::tool-changed` signal accordingly.

A same tool may be used by several devices.

Feature: `v3_22`

## `tool`
the new `DeviceTool` known to the seat
<!-- trait SeatExt::fn connect_tool_removed -->
This signal is emitted whenever a tool is no longer known
to this `seat`.

Feature: `v3_22`

## `tool`
the just removed `DeviceTool`
<!-- trait SeatExt::fn get_property_display -->
`Display` of this seat.

Feature: `v3_20`

<!-- trait SeatExt::fn set_property_display -->
`Display` of this seat.

Feature: `v3_20`

<!-- enum SettingAction -->
Specifies the kind of modification applied to a setting in a
`EventSetting`.
<!-- enum SettingAction::variant New -->
a setting was added.
<!-- enum SettingAction::variant Changed -->
a setting was changed.
<!-- enum SettingAction::variant Deleted -->
a setting was deleted.
<!-- enum SubpixelLayout -->
This enumeration describes how the red, green and blue components
of physical pixels on an output device are laid out.
<!-- enum SubpixelLayout::variant Unknown -->
The layout is not known
<!-- enum SubpixelLayout::variant None -->
Not organized in this way
<!-- enum SubpixelLayout::variant HorizontalRgb -->
The layout is horizontal, the order is RGB
<!-- enum SubpixelLayout::variant HorizontalBgr -->
The layout is horizontal, the order is BGR
<!-- enum SubpixelLayout::variant VerticalRgb -->
The layout is vertical, the order is RGB
<!-- enum SubpixelLayout::variant VerticalBgr -->
The layout is vertical, the order is BGR

Feature: `v3_22`

<!-- enum VisibilityState -->
Specifies the visiblity status of a window for a `EventVisibility`.
<!-- enum VisibilityState::variant Unobscured -->
the window is completely visible.
<!-- enum VisibilityState::variant Partial -->
the window is partially visible.
<!-- enum VisibilityState::variant FullyObscured -->
the window is not visible at all.
<!-- struct Visual -->
A `Visual` contains information about
a particular visual.
<!-- impl Visual::fn get_best -->
Get the visual with the most available colors for the default
GDK screen. The return value should not be freed.

# Deprecated since 3.22

Visual selection should be done using
 `Screen::get_system_visual` and `Screen::get_rgba_visual`

# Returns

best visual
<!-- impl Visual::fn get_best_depth -->
Get the best available depth for the default GDK screen. “Best”
means “largest,” i.e. 32 preferred over 24 preferred over 8 bits
per pixel.

# Deprecated since 3.22

Visual selection should be done using
 `Screen::get_system_visual` and `Screen::get_rgba_visual`

# Returns

best available depth
<!-- impl Visual::fn get_best_type -->
Return the best available visual type for the default GDK screen.

# Deprecated since 3.22

Visual selection should be done using
 `Screen::get_system_visual` and `Screen::get_rgba_visual`

# Returns

best visual type
<!-- impl Visual::fn get_best_with_both -->
Combines `Visual::get_best_with_depth` and
`Visual::get_best_with_type`.

# Deprecated since 3.22

Visual selection should be done using
 `Screen::get_system_visual` and `Screen::get_rgba_visual`
## `depth`
a bit depth
## `visual_type`
a visual type

# Returns

best visual with both `depth`
 and `visual_type`, or `None` if none
<!-- impl Visual::fn get_best_with_depth -->
Get the best visual with depth `depth` for the default GDK screen.
Color visuals and visuals with mutable colormaps are preferred
over grayscale or fixed-colormap visuals. The return value should
not be freed. `None` may be returned if no visual supports `depth`.

# Deprecated since 3.22

Visual selection should be done using
 `Screen::get_system_visual` and `Screen::get_rgba_visual`
## `depth`
a bit depth

# Returns

best visual for the given depth
<!-- impl Visual::fn get_best_with_type -->
Get the best visual of the given `visual_type` for the default GDK screen.
Visuals with higher color depths are considered better. The return value
should not be freed. `None` may be returned if no visual has type
`visual_type`.

# Deprecated since 3.22

Visual selection should be done using
 `Screen::get_system_visual` and `Screen::get_rgba_visual`
## `visual_type`
a visual type

# Returns

best visual of the given type
<!-- impl Visual::fn get_system -->
Get the system’s default visual for the default GDK screen.
This is the visual for the root window of the display.
The return value should not be freed.

# Deprecated since 3.22

Use gdk_screen_get_system_visual (gdk_screen_get_default ()).

# Returns

system visual
<!-- impl Visual::fn get_bits_per_rgb -->
Returns the number of significant bits per red, green and blue value.

Not all GDK backend provide a meaningful value for this function.

# Deprecated since 3.22

Use `Visual::get_red_pixel_details` and its variants to
 learn about the pixel layout of TrueColor and DirectColor visuals

# Returns

The number of significant bits per color value for `self`.
<!-- impl Visual::fn get_blue_pixel_details -->
Obtains values that are needed to calculate blue pixel values in TrueColor
and DirectColor. The “mask” is the significant bits within the pixel.
The “shift” is the number of bits left we must shift a primary for it
to be in position (according to the "mask"). Finally, "precision" refers
to how much precision the pixel value contains for a particular primary.
## `mask`
A pointer to a `guint32` to be filled in, or `None`
## `shift`
A pointer to a `gint` to be filled in, or `None`
## `precision`
A pointer to a `gint` to be filled in, or `None`
<!-- impl Visual::fn get_byte_order -->
Returns the byte order of this visual.

The information returned by this function is only relevant
when working with XImages, and not all backends return
meaningful information for this.

# Deprecated since 3.22

This information is not useful

# Returns

A `ByteOrder` stating the byte order of `self`.
<!-- impl Visual::fn get_colormap_size -->
Returns the size of a colormap for this visual.

You have to use platform-specific APIs to manipulate colormaps.

# Deprecated since 3.22

This information is not useful, since GDK does not
 provide APIs to operate on colormaps.

# Returns

The size of a colormap that is suitable for `self`.
<!-- impl Visual::fn get_depth -->
Returns the bit depth of this visual.

# Returns

The bit depth of this visual.
<!-- impl Visual::fn get_green_pixel_details -->
Obtains values that are needed to calculate green pixel values in TrueColor
and DirectColor. The “mask” is the significant bits within the pixel.
The “shift” is the number of bits left we must shift a primary for it
to be in position (according to the "mask"). Finally, "precision" refers
to how much precision the pixel value contains for a particular primary.
## `mask`
A pointer to a `guint32` to be filled in, or `None`
## `shift`
A pointer to a `gint` to be filled in, or `None`
## `precision`
A pointer to a `gint` to be filled in, or `None`
<!-- impl Visual::fn get_red_pixel_details -->
Obtains values that are needed to calculate red pixel values in TrueColor
and DirectColor. The “mask” is the significant bits within the pixel.
The “shift” is the number of bits left we must shift a primary for it
to be in position (according to the "mask"). Finally, "precision" refers
to how much precision the pixel value contains for a particular primary.
## `mask`
A pointer to a `guint32` to be filled in, or `None`
## `shift`
A pointer to a `gint` to be filled in, or `None`
## `precision`
A pointer to a `gint` to be filled in, or `None`
<!-- impl Visual::fn get_screen -->
Gets the screen to which this visual belongs

# Returns

the screen to which this visual belongs.
<!-- impl Visual::fn get_visual_type -->
Returns the type of visual this is (PseudoColor, TrueColor, etc).

# Returns

A `VisualType` stating the type of `self`.
<!-- enum VisualType -->
A set of values that describe the manner in which the pixel values
for a visual are converted into RGB values for display.
<!-- enum VisualType::variant StaticGray -->
Each pixel value indexes a grayscale value
 directly.
<!-- enum VisualType::variant Grayscale -->
Each pixel is an index into a color map that
 maps pixel values into grayscale values. The color map can be
 changed by an application.
<!-- enum VisualType::variant StaticColor -->
Each pixel value is an index into a predefined,
 unmodifiable color map that maps pixel values into RGB values.
<!-- enum VisualType::variant PseudoColor -->
Each pixel is an index into a color map that
 maps pixel values into rgb values. The color map can be changed by
 an application.
<!-- enum VisualType::variant TrueColor -->
Each pixel value directly contains red, green,
 and blue components. Use `Visual::get_red_pixel_details`, etc,
 to obtain information about how the components are assembled into
 a pixel value.
<!-- enum VisualType::variant DirectColor -->
Each pixel value contains red, green, and blue
 components as for `VisualType::TrueColor`, but the components are
 mapped via a color table into the final output table instead of
 being converted directly.
<!-- struct Window -->


# Implements

[`WindowExt`](trait.WindowExt.html), [`WindowExtManual`](prelude/trait.WindowExtManual.html)
<!-- trait WindowExt -->
Trait containing all `Window` methods.

# Implementors

[`Window`](struct.Window.html)
<!-- impl Window::fn new -->
Creates a new `Window` using the attributes from
`attributes`. See `WindowAttr` and `WindowAttributesType` for
more details. Note: to use this on displays other than the default
display, `parent` must be specified.
## `parent`
a `Window`, or `None` to create the window as a child of
 the default root window for the default display.
## `attributes`
attributes of the new window
## `attributes_mask`
mask indicating which
 fields in `attributes` are valid

# Returns

the new `Window`
<!-- impl Window::fn constrain_size -->
Constrains a desired width and height according to a
set of geometry hints (such as minimum and maximum size).
## `geometry`
a `Geometry` structure
## `flags`
a mask indicating what portions of `geometry` are set
## `width`
desired width of window
## `height`
desired height of the window
## `new_width`
location to store resulting width
## `new_height`
location to store resulting height
<!-- impl Window::fn process_all_updates -->
Calls `WindowExt::process_updates` for all windows (see `Window`)
in the application.

# Deprecated since 3.22

<!-- impl Window::fn set_debug_updates -->
With update debugging enabled, calls to
`WindowExt::invalidate_region` clear the invalidated region of the
screen to a noticeable color, and GDK pauses for a short time
before sending exposes to windows during
`WindowExt::process_updates`. The net effect is that you can see
the invalid region for each window and watch redraws as they
occur. This allows you to diagnose inefficiencies in your application.

In essence, because the GDK rendering model prevents all flicker,
if you are redrawing the same region 400 times you may never
notice, aside from noticing a speed problem. Enabling update
debugging causes GTK to flicker slowly and noticeably, so you can
see exactly what’s being redrawn when, in what order.

The --gtk-debug=updates command line option passed to GTK+ programs
enables this debug option at application startup time. That's
usually more useful than calling `Window::set_debug_updates`
yourself, though you might want to use this function to enable
updates sometime after application startup time.

# Deprecated since 3.22

## `setting`
`true` to turn on update debugging
<!-- trait WindowExt::fn add_filter -->
Adds an event filter to `self`, allowing you to intercept events
before they reach GDK. This is a low-level operation and makes it
easy to break GDK and/or GTK+, so you have to know what you're
doing. Pass `None` for `self` to get all events for all windows,
instead of events for a specific window.

If you are interested in X GenericEvents, bear in mind that
XGetEventData() has been already called on the event, and
XFreeEventData() must not be called within `function`.
## `function`
filter callback
## `data`
data to pass to filter callback
<!-- trait WindowExt::fn beep -->
Emits a short beep associated to `self` in the appropriate
display, if supported. Otherwise, emits a short beep on
the display just as `Display::beep`.
<!-- trait WindowExt::fn begin_draw_frame -->
Indicates that you are beginning the process of redrawing `region`
on `self`, and provides you with a `DrawingContext`.

If `self` is a top level `Window`, backed by a native window
implementation, a backing store (offscreen buffer) large enough to
contain `region` will be created. The backing store will be initialized
with the background color or background surface for `self`. Then, all
drawing operations performed on `self` will be diverted to the
backing store. When you call `gdk_window_end_frame`, the contents of
the backing store will be copied to `self`, making it visible
on screen. Only the part of `self` contained in `region` will be
modified; that is, drawing operations are clipped to `region`.

The net result of all this is to remove flicker, because the user
sees the finished product appear all at once when you call
`WindowExt::end_draw_frame`. If you draw to `self` directly without
calling `WindowExt::begin_draw_frame`, the user may see flicker
as individual drawing operations are performed in sequence.

When using GTK+, the widget system automatically places calls to
`WindowExt::begin_draw_frame` and `WindowExt::end_draw_frame` around
emissions of the `GtkWidget::draw` signal. That is, if you’re
drawing the contents of the widget yourself, you can assume that the
widget has a cleared background, is already set as the clip region,
and already has a backing store. Therefore in most cases, application
code in GTK does not need to call `WindowExt::begin_draw_frame`
explicitly.

Feature: `v3_22`

## `region`
a Cairo region

# Returns

a `DrawingContext` context that should be
 used to draw the contents of the window; the returned context is owned
 by GDK.
<!-- trait WindowExt::fn begin_move_drag -->
Begins a window move operation (for a toplevel window).

This function assumes that the drag is controlled by the
client pointer device, use `WindowExt::begin_move_drag_for_device`
to begin a drag with a different device.
## `button`
the button being used to drag, or 0 for a keyboard-initiated drag
## `root_x`
root window X coordinate of mouse click that began the drag
## `root_y`
root window Y coordinate of mouse click that began the drag
## `timestamp`
timestamp of mouse click that began the drag
<!-- trait WindowExt::fn begin_move_drag_for_device -->
Begins a window move operation (for a toplevel window).
You might use this function to implement a “window move grip,” for
example. The function works best with window managers that support the
[Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
but has a fallback implementation for other window managers.
## `device`
the device used for the operation
## `button`
the button being used to drag, or 0 for a keyboard-initiated drag
## `root_x`
root window X coordinate of mouse click that began the drag
## `root_y`
root window Y coordinate of mouse click that began the drag
## `timestamp`
timestamp of mouse click that began the drag
<!-- trait WindowExt::fn begin_paint_rect -->
A convenience wrapper around `WindowExt::begin_paint_region` which
creates a rectangular region for you. See
`WindowExt::begin_paint_region` for details.

# Deprecated since 3.22

Use `WindowExt::begin_draw_frame` instead
## `rectangle`
rectangle you intend to draw to
<!-- trait WindowExt::fn begin_paint_region -->
Indicates that you are beginning the process of redrawing `region`.
A backing store (offscreen buffer) large enough to contain `region`
will be created. The backing store will be initialized with the
background color or background surface for `self`. Then, all
drawing operations performed on `self` will be diverted to the
backing store. When you call `WindowExt::end_paint`, the backing
store will be copied to `self`, making it visible onscreen. Only
the part of `self` contained in `region` will be modified; that is,
drawing operations are clipped to `region`.

The net result of all this is to remove flicker, because the user
sees the finished product appear all at once when you call
`WindowExt::end_paint`. If you draw to `self` directly without
calling `WindowExt::begin_paint_region`, the user may see flicker
as individual drawing operations are performed in sequence. The
clipping and background-initializing features of
`WindowExt::begin_paint_region` are conveniences for the
programmer, so you can avoid doing that work yourself.

When using GTK+, the widget system automatically places calls to
`WindowExt::begin_paint_region` and `WindowExt::end_paint` around
emissions of the expose_event signal. That is, if you’re writing an
expose event handler, you can assume that the exposed area in
`EventExpose` has already been cleared to the window background,
is already set as the clip region, and already has a backing store.
Therefore in most cases, application code need not call
`WindowExt::begin_paint_region`. (You can disable the automatic
calls around expose events on a widget-by-widget basis by calling
`gtk_widget_set_double_buffered`.)

If you call this function multiple times before calling the
matching `WindowExt::end_paint`, the backing stores are pushed onto
a stack. `WindowExt::end_paint` copies the topmost backing store
onscreen, subtracts the topmost region from all other regions in
the stack, and pops the stack. All drawing operations affect only
the topmost backing store in the stack. One matching call to
`WindowExt::end_paint` is required for each call to
`WindowExt::begin_paint_region`.

# Deprecated since 3.22

Use `WindowExt::begin_draw_frame` instead
## `region`
region you intend to draw to
<!-- trait WindowExt::fn begin_resize_drag -->
Begins a window resize operation (for a toplevel window).

This function assumes that the drag is controlled by the
client pointer device, use `WindowExt::begin_resize_drag_for_device`
to begin a drag with a different device.
## `edge`
the edge or corner from which the drag is started
## `button`
the button being used to drag, or 0 for a keyboard-initiated drag
## `root_x`
root window X coordinate of mouse click that began the drag
## `root_y`
root window Y coordinate of mouse click that began the drag
## `timestamp`
timestamp of mouse click that began the drag (use `gdk_event_get_time`)
<!-- trait WindowExt::fn begin_resize_drag_for_device -->
Begins a window resize operation (for a toplevel window).
You might use this function to implement a “window resize grip,” for
example; in fact ``GtkStatusbar`` uses it. The function works best
with window managers that support the
[Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
but has a fallback implementation for other window managers.
## `edge`
the edge or corner from which the drag is started
## `device`
the device used for the operation
## `button`
the button being used to drag, or 0 for a keyboard-initiated drag
## `root_x`
root window X coordinate of mouse click that began the drag
## `root_y`
root window Y coordinate of mouse click that began the drag
## `timestamp`
timestamp of mouse click that began the drag (use `gdk_event_get_time`)
<!-- trait WindowExt::fn coords_from_parent -->
Transforms window coordinates from a parent window to a child
window, where the parent window is the normal parent as returned by
`WindowExt::get_parent` for normal windows, and the window's
embedder as returned by `gdk_offscreen_window_get_embedder` for
offscreen windows.

For normal windows, calling this function is equivalent to subtracting
the return values of `WindowExt::get_position` from the parent coordinates.
For offscreen windows however (which can be arbitrarily transformed),
this function calls the `Window`::from-embedder: signal to translate
the coordinates.

You should always use this function when writing generic code that
walks down a window hierarchy.

See also: `WindowExt::coords_to_parent`
## `parent_x`
X coordinate in parent’s coordinate system
## `parent_y`
Y coordinate in parent’s coordinate system
## `x`
return location for X coordinate in child’s coordinate system
## `y`
return location for Y coordinate in child’s coordinate system
<!-- trait WindowExt::fn coords_to_parent -->
Transforms window coordinates from a child window to its parent
window, where the parent window is the normal parent as returned by
`WindowExt::get_parent` for normal windows, and the window's
embedder as returned by `gdk_offscreen_window_get_embedder` for
offscreen windows.

For normal windows, calling this function is equivalent to adding
the return values of `WindowExt::get_position` to the child coordinates.
For offscreen windows however (which can be arbitrarily transformed),
this function calls the `Window`::to-embedder: signal to translate
the coordinates.

You should always use this function when writing generic code that
walks up a window hierarchy.

See also: `WindowExt::coords_from_parent`
## `x`
X coordinate in child’s coordinate system
## `y`
Y coordinate in child’s coordinate system
## `parent_x`
return location for X coordinate
in parent’s coordinate system, or `None`
## `parent_y`
return location for Y coordinate
in parent’s coordinate system, or `None`
<!-- trait WindowExt::fn create_gl_context -->
Creates a new `GLContext` matching the
framebuffer format to the visual of the `Window`. The context
is disconnected from any particular window or surface.

If the creation of the `GLContext` failed, `error` will be set.

Before using the returned `GLContext`, you will need to
call `GLContext::make_current` or `GLContext::realize`.

Feature: `v3_16`


# Returns

the newly created `GLContext`, or
`None` on error
<!-- trait WindowExt::fn create_similar_image_surface -->
Create a new image surface that is efficient to draw on the
given `self`.

Initially the surface contents are all 0 (transparent if contents
have transparency, black otherwise.)

The `width` and `height` of the new surface are not affected by
the scaling factor of the `self`, or by the `scale` argument; they
are the size of the surface in device pixels. If you wish to create
an image surface capable of holding the contents of `self` you can
use:


```C
  int scale = gdk_window_get_scale_factor (window);
  int width = gdk_window_get_width (window) * scale;
  int height = gdk_window_get_height (window) * scale;

  // format is set elsewhere
  cairo_surface_t *surface =
    gdk_window_create_similar_image_surface (window,
                                             format,
                                             width, height,
                                             scale);
```

Note that unlike `cairo_surface_create_similar_image`, the new
surface's device scale is set to `scale`, or to the scale factor of
`self` if `scale` is 0.
## `format`
the format for the new surface
## `width`
width of the new surface
## `height`
height of the new surface
## `scale`
the scale of the new surface, or 0 to use same as `self`

# Returns

a pointer to the newly allocated surface. The caller
owns the surface and should call `cairo_surface_destroy` when done
with it.

This function always returns a valid pointer, but it will return a
pointer to a “nil” surface if `other` is already in an error state
or any other error occurs.
<!-- trait WindowExt::fn create_similar_surface -->
Create a new surface that is as compatible as possible with the
given `self`. For example the new surface will have the same
fallback resolution and font options as `self`. Generally, the new
surface will also use the same backend as `self`, unless that is
not possible for some reason. The type of the returned surface may
be examined with `cairo_surface_get_type`.

Initially the surface contents are all 0 (transparent if contents
have transparency, black otherwise.)
## `content`
the content for the new surface
## `width`
width of the new surface
## `height`
height of the new surface

# Returns

a pointer to the newly allocated surface. The caller
owns the surface and should call `cairo_surface_destroy` when done
with it.

This function always returns a valid pointer, but it will return a
pointer to a “nil” surface if `other` is already in an error state
or any other error occurs.
<!-- trait WindowExt::fn deiconify -->
Attempt to deiconify (unminimize) `self`. On X11 the window manager may
choose to ignore the request to deiconify. When using GTK+,
use `gtk_window_deiconify` instead of the `Window` variant. Or better yet,
you probably want to use `gtk_window_present`, which raises the window, focuses it,
unminimizes it, and puts it on the current desktop.
<!-- trait WindowExt::fn destroy -->
Destroys the window system resources associated with `self` and decrements `self`'s
reference count. The window system resources for all children of `self` are also
destroyed, but the children’s reference counts are not decremented.

Note that a window will not be destroyed automatically when its reference count
reaches zero. You must call this function yourself before that happens.
<!-- trait WindowExt::fn end_draw_frame -->
Indicates that the drawing of the contents of `self` started with
`gdk_window_begin_frame` has been completed.

This function will take care of destroying the `DrawingContext`.

It is an error to call this function without a matching
`gdk_window_begin_frame` first.

Feature: `v3_22`

## `context`
the `DrawingContext` created by `WindowExt::begin_draw_frame`
<!-- trait WindowExt::fn end_paint -->
Indicates that the backing store created by the most recent call
to `WindowExt::begin_paint_region` should be copied onscreen and
deleted, leaving the next-most-recent backing store or no backing
store at all as the active paint region. See
`WindowExt::begin_paint_region` for full details.

It is an error to call this function without a matching
`WindowExt::begin_paint_region` first.
<!-- trait WindowExt::fn ensure_native -->
Tries to ensure that there is a window-system native window for this
`Window`. This may fail in some situations, returning `false`.

Offscreen window and children of them can never have native windows.

Some backends may not support native child windows.

# Returns

`true` if the window has a native window, `false` otherwise
<!-- trait WindowExt::fn focus -->
Sets keyboard focus to `self`. In most cases, `gtk_window_present`
should be used on a ``GtkWindow``, rather than calling this function.
## `timestamp`
timestamp of the event triggering the window focus
<!-- trait WindowExt::fn freeze_toplevel_updates_libgtk_only -->
Temporarily freezes a window and all its descendants such that it won't
receive expose events. The window will begin receiving expose events
again when `WindowExt::thaw_toplevel_updates_libgtk_only` is called. If
`WindowExt::freeze_toplevel_updates_libgtk_only`
has been called more than once,
`WindowExt::thaw_toplevel_updates_libgtk_only` must be called
an equal number of times to begin processing exposes.

This function is not part of the GDK public API and is only
for use by GTK+.

# Deprecated since 3.16

This symbol was never meant to be used outside of GTK+
<!-- trait WindowExt::fn freeze_updates -->
Temporarily freezes a window such that it won’t receive expose
events. The window will begin receiving expose events again when
`WindowExt::thaw_updates` is called. If `WindowExt::freeze_updates`
has been called more than once, `WindowExt::thaw_updates` must be called
an equal number of times to begin processing exposes.
<!-- trait WindowExt::fn fullscreen -->
Moves the window into fullscreen mode. This means the
window covers the entire screen and is above any panels
or task bars.

If the window was already fullscreen, then this function does nothing.

On X11, asks the window manager to put `self` in a fullscreen
state, if the window manager supports this operation. Not all
window managers support this, and some deliberately ignore it or
don’t have a concept of “fullscreen”; so you can’t rely on the
fullscreenification actually happening. But it will happen with
most standard window managers, and GDK makes a best effort to get
it to happen.
<!-- trait WindowExt::fn fullscreen_on_monitor -->
Moves the window into fullscreen mode on the given monitor. This means
the window covers the entire screen and is above any panels or task bars.

If the window was already fullscreen, then this function does nothing.
## `monitor`
Which monitor to display fullscreen on.
<!-- trait WindowExt::fn geometry_changed -->
This function informs GDK that the geometry of an embedded
offscreen window has changed. This is necessary for GDK to keep
track of which offscreen window the pointer is in.
<!-- trait WindowExt::fn get_accept_focus -->
Determines whether or not the desktop environment shuld be hinted that
the window does not want to receive input focus.

# Returns

whether or not the window should receive input focus.
<!-- trait WindowExt::fn get_background_pattern -->
Gets the pattern used to clear the background on `self`.

# Deprecated since 3.22

Don't use this function

# Returns

The pattern to use for the
background or `None` if there is no background.
<!-- trait WindowExt::fn get_children -->
Gets the list of children of `self` known to GDK.
This function only returns children created via GDK,
so for example it’s useless when used with the root window;
it only returns windows an application created itself.

The returned list must be freed, but the elements in the
list need not be.

# Returns


 list of child windows inside `self`
<!-- trait WindowExt::fn get_children_with_user_data -->
Gets the list of children of `self` known to GDK with a
particular `user_data` set on it.

The returned list must be freed, but the elements in the
list need not be.

The list is returned in (relative) stacking order, i.e. the
lowest window is first.
## `user_data`
user data to look for

# Returns


 list of child windows inside `self`
<!-- trait WindowExt::fn get_clip_region -->
Computes the region of a window that potentially can be written
to by drawing primitives. This region may not take into account
other factors such as if the window is obscured by other windows,
but no area outside of this region will be affected by drawing
primitives.

# Returns

a `cairo::Region`. This must be freed with `cairo_region_destroy`
 when you are done.
<!-- trait WindowExt::fn get_composited -->
Determines whether `self` is composited.

See `WindowExt::set_composited`.

# Deprecated since 3.16

Compositing is an outdated technology that
 only ever worked on X11.

# Returns

`true` if the window is composited.
<!-- trait WindowExt::fn get_cursor -->
Retrieves a `Cursor` pointer for the cursor currently set on the
specified `Window`, or `None`. If the return value is `None` then
there is no custom cursor set on the specified window, and it is
using the cursor for its parent window.

# Returns

a `Cursor`, or `None`. The
 returned object is owned by the `Window` and should not be
 unreferenced directly. Use `WindowExt::set_cursor` to unset the
 cursor of the window
<!-- trait WindowExt::fn get_decorations -->
Returns the decorations set on the `Window` with
`WindowExt::set_decorations`.
## `decorations`
The window decorations will be written here

# Returns

`true` if the window has decorations set, `false` otherwise.
<!-- trait WindowExt::fn get_device_cursor -->
Retrieves a `Cursor` pointer for the `device` currently set on the
specified `Window`, or `None`. If the return value is `None` then
there is no custom cursor set on the specified window, and it is
using the cursor for its parent window.
## `device`
a master, pointer `Device`.

# Returns

a `Cursor`, or `None`. The
 returned object is owned by the `Window` and should not be
 unreferenced directly. Use `WindowExt::set_cursor` to unset the
 cursor of the window
<!-- trait WindowExt::fn get_device_events -->
Returns the event mask for `self` corresponding to an specific device.
## `device`
a `Device`.

# Returns

device event mask for `self`
<!-- trait WindowExt::fn get_device_position -->
Obtains the current device position and modifier state.
The position is given in coordinates relative to the upper left
corner of `self`.

Use `WindowExt::get_device_position_double` if you need subpixel precision.
## `device`
pointer `Device` to query to.
## `x`
return location for the X coordinate of `device`, or `None`.
## `y`
return location for the Y coordinate of `device`, or `None`.
## `mask`
return location for the modifier mask, or `None`.

# Returns

The window underneath `device`
(as with `Device::get_window_at_position`), or `None` if the
window is not known to GDK.
<!-- trait WindowExt::fn get_device_position_double -->
Obtains the current device position in doubles and modifier state.
The position is given in coordinates relative to the upper left
corner of `self`.
## `device`
pointer `Device` to query to.
## `x`
return location for the X coordinate of `device`, or `None`.
## `y`
return location for the Y coordinate of `device`, or `None`.
## `mask`
return location for the modifier mask, or `None`.

# Returns

The window underneath `device`
(as with `Device::get_window_at_position`), or `None` if the
window is not known to GDK.
<!-- trait WindowExt::fn get_display -->
Gets the `Display` associated with a `Window`.

# Returns

the `Display` associated with `self`
<!-- trait WindowExt::fn get_drag_protocol -->
Finds out the DND protocol supported by a window.
## `target`
location of the window
 where the drop should happen. This may be `self` or a proxy window,
 or `None` if `self` does not support Drag and Drop.

# Returns

the supported DND protocol.
<!-- trait WindowExt::fn get_effective_parent -->
Obtains the parent of `self`, as known to GDK. Works like
`WindowExt::get_parent` for normal windows, but returns the
window’s embedder for offscreen windows.

See also: `gdk_offscreen_window_get_embedder`

# Returns

effective parent of `self`
<!-- trait WindowExt::fn get_effective_toplevel -->
Gets the toplevel window that’s an ancestor of `self`.

Works like `WindowExt::get_toplevel`, but treats an offscreen window's
embedder as its parent, using `WindowExt::get_effective_parent`.

See also: `gdk_offscreen_window_get_embedder`

# Returns

the effective toplevel window containing `self`
<!-- trait WindowExt::fn get_event_compression -->
Get the current event compression setting for this window.

# Returns

`true` if motion events will be compressed
<!-- trait WindowExt::fn get_events -->
Gets the event mask for `self` for all master input devices. See
`WindowExt::set_events`.

# Returns

event mask for `self`
<!-- trait WindowExt::fn get_focus_on_map -->
Determines whether or not the desktop environment should be hinted that the
window does not want to receive input focus when it is mapped.

# Returns

whether or not the window wants to receive input focus when
it is mapped.
<!-- trait WindowExt::fn get_frame_clock -->
Gets the frame clock for the window. The frame clock for a window
never changes unless the window is reparented to a new toplevel
window.

# Returns

the frame clock
<!-- trait WindowExt::fn get_frame_extents -->
Obtains the bounding box of the window, including window manager
titlebar/borders if any. The frame position is given in root window
coordinates. To get the position of the window itself (rather than
the frame) in root window coordinates, use `WindowExt::get_origin`.
## `rect`
rectangle to fill with bounding box of the window frame
<!-- trait WindowExt::fn get_fullscreen_mode -->
Obtains the `FullscreenMode` of the `self`.

# Returns

The `FullscreenMode` applied to the window when fullscreen.
<!-- trait WindowExt::fn get_geometry -->
Any of the return location arguments to this function may be `None`,
if you aren’t interested in getting the value of that field.

The X and Y coordinates returned are relative to the parent window
of `self`, which for toplevels usually means relative to the
window decorations (titlebar, etc.) rather than relative to the
root window (screen-size background window).

On the X11 platform, the geometry is obtained from the X server,
so reflects the latest position of `self`; this may be out-of-sync
with the position of `self` delivered in the most-recently-processed
`EventConfigure`. `WindowExt::get_position` in contrast gets the
position from the most recent configure event.

Note: If `self` is not a toplevel, it is much better
to call `WindowExt::get_position`, `WindowExt::get_width` and
`WindowExt::get_height` instead, because it avoids the roundtrip to
the X server and because these functions support the full 32-bit
coordinate space, whereas `WindowExt::get_geometry` is restricted to
the 16-bit coordinates of X11.
## `x`
return location for X coordinate of window (relative to its parent)
## `y`
return location for Y coordinate of window (relative to its parent)
## `width`
return location for width of window
## `height`
return location for height of window
<!-- trait WindowExt::fn get_group -->
Returns the group leader window for `self`. See `WindowExt::set_group`.

# Returns

the group leader window for `self`
<!-- trait WindowExt::fn get_height -->
Returns the height of the given `self`.

On the X11 platform the returned size is the size reported in the
most-recently-processed configure event, rather than the current
size on the X server.

# Returns

The height of `self`
<!-- trait WindowExt::fn get_modal_hint -->
Determines whether or not the window manager is hinted that `self`
has modal behaviour.

# Returns

whether or not the window has the modal hint set.
<!-- trait WindowExt::fn get_origin -->
Obtains the position of a window in root window coordinates.
(Compare with `WindowExt::get_position` and
`WindowExt::get_geometry` which return the position of a window
relative to its parent window.)
## `x`
return location for X coordinate
## `y`
return location for Y coordinate

# Returns

not meaningful, ignore
<!-- trait WindowExt::fn get_parent -->
Obtains the parent of `self`, as known to GDK. Does not query the
X server; thus this returns the parent as passed to `Window::new`,
not the actual parent. This should never matter unless you’re using
Xlib calls mixed with GDK calls on the X11 platform. It may also
matter for toplevel windows, because the window manager may choose
to reparent them.

Note that you should use `WindowExt::get_effective_parent` when
writing generic code that walks up a window hierarchy, because
`WindowExt::get_parent` will most likely not do what you expect if
there are offscreen windows in the hierarchy.

# Returns

parent of `self`
<!-- trait WindowExt::fn get_pass_through -->
Returns whether input to the window is passed through to the window
below.

See `WindowExt::set_pass_through` for details

Feature: `v3_18`

<!-- trait WindowExt::fn get_position -->
Obtains the position of the window as reported in the
most-recently-processed `EventConfigure`. Contrast with
`WindowExt::get_geometry` which queries the X server for the
current window position, regardless of which events have been
received or processed.

The position coordinates are relative to the window’s parent window.
## `x`
X coordinate of window
## `y`
Y coordinate of window
<!-- trait WindowExt::fn get_root_coords -->
Obtains the position of a window position in root
window coordinates. This is similar to
`WindowExt::get_origin` but allows you to pass
in any position in the window, not just the origin.
## `x`
X coordinate in window
## `y`
Y coordinate in window
## `root_x`
return location for X coordinate
## `root_y`
return location for Y coordinate
<!-- trait WindowExt::fn get_root_origin -->
Obtains the top-left corner of the window manager frame in root
window coordinates.
## `x`
return location for X position of window frame
## `y`
return location for Y position of window frame
<!-- trait WindowExt::fn get_scale_factor -->
Returns the internal scale factor that maps from window coordiantes
to the actual device pixels. On traditional systems this is 1, but
on very high density outputs this can be a higher value (often 2).

A higher value means that drawing is automatically scaled up to
a higher resolution, so any code doing drawing will automatically look
nicer. However, if you are supplying pixel-based data the scale
value can be used to determine whether to use a pixel resource
with higher resolution data.

The scale of a window may change during runtime, if this happens
a configure event will be sent to the toplevel window.

# Returns

the scale factor
<!-- trait WindowExt::fn get_screen -->
Gets the `Screen` associated with a `Window`.

# Returns

the `Screen` associated with `self`
<!-- trait WindowExt::fn get_source_events -->
Returns the event mask for `self` corresponding to the device class specified
by `source`.
## `source`
a `InputSource` to define the source class.

# Returns

source event mask for `self`
<!-- trait WindowExt::fn get_state -->
Gets the bitwise OR of the currently active window state flags,
from the `WindowState` enumeration.

# Returns

window state bitfield
<!-- trait WindowExt::fn get_support_multidevice -->
Returns `true` if the window is aware of the existence of multiple
devices.

# Returns

`true` if the window handles multidevice features.
<!-- trait WindowExt::fn get_toplevel -->
Gets the toplevel window that’s an ancestor of `self`.

Any window type but `WindowType::Child` is considered a
toplevel window, as is a `WindowType::Child` window that
has a root window as parent.

Note that you should use `WindowExt::get_effective_toplevel` when
you want to get to a window’s toplevel as seen on screen, because
`WindowExt::get_toplevel` will most likely not do what you expect
if there are offscreen windows in the hierarchy.

# Returns

the toplevel window containing `self`
<!-- trait WindowExt::fn get_type_hint -->
This function returns the type hint set for a window.

# Returns

The type hint set for `self`
<!-- trait WindowExt::fn get_update_area -->
Transfers ownership of the update area from `self` to the caller
of the function. That is, after calling this function, `self` will
no longer have an invalid/dirty region; the update area is removed
from `self` and handed to you. If a window has no update area,
`WindowExt::get_update_area` returns `None`. You are responsible for
calling `cairo_region_destroy` on the returned region if it’s non-`None`.

# Returns

the update area for `self`
<!-- trait WindowExt::fn get_user_data -->
Retrieves the user data for `self`, which is normally the widget
that `self` belongs to. See `WindowExt::set_user_data`.
## `data`
return location for user data
<!-- trait WindowExt::fn get_visible_region -->
Computes the region of the `self` that is potentially visible.
This does not necessarily take into account if the window is
obscured by other windows, but no area outside of this region
is visible.

# Returns

a `cairo::Region`. This must be freed with `cairo_region_destroy`
 when you are done.
<!-- trait WindowExt::fn get_visual -->
Gets the `Visual` describing the pixel format of `self`.

# Returns

a `Visual`
<!-- trait WindowExt::fn get_width -->
Returns the width of the given `self`.

On the X11 platform the returned size is the size reported in the
most-recently-processed configure event, rather than the current
size on the X server.

# Returns

The width of `self`
<!-- trait WindowExt::fn get_window_type -->
Gets the type of the window. See `WindowType`.

# Returns

type of window
<!-- trait WindowExt::fn has_native -->
Checks whether the window has a native window or not. Note that
you can use `WindowExt::ensure_native` if a native window is needed.

# Returns

`true` if the `self` has a native window, `false` otherwise.
<!-- trait WindowExt::fn hide -->
For toplevel windows, withdraws them, so they will no longer be
known to the window manager; for all windows, unmaps them, so
they won’t be displayed. Normally done automatically as
part of `gtk_widget_hide`.
<!-- trait WindowExt::fn iconify -->
Asks to iconify (minimize) `self`. The window manager may choose
to ignore the request, but normally will honor it. Using
`gtk_window_iconify` is preferred, if you have a ``GtkWindow`` widget.

This function only makes sense when `self` is a toplevel window.
<!-- trait WindowExt::fn input_shape_combine_region -->
Like `WindowExt::shape_combine_region`, but the shape applies
only to event handling. Mouse events which happen while
the pointer position corresponds to an unset bit in the
mask will be passed on the window below `self`.

An input shape is typically used with RGBA windows.
The alpha channel of the window defines which pixels are
invisible and allows for nicely antialiased borders,
and the input shape controls where the window is
“clickable”.

On the X11 platform, this requires version 1.1 of the
shape extension.

On the Win32 platform, this functionality is not present and the
function does nothing.
## `shape_region`
region of window to be non-transparent
## `offset_x`
X position of `shape_region` in `self` coordinates
## `offset_y`
Y position of `shape_region` in `self` coordinates
<!-- trait WindowExt::fn invalidate_maybe_recurse -->
Adds `region` to the update area for `self`. The update area is the
region that needs to be redrawn, or “dirty region.” The call
`WindowExt::process_updates` sends one or more expose events to the
window, which together cover the entire update area. An
application would normally redraw the contents of `self` in
response to those expose events.

GDK will call `Window::process_all_updates` on your behalf
whenever your program returns to the main loop and becomes idle, so
normally there’s no need to do that manually, you just need to
invalidate regions that you know should be redrawn.

The `child_func` parameter controls whether the region of
each child window that intersects `region` will also be invalidated.
Only children for which `child_func` returns `true` will have the area
invalidated.
## `region`
a `cairo::Region`
## `child_func`
function to use to decide if to
 recurse to a child, `None` means never recurse.
## `user_data`
data passed to `child_func`
<!-- trait WindowExt::fn invalidate_rect -->
A convenience wrapper around `WindowExt::invalidate_region` which
invalidates a rectangular region. See
`WindowExt::invalidate_region` for details.
## `rect`
rectangle to invalidate or `None` to invalidate the whole
 window
## `invalidate_children`
whether to also invalidate child windows
<!-- trait WindowExt::fn invalidate_region -->
Adds `region` to the update area for `self`. The update area is the
region that needs to be redrawn, or “dirty region.” The call
`WindowExt::process_updates` sends one or more expose events to the
window, which together cover the entire update area. An
application would normally redraw the contents of `self` in
response to those expose events.

GDK will call `Window::process_all_updates` on your behalf
whenever your program returns to the main loop and becomes idle, so
normally there’s no need to do that manually, you just need to
invalidate regions that you know should be redrawn.

The `invalidate_children` parameter controls whether the region of
each child window that intersects `region` will also be invalidated.
If `false`, then the update area for child windows will remain
unaffected. See gdk_window_invalidate_maybe_recurse if you need
fine grained control over which children are invalidated.
## `region`
a `cairo::Region`
## `invalidate_children`
`true` to also invalidate child windows
<!-- trait WindowExt::fn is_destroyed -->
Check to see if a window is destroyed..

# Returns

`true` if the window is destroyed
<!-- trait WindowExt::fn is_input_only -->
Determines whether or not the window is an input only window.

# Returns

`true` if `self` is input only
<!-- trait WindowExt::fn is_shaped -->
Determines whether or not the window is shaped.

# Returns

`true` if `self` is shaped
<!-- trait WindowExt::fn is_viewable -->
Check if the window and all ancestors of the window are
mapped. (This is not necessarily "viewable" in the X sense, since
we only check as far as we have GDK window parents, not to the root
window.)

# Returns

`true` if the window is viewable
<!-- trait WindowExt::fn is_visible -->
Checks whether the window has been mapped (with `WindowExt::show` or
`WindowExt::show_unraised`).

# Returns

`true` if the window is mapped
<!-- trait WindowExt::fn lower -->
Lowers `self` to the bottom of the Z-order (stacking order), so that
other windows with the same parent window appear above `self`.
This is true whether or not the other windows are visible.

If `self` is a toplevel, the window manager may choose to deny the
request to move the window in the Z-order, `WindowExt::lower` only
requests the restack, does not guarantee it.

Note that `WindowExt::show` raises the window again, so don’t call this
function before `WindowExt::show`. (Try `WindowExt::show_unraised`.)
<!-- trait WindowExt::fn mark_paint_from_clip -->
If you call this during a paint (e.g. between `WindowExt::begin_paint_region`
and `WindowExt::end_paint` then GDK will mark the current clip region of the
window as being drawn. This is required when mixing GL rendering via
`gdk_cairo_draw_from_gl` and cairo rendering, as otherwise GDK has no way
of knowing when something paints over the GL-drawn regions.

This is typically called automatically by GTK+ and you don't need
to care about this.

Feature: `v3_16`

## `cr`
a `cairo::Context`
<!-- trait WindowExt::fn maximize -->
Maximizes the window. If the window was already maximized, then
this function does nothing.

On X11, asks the window manager to maximize `self`, if the window
manager supports this operation. Not all window managers support
this, and some deliberately ignore it or don’t have a concept of
“maximized”; so you can’t rely on the maximization actually
happening. But it will happen with most standard window managers,
and GDK makes a best effort to get it to happen.

On Windows, reliably maximizes the window.
<!-- trait WindowExt::fn merge_child_input_shapes -->
Merges the input shape masks for any child windows into the
input shape mask for `self`. i.e. the union of all input masks
for `self` and its children will become the new input mask
for `self`. See `WindowExt::input_shape_combine_region`.

This function is distinct from `WindowExt::set_child_input_shapes`
because it includes `self`’s input shape mask in the set of
shapes to be merged.
<!-- trait WindowExt::fn merge_child_shapes -->
Merges the shape masks for any child windows into the
shape mask for `self`. i.e. the union of all masks
for `self` and its children will become the new mask
for `self`. See `WindowExt::shape_combine_region`.

This function is distinct from `WindowExt::set_child_shapes`
because it includes `self`’s shape mask in the set of shapes to
be merged.
<!-- trait WindowExt::fn move -->
Repositions a window relative to its parent window.
For toplevel windows, window managers may ignore or modify the move;
you should probably use `gtk_window_move` on a ``GtkWindow`` widget
anyway, instead of using GDK functions. For child windows,
the move will reliably succeed.

If you’re also planning to resize the window, use `WindowExt::move_resize`
to both move and resize simultaneously, for a nicer visual effect.
## `x`
X coordinate relative to window’s parent
## `y`
Y coordinate relative to window’s parent
<!-- trait WindowExt::fn move_region -->
Move the part of `self` indicated by `region` by `dy` pixels in the Y
direction and `dx` pixels in the X direction. The portions of `region`
that not covered by the new position of `region` are invalidated.

Child windows are not moved.
## `region`
The `cairo::Region` to move
## `dx`
Amount to move in the X direction
## `dy`
Amount to move in the Y direction
<!-- trait WindowExt::fn move_resize -->
Equivalent to calling `WindowExt::move` and `WindowExt::resize`,
except that both operations are performed at once, avoiding strange
visual effects. (i.e. the user may be able to see the window first
move, then resize, if you don’t use `WindowExt::move_resize`.)
## `x`
new X position relative to window’s parent
## `y`
new Y position relative to window’s parent
## `width`
new width
## `height`
new height
<!-- trait WindowExt::fn move_to_rect -->
Moves `self` to `rect`, aligning their anchor points.

`rect` is relative to the top-left corner of the window that `self` is
transient for. `rect_anchor` and `window_anchor` determine anchor points on
`rect` and `self` to pin together. `rect`'s anchor point can optionally be
offset by `rect_anchor_dx` and `rect_anchor_dy`, which is equivalent to
offsetting the position of `self`.

`anchor_hints` determines how `self` will be moved if the anchor points cause
it to move off-screen. For example, `AnchorHints::FlipX` will replace
`Gravity::NorthWest` with `Gravity::NorthEast` and vice versa if
`self` extends beyond the left or right edges of the monitor.

Connect to the `Window::moved-to-rect` signal to find out how it was
actually positioned.

Feature: `v3_24`

## `rect`
the destination `Rectangle` to align `self` with
## `rect_anchor`
the point on `rect` to align with `self`'s anchor point
## `window_anchor`
the point on `self` to align with `rect`'s anchor point
## `anchor_hints`
positioning hints to use when limited on space
## `rect_anchor_dx`
horizontal offset to shift `self`, i.e. `rect`'s anchor
 point
## `rect_anchor_dy`
vertical offset to shift `self`, i.e. `rect`'s anchor point
<!-- trait WindowExt::fn peek_children -->
Like `WindowExt::get_children`, but does not copy the list of
children, so the list does not need to be freed.

# Returns


 a reference to the list of child windows in `self`
<!-- trait WindowExt::fn process_updates -->
Sends one or more expose events to `self`. The areas in each
expose event will cover the entire update area for the window (see
`WindowExt::invalidate_region` for details). Normally GDK calls
`Window::process_all_updates` on your behalf, so there’s no
need to call this function unless you want to force expose events
to be delivered immediately and synchronously (vs. the usual
case, where GDK delivers them in an idle handler). Occasionally
this is useful to produce nicer scrolling behavior, for example.

# Deprecated since 3.22

## `update_children`
whether to also process updates for child windows
<!-- trait WindowExt::fn raise -->
Raises `self` to the top of the Z-order (stacking order), so that
other windows with the same parent window appear below `self`.
This is true whether or not the windows are visible.

If `self` is a toplevel, the window manager may choose to deny the
request to move the window in the Z-order, `WindowExt::raise` only
requests the restack, does not guarantee it.
<!-- trait WindowExt::fn register_dnd -->
Registers a window as a potential drop destination.
<!-- trait WindowExt::fn remove_filter -->
Remove a filter previously added with `WindowExt::add_filter`.
## `function`
previously-added filter function
## `data`
user data for previously-added filter function
<!-- trait WindowExt::fn reparent -->
Reparents `self` into the given `new_parent`. The window being
reparented will be unmapped as a side effect.
## `new_parent`
new parent to move `self` into
## `x`
X location inside the new parent
## `y`
Y location inside the new parent
<!-- trait WindowExt::fn resize -->
Resizes `self`; for toplevel windows, asks the window manager to resize
the window. The window manager may not allow the resize. When using GTK+,
use `gtk_window_resize` instead of this low-level GDK function.

Windows may not be resized below 1x1.

If you’re also planning to move the window, use `WindowExt::move_resize`
to both move and resize simultaneously, for a nicer visual effect.
## `width`
new width of the window
## `height`
new height of the window
<!-- trait WindowExt::fn restack -->
Changes the position of `self` in the Z-order (stacking order), so that
it is above `sibling` (if `above` is `true`) or below `sibling` (if `above` is
`false`).

If `sibling` is `None`, then this either raises (if `above` is `true`) or
lowers the window.

If `self` is a toplevel, the window manager may choose to deny the
request to move the window in the Z-order, `WindowExt::restack` only
requests the restack, does not guarantee it.
## `sibling`
a `Window` that is a sibling of `self`, or `None`
## `above`
a boolean
<!-- trait WindowExt::fn scroll -->
Scroll the contents of `self`, both pixels and children, by the
given amount. `self` itself does not move. Portions of the window
that the scroll operation brings in from offscreen areas are
invalidated. The invalidated region may be bigger than what would
strictly be necessary.

For X11, a minimum area will be invalidated if the window has no
subwindows, or if the edges of the window’s parent do not extend
beyond the edges of the window. In other cases, a multi-step process
is used to scroll the window which may produce temporary visual
artifacts and unnecessary invalidations.
## `dx`
Amount to scroll in the X direction
## `dy`
Amount to scroll in the Y direction
<!-- trait WindowExt::fn set_accept_focus -->
Setting `accept_focus` to `false` hints the desktop environment that the
window doesn’t want to receive input focus.

On X, it is the responsibility of the window manager to interpret this
hint. ICCCM-compliant window manager usually respect it.
## `accept_focus`
`true` if the window should receive input focus
<!-- trait WindowExt::fn set_background_pattern -->
Sets the background of `self`.

A background of `None` means that the window won't have any background. On the
X11 backend it's also possible to inherit the background from the parent
window using `gdk_x11_get_parent_relative_pattern`.

The windowing system will normally fill a window with its background
when the window is obscured then exposed.

# Deprecated since 3.22

Don't use this function
## `pattern`
a pattern to use, or `None`
<!-- trait WindowExt::fn set_background_rgba -->
Sets the background color of `self`.

See also `Window::set_background_pattern`.

# Deprecated since 3.22

Don't use this function
## `rgba`
a `RGBA` color
<!-- trait WindowExt::fn set_child_input_shapes -->
Sets the input shape mask of `self` to the union of input shape masks
for all children of `self`, ignoring the input shape mask of `self`
itself. Contrast with `WindowExt::merge_child_input_shapes` which includes
the input shape mask of `self` in the masks to be merged.
<!-- trait WindowExt::fn set_child_shapes -->
Sets the shape mask of `self` to the union of shape masks
for all children of `self`, ignoring the shape mask of `self`
itself. Contrast with `WindowExt::merge_child_shapes` which includes
the shape mask of `self` in the masks to be merged.
<!-- trait WindowExt::fn set_composited -->
Sets a `Window` as composited, or unsets it. Composited
windows do not automatically have their contents drawn to
the screen. Drawing is redirected to an offscreen buffer
and an expose event is emitted on the parent of the composited
window. It is the responsibility of the parent’s expose handler
to manually merge the off-screen content onto the screen in
whatever way it sees fit.

It only makes sense for child windows to be composited; see
`WindowExt::set_opacity` if you need translucent toplevel
windows.

An additional effect of this call is that the area of this
window is no longer clipped from regions marked for
invalidation on its parent. Draws done on the parent
window are also no longer clipped by the child.

This call is only supported on some systems (currently,
only X11 with new enough Xcomposite and Xdamage extensions).
You must call `Display::supports_composite` to check if
setting a window as composited is supported before
attempting to do so.

# Deprecated since 3.16

Compositing is an outdated technology that
 only ever worked on X11.
## `composited`
`true` to set the window as composited
<!-- trait WindowExt::fn set_cursor -->
Sets the default mouse pointer for a `Window`.

Note that `cursor` must be for the same display as `self`.

Use `Cursor::new_for_display` or `Cursor::new_from_pixbuf` to
create the cursor. To make the cursor invisible, use `CursorType::BlankCursor`.
Passing `None` for the `cursor` argument to `WindowExt::set_cursor` means
that `self` will use the cursor of its parent window. Most windows
should use this default.
## `cursor`
a cursor
<!-- trait WindowExt::fn set_decorations -->
“Decorations” are the features the window manager adds to a toplevel `Window`.
This function sets the traditional Motif window manager hints that tell the
window manager which decorations you would like your window to have.
Usually you should use `gtk_window_set_decorated` on a ``GtkWindow`` instead of
using the GDK function directly.

The `decorations` argument is the logical OR of the fields in
the `WMDecoration` enumeration. If `WMDecoration::All` is included in the
mask, the other bits indicate which decorations should be turned off.
If `WMDecoration::All` is not included, then the other bits indicate
which decorations should be turned on.

Most window managers honor a decorations hint of 0 to disable all decorations,
but very few honor all possible combinations of bits.
## `decorations`
decoration hint mask
<!-- trait WindowExt::fn set_device_cursor -->
Sets a specific `Cursor` for a given device when it gets inside `self`.
Use `Cursor::new_for_display` or `Cursor::new_from_pixbuf` to create
the cursor. To make the cursor invisible, use `CursorType::BlankCursor`. Passing
`None` for the `cursor` argument to `WindowExt::set_cursor` means that
`self` will use the cursor of its parent window. Most windows should
use this default.
## `device`
a master, pointer `Device`
## `cursor`
a `Cursor`
<!-- trait WindowExt::fn set_device_events -->
Sets the event mask for a given device (Normally a floating device, not
attached to any visible pointer) to `self`. For example, an event mask
including `EventMask::ButtonPressMask` means the window should report button
press events. The event mask is the bitwise OR of values from the
`EventMask` enumeration.

See the [input handling overview][event-masks] for details.
## `device`
`Device` to enable events for.
## `event_mask`
event mask for `self`
<!-- trait WindowExt::fn set_event_compression -->
Determines whether or not extra unprocessed motion events in
the event queue can be discarded. If `true` only the most recent
event will be delivered.

Some types of applications, e.g. paint programs, need to see all
motion events and will benefit from turning off event compression.

By default, event compression is enabled.
## `event_compression`
`true` if motion events should be compressed
<!-- trait WindowExt::fn set_events -->
The event mask for a window determines which events will be reported
for that window from all master input devices. For example, an event mask
including `EventMask::ButtonPressMask` means the window should report button
press events. The event mask is the bitwise OR of values from the
`EventMask` enumeration.

See the [input handling overview][event-masks] for details.
## `event_mask`
event mask for `self`
<!-- trait WindowExt::fn set_focus_on_map -->
Setting `focus_on_map` to `false` hints the desktop environment that the
window doesn’t want to receive input focus when it is mapped.
focus_on_map should be turned off for windows that aren’t triggered
interactively (such as popups from network activity).

On X, it is the responsibility of the window manager to interpret
this hint. Window managers following the freedesktop.org window
manager extension specification should respect it.
## `focus_on_map`
`true` if the window should receive input focus when mapped
<!-- trait WindowExt::fn set_fullscreen_mode -->
Specifies whether the `self` should span over all monitors (in a multi-head
setup) or only the current monitor when in fullscreen mode.

The `mode` argument is from the `FullscreenMode` enumeration.
If `FullscreenMode::AllMonitors` is specified, the fullscreen `self` will
span over all monitors from the `Screen`.

On X11, searches through the list of monitors from the `Screen` the ones
which delimit the 4 edges of the entire `Screen` and will ask the window
manager to span the `self` over these monitors.

If the XINERAMA extension is not available or not usable, this function
has no effect.

Not all window managers support this, so you can’t rely on the fullscreen
window to span over the multiple monitors when `FullscreenMode::AllMonitors`
is specified.
## `mode`
fullscreen mode
<!-- trait WindowExt::fn set_functions -->
Sets hints about the window management functions to make available
via buttons on the window frame.

On the X backend, this function sets the traditional Motif window
manager hint for this purpose. However, few window managers do
anything reliable or interesting with this hint. Many ignore it
entirely.

The `functions` argument is the logical OR of values from the
`WMFunction` enumeration. If the bitmask includes `WMFunction::All`,
then the other bits indicate which functions to disable; if
it doesn’t include `WMFunction::All`, it indicates which functions to
enable.
## `functions`
bitmask of operations to allow on `self`
<!-- trait WindowExt::fn set_geometry_hints -->
Sets the geometry hints for `self`. Hints flagged in `geom_mask`
are set, hints not flagged in `geom_mask` are unset.
To unset all hints, use a `geom_mask` of 0 and a `geometry` of `None`.

This function provides hints to the windowing system about
acceptable sizes for a toplevel window. The purpose of
this is to constrain user resizing, but the windowing system
will typically (but is not required to) also constrain the
current size of the window to the provided values and
constrain programatic resizing via `WindowExt::resize` or
`WindowExt::move_resize`.

Note that on X11, this effect has no effect on windows
of type `WindowType::Temp` or windows where override redirect
has been turned on via `WindowExt::set_override_redirect`
since these windows are not resizable by the user.

Since you can’t count on the windowing system doing the
constraints for programmatic resizes, you should generally
call `Window::constrain_size` yourself to determine
appropriate sizes.
## `geometry`
geometry hints
## `geom_mask`
bitmask indicating fields of `geometry` to pay attention to
<!-- trait WindowExt::fn set_group -->
Sets the group leader window for `self`. By default,
GDK sets the group leader for all toplevel windows
to a global window implicitly created by GDK. With this function
you can override this default.

The group leader window allows the window manager to distinguish
all windows that belong to a single application. It may for example
allow users to minimize/unminimize all windows belonging to an
application at once. You should only set a non-default group window
if your application pretends to be multiple applications.
## `leader`
group leader window, or `None` to restore the default group leader window
<!-- trait WindowExt::fn set_icon_list -->
Sets a list of icons for the window. One of these will be used
to represent the window when it has been iconified. The icon is
usually shown in an icon box or some sort of task bar. Which icon
size is shown depends on the window manager. The window manager
can scale the icon but setting several size icons can give better
image quality since the window manager may only need to scale the
icon by a small amount or not at all.

Note that some platforms don't support window icons.
## `pixbufs`

 A list of pixbufs, of different sizes.
<!-- trait WindowExt::fn set_icon_name -->
Windows may have a name used while minimized, distinct from the
name they display in their titlebar. Most of the time this is a bad
idea from a user interface standpoint. But you can set such a name
with this function, if you like.

After calling this with a non-`None` `name`, calls to `WindowExt::set_title`
will not update the icon title.

Using `None` for `name` unsets the icon title; further calls to
`WindowExt::set_title` will again update the icon title as well.

Note that some platforms don't support window icons.
## `name`
name of window while iconified (minimized)
<!-- trait WindowExt::fn set_invalidate_handler -->
Registers an invalidate handler for a specific window. This
will get called whenever a region in the window or its children
is invalidated.

This can be used to record the invalidated region, which is
useful if you are keeping an offscreen copy of some region
and want to keep it up to date. You can also modify the
invalidated region in case you’re doing some effect where
e.g. a child widget appears in multiple places.
## `handler`
a ``GdkWindowInvalidateHandlerFunc`` callback function
<!-- trait WindowExt::fn set_keep_above -->
Set if `self` must be kept above other windows. If the
window was already above, then this function does nothing.

On X11, asks the window manager to keep `self` above, if the window
manager supports this operation. Not all window managers support
this, and some deliberately ignore it or don’t have a concept of
“keep above”; so you can’t rely on the window being kept above.
But it will happen with most standard window managers,
and GDK makes a best effort to get it to happen.
## `setting`
whether to keep `self` above other windows
<!-- trait WindowExt::fn set_keep_below -->
Set if `self` must be kept below other windows. If the
window was already below, then this function does nothing.

On X11, asks the window manager to keep `self` below, if the window
manager supports this operation. Not all window managers support
this, and some deliberately ignore it or don’t have a concept of
“keep below”; so you can’t rely on the window being kept below.
But it will happen with most standard window managers,
and GDK makes a best effort to get it to happen.
## `setting`
whether to keep `self` below other windows
<!-- trait WindowExt::fn set_modal_hint -->
The application can use this hint to tell the window manager
that a certain window has modal behaviour. The window manager
can use this information to handle modal windows in a special
way.

You should only use this on windows for which you have
previously called `WindowExt::set_transient_for`
## `modal`
`true` if the window is modal, `false` otherwise.
<!-- trait WindowExt::fn set_opacity -->
Set `self` to render as partially transparent,
with opacity 0 being fully transparent and 1 fully opaque. (Values
of the opacity parameter are clamped to the [0,1] range.)

For toplevel windows this depends on support from the windowing system
that may not always be there. For instance, On X11, this works only on
X screens with a compositing manager running. On Wayland, there is no
per-window opacity value that the compositor would apply. Instead, use
`gdk_window_set_opaque_region (window, NULL)` to tell the compositor
that the entire window is (potentially) non-opaque, and draw your content
with alpha, or use `gtk_widget_set_opacity` to set an overall opacity
for your widgets.

For child windows this function only works for non-native windows.

For setting up per-pixel alpha topelevels, see `Screen::get_rgba_visual`,
and for non-toplevels, see `WindowExt::set_composited`.

Support for non-toplevel windows was added in 3.8.
## `opacity`
opacity
<!-- trait WindowExt::fn set_opaque_region -->
For optimisation purposes, compositing window managers may
like to not draw obscured regions of windows, or turn off blending
during for these regions. With RGB windows with no transparency,
this is just the shape of the window, but with ARGB32 windows, the
compositor does not know what regions of the window are transparent
or not.

This function only works for toplevel windows.

GTK+ will update this property automatically if
the `self` background is opaque, as we know where the opaque regions
are. If your window background is not opaque, please update this
property in your ``GtkWidget`::style-updated` handler.
## `region`
a region, or `None`
<!-- trait WindowExt::fn set_override_redirect -->
An override redirect window is not under the control of the window manager.
This means it won’t have a titlebar, won’t be minimizable, etc. - it will
be entirely under the control of the application. The window manager
can’t see the override redirect window at all.

Override redirect should only be used for short-lived temporary
windows, such as popup menus. ``GtkMenu`` uses an override redirect
window in its implementation, for example.
## `override_redirect`
`true` if window should be override redirect
<!-- trait WindowExt::fn set_pass_through -->
Sets whether input to the window is passed through to the window
below.

The default value of this is `false`, which means that pointer
events that happen inside the window are send first to the window,
but if the event is not selected by the event mask then the event
is sent to the parent window, and so on up the hierarchy.

If `pass_through` is `true` then such pointer events happen as if the
window wasn't there at all, and thus will be sent first to any
windows below `self`. This is useful if the window is used in a
transparent fashion. In the terminology of the web this would be called
"pointer-events: none".

Note that a window with `pass_through` `true` can still have a subwindow
without pass through, so you can get events on a subset of a window. And in
that cases you would get the in-between related events such as the pointer
enter/leave events on its way to the destination window.

Feature: `v3_18`

## `pass_through`
a boolean
<!-- trait WindowExt::fn set_role -->
When using GTK+, typically you should use `gtk_window_set_role` instead
of this low-level function.

The window manager and session manager use a window’s role to
distinguish it from other kinds of window in the same application.
When an application is restarted after being saved in a previous
session, all windows with the same title and role are treated as
interchangeable. So if you have two windows with the same title
that should be distinguished for session management purposes, you
should set the role on those windows. It doesn’t matter what string
you use for the role, as long as you have a different role for each
non-interchangeable kind of window.
## `role`
a string indicating its role
<!-- trait WindowExt::fn set_shadow_width -->
Newer GTK+ windows using client-side decorations use extra geometry
around their frames for effects like shadows and invisible borders.
Window managers that want to maximize windows or snap to edges need
to know where the extents of the actual frame lie, so that users
don’t feel like windows are snapping against random invisible edges.

Note that this property is automatically updated by GTK+, so this
function should only be used by applications which do not use GTK+
to create toplevel windows.
## `left`
The left extent
## `right`
The right extent
## `top`
The top extent
## `bottom`
The bottom extent
<!-- trait WindowExt::fn set_skip_pager_hint -->
Toggles whether a window should appear in a pager (workspace
switcher, or other desktop utility program that displays a small
thumbnail representation of the windows on the desktop). If a
window’s semantic type as specified with `WindowExt::set_type_hint`
already fully describes the window, this function should
not be called in addition, instead you should
allow the window to be treated according to standard policy for
its semantic type.
## `skips_pager`
`true` to skip the pager
<!-- trait WindowExt::fn set_skip_taskbar_hint -->
Toggles whether a window should appear in a task list or window
list. If a window’s semantic type as specified with
`WindowExt::set_type_hint` already fully describes the window, this
function should not be called in addition,
instead you should allow the window to be treated according to
standard policy for its semantic type.
## `skips_taskbar`
`true` to skip the taskbar
<!-- trait WindowExt::fn set_source_events -->
Sets the event mask for any floating device (i.e. not attached to any
visible pointer) that has the source defined as `source`. This event
mask will be applied both to currently existing, newly added devices
after this call, and devices being attached/detached.
## `source`
a `InputSource` to define the source class.
## `event_mask`
event mask for `self`
<!-- trait WindowExt::fn set_startup_id -->
When using GTK+, typically you should use `gtk_window_set_startup_id`
instead of this low-level function.
## `startup_id`
a string with startup-notification identifier
<!-- trait WindowExt::fn set_static_gravities -->
Used to set the bit gravity of the given window to static, and flag
it so all children get static subwindow gravity. This is used if you
are implementing scary features that involve deep knowledge of the
windowing system. Don’t worry about it.

# Deprecated since 3.16

static gravities haven't worked on anything but X11
 for a long time.
## `use_static`
`true` to turn on static gravity

# Returns

`false`
<!-- trait WindowExt::fn set_support_multidevice -->
This function will enable multidevice features in `self`.

Multidevice aware windows will need to handle properly multiple,
per device enter/leave events, device grabs and grab ownerships.
## `support_multidevice`
`true` to enable multidevice support in `self`.
<!-- trait WindowExt::fn set_title -->
Sets the title of a toplevel window, to be displayed in the titlebar.
If you haven’t explicitly set the icon name for the window
(using `WindowExt::set_icon_name`), the icon name will be set to
`title` as well. `title` must be in UTF-8 encoding (as with all
user-readable strings in GDK/GTK+). `title` may not be `None`.
## `title`
title of `self`
<!-- trait WindowExt::fn set_transient_for -->
Indicates to the window manager that `self` is a transient dialog
associated with the application window `parent`. This allows the
window manager to do things like center `self` on `parent` and
keep `self` above `parent`.

See `gtk_window_set_transient_for` if you’re using ``GtkWindow`` or
``GtkDialog``.
## `parent`
another toplevel `Window`
<!-- trait WindowExt::fn set_type_hint -->
The application can use this call to provide a hint to the window
manager about the functionality of a window. The window manager
can use this information when determining the decoration and behaviour
of the window.

The hint must be set before the window is mapped.
## `hint`
A hint of the function this window will have
<!-- trait WindowExt::fn set_urgency_hint -->
Toggles whether a window needs the user's
urgent attention.
## `urgent`
`true` if the window is urgent
<!-- trait WindowExt::fn set_user_data -->
For most purposes this function is deprecated in favor of
`gobject::Object::set_data`. However, for historical reasons GTK+ stores
the ``GtkWidget`` that owns a `Window` as user data on the
`Window`. So, custom widget implementations should use
this function for that. If GTK+ receives an event for a `Window`,
and the user data for the window is non-`None`, GTK+ will assume the
user data is a ``GtkWidget``, and forward the event to that widget.
## `user_data`
user data
<!-- trait WindowExt::fn shape_combine_region -->
Makes pixels in `self` outside `shape_region` be transparent,
so that the window may be nonrectangular.

If `shape_region` is `None`, the shape will be unset, so the whole
window will be opaque again. `offset_x` and `offset_y` are ignored
if `shape_region` is `None`.

On the X11 platform, this uses an X server extension which is
widely available on most common platforms, but not available on
very old X servers, and occasionally the implementation will be
buggy. On servers without the shape extension, this function
will do nothing.

This function works on both toplevel and child windows.
## `shape_region`
region of window to be non-transparent
## `offset_x`
X position of `shape_region` in `self` coordinates
## `offset_y`
Y position of `shape_region` in `self` coordinates
<!-- trait WindowExt::fn show -->
Like `WindowExt::show_unraised`, but also raises the window to the
top of the window stack (moves the window to the front of the
Z-order).

This function maps a window so it’s visible onscreen. Its opposite
is `WindowExt::hide`.

When implementing a ``GtkWidget``, you should call this function on the widget's
`Window` as part of the “map” method.
<!-- trait WindowExt::fn show_unraised -->
Shows a `Window` onscreen, but does not modify its stacking
order. In contrast, `WindowExt::show` will raise the window
to the top of the window stack.

On the X11 platform, in Xlib terms, this function calls
XMapWindow() (it also updates some internal GDK state, which means
that you can’t really use XMapWindow() directly on a GDK window).
<!-- trait WindowExt::fn show_window_menu -->
Asks the windowing system to show the window menu. The window menu
is the menu shown when right-clicking the titlebar on traditional
windows managed by the window manager. This is useful for windows
using client-side decorations, activating it with a right-click
on the window decorations.
## `event`
a ``GdkEvent`` to show the menu for

# Returns

`true` if the window menu was shown and `false` otherwise.
<!-- trait WindowExt::fn stick -->
“Pins” a window such that it’s on all workspaces and does not scroll
with viewports, for window managers that have scrollable viewports.
(When using ``GtkWindow``, `gtk_window_stick` may be more useful.)

On the X11 platform, this function depends on window manager
support, so may have no effect with many window managers. However,
GDK will do the best it can to convince the window manager to stick
the window. For window managers that don’t support this operation,
there’s nothing you can do to force it to happen.
<!-- trait WindowExt::fn thaw_toplevel_updates_libgtk_only -->
Thaws a window frozen with
`WindowExt::freeze_toplevel_updates_libgtk_only`.

This function is not part of the GDK public API and is only
for use by GTK+.

# Deprecated since 3.16

This symbol was never meant to be used outside of GTK+
<!-- trait WindowExt::fn thaw_updates -->
Thaws a window frozen with `WindowExt::freeze_updates`.
<!-- trait WindowExt::fn unfullscreen -->
Moves the window out of fullscreen mode. If the window was not
fullscreen, does nothing.

On X11, asks the window manager to move `self` out of the fullscreen
state, if the window manager supports this operation. Not all
window managers support this, and some deliberately ignore it or
don’t have a concept of “fullscreen”; so you can’t rely on the
unfullscreenification actually happening. But it will happen with
most standard window managers, and GDK makes a best effort to get
it to happen.
<!-- trait WindowExt::fn unmaximize -->
Unmaximizes the window. If the window wasn’t maximized, then this
function does nothing.

On X11, asks the window manager to unmaximize `self`, if the
window manager supports this operation. Not all window managers
support this, and some deliberately ignore it or don’t have a
concept of “maximized”; so you can’t rely on the unmaximization
actually happening. But it will happen with most standard window
managers, and GDK makes a best effort to get it to happen.

On Windows, reliably unmaximizes the window.
<!-- trait WindowExt::fn unstick -->
Reverse operation for `WindowExt::stick`; see `WindowExt::stick`,
and `gtk_window_unstick`.
<!-- trait WindowExt::fn withdraw -->
Withdraws a window (unmaps it and asks the window manager to forget about it).
This function is not really useful as `WindowExt::hide` automatically
withdraws toplevel windows before hiding them.
<!-- trait WindowExt::fn connect_create_surface -->
The ::create-surface signal is emitted when an offscreen window
needs its surface (re)created, which happens either when the
window is first drawn to, or when the window is being
resized. The first signal handler that returns a non-`None`
surface will stop any further signal emission, and its surface
will be used.

Note that it is not possible to access the window's previous
surface from within any callback of this signal. Calling
`gdk_offscreen_window_get_surface` will lead to a crash.
## `width`
the width of the offscreen surface to create
## `height`
the height of the offscreen surface to create

# Returns

the newly created `cairo::Surface` for the offscreen window
<!-- trait WindowExt::fn connect_from_embedder -->
The ::from-embedder signal is emitted to translate coordinates
in the embedder of an offscreen window to the offscreen window.

See also `Window::to-embedder`.
## `embedder_x`
x coordinate in the embedder window
## `embedder_y`
y coordinate in the embedder window
## `offscreen_x`
return location for the x
 coordinate in the offscreen window
## `offscreen_y`
return location for the y
 coordinate in the offscreen window
<!-- trait WindowExt::fn connect_moved_to_rect -->
Emitted when the position of `window` is finalized after being moved to a
destination rectangle.

`window` might be flipped over the destination rectangle in order to keep
it on-screen, in which case `flipped_x` and `flipped_y` will be set to `true`
accordingly.

`flipped_rect` is the ideal position of `window` after any possible
flipping, but before any possible sliding. `final_rect` is `flipped_rect`,
but possibly translated in the case that flipping is still ineffective in
keeping `window` on-screen.

Feature: `v3_22`

## `flipped_rect`
the position of `window` after any possible
 flipping or `None` if the backend can't obtain it
## `final_rect`
the final position of `window` or `None` if the
 backend can't obtain it
## `flipped_x`
`true` if the anchors were flipped horizontally
## `flipped_y`
`true` if the anchors were flipped vertically
<!-- trait WindowExt::fn connect_pick_embedded_child -->
The ::pick-embedded-child signal is emitted to find an embedded
child at the given position.
## `x`
x coordinate in the window
## `y`
y coordinate in the window

# Returns

the `Window` of the
 embedded child at `x`, `y`, or `None`
<!-- trait WindowExt::fn connect_to_embedder -->
The ::to-embedder signal is emitted to translate coordinates
in an offscreen window to its embedder.

See also `Window::from-embedder`.
## `offscreen_x`
x coordinate in the offscreen window
## `offscreen_y`
y coordinate in the offscreen window
## `embedder_x`
return location for the x
 coordinate in the embedder window
## `embedder_y`
return location for the y
 coordinate in the embedder window
<!-- trait WindowExt::fn get_property_cursor -->
The mouse pointer for a `Window`. See `WindowExt::set_cursor` and
`WindowExt::get_cursor` for details.
<!-- trait WindowExt::fn set_property_cursor -->
The mouse pointer for a `Window`. See `WindowExt::set_cursor` and
`WindowExt::get_cursor` for details.
<!-- enum WindowEdge -->
Determines a window edge or corner.
<!-- enum WindowEdge::variant NorthWest -->
the top left corner.
<!-- enum WindowEdge::variant North -->
the top edge.
<!-- enum WindowEdge::variant NorthEast -->
the top right corner.
<!-- enum WindowEdge::variant West -->
the left edge.
<!-- enum WindowEdge::variant East -->
the right edge.
<!-- enum WindowEdge::variant SouthWest -->
the lower left corner.
<!-- enum WindowEdge::variant South -->
the lower edge.
<!-- enum WindowEdge::variant SouthEast -->
the lower right corner.
<!-- enum WindowType -->
Describes the kind of window.
<!-- enum WindowType::variant Root -->
root window; this window has no parent, covers the entire
 screen, and is created by the window system
<!-- enum WindowType::variant Toplevel -->
toplevel window (used to implement ``GtkWindow``)
<!-- enum WindowType::variant Child -->
child window (used to implement e.g. ``GtkEntry``)
<!-- enum WindowType::variant Temp -->
override redirect temporary window (used to implement
 ``GtkMenu``)
<!-- enum WindowType::variant Foreign -->
foreign window (see `gdk_window_foreign_new`)
<!-- enum WindowType::variant Offscreen -->
offscreen window (see
 [Offscreen Windows][OFFSCREEN-WINDOWS]). Since 2.18
<!-- enum WindowType::variant Subsurface -->
subsurface-based window; This window is visually
 tied to a toplevel, and is moved/stacked with it. Currently this window
 type is only implemented in Wayland. Since 3.14
<!-- enum WindowTypeHint -->
These are hints for the window manager that indicate what type of function
the window has. The window manager can use this when determining decoration
and behaviour of the window. The hint must be set before mapping the window.

See the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
specification for more details about window types.
<!-- enum WindowTypeHint::variant Normal -->
Normal toplevel window.
<!-- enum WindowTypeHint::variant Dialog -->
Dialog window.
<!-- enum WindowTypeHint::variant Menu -->
Window used to implement a menu; GTK+ uses
 this hint only for torn-off menus, see ``GtkTearoffMenuItem``.
<!-- enum WindowTypeHint::variant Toolbar -->
Window used to implement toolbars.
<!-- enum WindowTypeHint::variant Splashscreen -->
Window used to display a splash
 screen during application startup.
<!-- enum WindowTypeHint::variant Utility -->
Utility windows which are not detached
 toolbars or dialogs.
<!-- enum WindowTypeHint::variant Dock -->
Used for creating dock or panel windows.
<!-- enum WindowTypeHint::variant Desktop -->
Used for creating the desktop background
 window.
<!-- enum WindowTypeHint::variant DropdownMenu -->
A menu that belongs to a menubar.
<!-- enum WindowTypeHint::variant PopupMenu -->
A menu that does not belong to a menubar,
 e.g. a context menu.
<!-- enum WindowTypeHint::variant Tooltip -->
A tooltip.
<!-- enum WindowTypeHint::variant Notification -->
A notification - typically a “bubble”
 that belongs to a status icon.
<!-- enum WindowTypeHint::variant Combo -->
A popup from a combo box.
<!-- enum WindowTypeHint::variant Dnd -->
A window that is used to implement a DND cursor.
<!-- enum WindowWindowClass -->
`WindowWindowClass::InputOutput` windows are the standard kind of window you might expect.
Such windows receive events and are also displayed on screen.
`WindowWindowClass::InputOnly` windows are invisible; they are usually placed above other
windows in order to trap or filter the events. You can’t draw on
`WindowWindowClass::InputOnly` windows.
<!-- enum WindowWindowClass::variant InputOutput -->
window for graphics and events
<!-- enum WindowWindowClass::variant InputOnly -->
window for events only
