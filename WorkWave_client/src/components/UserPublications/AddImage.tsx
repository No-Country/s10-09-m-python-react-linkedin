import { useState } from "react";

function AddImage() {
  const [filebase64, setFileBase64] = useState<string>("");

  function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      if (!fileType) setFileBase64("");
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  }
  function formSubmit(e: any) {
    e.preventDefault();
    // Submit your form with the filebase64 as
    // one of your fields
    console.log({ filebase64 });
    alert(
      "here you'd submit the form using\n the filebase64 like any other field"
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        Choose an image to to upload
        <form
          onSubmit={formSubmit}
          className="flex flex-col justify-center items-center border-2 border-dashed h-[300px] "
        >
          <input
            type="file"
            className="w-full h-full"
            onChange={(e) => convertFile(e.target.files)}
          />
          <hr />
          {filebase64 && (
            <>
              {/* if it's an image */}
              {/* if it's an image */}
              {/* if it's an image */}
              {filebase64.indexOf("image/") > -1 && (
                <img src={filebase64} className="object-cover h-60" />
              )}
              {/* if it's an image */}
              {/* if it's an image */}
              {/* if it's an image */}

              {/* if it's a video */}
              {/* if it's a video */}
              {/* if it's a video */}
              {filebase64.indexOf("video/") > -1 && (
                <video controls>
                  <source src={filebase64} />
                </video>
              )}
              {/* if it's a video */}
              {/* if it's a video */}
              {/* if it's a video */}

              {/* if it's a audio (music, sound) */}
              {/* if it's a audio (music, sound) */}
              {/* if it's a audio (music, sound) */}
              {filebase64.indexOf("audio/") > -1 && (
                <audio controls>
                  <source src={filebase64} />
                </audio>
              )}
              {/* if it's a audio (music, sound) */}
              {/* if it's a audio (music, sound) */}
              {/* if it's a audio (music, sound) */}

              {/* if it's a PDF */}
              {/* if it's a PDF */}
              {/* if it's a PDF */}
              {filebase64.indexOf("application/pdf") > -1 && (
                <embed src={filebase64} width="800px" height="2100px" />
              )}
              {/* if it's a PDF */}
              {/* if it's a PDF */}
              {/* if it's a PDF */}

              <hr />
            </>
          )}
        </form>
      </header>
    </div>
  );
}

export default AddImage;
