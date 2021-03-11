export default function Upload() {
    const uploadPhoto = async (e) => {
        try {
            const file = e.target.files[0]; // file will become a simple file DOM object
            const filename = encodeURIComponent(file.name); // file name becomes URI friendly
            const res = await fetch(`/api/upload-url?file=${filename}`); // sends the filename to the back end, with a URL parameter being the file name
            const { url, fields } = await res.json();
            const formData = new FormData();

            Object.entries({ ...fields, file }).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const upload = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (upload.ok) {
                console.log('Uploaded successfully!');
            } else {
                console.error('Upload failed.');
            }
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <p>Upload a .png or .jpg image (max 1MB).</p>
            <input
                onChange={uploadPhoto}
                type="file"
                accept="image/png, image/jpeg"
            />
        </>
    );
}