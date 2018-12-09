/**
 * Tile Layout
 *
 * @package: Sword Layouts
 */

/* eslint-disable react/jsx-key */

import './style.scss';
import './editor.scss';
import icon from './icon.js';

const { __ } = wp.i18n;
const {
	BlockControls,
	InspectorControls,
	MediaUpload,
	MediaPlaceholder,
	RichText,
	PanelColorSettings,
	getColorClassName,
	AlignmentToolbar,
	BlockAlignmentToolbar,
} = wp.editor;
const {
	registerBlockType,
} = wp.blocks;
const {
	ToggleControl,
	RangeControl,
	IconButton,
	PanelBody,
	Toolbar,
} = wp.components;

registerBlockType( 'swrdlyts/tile', {
	title: __( 'Tile Layout' ),
	description: __( 'Creates two columns, half image, half padded text. Use multiple, invert to tile.' ),
	icon,
	category: 'layout',
	keywords: [ __( 'tile' ), __( 'stagger' ), __( 'image' ) ],
	attributes: {
		imgURL: {
			type: 'string',
			source: 'attribute',
			selector: '.imageBox',
			attribute: 'data-imgurl',
			default: '',
		},
		imgID: {
			type: 'number',
			default: '',
		},
		content: {
			type: 'array',
			source: 'children',
			selector: '.textBoxContent',
			default: '',
		},
		invert: {
			type: 'boolean',
			default: false,
		},
		backgroundColor: {
			type: 'string',
			default: 'rgba(0,0,0,0)',
		},
		textColor: {
			type: 'string',
			default: '',
		},
		paddingTB: {
			type: 'string',
			default: '65',
		},
		width: {
			type: 'string',
			default: '80',
		},
		alignment: {
			type: 'string',
		},
		blockalignment: {
			type: 'string',
		},
	},
	getEditWrapperProps( attributes ) {
		const moveToolBar = attributes.invert ? 'false' : 'true';
		return {
			'data-align': attributes.blockalignment,
			'data-move-toolbar-right': moveToolBar,
		};
	},
	/**
	 * EDIT BLOCK
	 */
	edit( { attributes, setAttributes, className, isSelected } ) {
		const onChangeContent = value => {
			setAttributes( { content: value } );
		};
		const togglePosition = () => {
			setAttributes( { invert: ! attributes.invert } );
		};
		const onSelectImage = img => {
			setAttributes( {
				imgID: img.id,
				imgURL: img.url,
			} );
		};
		const onChangeAlignment = value => {
			setAttributes( { alignment: value } );
		};
		const onChangeBlockAlignment = value => {
			setAttributes( { blockalignment: value } );
		};
		const buttonText = ( ! attributes.imgID ) ? 'Select Image' : 'Change Image';
		const buttonIcon = ( ! attributes.imgID ) ? 'add' : 'edit';

		const textColor = getColorClassName( 'color', attributes.textColor );

		return [
			!! isSelected && (
				<InspectorControls key="inspector">
					<PanelBody>
						<ToggleControl
							id="invert-form-toggle"
							label={ __( 'Invert Layout' ) }
							checked={ !! attributes.invert }
							onChange={ togglePosition }
						/>
						<RangeControl
							label={ __( 'Padding: Top Bottom' ) }
							value={ attributes.paddingTB }
							onChange={ ( value ) => setAttributes( { paddingTB: value } ) }
							min={ 20 }
							max={ 150 }
							step={ 5 }
						/>
						<RangeControl
							label={ __( 'Width Text Content' ) }
							value={ attributes.width }
							onChange={ ( value ) => setAttributes( { width: value } ) }
							min={ 50 }
							max={ 90 }
							step={ 2 }
						/>

						<PanelColorSettings
							title={ __( 'Background Color' ) }
							colorValue={ attributes.backgroundColor }
							initialOpen={ false }
							colorSettings={ [ {
								value: attributes.backgroundColor,
								onChange: ( value ) => {
									setAttributes( { backgroundColor: value } );
								},
								label: __( 'Background Color' ),
							} ] }
						/>

						<PanelColorSettings
							title={ __( 'Text Color' ) }
							colorValue={ attributes.textColor }
							initialOpen={ false }
							colorSettings={ [ {
								value: attributes.textColor,
								onChange: ( value ) => {
									setAttributes( { textColor: value } );
								},
								label: __('Text Color'),
							} ] }
						/>
					</PanelBody>
				</InspectorControls>
			), (
				<div
					className = {
						`align${attributes.blockalignment ? attributes.blockalignment : ''} ${className ? className : ''}`
					}
					data-invert={ attributes.invert ? 'true' : 'false' }
					data-paddingTB={ attributes.paddingTB }
					data-width={ attributes.width }
					style={ {
						backgroundColor: attributes.backgroundColor,
					} }
				>
					<div
						className="imageBox"
						style={ { backgroundImage: 'url(' + attributes.imgURL + ')' } }
						data-imgurl={ attributes.imgURL }
						data-imgid={ attributes.imgID }
						data-hasimg={ !! attributes.imgID ? 'true' : 'false' }
					>
						{
							! attributes.imgID && (
								<MediaPlaceholder
									icon="format-gallery"
									className={ className }
									labels={ {
										title: __( 'Tile Image' ),
										name: __( '' ),
									} }
									onSelect={ onSelectImage }
									accept="image/*"
									type="image"
								/>
							)
						}
					</div>
					<div className="textBox">
						{
							!! isSelected && (
								<BlockControls key="controls">
									<AlignmentToolbar
										value={ attributes.alignment }
										onChange={ onChangeAlignment }
									/>
									<BlockAlignmentToolbar
										value={ attributes.alignment }
										onChange={ onChangeBlockAlignment }
										controls={ [ 'wide', 'full' ] }
									/>
									<Toolbar>
										{
											attributes.imgID && (
												<MediaUpload
													onSelect={ onSelectImage }
													type="image"
													value={ attributes.imgID }
													render={ ( { open } ) => (
														<IconButton
															label={ buttonText }
															icon={ buttonIcon }
															onClick={ open }
														/>
													) }
												/>
											)
										}
									</Toolbar>
								</BlockControls>
							)
						}
						<RichText
							tagname="div"
							multiline="p"
							placeholder="...."
							className = {
								`textBoxContent ${textColor ? textColor : ''}`
							}
							style={ {
								textAlign: attributes.alignment,
								color: attributes.textColor,
								padding: attributes.paddingTB + 'px 0',
								width: attributes.width + '%',
							} }
							value={ attributes.content }
							onChange={ onChangeContent }
							isSelected={ isSelected }
						/>
					</div>
				</div>
			),
		];
	},
	/**
	 * SAVE BLOCK
	 */
	save: function( props ) {
		const textColor = getColorClassName( 'color', props.attributes.textColor );
		return (
			<div
				className = {
					`align${props.attributes.blockalignment ? props.attributes.blockalignment : ''} ${props.className ? props.className : ''}`
				}
				data-invert={ props.attributes.invert }
				data-paddingTB={ props.attributes.paddingTB }
				data-width={ props.attributes.width }
				style={ {
					backgroundColor: props.attributes.backgroundColor,
				} }
			>
				<div
					className="imageBox"
					data-imgurl={ props.attributes.imgURL }
					data-imgid={ props.attributes.imgID }
					style={ { backgroundImage: 'url(' + props.attributes.imgURL + ')' } }
				></div>
				<div className="textBox">
					<div
						className = {
							`textBoxContent ${textColor ? textColor : ''}`
						}
						style={ {
							textAlign: props.attributes.alignment,
							color: props.attributes.textColor,
							padding: props.attributes.paddingTB + 'px 0',
							width: props.attributes.width + '%',
						} }
					>
						{ props.attributes.content }
					</div>
				</div>
			</div>
		);
	},
} );
