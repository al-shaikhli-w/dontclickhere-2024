

import {  useBlockProps, InnerBlocks } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import metadata from "./block.json";
import icons from "../icons";

registerBlockType(metadata.name, {
  icon: icons.galleryshow,
  edit: Edit,
  save: function () {
    return <InnerBlocks.Content />
  }
})


function Edit() {
  const blockProps = useBlockProps()

  return (
    <div {...blockProps}>
      <div className="galleryshow">
        <p style={{ textAlign: "center", fontSize: "20px", color: "#FFF" }}>Gallery Show</p>
        <InnerBlocks allowedBlocks={["dch-block/gallery"]} className="waleed2" />
      </div>
    </div>
  )
}