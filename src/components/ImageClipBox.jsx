const ImageClipBox = ({clipClass, src, alt}) => {
    return (
        <div className={clipClass}>
            <img src={src} alt={alt}/>
        </div>
    );
};

export default ImageClipBox;