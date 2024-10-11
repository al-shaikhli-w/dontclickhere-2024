import { useBlockProps, InspectorControls, InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { PanelBody, PanelRow, CheckboxControl } from "@wordpress/components";
import metadata from "./block.json";
import icons from "../icons";

registerBlockType(metadata.name, {
  icon: icons.galleryshow,
  edit: Edit,
  save: function (props) {
    return <InnerBlocks.Content />;
  }
});

function Edit({ attributes, setAttributes } ) {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="Fancy Slider settings" initialOpen={true}>
          <PanelRow>
            <CheckboxControl
              label="Slide Image Has Product to Show"
              checked={attributes.sliderHasproduct}
              onChange={(sliderHasproduct) => setAttributes({ sliderHasproduct })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="fancy-slider-show">
        <p style={{ textAlign: "center", fontSize: "20px", color: "#FFF" }}>Fancy Slider show</p>
        <InnerBlocks allowedBlocks={["dch-block/fancy-slider"]} />
      </div>
    </div>
  );
}
