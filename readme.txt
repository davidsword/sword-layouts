=== Gutenberg Tile Block ===
Contributors:      davidsword
Donate link:       https://davidsword.ca/🍺/
Tags:              Gutenberg, Blocks, Layouts, Modern, Page Builder, Design
Requires at least: 4.9.5
Tested up to:      4.9.8
Stable tag:        1.0.7
Requires PHP:      5.6.0

Tile block for Gutenberg that help create more interesting and modern WordPress pages.

== Description ==

Layout blocks for **[Gutenberg](https://wordpress.org/plugins/gutenberg/)** that create more interesting and modern page designs.

* Stagger small blurbs of text along side beautiful images
* Creates a "magazine" style to your webpage
* Fully responsive

= Please Note =

* 🚀 This is a beta plugin for the beta plugin [Gutenberg](https://wordpress.org/plugins/gutenberg/) - things will be rocky.
* 🚧 This is a WIP, more layouts will be added and the plugin name will change to "Sword Layouts"
* ⚠️ Please [open a support request](https://wordpress.org/support/plugin/sword-layouts) [or add as an issue on Github](https://github.com/davidsword/sword-layouts/issues) before summiting a negative review, *I'm happy to help,* please provide as much information as possible (screen recordings, WordPress and PHP versions, able-to-replicate instructions).

= Big shouts to =

 - 🙏 [@ahmadawais](https://github.com/ahmadawais/create-guten-block) for the create-guten-block foundation
 - 🙏 [@zgordon](https://gutenberg.courses/development/) for the teaching


---


== Installation ==

 - from your Plugin browser on your site, or
 - download the plugin and extract the files and upload `sword-layouts` to your `/wp-content/plugins/` directory
 - Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= Where can I find the block? =

Within the Gutenberg editor, + Add Block > Layouts > Tile

= Why is there space between the blocks in the editor but not the front end? =

Blocks need some padding in the editor for usability. The front end blocks will touch, creating the seamless Tile design.

= How do I get the image on the left, and the text on the right? =

Select the block.

The right hand side of the editor should be the Settings pane. If it's not present, hit the cog (gear wheel) in the top right to toggle view.

There's tabs for "Document" and "Block", click the latter.

Turn "Invert Layout" on.


== Screenshots ==

1. Tile - frontend
2. Tile - within Gutenberg

== Changelog ==

= 1.0.7 =
* Sep 8, 2018
* Fixed issue with obnoxious padding on Media Upload placeholder
* Added blank index.php files in dirs for security

= 1.0.6 =
* Sep 8, 2018
* Changed icon to a new custom one
* Added spacing padding settings
* fixed alignment of toolbar, above text regardless of invert
* changed use of button to buttonIcon
* changed custom upload button to Placeholder component
* added text and background colors
* added padding and width range controls
* removed dashicons

= 1.0.5 =
* Aug 14, 2018
* Updated for Gutenberg 3.5
* Renamed plugin for easier search keywords

= 1.0.4 =
* Jul 2, 2018
* updated code for Gutenberg 3.1.1
* changed some wp.blocks.* to wp.editor.*

= 1.0.3 =
* May 18, 2018
* code updates to work with Gutenberg 2.8.0
* changed CSS from grid to flexbox
* reduced screenshots

= 1.0.2 =
* Feb 20, 2018
* minor fixes to CSS grid (for better browser support)
* more readme changes

= 1.0.1 =
* Feb 19, 2018
* readme fixes, minor changes to block name

= 1.0.0 =
* Feb 17, 2018
* Initial release

== Upgrade Notice ==

= 1.0.4 =

* blue skys

= 1.0.1 =

* blue skys

= 1.0.0 =

* blue skys

== Additional Notes ==

* 👨🏻‍💻 Please visit [Github](https://github.com/davidsword/sword-layouts/) for build files and full documentation
* 🤓 If you have any additional requests into [the Support tab](https://wordpress.org/support/plugin/sword-layouts).

=== @TODO ===

 - [] focus on AlignmentToolbar only when in RichText, not the entire block
