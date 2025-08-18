#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Change directory to the project root (two levels up from this script's location).
cd "$(dirname "$0")/../.."

# Build the Docker images using the local Docker Compose configuration and environment file.
docker compose build