export const formatTitle = (name) => {
    return name
        ?.replace("_", " ")
        .split(" ")
        .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
        .join(" ")
        .replace(/\.(jpg|jpeg|png|webp)$/i, "");
};

export const formatCaption = (caption) => {
    const match = caption.match(/(the image|this image|this|a |an ).*/i);
    const cleaned = match ? match[0].trim() : caption.trim();

    // Capitalize first letter
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};
