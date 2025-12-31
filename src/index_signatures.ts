

// Index signatures allow you to define the types of properties that can be accessed using an index.
// They are useful when you want to represent objects that can have dynamic property names.

type VideoMetadata = {[k: string]: number};

const video: VideoMetadata = {}
video["likes"] = 100;
// video["views"] = "1000"; // Error: Type 'string' is not assignable to type 'number'.

video.comments = 50;
// video.shares = "25"; // Error: Type 'string' is not assignable to type 'number'.

// We can also use Records for a more tight syntax
type AudioMetadata = Record<"duration" | "quality" | "bitrate", number>;

const audio: AudioMetadata = {
    duration: 300,
    // quality: "320", // Error: Type 'string' is not assignable to type 'number'.
    quality: 320,
    bitrate: 128
}