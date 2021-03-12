export default function Upload() {
    const uploadPhoto = async (e) => {
        try {
            const file = e.target.files[0];
            const filename = encodeURIComponent(file.name);
            const res = await fetch(`/api/upload-url?file=${filename}`);
            if (res.status == '406') {
                throw new Error('Invalid file format. .png or .jpg only')
            }

            const { url, fields } = await res.json();
            const formData = new FormData();

            Object.entries({ ...fields, file }).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const upload = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (upload.status == 400) {
                console.log('File upload is too big.');
            } else if (!upload.ok){
                console.log(upload);
                console.error('Something went wrong with the upload, but the case hasnt been documented.');
            } else {
                console.log('Uploaded successfully!');
            }
        }
        catch (e) {
            return console.error(e);
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