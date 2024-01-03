# Postman

# API Testing

# 
#  Links

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
- https://www.npmjs.com/package/axios
- https://axios-http.com/docs/intro
- https://www.npmjs.com/package/playwright
## Install Postman Locally

Install Postman locally to test and perform API requests and obtain tokens.

### How to Get Tokens and Test - Delete "Vitra Ko" Workflow

1. Go to "File Browser."
2. Press `Ctrl + Shift + I`.
3. Navigate to the "Networks" tab.
4. To delete the "file," go to "File" to obtain `Localhost` and `Methods`.
5. Copy the information and open Postman.
6. Paste the information in the body (ensure to change the method and use JSON in raw).
7. Paste the username and password in the below box:

```json
{
    "username": "admin",
    "password": "admin"
}


Certainly! Here's the provided information formatted in a README format:

markdown
Copy code
# Postman

## Install Postman Locally

Install Postman locally to test and perform API requests and obtain tokens.

### How to Get Tokens and Test - Delete "Vitra Ko" Workflow

1. Go to "File Browser."
2. Press `Ctrl + Shift + I`.
3. Navigate to the "Networks" tab.
4. To delete the "file," go to "File" to obtain `Localhost` and `Methods`.
5. Copy the information and open Postman.
6. Paste the information in the body (ensure to change the method and use JSON in raw).
7. Paste the username and password in the below box:

```json
{
    "username": "admin",
    "password": "admin"
}
8. Obtain the tokens.
9. Go to VSCode and change the file name to the 
10.actual file you want to delete.


# CI/CD

CI/CD stands for Continuous Integration and Continuous Delivery (or Continuous Deployment), and it is a set of principles and practices in software development aimed at improving the efficiency, quality, and speed of software delivery.

## Continuous Integration (CI):

- **Definition:** CI is the practice of regularly and automatically integrating code changes from multiple contributors into a shared repository.
- **Process:** Developers submit their code changes to a version control system (e.g., Git) multiple times a day. Each time a change is submitted, an automated build and testing process is triggered to ensure that the new code integrates well with the existing codebase and does not introduce errors.

## Continuous Delivery (CD):

- **Definition:** Continuous Delivery is the practice of ensuring that the software is always in a releasable state, and it can be deployed to production at any time.
- **Process:** After successful integration, the software is automatically tested and packaged in a deployable form. While the release to production is not automatic in Continuous Delivery, the process is streamlined, and the software is ready for deployment with minimal manual intervention.

## Continuous Deployment:

- **Definition:** Continuous Deployment is an extension of Continuous Delivery where every change that passes automated testing is automatically deployed to production without manual intervention.
- **Process:** In Continuous Deployment, the entire process from integration to deployment is automated. Once the code passes all tests, it is automatically deployed to the production environment, making the release cycle even faster.
