var el = wp.element.createElement;

wp.blocks.registerBlockType('gutenberg-block/colorizer-block', {
    title: 'Colorizer', // Gutenberg block name
    icon: 'dashicons dashicons-info', // Toolbar icon visible to user
    category: 'common', // Category under our block will render
    attributes: { // Data stored by our block
        type: { type: 'string', primary: 'primary' }, // Different types of colorizer boxes
        title: { type: 'string' }, // Title of Colorizer Box
        content: { type: 'array', source: 'children', selector: 'p' } /// Content of the colorizer box in paragraph html tag
    },
    edit: function(props) {

        // Blocks rendering in editor mode
        function updateTitle(event) {
            props.setAttributes({ title: event.target.value });
        }

        function updateContent(newdata) {
            props.setAttributes({ content: newdata });
        }

        function updateType(newdata) {
            props.setAttributes({ type: event.target.value });
        }

        return el('div', {
                className: 'colorizer-box colorizer-' + props.attributes.type
            },
            el(
                'select', {
                    onChange: updateType,
                    value: props.attributes.type,
                },
                el("option", { value: "primary" }, "Primary"),
                el("option", { value: "success" }, "Success"),
                el("option", { value: "information" }, "Information"),
                el("option", { value: "warning" }, "Warning"),
                el("option", { value: "danger" }, "Danger")
            ),
            el(
                'input', {
                    type: 'text',
                    placeholder: 'Enter title here..',
                    value: props.attributes.title,
                    onChange: updateTitle,
                    style: { width: '100%' }
                }
            ),
            el(
                wp.editor.RichText, {
                    tagName: 'p',
                    onChange: updateContent,
                    value: props.attributes.content,
                    placeholder: 'Enter description here..'
                }
            )

        );

    },
    save: function(props) {
            // Function to save the content to show on render page

            return el('div', {
                    className: 'colorizer-box colorizer-' + props.attributes.type
                },
                el(
                    'h4',
                    className = props.attributes.type,
                    null,
                    props.attributes.title
                ),
                el(wp.editor.RichText.Content, {
                    tagName: 'p',
                    value: props.attributes.content
                })

            );

        }
});