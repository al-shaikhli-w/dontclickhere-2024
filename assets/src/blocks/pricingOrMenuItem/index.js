import { registerBlockType } from "@wordpress/blocks"
import metadata from "./block.json"
import icons from "../icons"
import Edit from "./edit"


registerBlockType(metadata.name, {
  icon: icons.menuItem,
  edit: Edit,
})
