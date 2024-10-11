import { InnerBlocks } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import metadata from "./block.json"
import Edit from "./edit"
import icons from "../icons"

registerBlockType(metadata.name, {
  icon: icons.gallery,
  edit: Edit,
  save: function () {
    return <InnerBlocks.Content />
  }
})
