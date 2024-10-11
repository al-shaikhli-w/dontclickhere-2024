import { useBlockProps } from "@wordpress/block-editor";

export default function Edit(props) {
    const blockProps = useBlockProps();


    return (
        <div {...blockProps}>
            <p className="container bg-primary text-lg uppercase text-center !p-8 !m-8 text-white">
                Calorie Calculator Block
            </p>
        </div>
    );
}
