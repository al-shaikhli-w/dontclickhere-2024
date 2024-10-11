import {  useBlockProps, InnerBlocks } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import metadata from "./block.json"

registerBlockType(metadata.name, {
  edit: Edit,
  save: function () {
    return <InnerBlocks.Content />
  }
})


function Edit() {
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      <div style={{ backgroundColor: "#333", padding: "35px" }}>
        <p style={{ textAlign: "center", fontSize: "20px", color: "#FFF" }}>Slideshow</p>
        <InnerBlocks allowedBlocks={["dch-block/slide"]} />
      </div>
    </div>
  )
}