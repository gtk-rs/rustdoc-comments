<!-- file * -->
<!-- struct ImageMenuItem -->
`[Deprecated since 3.10]` A `ImageMenuItem` is a menu item which has an icon next to the text label.

So before you did like this with ImageMenuItem:

```Rust
  let file_entry = ImageMenuItem::new_with_label("File");
  let file_image = Image::new_from_file("some_image.png");

  file_entry.set_image(Some(&file_image));
  // And now you append this ImageMenuItem into a Menu:
  let menu = Menu::new();
  menu.append(&file_entry);
```

And since Gtk 3.10 you do like this:

```Rust
  let file_entry = MenuItem::new();
  let file_box = gtk::Box::new(gtk::Orientation::Horizontal, 0);
  let file_image = Image::new_from_file("some_image.png");
  let file_label = Label::new(Some("File"));


  file_box.pack_start(&file_image, false, false, 0);
  file_box.pack_start(&file_label, true, true, 0);
  file_entry.add(&file_box);

  // And now you can just append this MenuItem into a Menu:
  let menu = Menu::new();
  menu.append(&file_entry);
```

Note that the user may disable display of menu icons using
the `Settings:gtk-menu-images` setting, so make sure to still
fill in the text label. If you want to ensure that your menu items
show an icon you are strongly encouraged to use a `MenuItem`
with a `Image` instead.

`ImageMenuItem` has been deprecated since GTK+ 3.10. If you want to
display an icon in a menu item, you should use `MenuItem` and pack a
`Box` with a `Image` and a `Label` instead. You should also consider
using `Builder` and the XML `gio::Menu` description for creating menus, by
following the [GMenu guide][https://developer.gnome.org/GMenu/]. You should
consider using icons in menu items only sparingly, and for "objects" (or
"nouns") elements only, like bookmarks, files, and links; "actions" (or
"verbs") should not have icons.

# Implements

[`MenuItemExt`](trait.MenuItemExt.html), [`BinExt`](trait.BinExt.html), [`ContainerExt`](trait.ContainerExt.html), [`WidgetExt`](trait.WidgetExt.html), [`ObjectExt`](trait.ObjectExt.html), [`ActionableExt`](trait.ActionableExt.html)
