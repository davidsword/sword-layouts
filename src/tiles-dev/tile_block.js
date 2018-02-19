const {__} = wp.i18n;
const {registerBlockType, Editable} = wp.blocks;
export default registerBlockType('jsforwp/editable', {
	title: __('🔥Example - Editable'),
	category: 'common',
	keywords: [],
	attributes: {
		message: {
			type: 'array',
			source: 'children',
			selector: '.message-body'
		}
	},
	edit: props => {
		return (
			<div className={props.className}>
				<Editable
					tagName="div"
					placeholder={__('Add your custom message')}
					value={props.attributes.message}
					focus={props.focus}
				/>
			</div>
		);
	},
	save: props => {
		return (<div></div>);
	}
},);
