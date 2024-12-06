from flask import Flask, request, jsonify
import hashlib
import json
import os

app = Flask(__name__)

# File to store love scores (acting as a simple database)
LOVE_SCORE_FILE = 'love_scores.json'

# Load the existing love scores from the JSON file
def load_love_scores():
    if os.path.exists(LOVE_SCORE_FILE):
        with open(LOVE_SCORE_FILE, 'r') as file:
            return json.load(file)
    return {}

# Save the updated love scores to the JSON file
def save_love_scores(love_scores):
    with open(LOVE_SCORE_FILE, 'w') as file:
        json.dump(love_scores, file)

# Calculate a deterministic love score based on the names (between 70 and 100)
def calculate_love_score(name1, name2):
    """
    Generate a deterministic love score based on the hash of the names.
    The score will be between 70 and 100.
    """
    combined_names = (name1.strip().lower() + name2.strip().lower())
    # Hash the combined names
    hash_object = hashlib.md5(combined_names.encode())
    # Convert the hash to an integer and get a percentage (70-100)
    love_score = int(hash_object.hexdigest(), 16) % 31 + 70  # Love score between 70 and 100
    return love_score

@app.route('/')
def index():
    return "Welcome to the Love Calculator!"

@app.route('/calculate_love')
def calculate_love():
    name1 = request.args.get('name1', '')
    name2 = request.args.get('name2', '')

    if not name1 or not name2:
        return jsonify({"error": "Both names are required!"}), 400

    # Load existing love scores
    love_scores = load_love_scores()

    # Create a key for the pair of names
    name_pair_key = f"{name1.strip().lower()}-{name2.strip().lower()}"

    # Check if the love score for this pair already exists
    if name_pair_key in love_scores:
        return jsonify({"loveScore": love_scores[name_pair_key]})

    # Calculate a new love score if not already stored
    love_score = calculate_love_score(name1, name2)

    # Store the calculated love score
    love_scores[name_pair_key] = love_score
    save_love_scores(love_scores)

    return jsonify({"loveScore": love_score})

if __name__ == '__main__':
    app.run(debug=True)
