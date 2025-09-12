#!/bin/bash

# --- A script to batch compile Typst files ---

# Check if exactly two arguments (input and output directories) were provided.
if [ "$#" -ne 2 ]; then
    echo "❌ Error: Invalid number of arguments."
    echo "Usage: $0 <input_directory> <output_directory>"
    exit 1
fi

# Assign arguments to readable variable names.
INPUT_DIR="$1"
OUTPUT_DIR="$2"

# Check if the input directory exists.
if [ ! -d "$INPUT_DIR" ]; then
    echo "❌ Error: Input directory '$INPUT_DIR' not found."
    exit 1
fi

# Create the output directory if it doesn't already exist.
# The "-p" flag prevents an error if the directory is already there.
mkdir -p "$OUTPUT_DIR"

echo "🚀 Starting Typst compilation..."
echo "   Source:      $INPUT_DIR"
echo "   Destination: $OUTPUT_DIR"
echo "------------------------------------"

# Loop through every file ending in ".typ" in the input directory.
for file in "$INPUT_DIR"/*.typ; do
    # This check handles the case where no .typ files are found
    [ -e "$file" ] || { echo "🟡 No .typ files found to compile."; break; }

    # Get the base filename without the .typ extension (e.g., "my-post")
    filename=$(basename "$file" .typ)

    # Run the compile command.
    typst compile "$file" "$OUTPUT_DIR/$filename.html" --features html
    echo "✅ Compiled '$file' -> '$OUTPUT_DIR/$filename.html'"
done

echo "------------------------------------"
echo "🎉 Batch conversion complete."
