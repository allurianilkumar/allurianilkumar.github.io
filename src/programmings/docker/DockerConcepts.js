import React from 'react';
import { Accordion } from 'react-bootstrap';

const DockerConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Containers</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Containers are lightweight, standalone, executable packages of software that include everything needed to run an application (code, runtime, libraries, and dependencies).
          </p>
          <p>
            Example: Running a Node.js application in a Docker container.
          </p>
          <pre>
            {`Dockerfile:
FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Images</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Images are read-only templates used to create Docker containers. They can be built using a Dockerfile.
          </p>
          <p>
            Example: Building a Docker image for a Node.js application.
          </p>
          <pre>
            {`docker build -t my-node-app .`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Containers vs Images</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Containers are running instances of images. Images are static, while containers are dynamic and can be started, stopped, and deleted.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Volumes</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Volumes are used to persist data generated by and used by Docker containers. They allow data to survive container restarts and deletions.
          </p>
          <p>
            Example: Mounting a local directory as a volume in a Docker container.
          </p>
          <pre>
            {`docker run -v /path/on/host:/path/in/container my-node-app`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Docker Compose</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Docker Compose is a tool for defining and running multi-container Docker applications. It uses YAML files to configure the application's services and dependencies.
          </p>
          <p>
            Example: Running a multi-container application with Docker Compose.
          </p>
          <pre>
            {`docker-compose.yml:
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    depends_on:
      - db
  db:
    image: postgres:latest
    volumes:
      - db-data:/var/lib/postgresql/data
volumes:
  db-data:`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Networking</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Docker networking allows containers to communicate with each other and the outside world. Docker provides default networking options and allows custom network creation.
          </p>
          <p>
            Example: Creating a custom bridge network for Docker containers.
          </p>
          <pre>
            {`docker network create my-network`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default DockerConcepts;